// zh-TW quality gate for the generated zh-tw branch.
//
//   OPENCC=<opencc-cli binary> node scripts/zh-tw/check.mjs
//
// Exits non-zero when any gate fails. Gates:
//   1. No zh-CN / zh_CN residue anywhere outside scripts/zh-tw.
//   2. No simplified-only characters in file contents or file names.
//   3. Mainland word forms count to zero after stripping the allowlisted
//      proper-name compounds (statute names, official institution and
//      document names, defined legal terms) that keep their wording.
//   4. Idempotence: re-running the conversion pipeline on every content
//      file changes nothing.
//   5. Every relative link to a local file in .md / .html content
//      resolves to an existing path (percent-decoded first).
//   5b. No raw space inside a shields.io badge URL: GitHub's Markdown
//      renderer ends the image URL at the space, breaking the badge.
//      (convertEncoded in pipeline.mjs re-encodes spaces as %20; this
//      gate keeps a regression from shipping.)
//   6. The repository's own consistency tools pass: check-refs --check,
//      check-split, check-selfcheck, sync-stats --check. check-plain is
//      allowed exactly the three known 說人話 length deviations listed
//      in KNOWN_PLAIN_FAILURES (Taiwan renderings 使用者 / 程式碼 are
//      longer than the mainland words the 120-char budget assumed).
//   7. Standing edition decisions (Will, 2026-11-08) hold in the shipped
//      README and site: the intro names Taiwan rules, the license
//      section is 授權聲明 with its attribution link pointing at the
//      upstream repo, and the upstream author's tip / ad / business
//      sections (and the site's ad slot and tip dialog) stay removed.
//      An upstream edit that resurrects any of them fails here instead
//      of silently shipping.
//
// tools/updates.mjs --check is intentionally not a gate: it diffs entry
// text against git history, which on this branch is the upstream
// simplified history, so it would report every converted entry as
// "changed today" and, if regenerated, stamps all 772 entries with the
// sync date. The branch keeps upstream's updates.json (converted)
// instead, preserving the real per-entry dates.

import { spawnSync } from 'node:child_process';
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { convertText } from './pipeline.mjs';
import { WRONG_FORMS } from './vocab.mjs';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..');
const SKIP_DIRS = new Set(['.git', 'node_modules', 'dist', 'scripts']);
const TEXT_EXT = new Set(['.md', '.html', '.mjs', '.js', '.json', '.yml', '.yaml', '.txt', '.css', '.xml', '.svg']);

// Simplified-only characters (never used in Traditional Chinese text).
const SIMPLIFIED_ONLY = new Set('这个们说国为来时会过对学还没样开门问间点现种经动实机关业与无电书马车见买卖读语话请让认应当总将体华声听观觉记设计论议许证识调试该详误谈谢谁课负责贵资费赛财购货贸质钱银铁网页级线类数据库户务区东乐产亲儿办兴军农况刘创剧单双号员园围图圆场块坏处备头夹奋妇孙宁宝审层属岁师带帮广异张强录归彻径悬惊战护报择担拥拟换损敌断旧显晓暂术杂极构标栏树档桥检楼欢毕气汉济浏测湾满灭灯爱状独环画疗盘码确离积称穷竞笔简粮紧红约纪纯纸组细织终结给络统继续维综绿缓编罗习联职脑脸节营蓝虑虽补装览规视触订讨训讲访评词译诉输辑边达迁运远连进选递适逻遗邮铺链销锁错键镜长闪闭闻阅队阶际隐难静顶项顺须题额风飞饭馆验骗鱼鸟鸡麦齐齿龙');

// Proper-name compounds stripped before the wrong-form count. Order is
// normalized longest-first at use time.
const ALLOW_COMPOUNDS = [
  '個人信息保護法', '信息網絡傳播權', '幫助信息網絡犯罪活動罪',
  '利用信息網絡', '信息網絡', '互聯網信息服務管理辦法',
  '計算機信息系統安全保護條例', '未成年人網絡保護條例', '數據安全法',
  '數據出境安全評估辦法', '網絡數據安全管理條例',
  '網絡安全法', '網絡交易監督管理辦法', '網絡信息內容生態治理規定',
  '網絡安全事件', '網絡安全等級保護', '互聯網絡信息中心', '網絡運營',
  '產品質量法', '產品質量', '醫療質量', '工程質量', '質量監督',
  '數位化', '數位時代', '數位落差', '數位遺產', '數位產品', '數位內容',
  // Taiwan agency names keep 數位 (restored in vocab.mjs; Issue #11).
  '數位發展部', '數位產業署',
  '打印遺囑', '視頻號',
  // Official titles that keep 篩查 (protected in vocab.mjs).
  '新生兒疾病篩查管理辦法', '丙型病毒性肝炎篩查及管理',
  '中國女性乳腺癌篩查與早診早治指南',
  // CLAUDE.md's terminology rule quotes 幾率 as the banned word
  // (protected in vocab.mjs); narrative 幾率 is a gate failure.
  '幾率是 X 倍', '幾率、機會、可能性、概率是 X 倍', '「幾率」「可能性」',
];

// The three entries that once overflowed (11-7, 14-10, 26-12) are now
// trimmed inside the limit by convert.mjs edition edits, so this list
// is empty; any future check-plain failure is a hard gate failure.
const KNOWN_PLAIN_FAILURES = [];

const failures = [];
const note = (gate, msg) => failures.push(`[${gate}] ${msg}`);

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    if (SKIP_DIRS.has(name)) continue;
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

const allFiles = walk(ROOT);
const rel = (p) => p.slice(ROOT.length + 1).split('\\').join('/');
const textFiles = allFiles.filter((p) => {
  const base = p.slice(p.lastIndexOf('/') + 1);
  // Same set convert.mjs converts: known text extensions plus dotfiles.
  return TEXT_EXT.has(p.slice(p.lastIndexOf('.')).toLowerCase()) || base.startsWith('.');
});

// --- Gate 2b: file names carry no simplified-only characters.
for (const p of allFiles) {
  for (const ch of rel(p)) {
    if (SIMPLIFIED_ONLY.has(ch)) { note('names', `${rel(p)}: simplified-only char ${ch}`); break; }
  }
}

for (const p of textFiles) {
  const text = readFileSync(p, 'utf8');
  const name = rel(p);
  // --- Gate 1: zh-CN residue.
  if (/zh-CN|zh_CN/.test(text)) note('locale', `${name}: zh-CN / zh_CN residue`);
  // --- Gate 2a: simplified-only characters in content.
  let simp = 0;
  for (const ch of text) if (SIMPLIFIED_ONLY.has(ch)) simp++;
  if (simp) note('script', `${name}: ${simp} simplified-only character(s)`);
  // --- Gate 3: mainland word forms outside allowlisted compounds.
  let stripped = text;
  for (const c of [...ALLOW_COMPOUNDS].sort((a, b) => b.length - a.length)) {
    stripped = stripped.split(c).join('');
  }
  for (const w of WRONG_FORMS) {
    const n = stripped.split(w).length - 1;
    if (n) note('vocab', `${name}: ${w} x${n}`);
  }
  // --- Gate 4: idempotence. (The reference table is regenerated by
  // check-refs from the finished text, not converted; its truncated
  // context quotes can clip protected words, so it is exempt here.)
  if (name !== 'docs/引用對照.md' && name !== 'docs/台灣在地化待核.md' && name !== 'tools/check-zh-tw-locale.mjs' && convertText(text) !== text) note('idempotent', `${name}: re-running the pipeline changes the file`);
}

// --- Gate 5: relative links in Markdown resolve. (index.html builds its
// links in JavaScript, so href attributes there are code, not links;
// its behaviour is covered by gate 6's check-selfcheck instead.)
// A few targets are illustrative examples in prose, not links:
// CLAUDE.md cites "docs/x.md" as a generic example path, and two
// verification notes quote a truncated "./P0…" and a "docs/*.md" glob.
const EXAMPLE_TARGETS = new Set(['docs/x.md', './P0…', 'docs/*.md']);
const LINK_RE = /\]\(([^)\s]+)\)/g;
for (const p of textFiles) {
  if (!/\.md$/.test(p)) continue;
  const text = readFileSync(p, 'utf8');
  for (const m of text.matchAll(LINK_RE)) {
    let target = m[1];
    if (!target || /^(https?:|mailto:|#|data:)/.test(target)) continue;
    target = target.split('#')[0];
    if (!target || EXAMPLE_TARGETS.has(target)) continue;
    if (!/\.(md|html|png|webp|jpg|json|txt)$/.test(target)) continue;
    let decoded;
    try { decoded = decodeURIComponent(target); } catch { decoded = target; }
    if (!existsSync(resolve(dirname(p), decoded))) {
      note('links', `${rel(p)}: unresolved relative link ${target}`);
    }
  }
}

// --- Gate 5b: shields.io badge URLs carry no raw space.
{
  const readme = readFileSync(join(ROOT, 'README.md'), 'utf8');
  for (const m of readme.matchAll(/img\.shields\.io\/badge\/[^\s)]* [^\s)]*/g)) {
    note('badge', `README.md: raw space in badge URL: ${m[0].slice(0, 80)}…`);
  }
}

// --- Gate 6: the repository's own tools.
function runTool(args) {
  return spawnSync(process.execPath, args, { cwd: ROOT, encoding: 'utf8' });
}
for (const [name, args] of [
  ['check-refs', ['tools/check-refs.mjs', '--check']],
  ['check-split', ['tools/check-split.mjs']],
  ['check-selfcheck', ['tools/check-selfcheck.mjs']],
  ['sync-stats', ['tools/sync-stats.mjs', '--check']],
]) {
  const r = runTool(args);
  if (r.status !== 0) note('repo-tools', `${name} failed:\n${(r.stdout || '') + (r.stderr || '')}`);
}
{
  const r = runTool(['tools/check-plain.mjs']);
  if (r.status !== 0) {
    // Failure lines name the entry (第 N 節第 M 條); the summary line does
    // not. The old filter also excluded lines containing 超過 120, which
    // is exactly what length-failure lines say, so the gate could never
    // see them — the three over-long lines passed the gate for months.
    const badLines = (r.stdout || '').split('\n').filter((l) => /第 \d+ 節第 \d+ 條/.test(l));
    const unknown = badLines.filter((l) => !KNOWN_PLAIN_FAILURES.some((k) => l.includes(k)));
    if (unknown.length) note('repo-tools', `check-plain has failures beyond the known three:\n${unknown.join('\n')}`);
  }
}

// 7. Standing edition decisions (Will, 2026-11-08).
{
  const readme = readFileSync(join(ROOT, 'README.md'), 'utf8');
  const site = readFileSync(join(ROOT, 'index.html'), 'utf8');
  const mustHave = [
    [readme, '本版已按台灣的現行規定改寫', 'README intro names Taiwan rules'],
    [readme, '## 授權聲明', 'README license section is 授權聲明'],
    [readme, '附上倉庫連結 https://github.com/eternity4719/HowToLiveBetter', 'README attribution points at the upstream repo'],
  ];
  for (const [text, needle, label] of mustHave)
    if (!text.includes(needle)) note('edition', `missing: ${label}`);
  const mustNotHave = [
    [readme, '## 讚賞'], [readme, '## 廣告位'], [readme, '## 商務合作'],
    [readme, 'mcyyy'], [readme, '按中國大陸的現行規定寫'],
    [site, 'mcyyy'], [site, 'tip-mask'], [site, 'tip-open'], [site, '微信讚賞碼'],
  ];
  for (const [text, needle] of mustNotHave)
    if (text.includes(needle)) note('edition', `standing removal regressed: ${needle}`);
}

if (failures.length) {
  console.error(`zh-tw check FAILED (${failures.length}):`);
  for (const f of failures.slice(0, 60)) console.error('  ' + f);
  process.exit(1);
}
console.log(`zh-tw check passed: ${textFiles.length} text files, ${allFiles.length} files total; gates 1-7 all green.`);
