// Taiwan vocabulary layer for the zh-TW edition of HowToLiveBetter.
//
// Pipeline per text: protect() -> OpenCC (cn -> tw2) -> applyVocab() ->
// restore(). protect() swaps phrases OpenCC's tw2 dictionary renders in a
// form this edition does not use (or must not touch) for ASCII placeholders
// before conversion, and restore() puts the settled form back afterwards.
//
// Edition principles (settled with the project glossary):
//  - Narrative prose uses Taiwan word choices: 資訊、影片、網路、軟體、
//    使用者、登入、列印、寬頻、執行緒、伺服器、儲值、資料、品質.
//  - Proper names keep their wording, characters converted only: PRC laws,
//    regulations and institutions (《個人信息保護法》、《數據安全法》,
//    《網絡安全法》、產品質量法、數字人民幣、打印遺囑), WeChat feature
//    names (公眾號、視頻號、小程序), and quoted statutory text.
//  - PRC social systems keep their names (社保、醫保、公積金、戶籍、
//    勞動合同): script conversion only, never swapped for Taiwan systems.

// Phrases protected before OpenCC, restored after applyVocab().
// The placeholder must be pure ASCII so OpenCC passes it through.
export const PROTECT = [
  // 标签 (label/tag): tw2 renders it 標記, but Taiwan usage is 標籤, and the
  // book's machine-readable marker is 成本標籤. 标记 (mark) is a different
  // word and keeps its own conversion to 標記. The converted form 標籤 is
  // protected too, or a second pass would turn it back into 標記.
  ['标签', '\u0001TAG\u0001'],
  ['標籤', '\u0001TAG\u0001'],
  // 算法: tw2 renders it 演算法 (the Taiwan term), but 演算法 itself
  // contains 算法, so a second pass would compound it into 演演算法.
  // Protect both forms; the edition's form is 演算法.
  ['演算法', '\u0001ALGO\u0001'],
  ['算法', '\u0001ALGO\u0001'],
  // 干预 / 干預 (intervention): a second OpenCC pass reads 干 as 幹 and
  // produces 幹預, which is not the Taiwan form. Protect both spellings.
  ['干预', '\u0001INTERVENE\u0001'],
  ['干預', '\u0001INTERVENE\u0001'],
  // 干扰 / 干擾 (interference): same 干 ambiguity, same fix.
  ['干扰', '\u0001INTERFERE\u0001'],
  ['干擾', '\u0001INTERFERE\u0001'],
  // 发布 / 發布 (issue, promulgate): tw2 renders it 發表, which is a
  // different word (to publish a paper, to make a speech). The source
  // distinguishes 发布 from 发表, so keep both apart.
  ['发布', '\u0001ISSUE\u0001'],
  ['發布', '\u0001ISSUE\u0001'],
  // 声明 / 聲明 (statement): tw2 renders it 宣告, which is the legal
  // pronouncement word (宣告無效, 死亡宣告). Keep them apart.
  ['声明', '\u0001STATEMENT\u0001'],
  ['聲明', '\u0001STATEMENT\u0001'],
  // 问卷 / 問卷 (questionnaire): a second pass flips 卷 to 捲.
  ['问卷', '\u0001SURVEY\u0001'],
  ['問卷', '\u0001SURVEY\u0001'],
  // 准-family approvals: 批准, 准許, 不准, 准考證, 准生證 keep 准 in
  // Taiwan usage; a second pass flips them to 準. (標準, 準確, 準備 keep
  // 準 and are not protected.)
  ['批准', '\u0001APPROVE\u0001'],
  ['准许', '\u0001ALLOW\u0001'],
  ['准許', '\u0001ALLOW\u0001'],
  ['不准', '\u0001NOTALLOW\u0001'],
  ['准考证', '\u0001EXAMTICKET\u0001'],
  ['准考證', '\u0001EXAMTICKET\u0001'],
  ['准生证', '\u0001BIRTHPERMIT\u0001'],
  ['准生證', '\u0001BIRTHPERMIT\u0001'],
  // 异常 / 異常 (abnormal): tw2 renders it 例外 (exception), a different
  // word — every one of the source's 102 異常 (經營異常名錄, 肝功能異常,
  // 自主神經反射異常) came out as 例外 before this protection existed.
  // Genuine 例外 in the source converts to 例外 on its own and is not
  // protected.
  ['异常', '\u0001ABNORMAL\u0001'],
  ['異常', '\u0001ABNORMAL\u0001'],
  // 对象 / 對象: tw2 renders it 物件 (a physical object) even when it
  // means people or groups (試驗對象, 救助對象, 低保對象). Protect it as
  // 對象; the few genuine 物件 compounds (物件儲存, 招財物件, 這類物件)
  // are restored by POST_VOCAB after restore().
  ['对象', '\u0001TARGET\u0001'],
  ['對象', '\u0001TARGET\u0001'],
  // 欧洲食品安全局 (EFSA, European Food Safety Authority): tw2 renders
  // 局 as 域 in this compound, producing the non-existent 食品安全域.
  // Found 2026-11-06 in the coffee entry (第 2 節第 26 條); the error
  // predates this round (present since the 2026-11-05 first conversion).
  ['欧洲食品安全局', '\u0001EFSA\u0001'],
  ['歐洲食品安全局', '\u0001EFSA\u0001'],
  // Formal document titles that contain 篩查 keep their official names;
  // generic 篩查 becomes 篩檢 in GLOBAL_VOCAB.
  ['新生儿疾病筛查管理办法', '\u0001TITLE1\u0001'],
  ['新生兒疾病篩查管理辦法', '\u0001TITLE1\u0001'],
  ['丙型病毒性肝炎筛查及管理', '\u0001TITLE2\u0001'],
  ['丙型病毒性肝炎篩查及管理', '\u0001TITLE2\u0001'],
  ['中国女性乳腺癌筛查与早诊早治指南', '\u0001TITLE3\u0001'],
  ['中國女性乳腺癌篩查與早診早治指南', '\u0001TITLE3\u0001'],
  // A verbatim statutory enumeration (個人所得稅法實施條例, labour
  // types) keeps 錄像; generic 錄像 becomes 錄影 in GLOBAL_VOCAB.
  ['影视、录音、录像、演出', '\u0001TITLE4\u0001'],
  ['影視、錄音、錄像、演出', '\u0001TITLE4\u0001'],
  // A verification note cites the upstream issue that prompted an
  // entry; that citation is provenance and keeps the upstream URL
  // even though every functional slug now points at the fork.
  ['https://github.com/eternity4719/HowToLiveBetter/issues/16', '\u0001CITE1\u0001'],
  // CLAUDE.md's ratio-terminology rule quotes 幾率 as the banned word;
  // those three quotations keep it. Every other 幾率 becomes 機率.
  ['几率是 X 倍', '\u0001RATIO1\u0001'],
  ['幾率是 X 倍', '\u0001RATIO1\u0001'],
  ['几率、机会、可能性、概率是 X 倍', '\u0001RATIO2\u0001'],
  ['幾率、機會、可能性、概率是 X 倍', '\u0001RATIO2\u0001'],
  ['「几率」「可能性」', '\u0001RATIO3\u0001'],
  ['「幾率」「可能性」', '\u0001RATIO3\u0001'],
  // 互聯網 institutional compounds (zhtw-mcp round, 2026-11-07): PRC
  // service categories and license names keep 互聯網; generic narrative
  // 互聯網 becomes 網際網路 in GLOBAL_VOCAB.
  ['互聯網新聞資訊服務許可證', '\u0001NETLIC\u0001'],
  ['互聯網診療', '\u0001NETMED\u0001'],
  ['互聯網醫院', '\u0001NETHOSP\u0001'],
  ['互聯網+', '\u0001NETPLUS\u0001'],
  ['互聯網上網服務', '\u0001NETCAFE\u0001'],
  // 電動自行車 is a PRC vehicle class with legal speed/weight limits;
  // only generic 自行車 becomes 腳踏車.
  ['電動自行車', '\u0001EBIKE\u0001'],
  // 事務所: tw2 renders it 交易所 (!). Taiwan agency names introduced
  // by the localization overrides (戶政事務所、律師事務所) must survive;
  // genuine 交易所 (證券交易所) does not contain 事務所 and is untouched.
  ['事務所', '\u0001OFFICE\u0001'],
  // 領事事務局 (外交部領事事務局, Bureau of Consular Affairs): the
  // name has 事務+局, not 事務所, so the OFFICE protect misses it and
  // tw2 renders it as 領事交易局. The contributor's checker (PR #10) flags
  // 交易局 as a wrong agency name; protect the full name instead.
  ['領事事務局', '\u0001CONSULAR\u0001'],
  // 占有人 is the Civil Code §190 statutory term (動物占有人); tw2 would
  // render it 佔有人. Only the compound is protected, generic 佔有 verbs
  // elsewhere still convert normally.
  ['占有人', '\u0001POSSESSOR\u0001'],
];

export const restore = (t) => {
  t = t.split('\u0001TAG\u0001').join('標籤');
  t = t.split('\u0001ALGO\u0001').join('演算法');
  t = t.split('\u0001INTERVENE\u0001').join('干預');
  t = t.split('\u0001INTERFERE\u0001').join('干擾');
  t = t.split('\u0001ISSUE\u0001').join('發布');
  t = t.split('\u0001STATEMENT\u0001').join('聲明');
  t = t.split('\u0001SURVEY\u0001').join('問卷');
  t = t.split('\u0001APPROVE\u0001').join('批准');
  t = t.split('\u0001ALLOW\u0001').join('准許');
  t = t.split('\u0001NOTALLOW\u0001').join('不准');
  t = t.split('\u0001EXAMTICKET\u0001').join('准考證');
  t = t.split('\u0001BIRTHPERMIT\u0001').join('准生證');
  t = t.split('\u0001ABNORMAL\u0001').join('異常');
  t = t.split('\u0001TARGET\u0001').join('對象');
  t = t.split('\u0001EFSA\u0001').join('歐洲食品安全局');
  t = t.split('\u0001TITLE1\u0001').join('新生兒疾病篩查管理辦法');
  t = t.split('\u0001TITLE2\u0001').join('丙型病毒性肝炎篩查及管理');
  t = t.split('\u0001TITLE3\u0001').join('中國女性乳腺癌篩查與早診早治指南');
  t = t.split('\u0001TITLE4\u0001').join('影視、錄音、錄像、演出');
  t = t.split('\u0001CITE1\u0001').join('https://github.com/eternity4719/HowToLiveBetter/issues/16');
  t = t.split('\u0001RATIO1\u0001').join('幾率是 X 倍');
  t = t.split('\u0001RATIO2\u0001').join('幾率、機會、可能性、概率是 X 倍');
  t = t.split('\u0001RATIO3\u0001').join('「幾率」「可能性」');
  t = t.split('\u0001NETLIC\u0001').join('互聯網新聞資訊服務許可證');
  t = t.split('\u0001NETMED\u0001').join('互聯網診療');
  t = t.split('\u0001NETHOSP\u0001').join('互聯網醫院');
  t = t.split('\u0001NETPLUS\u0001').join('互聯網+');
  t = t.split('\u0001NETCAFE\u0001').join('互聯網上網服務');
  t = t.split('\u0001EBIKE\u0001').join('電動自行車');
  t = t.split('\u0001OFFICE\u0001').join('事務所');
  t = t.split('\u0001CONSULAR\u0001').join('領事事務局');
  t = t.split('\u0001POSSESSOR\u0001').join('占有人');
  return t;
};

// Applied after restore(): compounds where the protected 對象 is a
// physical object after all. 物件導向 (object-oriented) does not occur
// in this corpus; if upstream adds it, add a restore here.
export const POST_VOCAB = [
  // 划算 (cost-effective): OpenCC tw2 re-writes 划 back to 劃 even on
  // already-Traditional input, so the 定版 must run after the OpenCC pass
  // (here, in applyPostVocab), not in GLOBAL_VOCAB. Only this idiom takes
  // 划; 計劃/規劃/劃重點/劃線價 keep their 劃.
  ['劃不划算', '划不划算'],
  ['劃算', '划算'],
  // 只讀 vs 唯讀: tw2 re-writes 只讀 to 唯讀 in every context (it even
  // turns 只讀到大學 into 唯讀到大學）, but 唯讀 is only the storage
  // property (唯讀記憶體/唯讀模式）. Where 只 means "merely / only up
  // to" — a cheat that only reads the screen, a degree one only studied
  // up to — the 定版 is 只讀 (Will, 2026-11-07).
  ['唯讀螢幕', '只讀螢幕'],
  ['唯讀本科', '只讀本科'],
  ['對象儲存', '物件儲存'], // object storage, the S3 sense
  ['招財對象', '招財物件'], // lucky-charm objects
  ['這類對象', '這類物件'], // "this kind of object" (crystals, charms)
];

export const applyPostVocab = (t) => {
  for (const [a, b] of POST_VOCAB) t = t.split(a).join(b);
  return t;
};

export const protect = (t) => {
  for (const [a, b] of PROTECT) t = t.split(a).join(b);
  return t;
};

// Ordered [wrong, right] pairs applied after OpenCC, before restore().
// Order matters: proper-name restorations come after the generic rule that
// would otherwise rewrite them.
export const GLOBAL_VOCAB = [
  // --- OpenCC tw2 slips and variant characters ---
  ['分鍾', '分鐘'], // Taiwan standard is 分鐘 (鍾 is a surname / old measure)
  ['賬', '帳'], // never emit 賬 in zh-TW output
  ['羣', '群'], // never emit 羣 in zh-TW output

  // --- Settled Taiwan word choices tw2 misses or renders mainland-style ---
  // 登錄 is NOT pair-mapped: as account sign-in it is 登入 in Taiwan, but
  // as statutory registration （食品業者登錄） 登錄 is the correct Taiwan
  // term. Scoped regexes in REGEX_VOCAB convert only the sign-in senses.
  ['寬帶', '寬頻'], // broadband
  ['網盤', '雲端硬碟'], // cloud storage drive (Will, 2026-11-07)
  // Will's 2026-11-07 rulings, second round. 網絡: the generic word is
  // 網路 in Taiwan; every 網絡 compound that is a PRC proper name is
  // restored at the end of this list （網絡安全法， 信息網絡， 網絡數據…),
  // so this early generic pair never touches them.
  ['網絡', '網路'],
  ['比如', '譬如'], // for example (also closes the 邊界詞 question)
  ['註冊機', '序號產生器'], // keygen
  ['破解補丁', '破解修補程式'], // crack patch; bare 補丁 stays (metaphor use in ch.10)
  ['頭盔', '安全帽'], // helmet (Will, 2026-11-07: Taiwan usage for riding/sports helmets)
  ['超聲波', '超音波'], // ultrasound wave form first, so the bare pair below cannot yield 超音波波
  ['超聲', '超音波'], // ultrasound (Will, 2026-11-07: Taiwan medical usage)
  ['雙硫侖', '雙硫崙'], // disulfiram: 崙 is the Taiwan character (Will, 2026-11-08)
  ['乙肝', 'B 型肝炎'], // hepatitis B: full sweep incl. titles/anchors (Will, 2026-11-08)
  ['丙肝', 'C 型肝炎'], // hepatitis C: full sweep (Will, 2026-11-08)
  [' B 超', '超音波'], // B-scan ultrasound exam; leading space consumed (same family as 超聲 ruling, 2026-11-08)
  ['B超', '超音波'],
  // 宮頸→子宮頸 lives in REGEX_VOCAB: the target contains the source,
  // so a plain pair would re-apply and yield 子子宮頸.
  ['慢病', '慢性病'], // chronic disease shorthand (Will, 2026-11-08: batch A)
  ['息肉', '瘜肉'], // polyp, Taiwan medical glyph (Will, 2026-11-08: batch A)
  ['打印', '列印'],
  ['列印遺囑', '打印遺囑'], // PRC Civil Code category name, proper noun
  ['身份', '身分'], // 身分證 / 身分驗證 are the Taiwan standard forms
  ['髮卡機構', '發卡機構'], // card issuer, not a hairpin
  ['髮卡銀行', '發卡銀行'],
  ['髮卡行', '發卡行'],
  ['籤合同', '簽合同'], // tw2 picks the lottery-stick character here
  ['免籤', '免簽'], // visa-free / no-signature, not a lottery stick

  // --- 程序 vs 程式: tw2 turns every 程序 into 程式. Legal and
  // administrative procedure is 程序 in Taiwan too; only computing uses
  // 程式. The book is mostly law, so revert globally, then restore the
  // computing phrases that actually occur in this corpus. ---
  ['程式', '程序'],
  ['程序設計師', '程式設計師'],
  ['程序設計', '程式設計'],
  ['程序碼', '程式碼'],
  ['電腦程序', '電腦程式'],
  ['寫程序', '寫程式'],
  ['改程序', '改程式'],
  ['程序語言', '程式語言'],
  ['應用程序', '應用程式'],
  ['小程式', '小程序'], // WeChat Mini Program proper name (in case of drift)
  ['惡意程序', '惡意程式'],
  ['病毒程序', '病毒程式'],
  ['驅動程序', '驅動程式'],
  ['安裝程序', '安裝程式'], // installer; legal "installation procedure" does not occur
  ['修補程序', '修補程式'], // software patch (Will's 定版）; no legal-procedure sense occurs

  // --- 數字 vs 數位: tw2 turns every 数字 into 數位. This book talks
  // about numbers and statistics, where Taiwan usage is 數字. Digital-tech
  // phrases that actually occur are restored after the generic rule. ---
  ['數位', '數字'],
  ['數字化', '數位化'],
  ['數字人民幣', '數字人民幣'], // PRC official name; kept 數字 regardless
  ['數字時代', '數位時代'],
  ['數字落差', '數位落差'],
  ['數字遺產', '數位遺產'],
  ['數字發展部', '數位發展部'], // Ministry of Digital Affairs (Issue #11)
  ['數字產業署', '數位產業署'], // Administration for Digital Industries
  ['數字產品', '數位產品'],
  ['數字內容', '數位內容'],
  ['數字化', '數位化'], // in case a restore above reintroduced it

  // --- 里 vs 裡: OpenCC's phrase segmentation leaves a stray 里 in spots
  // like 靜脈里 / 三個月里, and a second pass then flips it, so the result
  // depends on how many passes ran. Settle it here: 裡 for "inside", with
  // the measure-word and neighbourhood compounds restored. ---
  ['里', '裡'],
  ['英裡', '英里'],
  ['海裡', '海里'],
  ['公裡', '公里'],
  ['裡程', '里程'],
  ['裡長', '里長'],
  ['裡民', '里民'],
  ['鄰裡', '鄰里'],

  // --- Ambiguous characters OpenCC segments inconsistently between
  // passes (the first pass leaves the mainland form, or a second pass
  // over-converts). Each rule below was verified against every occurrence
  // in this corpus; restores keep the legitimate compounds. ---
  ['團夥', '團伙'], // gang is 團伙; 夥 is only the partner/measure word
  ['服務器', '伺服器'],
  ['關註', '關注'], // 註 is for 備註 / 註解, not 關注
  ['裡麵', '裡面'],
  ['來迴', '來回'],
  ['聯閤', '聯合'],
  ['於洪', '于洪'], // 于洪區, a Shenyang district (于 is a surname)
  ['嶽陽', '岳陽'], // the city; 嶽 is for mountain peaks
  ['嶽父', '岳父'],
  ['嶽母', '岳母'],
  ['報名錶', '報名表'], // a form, not a watch
  ['制作', '製作'],
  ['几乎', '幾乎'],
  ['出丑', '出醜'],
  ['划轉', '劃轉'],
  ['划撥', '劃撥'],
  ['划過', '劃過'],
  ['喂', '餵'], // every occurrence in this corpus is feeding
  ['念書', '唸書'],
  ['沒念', '沒唸'],
  // 瞭: the particle is 了 (說明了, 寫明了 — the 59 corpus occurrences
  // of 寫明瞭 / 列明瞭 were verb + particle, not the adjective 明瞭, so
  // 明瞭 gets no blanket restore; 明了 is itself a valid Taiwan word).
  // 瞭解 is restored by a regex in REGEX_VOCAB that refuses the
  // particle cases 刪了解釋 / 了解決, where 了 is the particle and
  // 解釋 / 解決 is the next word.
  ['瞭', '了'],
  ['一目了然', '一目瞭然'],
  ['了望', '瞭望'],
  // 后 meaning "after" is 後; the queen / place-name compounds keep 后.
  ['后', '後'],
  ['皇後', '皇后'],
  ['太後', '太后'],
  ['後妃', '后妃'],
  ['王後', '王后'],
  ['後里', '后里'],
  ['後龍', '后龍'],
  // 采 meaning adopt / take / gather is 採; the spirit / style compounds
  // keep 采.
  ['采', '採'],
  ['風採', '風采'],
  ['文採', '文采'],
  ['神採', '神采'],
  ['喝採', '喝采'],
  ['豐採', '豐采'],
  ['無精打採', '無精打采'],
  ['回避', '迴避'], // recusal / avoidance is 迴避 in Taiwan usage
  ['強製', '強制'], // compulsion is 強制 (強制執行, 強制險); 製 is making
  ['別別下', '別下'], // one corpus spot (類別別下): OpenCC doubles 別 on a second pass
  ['郵箱', '信箱'], // all 24 occurrences are email accounts, never a physical mailbox
  // 質量 is the mainland word for quality (and the physics word for
  // mass); Taiwan prose uses 品質. Official PRC document and institution
  // names keep 質量.
  ['質量', '品質'],
  ['產品品質', '產品質量'],
  ['醫療品質', '醫療質量'],
  ['工程品質', '工程質量'],
  ['品質監督', '質量監督'],
  // 運營 is the mainland word for operating a business or service;
  // Taiwan uses 營運. Defined legal subjects keep 運營: 網絡運營者 is a
  // defined term of the Cybersecurity Law family, 運營效率 is one of
  // the four official public-hospital KPI dimensions, and 安全運營管理
  // appears inside an official standard's title.
  ['運營', '營運'],
  ['營運者', '運營者'],
  ['營運效率', '運營效率'],
  ['安全營運管理', '安全運營管理'],
  ['營運單位', '運營單位'],

  // --- Review round 2 (human spot-check of sampled chapters): tw2
  // semantic misfires where both forms are valid Traditional words, so
  // character scans could not see them. ---
  ['平行處理症', '併發症'], // complications; 平行處理 stays for parallel processing
  ['週歲', '周歲'], // age in years is 周歲 in every Taiwan statute
  ['幾周', '幾週'], // duration in weeks
  ['孕周', '孕週'], // gestational weeks
  ['摺合', '折合'], // converted-rate sense; 摺 is folding
  ['鍊鐵', '煉鐵'], // smelting is 煉; 鍊 is chains
  ['鍊接', '連結'],
  ['篩查', '篩檢'], // Taiwan's medical term (official titles protected above)
  ['攝像頭', '攝影機'],
  ['塑料', '塑膠'],
  ['絕經', '停經'], // menopause in Taiwan medical usage
  ['提現', '提領'], // cash withdrawal in Taiwan banking usage
  ['箇', '個'], // every corpus occurrence is a measure word
  ['分類別', '分類'],
  ['三類別', '三類'],
  ['騎行者', '騎乘者'],
  ['不影片', '不視訊'], // "never video-call", where 視頻 was a verb
  ['芯片', '晶片'],
  ['方便麵', '泡麵'],
  ['簡歷', '履歷'], // Taiwan job-hunting usage
  ['錄像', '錄影'], // the statutory enumeration is protected above
  // 支持 vs 支援: tw2 turns every 支持 into 支援. Evidence and feature
  // support read fine as 支援 in Taiwan usage, so only the court /
  // judgment phrases are restored to 支持.
  // 心理支持 only in the SKILL's 1925 sentence; the books quote an
  // official service name with 心理支援服務 and must keep 支援 there.
  ['接的是心理支援，不會派出救護車', '接的是心理支持，不會派出救護車'],
  ['法律支援你', '法律支持你'], // the book's own house phrase
  ['法律只支援', '法律只支持'],
  ['法院不支援', '法院不支持'],
  ['法院支援', '法院支持'],
  ['應予支援', '應予支持'],
  ['文獻支援', '文獻支持'],
  ['需要範圍內』支援', '需要範圍內』支持'],
  // 繫安全帶: the source mixes 系/繫; Taiwan writes 繫. Entry titles and
  // every cross-reference convert together, so the links stay valid.
  ['系安全帶', '繫安全帶'],
  ['後排都系', '後排都繫'],
  ['系沒繫帶', '繫沒繫帶'],
  ['沒系。', '沒繫。'],
  // Bare computing 程序 the compound restore list missed (chapter 11).
  // Procedure senses （普通程序, 簡易程序, 破產程序, 程序規定) and
  // 小程序 are untouched by these phrases.
  ['自己的程序', '自己的程式'],
  ['伺服器端程序', '伺服器端程式'],
  ['升級程序', '升級程式'],
  ['破解程序', '破解程式'],
  ['下來的程序', '下來的程式'],
  ['程序、工具', '程式、工具'], // 刑法 285 條 quote: intrusion programs & tools
  ['程序和工具', '程式和工具'], // same family, 漏洞管理規定 paraphrases

  // --- Review round 3 (CLAUDE.md / SKILL.md / index.html / notes). ---
  ['迴報', '回報'], // 迴 is for 迴避 / 迴旋 / 迴圈 only
  ['渠道', '管道'],
  ['幾率', '機率'], // the rule quotations in CLAUDE.md are protected above
  // --- zhtw-mcp review round (2026-11-07, sysprog21/zhtw-mcp base
  // profile, cross_strait family). Clear mainland-leaning vocabulary in
  // narrative prose; PRC statutory names and quoted law text stay as-is
  // (社保/合同 family, 產品質量法, 信息網絡 license names — see the
  // edition principles at the top). Institutional 互聯網 compounds and
  // 電動自行車 are protected above.
  ['概率', '機率'],
  ['報道', '報導'],
  ['互聯網', '網際網路'],
  ['綜合徵', '症候群'],
  ['置信區間', '信賴區間'],
  ['胰腺', '胰臟'],
  ['意大利', '義大利'],
  ['新西蘭', '紐西蘭'],
  ['實時', '即時'],
  ['私信', '私訊'],
  ['帖子', '貼文'],
  ['比特', '位元'],
  ['密鑰', '金鑰'],
  ['重定向', '重新導向'],
  ['圖標', '圖示'],
  ['人臉識別', '人臉辨識'],
  ['呼吸機', '呼吸器'],
  ['老年痴呆', '失智症'],
  ['頁腳', '頁尾'],
  ['空氣淨化器', '空氣清淨機'],
  ['安卓', 'Android'],
  ['社交媒體', '社群媒體'],
  ['社交平台', '社群平台'],
  ['摩托車', '機車'],
  ['自行車', '腳踏車'],
  ['山地車', '登山車'],
  ['抑鬱', '憂鬱'],
  ['阿司匹林', '阿斯匹靈'],
  ['中國內地', '中國大陸'],
  ['內地居民', '大陸居民'],
  ['群聊', '群組'],
  ['刷手機', '滑手機'],
  ['溼', '濕'], // 濕 is the standard Taiwan glyph
  ['相冊', '相簿'],
  // Statutory categories in the Company Law and Labour Contract Law;
  // tw2's 進階 is for course levels, not these titles.
  ['進階管理人員', '高級管理人員'],
  ['進階技術人員', '高級技術人員'],
  // 鍾 vs 鐘: every corpus 鍾 is the (biological) clock — 主鍾, 外周鍾,
  // 鍾基因, 番茄鍾, 這個鍾. Surname compounds （鍾南山， 鍾姓） are
  // deliberately not matched, so future text about people stays safe.
  ['番茄鍾', '番茄鐘'],
  ['主鍾', '主鐘'],
  ['外周鍾', '外周鐘'],
  ['鍾基因', '鐘基因'],
  ['這個鍾', '這個鐘'],
  ['把鍾', '把鐘'],
  ['鍾往', '鐘往'],
  ['鍾就', '鐘就'],
  ['鍾還', '鐘還'],
  ['/周', '/週'],
  ['／周', '／週'],

  // --- Review round 4 (chapters 16/24/26/33, docs long-form). ---
  // The tw2 dictionary itself maps 回调 to the English word "callback"
  // (verified directly). The hearing-aid sentence is 来回调试 = come
  // back and adjust; a generic restore keeps any future finance 回调
  // (pullback) Chinese as well.
  ['來callback試幾次', '來回調整試幾次'],
  ['callback', '回調'],
  // 社区 is geographic / administrative everywhere in this book
  // （社區醫院， 社區衛生服務中心， 社區戒毒， 村（社區）公示）; only the
  // online-community compounds below keep 社群.
  ['社群', '社區'],
  ['技術社區', '技術社群'],
  ['公開社區', '公開社群'],
  ['社區媒體', '社群媒體'],
  ['社區平台', '社群平台'],
  ['社區行銷', '社群行銷'],
  ['社區網站', '社群網站'],
  ['社區論壇', '社群論壇'],
  ['社區經營', '社群經營'],
  ['網路社區', '網路社群'],
  ['線上社區', '線上社群'],
  ['虛擬社區', '虛擬社群'],
  // 配置 of assistive devices is provision / fitting, not a computer
  // 組態 (which book/26 uses correctly and keeps).
  ['輔助器具組態', '輔助器具配置'],
  ['家庭組態', '家庭配置'],
  // Emergency dispatch is 調度， not scheduling: 排程員 is the 120
  // dispatcher, 指揮調度 is the statutory phrase in the quotes.
  ['指揮排程', '指揮調度'],
  ['排程員', '調度員'],
  ['急救排程', '急救調度'],
  // 实现 (achieve) in policy and statutory text; computing 實作
  // (implement a cheat, book/11) is correct Taiwan usage and stays.
  ['實作全覆蓋', '實現全覆蓋'],
  ['基本實作', '基本實現'],
  ['逐步實作', '逐步實現'],
  ['實作處理目的', '實現處理目的'],
  ['目的已實作', '目的已實現'],
  ['實作相同目的', '實現相同目的'],
  ['實作抵押權', '實現抵押權'],
  ['實作跨省', '實現跨省'],
  ['實作就業', '實現就業'],
  ['一步實作', '一步實現'],
  ['實作每單', '實現每單'],
  ['實作撥打', '實現撥打'],
  // The same achieve-sense inside verification-note quotes and
  // paraphrases (statutes, policy documents, court judgments).
  ['無法實作', '無法實現'],
  ['債權的實作', '債權的實現'],
  ['不能實作合同目的', '不能實現合同目的'],
  ['的實作有影響', '的實現有影響'],
  ['要實作每', '要實現每'],
  ['已實作無償', '已實現無償'],
  ['實作"跨省通辦"', '實現"跨省通辦"'],
  ['實作“跨省通辦”', '實現“跨省通辦”'],
  ['已經實作', '已經實現'],
  ['實作預設', '實現預設'],
  ['實作了『', '實現了『'],
  ['實作物權', '實現物權'],
  ['系統內實作', '系統內實現'],
  ['系統實作', '系統實現'],
  ['實作虧損', '實現虧損'],
  // 配置 as a verb in the work-injury assistive-device rules and in
  // paraphrases of them （組態假肢， 自行組態輔助器具， 組態費用）,
  // plus the separated and facility forms the adjacent pair misses.
  ['組態輔助器具', '配置輔助器具'],
  ['組態假肢', '配置假肢'],
  ['組態費用', '配置費用'],
  ['組態補貼', '配置補貼'],
  ['和組態流程', '和配置流程'],
  ['後組態', '後配置'],
  ['設施組態', '設施配置'],
  ['最低組態', '最低配置'],
  // Legal 支持 (court / statute support), not aid-sense 支援.
  ['應當支援', '應當支持'],
  ['支援條件', '支持條件'],
  ['支援老舊小區', '支持老舊小區'],
  // Official names keep 數據 (restored like 數據安全法 above).
  ['資料出境安全評估辦法', '數據出境安全評估辦法'],
  ['網路資料安全管理條例', '網絡數據安全管理條例'],
  ['化驗', '檢驗'],
  ['前列腺', '攝護腺'],
  ['攝護腺素', '前列腺素'], // prostaglandin keeps 前列腺素 in Taiwan too
  ['艾滋', '愛滋'],
  ['硅膠', '矽膠'],
  ['號販子', '黃牛'],
  ['遮罩', '屏蔽'], // statutory 屏蔽； radiation shielding; ad blocking

  // --- Fork slug (Will, 2026-11-05, following the answer-me rule). ---
  // Every functional pointer (site, releases, clone, raw fetches, the
  // REPO/SITE constants) names the fork, not upstream. The one
  // provenance citation above is protected. Branch paths follow the
  // slug: the site's blob/tree links and the skill's raw fetches name
  // files that only exist, under their converted names, on zh-tw.
  // The repo slug rewrite lives in REGEX_VOCAB: the license section's
  // attribution line is a provenance citation and keeps the upstream
  // slug (Will, 2026-11-08), like the protected citation above.
  ['eternity4719.github.io', 'doggy8088.github.io'],
  ['eternity4719\\.github\\.io', 'doggy8088\\.github\\.io'], // check-links SKIP regex
  ['HowToLiveBetter/blob/main/', 'HowToLiveBetter/blob/zh-tw/'],
  ['HowToLiveBetter/tree/main/', 'HowToLiveBetter/tree/zh-tw/'],
  ['HowToLiveBetter/main/', 'HowToLiveBetter/zh-tw/'],
  // The edition's site lives on the custom domain (Will, 2026-11-05);
  // canonical / og / sitemap / SITE all root there. The CNAME file
  // itself is written by convert.mjs on every run.
  ['doggy8088.github.io/HowToLiveBetter/', 'howtolivebetter.gh.miniasp.com/'],
  // Will 於 2026-11-05 上午將網域改為 how-to-live-better；舊網域字串一律跟進。
  ['howtolivebetter.gh.miniasp.com/', 'how-to-live-better.gh.miniasp.com/'],

  // --- Proper names of PRC laws / regulations: wording kept, script only.
  // Generic prose keeps the Taiwan forms (資訊、網路、資料). ---
  ['個人資訊保護法', '個人信息保護法'],
  ['資訊網路傳播權', '信息網絡傳播權'],
  ['網路安全法', '網絡安全法'],
  ['資料安全法', '數據安全法'],
  ['網路交易監督管理辦法', '網絡交易監督管理辦法'],
  ['互聯網資訊服務管理辦法', '互聯網信息服務管理辦法'],
  ['未成年人網路保護條例', '未成年人網絡保護條例'],
  ['網路資訊內容生態治理規定', '網絡信息內容生態治理規定'],
  ['電腦資訊系統安全保護條例', '計算機信息系統安全保護條例'],
  ['產品品質法', '產品質量法'],
  ['品質監督檢驗檢疫', '質量監督檢驗檢疫'],
  // Legal terms of art from the same statutes: 信息網絡 inside the
  // crime name 幫助信息網絡犯罪活動罪 and quoted regulation wording,
  // 網絡安全事件 as the defined term of the incident-reporting rules,
  // the official name of the CNNIC, and 網絡運營 inside Cybersecurity
  // Law terminology (its 運營者 compounds are kept by the rule above).
  ['資訊網路', '信息網絡'],
  ['網路安全事件', '網絡安全事件'],
  ['網路安全等級保護', '網絡安全等級保護'],
  ['中國互聯網路資訊中心', '中國互聯網絡信息中心'],
  ['網路運營', '網絡運營'],
];

/**
 * Regex rules applied after GLOBAL_VOCAB. OpenCC tw2 renders 編碼
 * (encoding / item codes) as 寫程式 in some segmentations — the same
 * false friend documented in the answer-me project — while genuine
 * "writing code" is always 寫程式碼 in this corpus, so a bare 寫程式
 * not followed by 碼 is restored to 編碼.
 */
export const REGEX_VOCAB = [
  // After the 乙肝/丙肝 sweep: a Latin letter directly glued to a
  // preceding Chinese character takes a space, matching the book's
  // dominant spacing (查 B 型肝炎, not 查B 型肝炎).
  [/(?<=[一-鿿])([BC] 型肝炎)/g, ' $1'],
  // Repo slug: functional pointers name the fork, but the attribution
  // line in the license section ("附上倉庫連結 <url>") is a provenance
  // citation and keeps the upstream slug (Will, 2026-11-08).
  [/(?<!附上倉庫連結 https:\/\/github\.com\/|上游原文在 \[|上游原文在 \[eternity4719\/HowToLiveBetter\]\(https:\/\/github\.com\/)eternity4719\/HowToLiveBetter/g, 'doggy8088/HowToLiveBetter'],
  // Cervix (Will, 2026-11-08: domain term check, batch A). Negative
  // lookbehind keeps the already-correct 子宮頸 a fixed point.
  [/(?<!子)宮頸/g, '子宮頸'],
  [/寫程式(?!碼)/g, '編碼'],
  // Weeks as a duration after a numeral: 幾周 is covered above, digits
  // and 兩 need the regex. The lookahead keeps 周歲 (age, handled by the
  // pair above), 周年, 周圍, 周邊 and person names in 周.
  [/([0-9０-９一二三四五六七八九十幾兩])周(?!歲|年|圍|邊|遭|全|轉|長|口|正|哲|辰|感|密|詳)/g, '$1週'],
  // Week N of a pregnancy or a programme （第 20 周）, but not 第 X 周年.
  [/第([0-9一二三四五六七八九十百]+)周(?!年)/g, '第$1週'],
  // Numeral + space + 周 (12 周長期處方, 孕 13 周前): a space breaks the
  // pair above, so this catches the spaced form.
  [/([0-9０-９])\s周(?!圍|邊|歲|年|遭)/g, '$1 週'],
  // 瞭解, except where 了 is a verb particle before 解釋 / 解決
  // (刪了原解釋的面積條款 must not become 刪瞭解釋).
  [/了解(?!釋|決)/g, '瞭解'],
  // 登錄 → 登入 only in account sign-in senses: followed by a sign-in
  // object/aspect （帳號、設備、後、的…), or preceded by a sign-in verb
  // （驗證碼、退出、帳號…). Statutory registration senses （業者登錄、
  // 申請登錄、登錄類別、登錄字號） keep 登錄， the correct Taiwan term.
  [/登錄(?=帳號|密碼|設備|頁面|系統|方式|狀態|紀錄|記錄|後|時|的|了|介面|畫面|IP|老|新|驗證)/g, '登入'],
  [/(?<=驗證碼|退出|自動|無需|免|重新|進行|掃碼|帳號)登錄/g, '登入'],
  // Adverbial 只 (only): tw2 systematically writes 隻 （隻記錄、不分組
  // is the book's stock evidence phrase). Measure-word 隻 survives
  // after numerals and in 船隻 / 犬隻 / 那隻股票 / 那隻眼， which the
  // lookbehind protects; adverbial 那隻 (followed by a verb) flips
  // first.
  [/那隻(?=會|說明|多|有|是|在|看|記錄)/g, '那只'],
  [/(?<![一二兩三四五六七八九十幾每0-9０-９船犬那])隻/g, '只'],
];

export const applyVocab = (t) => {
  for (const [a, b] of GLOBAL_VOCAB) t = t.split(a).join(b);
  for (const [re, b] of REGEX_VOCAB) t = t.replace(re, b);
  return t;
};

// Wrong forms the quality gate (check.mjs) counts to zero in converted
// content, after check.mjs strips its allowlisted proper-name compounds
// (個人信息保護法, 網絡安全法, 產品質量, 數位化, 視頻號, ...). 標記 is
// deliberately absent: it is the project's own term (引文標記) and a
// legitimate verb; the 標籤 cost tags are protected by PROTECT instead.
// 登錄 is likewise absent: statutory registration （食品業者登錄） is
// correct Taiwan usage; only its sign-in senses convert (REGEX_VOCAB).
export const WRONG_FORMS = [
  '視頻', '信息', '數據', '用戶', '軟件', '網絡', '屏幕', '默認', '質量',
  '打印', '緩存', '賬', '羣', '分鍾', '寬帶', '數位',
  '平行處理症', '週歲', '摺合', '篩查', '攝像頭', '塑料', '絕經', '提現',
  '溼', '幾率', 'callback',
];
