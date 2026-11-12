// 把 life-decision-guide 這個 skill 連同全書正文打成一個能離線用的 zip。
// 用法：node tools/skill/build.mjs [輸出路徑] [--flat]   預設輸出 dist/life-decision-guide.zip
//
// 倉庫裡的 skill 只有一份 SKILL.md，正文靠本地倉庫或現取 GitHub。拿去別處上傳、分發時，
// 對方多半連不上 GitHub，所以把正文一起帶上。包裡的東西：
//   life-decision-guide/SKILL.md              原樣，來自 skills/life-decision-guide/
//   life-decision-guide/README.md             這個包是什麼、怎麼裝、哪天打的
//   life-decision-guide/references/README.md  書的 README（SKILL.md 第 2 步要讀裡面的問題表）
//   life-decision-guide/references/book/      各節正文
//   life-decision-guide/references/docs/      README 裡連結過的長文（核實記錄、引用對照不帶）
//   life-decision-guide/references/index.tsv  一行一條：標題、成本標籤、性價比檔、證據等級
//   life-decision-guide/references/VERSION.txt    封裝時間和提交號
//
// zip 裡預設套一層 life-decision-guide/ 目錄，解壓到 ~/.claude/skills/ 這類目錄下正好就位。
// 上傳的地方要求 SKILL.md 在壓縮包根上的，加 --flat。
import { writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { zip } from '../lib/zip.mjs';
import { ROOT, REPO, SITE, TITLE, read, readBook, COST_W, ratioOf, gitCommit, buildStamp } from '../lib/book.mjs';

const args = process.argv.slice(2);
const flat = args.includes('--flat');
const OUT = resolve(ROOT, args.find(a => !a.startsWith('--')) ?? 'dist/life-decision-guide.zip');
const NAME = 'life-decision-guide';

// ---------- 讀條目，只取索引要的那幾樣 ----------
function parseSection(file) {
  const md = read(file);
  const head = md.match(/^# (\d+)\. (.+)$/m);
  if (!head) throw new Error(`${file} 裡找不到「# N. 節名」`);
  const entries = [];
  let e = null;
  for (const line of md.split('\n')) {
    const h = line.match(/^### (\d+)\. (.+)$/);
    if (h) { e = { n: h[1], title: h[2].trim() }; entries.push(e); continue; }
    if (!e) continue;
    const tag = line.match(/^<!--\s*成本標籤:\s*(.*?)\s*-->/);
    if (tag) {
      for (const kv of tag[1].split(/\s+/)) { const [k, v] = kv.split('='); e[k] = v; }
      continue;
    }
    const grade = line.match(/^- 證據等級：\s*([ABC])/);
    if (grade) e.grade = grade[1];
    if (/^- 備註：爭議/.test(line)) e.dispute = true;
  }
  return { file, sec: head[1], name: head[2].trim(), entries };
}

const { bookFiles, docFiles } = readBook();
const sections = bookFiles.map(parseSection);

const COLS = ['節', '條', '標題', '性價比', '收益', '口徑', '錢', '時間', '毅力', '證據', '爭議', '人群', '文件'];
const rows = [];
const tally = { 極高: 0, 高: 0, 一般: 0 };
for (const s of sections) {
  for (const e of s.entries) {
    const tagged = e.錢 in COST_W.money && e.時間 in COST_W.time && e.毅力 in COST_W.will && e.收益;
    if (!tagged) throw new Error(`第 ${s.sec} 節第 ${e.n} 條的成本標籤不全，索引算不出性價比檔`);
    const ratio = ratioOf(COST_W.money[e.錢] + COST_W.time[e.時間] + COST_W.will[e.毅力], e.收益);
    tally[ratio]++;
    rows.push([s.sec, e.n, e.title.replace(/\t/g, ' '), ratio, e.收益, e.口徑 ?? '', e.錢, e.時間, e.毅力,
      e.grade ?? '', e.dispute ? '爭議' : '', e.人群 ?? '', s.file]);
  }
}
const index = [COLS, ...rows].map(r => r.join('\t')).join('\n') + '\n';

// ---------- 包裡的兩份說明 ----------
const commit = gitCommit();
const stamp = buildStamp();
const version = `${TITLE} · life-decision-guide skill
封裝時間：${stamp}（北京時間）
正文版本：${commit ? commit.slice(0, 7) : '未知'}
${sections.length} 節 ${rows.length} 條，長文 ${docFiles.length} 篇
最新版正文：${REPO}
`;

const readme = `# 人生決策 skill（${NAME}）

讓 AI 助手照《${TITLE}》回答具體問題：該不該做、值不值、怎麼選、出事了先做什麼、能領哪筆錢、這麼幹犯不犯法。

它先把相關條目從正文裡查出來，再按書裡的算帳方式排序回答，每條註明出自第幾節第幾條。查不到就說查不到，不憑記憶編數字。

## 包裡有什麼

- \`SKILL.md\`：給 AI 助手的規則。
- \`references/\`：全書正文，${sections.length} 節 ${rows.length} 條，另有 ${docFiles.length} 篇長文。不用聯網就能查。
- \`references/index.tsv\`：一行一條，帶成本標籤、性價比檔和證據等級，供檢索和排序。
- \`references/VERSION.txt\`：這份正文的封裝時間。本包打於 ${stamp}（北京時間）。

## 怎麼裝

把 \`${NAME}\` 這個目錄整個放進 AI 助手的 skill 目錄，然後重開一次會話。

- Claude Code：\`~/.claude/skills/\`
- Codex：\`~/.agents/skills/\`
- 其他支援 SKILL.md 的助手：放進它的 skill 目錄，或者直接讓它讀這份 SKILL.md。

裝好以後直接問「朋友讓我替他擔保，籤不籤」「每天通勤兩小時值不值」就會觸發。

## 邊界

書給的是通用口徑，不替代醫生、律師、會計。涉及具體病情、具體案件、具體稅務的，它只按書裡的條目給方向和該找誰。

正文一直在更新，政策類別的金額、時限、名單會變。答覆裡會帶上本包的封裝日期，要緊的事請按條目來源欄裡的官方連結再核一遍。

## 來源和許可

正文出自開源專案《${TITLE}》，作者 eternity4719。

- 倉庫：${REPO}
- 線上檢索頁：${SITE}

正文（\`references/\` 下的文字）用 CC BY 4.0 發布，轉載、改編要署名並附許可證連結 https://creativecommons.org/licenses/by/4.0/ 。SKILL.md 用 MIT 許可。
`;

// ---------- 封裝 ----------
const prefix = flat ? '' : `${NAME}/`;
const text = s => Buffer.from(s, 'utf8');
const files = [
  { name: `${prefix}SKILL.md`, data: text(read(`skills/${NAME}/SKILL.md`)) },
  { name: `${prefix}README.md`, data: text(readme) },
  { name: `${prefix}references/README.md`, data: text(read('README.md')) },
  { name: `${prefix}references/index.tsv`, data: text(index) },
  { name: `${prefix}references/VERSION.txt`, data: text(version) },
  ...[...bookFiles, ...docFiles].map(f => ({ name: `${prefix}references/${f}`, data: text(read(f)) })),
];

const buf = zip(files, new Date(), { unix: true });
mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, buf);

const raw = files.reduce((n, f) => n + f.data.length, 0);
console.log(`${sections.length} 節 ${rows.length} 條 ｜ 極高 ${tally.極高} 高 ${tally.高} 一般 ${tally.一般} ｜ 長文 ${docFiles.length} 篇`);
console.log(`${files.length} 個文件，解壓後 ${(raw / 1024 / 1024).toFixed(2)} MB，zip ${(buf.length / 1024).toFixed(0)} KB${flat ? '（SKILL.md 在壓縮包根上）' : ''}`);
console.log(OUT);
