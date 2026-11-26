# 追加：第 27 節第 21 條，懷孕期間不吃沒經過巴氏消毒的奶和軟奶酪、冷的熟食滷味和冷燻魚，冰箱裡拿出來的熟食和剩菜熱透再吃

訪問日期 2026-11-25。issue #181 讀者建議補「李斯特菌」，主任務定的範圍：在第 27 節節末追加一條，只寫孕期。動筆前 `grep 李斯特` 在 book/ 下零命中，不算重複。和本節第 17 條（弓形蟲，肉要做熟）分工：那條管生肉和貓砂，這條管冷藏的即食食品和剩菜，備註裡互相指路。普通人的剩菜冷藏規則由另一份任務寫在第 1 節，本條沒展開，也沒寫指向第 1 節的條號。節首導覽掛進「孕前和孕期自己能做的」一塊，短名「熟食和剩菜熱透再吃」。

## 四問

1. 讀者會碰上嗎：會。國家食品安全風險評估中心點名的是醬滷肉、燒雞、烤鴨這類熟肉製品，國內監測的病例過半是圍產期病例。
2. 是不是普遍不知道：是。多數人把冰箱當保險箱，不知道這種菌在冷藏溫度下能繁殖。
3. 動作是不是新的：是。第 17 條的動作是把生肉做熟，本條的動作是把已經熟了、冷藏過的食物重新熱透，以及不喝生奶。
4. 有沒有官方原始來源：有，國內國外都有，見下。

## 1. 國家食品安全風險評估中心《熟肉製品中單核細胞增生李斯特菌初步定量風險評估（摘要）》

- URL：<https://www.cfsa.net.cn/UpLoadFiles/news/upload/2022/2022-11/2d42f8f4-b6c4-47bd-956d-e24ff650e917.pdf>（curl 直連 200，pdftotext 能逐字抽中文）
- 發布年份文件裡沒寫，上傳路徑是 2022-11，所以來源欄沒寫年份。
- 原文：「李斯特菌病有其獨特的易感人群，主要是幼兒、老年人、孕婦和免疫功能低下人群，感染後可導致孕婦發生流產、死胎，新生兒死亡」
- 原文：「本項目中所涉及的熟肉製品，是指以豬、牛、羊、雞、兔、狗等畜、禽肉為主要原料，經醬、滷、燻、烤、醃、蒸、煮等任何一種或多種加工方法烹製成熟、醃漬入味製成的直接可食的肉類加工製品，如：醬滷牛（羊）肉、燒雞、烤鴨、鹽焗雞、叉燒等。」
- 原文：「預包裝的熟肉製品檢出率低於同類別散裝熟肉製品。」「其中醬滷類熟肉監測樣本量最大，陽性檢出率較高。」
- 原文：「結果表明 6 省監測的熟肉製品中平均單增李斯特菌汙染的陽性率為 3.37%（各省熟肉製品檢出單增李斯特菌的陽性率在 0.85%~6.54%之間）」
- 原文：「推算我國居民通過熟肉製品導致李斯特菌病的年發病率約在十萬分之六（5.3×10-5~6.2×10-5）。……年發病人數的第 95 百分位數在 20~58 人之間，風險很低。」
- 原文：「若食用熟肉製品前經過加熱，使食品表面溫度達到近 60 ℃，便能將基線風險均值從 2.9×10-5 降低到 4.6×10-8，平均風險降低約 1000 倍。」
- 原文：「初步估計熟肉製品可能是我國居民食源性李斯特菌病風險較高的食品類別」「李斯特菌病易感人群（65 歲及以上老年人、孕婦和免疫功能低下人群）應控制熟肉製品的食用量和食用頻次，並且加熱後食用即食熟肉製品」
- 沒用的：「新生兒患李斯特菌病的死亡率接近 50%」（按早年文獻綜述，和 2026 年系統綜述的 11% 差得遠，沒寫）；「在美國，感染單增李斯特菌的病人死亡率高達 20%~30%」（轉述，改用世衛原文，最後也沒進條目）。
- 注意：「十萬分之六」和「年發病人數第 95 百分位 20~58 人」在同一段裡量級對不上，摘要沒解釋。主任務收尾時把「約十萬分之六」從條目裡拿掉了，只留「風險很低」這句結論：兩個數差了幾個量級，也比世衛寫的全部李斯特菌病發病率（每 100 萬人 0.1 到 10 例）高，核不清就不寫。備註裡「作者的解釋是剩菜放久了菌太多」也刪了，因為下面 Niu 2024 那句「This may explain」的前一句沒摘到，指代核不清。

## 2. 中國疾病預防控制中心 (2026-07-21)《家裡這個地方可能有點髒，但是你從未注意過！》

- URL：<https://www.chinacdc.cn/jkkp/yyjk/jbyy/202607/t20260721_1838308.html>（curl 直連 200）
- 原文：「李斯特氏菌——它在5~45℃均可生長，特別愛汙染乳及乳製品、肉類、水產品、蔬菜和水果。對普通人可能會拉肚子、發燒，但對孕婦、新生兒、老人和免疫力差的人來說，可能引發腦膜炎、敗血症，孕婦感染還可能導致流產。所以孕婦和老人吃的熟食，一定要徹底加熱。」

## 3. 世界衛生組織 Listeriosis fact sheet

- URL：<https://www.who.int/news-room/fact-sheets/detail/listeriosis>
- 原文：「It is a relatively rare disease with 0.1 to 10 cases per 1 million people per year depending on the countries and regions of the world.」
- 原文：「Unlike many other common foodborne diseases causing bacteria, L. monocytogenes can survive and multiply at low temperatures usually found in refrigerators.」
- 原文：「foods with a long shelf-life under refrigeration (L. monocytogenes can grow to significant numbers in food at refrigeration temperatures when given sufficient time)」（條目裡「食物冷藏得越久菌越多」譯自這句）
- 原文：「Pregnant women are about 20 times more likely to contract listeriosis than other healthy adults. It can result in miscarriage or stillbirth. Newborn may also have low birth weight, septicaemia and meningitis.」
- 原文：「L. monocytogenes in food are killed by pasteurization and cooking.」（備註用）
- 沒用的：「This form of disease is characterized by severe symptoms and a high mortality rate (20–30%).」這是重症型在所有高危人群裡的病死率，不是孕婦自己的，容易讀錯，沒進條目。

## 4. 美國食品藥品監督管理局 Listeria (Food Safety for Moms-to-Be)

- URL：<https://www.fda.gov/food/health-educators/listeria-food-safety-moms-be>（無頭 Chrome 帶代理取到，頁面標註 Content current as of 01/16/2025）
- 原文：「unlike many other foodborne bacteria, L. monocytogenes can grow in cold temperatures, including inside refrigerators.」
- 原文：「Pregnant women are about 10 times more likely to get listeriosis than other healthy adults.」
- 原文：「While a pregnant woman may have only a mild, flu-like illness, or may not feel sick at all, listeriosis can lead to miscarriage, death of the unborn baby, a low-birth-weight infant, health problems for the newborn, or even infant death.」
- 原文：「Listeriosis in pregnant women can lead to serious complications with their pregnancy, including miscarriage, stillbirth, premature delivery, and death.」「In newborns, L. monocytogenes can cause blood infections and meningitis.」
- 原文：「Use ready-to-eat foods, such as dairy, meat, poultry, seafood, and produce, as soon as possible. The longer they're stored in the refrigerator, the higher the chance that L. monocytogenes can grow」（備註「別在冰箱裡久放，儘早吃完」的依據）
- 沒用的：「Pregnant Hispanic women are about 24 times more likely」，和國內讀者無關。

## 5. 美國疾病控制與預防中心

- People at Increased Risk for Listeria Infection：<https://www.cdc.gov/listeria/risk-factors/index.html>（curl 403，無頭 Chrome 帶代理取到；頁面標註 2025-09-24 審閱）
  - 原文：「Every year in the United States, about 1 in 25,000 pregnant women are infected with Listeria.」
  - 原文：「Sadly, 1 in 4 pregnant women who get this illness lose their pregnancy or their baby shortly after birth.」
  - 原文：「Call your healthcare provider if you have a fever and feel more tired and achy than normal. Say if you ate recalled food in the past two months or are worried about something you ate. Early treatment can help save your baby.」
  - 原文：「More than half of all Listeria infections occur among people 65 years and older.」
  - **現行頁面沒有「孕婦是一般人的多少倍」這句話**。倍數只在世衛（20 倍）和 FDA（10 倍）的頁面上有，條目兩個都列了，沒寫成 CDC 的說法。
- Preventing Listeria Infection：<https://www.cdc.gov/listeria/prevention/index.html>（2025-01-31 更新）
  - 高危人群要避開的：「Unheated deli meat, cold cuts, hot dogs, and fermented or dry sausages」「Premade deli salads, such as coleslaw and potato, tuna, or chicken salad」「Refrigerated pâté or meat spreads」「Refrigerated smoked fish」「Raw or lightly cooked sprouts」「Raw (unpasteurized) milk, yogurt, and ice cream」「Any type of cheese when made with (raw) unpasteurized milk」
  - 較安全的做法：「Deli meat, cold cuts, hot dogs, and fermented or dry sausages reheated to 165°F or until steaming hot」
  - 沒用的：切開的甜瓜、queso fresco 類奶酪，國內讀者少見或要另講，沒寫。
- FoodSafety.gov People at Risk: Pregnant Women：<https://www.foodsafety.gov/people-at-risk/pregnant-women>
  - 原文：「Reheat these meats to steaming hot or 165°F (74°C) before eating, even though the label says precooked.」（「約 74 ℃」的出處）
  - 原文：「Raw seafood may contain parasites or germs, including Listeria」

## 6. NHS Foods to avoid in pregnancy

- URL：<https://www.nhs.uk/pregnancy/keeping-well/foods-to-avoid/>（Page last reviewed: 15 June 2026）
- 原文：「cold-smoked and cured fish, like smoked salmon – these must be cooked until steaming hot」；要避開的有「raw fish and raw shellfish」；「You should avoid raw, cold-smoked and cured fish because it could contain listeria bacteria, which can cause listeriosis.」
- 原文：要避開「pasteurised or unpasteurised mould-ripened soft cheeses with a white coating on the outside, such as brie, camembert and chèvre – these must be thoroughly cooked」「pasteurised or unpasteurised soft blue-veined cheeses」；可以吃「pasteurised soft cheeses, such as cottage cheese, cream cheese, processed cheese spreads, mozzarella……」
- 原文：「Listeriosis can cause miscarriage or stillbirth, or make your newborn baby very unwell.」
- NHS 的 Listeriosis 頁（<https://www.nhs.uk/conditions/listeriosis/>）說法一致，沒另引。

## 7. Gao B 等 (2026)，中國孕婦和新生兒李斯特菌病系統綜述

- 題錄按 Europe PMC：Gao B, Miao Y, Miao R, Ye H. Listeriosis in Pregnant Women and Neonates in China: A Systematic Review. Journal of Clinical Medicine 15(15):5915. PMID 42590019，PMCID PMC13466708，<https://doi.org/10.3390/jcm15155915>（doi.org 跳轉到 mdpi.com，正常）
- 只核到摘要，全文 XML 沒下下來。摘要原文：
  - 「73 studies (including two previous systematic reviews) ultimately met the inclusion criteria. These studies, which were conducted across 19 provinces, provided sufficient data for analysis, encompassing 956 pregnant women and 749 neonates.」
  - 「The pooled incidence of obstetric listeriosis was 11.57 per 100,000 pregnancies (95% CI, 7.63-15.50; I2 = 73%) based on nine studies」
  - 「Two maternal deaths were recorded, whereas major adverse outcomes (miscarriage, stillbirth, prematurity, or low birth weight) occurred in 58.3% of pregnancies.」
  - 「The neonatal case fatality rate was 11% (95% CI, 0.06-0.17; I2 = 60%).」
- 注意：這些是發表出來的病例和醫院病例系列，重的更容易被報導，58.3% 多半偏高。發病率來自 9 家有分母的醫院，不是全國人口數。新生兒發病率（每 10 萬活產 7.55 例）沒寫進條目。

## 8. Fan Z 等 (2019)，中國大陸李斯特菌病系統綜述

- Fan Z, Xie J, Li Y, Wang H. Listeriosis in mainland China: A systematic review. Int J Infect Dis 81:17-24. PMID 30641204，<https://doi.org/10.1016/j.ijid.2019.01.007>
- 摘要原文：「The records of patients with listeriosis in mainland China reported during the years 2011-2017 were extracted.」「Of the 231 perinatal listeriosis patients, 32.68% resulted in abortion and/or newborn death.」「Perinatal cases in mainland China account for a much higher proportion than is usually described.」
- 沒用的：「The 227 non-perinatal listeriosis patients included had a mortality rate of 23.78%.」不是孕婦的數。

## 9. Niu Y 等 (2024)，全國病例對照研究

- Niu Y, Li W, Xu B, Chen W, Qi X, Zhou Y, Fu P, Ma X, Guo Y. Emerging Microbes & Infections 13(1):2307520. PMID 38341870，PMCID PMC10860432，<https://doi.org/10.1080/22221751.2024.2307520>。全文 XML 從 Europe PMC 取到，逐字核過。
- 原文：「In total, 800 cases were reported between 2013 and 2022, including 466 perinatal and 334 non-perinatal cases」
- 原文：「The investigation covered the 4 weeks preceding the specimen collection date for cases」
- 表 2 圍產期組（174 對），多因素 OR：Cooked meat products 0.79 (0.48–1.30)；Ice cream 2.09 (1.23–3.55)；Chinese cold dishes 1.11 (0.67–1.86)；Cheese 0.85 (0.46–1.56)。
- 表 3 圍產期組（151 對），多因素 OR：Separation of raw and cooked foods 0.27 (0.14–0.51)；Consumption of leftovers 1.92 (1.03–3.59)；冰箱清潔每年 1 到 2 次對不到 1 次 0.30 (0.15–0.59)，3 到 5 次 0.34 (0.14–0.82)，5 次以上 0.35 (0.13–0.91)；Heating leftovers before consumption「Almost always」0.60 (0.19–1.86，單因素）。
- 原文：「This may explain our finding that heating leftovers before consumption did not reduce the risk of infection. However, reheating the leftovers until steaming is highly recommended for pregnant women to prevent listeriosis.」
- 涼拌菜的定義：「cold dishes may usually be prepared from cooked and/or raw ingredients in advance, stored at room temperature before serving and not generally reheated before consumption」。涼拌菜只在非圍產期組的北方分層裡顯著（OR 3.17，1.29–7.81），孕婦那一組沒看出差別，所以條目沒把涼拌菜列進孕婦要避開的食物，只如實報了數字。
- 侷限（作者自述）：800 例裡 441 例失訪，應答率 44.88%；死亡和死胎的家庭常拒絕參加；靠回憶 4 週前的飲食。
- 熟肉製品在這項研究裡沒看出風險（0.79），和風險評估中心的模型結論方向不一樣。兩頭都寫進了收益欄，沒替讀者抹平。

## 沒採用的讀者材料

- **Wang Y 等 (2015)**，Emerg Microbes Infect 4(8):e50，<https://doi.org/10.1038/emi.2015.50>，PMC4576168 全文核過。這是一封來信，給 2007 到 2012 年北京、上海、山西、江蘇 28 株臨床菌株做血清型和分子分型（「28 L. monocytogenes isolates were collected from patients in China……maternal–fetal infections (seven cases)」），沒有臨床結局數字，用不上。
- **Choi MH 等 (2018)**，Ann Lab Med 38(2):102-109，<https://doi.org/10.3343/alm.2018.38.2.102>。摘要原句：「Listeriosis caused by Listeria monocytogenes has a high case-fatality rate (CFR) of approximately 20% to 30%.」這是背景句裡的總體病死率，研究本身是韓國三家醫院 58 例病人，不是孕婦，沒用。

## 沒查到或沒取到的

- 國家衛健委沒找到專門給孕婦的李斯特菌飲食提示。nhc.gov.cn 的檢索結果只有流感培訓手冊一類無關文件。
- 《中國居民膳食指南（2022）》孕期部分的原文沒去取（中國營養學會的書，官網沒有可逐字核對的全文）。
- Feng Y 等 2013（1964–2010 年病例綜述）和 Li W 等 2018（2013–2017 年監測）沒在 Europe PMC 查到題錄，沒寫。Niu 2024 的引言轉述過前者的數字（「mortality rates of 26% for overall listeriosis and 46% for neonatal listeriosis」），二手轉述，沒用。
- 中國疾控中心職業衛生所 2012 年的頁面（<https://niohp.chinacdc.cn/zdkz/dwzs/xjxswzd/lstsj/>）寫了「牛奶最好煮沸後食用，對肉、乳製品、涼拌菜及鹽醃食品要特別注意」，講的是一般人群，年份久，沒引。
- 各地衛健委、疾控的科普（廣東、雲南、四川等）裡有「生魚片、壽司、滷味」的清單，屬於地方科普，倍數和溫度說法不一，沒引。生魚生貝類按 NHS 和 FoodSafety.gov 的原文寫。
- Wang T 等 2025（北京 2013–2022 年監測，母嬰病例病死率 42.86%）只有摘要，分母不清，沒用。

## 證據等級和收益量級

- 證據等級 B：感染後果有監測和病例彙總的數字，食物風險有一項全國病例對照研究。沒有研究分組比較過「照這份清單做」能少多少感染，「降低約 1000 倍」是風險評估模型算的。
- 收益「中」，憑判斷，閾值套不上：沒有相對降幅的實測數字。往上靠的理由是後果重（國內彙總 58.3% 出現流產、死胎、早產或低出生體重，美國約四分之一失去孩子），模型裡加熱的效果很大。往下壓的理由是發病率低（國內彙總每 10 萬次懷孕約 11.57 例，美國每 25000 名孕婦 1 例），絕對收益小。和本節第 17 條（弓形蟲）同樣的定法，定「中」。
- 成本：錢=0，時間=少，毅力=些（整個孕期改一個習慣）。人群=懷孕。
- 受益人：自己和孩子，第 ① ② 檔。
