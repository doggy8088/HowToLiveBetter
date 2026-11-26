# 追加：issue #181，第 1 節第 50 條（飯菜兩小時內放進冰箱、剩菜冷藏與解凍）

2026-11-25。issue #181 讀者建議補「家庭食物的安全保存」。範圍由主任務定：第 1 節節末追加一條，解凍並在同一條裡。下面所有網頁的訪問日期都是 2026-11-25。

## 四問評估

1. 普通讀者會碰上嗎：會，家家都有剩菜和凍肉。
2. 是不是普遍不知道：「熱菜要放涼了再進冰箱」「凍肉早上拿出來放檯面上化一天」是常見做法，和官方指引相反。
3. 動作是不是新的：全書查過，第 1 節第 48 條管米酵菌酸（木耳、濕米粉、酵米麵），第 2 節管黃麴黴毒素，沒有一條寫普通剩菜的時間溫度和解凍。
4. 有沒有官方原始來源：有，見下。中國官方來源只查到原則性的話，具體的小時數和天數靠世界衛生組織的中文版手冊和美國農業部。

## 1. 國家衛健委 2024-06-21 新聞發布會文字實錄

- URL：<https://www.nhc.gov.cn/xcs/c100122/202406/03d4253c5a8e4b9cad4c695ddc7d2e25.shtml>
- 取法：curl 取不到，無頭 Chrome 不帶代理能取。先用衛健委站內搜尋 `https://zs.kaipuyun.cn/s?siteCode=bm24000006&searchWord=剩飯剩菜` 找到。
- 答問人，頁面原文寫的是：「國家衛生健康委食品安全評估中心副主任 劉兆平」。
- 「第二，要妥善儲存和處理食品。對於一些沒有用完的食材，或者剩飯菜，最好及時放到冰箱裡冷藏和冷凍，放的時候也要保證生熟分開，保證食品之間有一定的間隙，這樣做的目的就是為了避免出現交叉汙染。」
- 「冰箱不是食品的保險箱。我們知道，冰箱低溫冷藏是可以抑制一些細菌的生長，但是有些細菌不怕冷，也不怕凍。譬如說單增李斯特菌，它在0度的時候可以照樣生長繁殖」。李斯特菌按任務要求沒有展開，正文只寫了「有些危險的微生物在 5℃ 以下仍能生長」，這句取自世界衛生組織手冊。
- 「另外，我們從冰箱裡拿出來剩飯剩菜來食用時，一定要充分加熱再食用，這樣更安全。」
- 同一場發布會另一位答問人說：「飯菜要儘量當日吃完，如果有剩餘飯菜要妥善冷藏，並在食用前徹底加熱」。沒引。
- **沒查到**：中國官方（衛健委、市場監管總局、國家食品安全風險評估中心、中國疾控中心）寫明「2 小時內」「冷藏幾天」「怎麼解凍」的原文。站內搜尋「剩飯剩菜」命中的另兩場發布會（2026-07-15、2026-05-19）只有「冰箱裡取出的食物應該徹底加熱，葉菜尤其不建議過夜」這類話，沒有小時數和天數，沒引。市場監管總局、中國疾控中心沒有逐站去翻。

## 2. 世界衛生組織《食品安全五大要點》培訓手冊（中文版）

- 條目頁：<https://iris.who.int/handle/10665/43546>（讀者給的 <https://www.who.int/publications/i/item/9789241594639> 指向同一份）。Metadata dc.date.issued 是 2006-12-31。
- 中文 PDF：<https://iris.who.int/server/api/core/bitstreams/fc1785aa-f126-4b38-be36-3975fc50e850/content>（檔名 9789245594634_chi.pdf）。
- 取法：頁面上的 `apps.who.int/iris/bitstream/...` 舊連結只返回一個前端殼頁。改走介面：`/server/api/pid/find?id=10665/43546` 拿條目，再 `/server/api/core/items/<uuid>/bundles` 和 `/bundles/<id>/bitstreams?size=100` 找到中文 PDF。中文 PDF 的文本層是亂碼，用 pymupdf 把第 18、19 頁渲染成圖片逐字看的（頁尾頁碼也是 18、19）。
- 第 18 頁，要點 4 核心內容：
  - 「熟食在室溫下不得存放 2 小時以上；」
  - 「所有熟食和易腐食物應及時冷藏(最好在 5℃以下)」
  - 「食用前應保持食物達到足夠的溫度(超過 60℃)」
  - 「即使在冰箱中也不能過久地貯存食物；」
  - 「冷凍食品不要在室溫下化凍。」
  - 為什麼：「如果在室溫下存放食品，微生物可以迅速繁殖。把溫度保持在 5℃以下或 60℃以上，可使微生物生長繁殖速度減慢或停止。有些危險微生物在 5℃以下仍能生長。」
  - 「微波爐可用來解凍食品，但能夠留下微生物能夠生長的暖點。應立刻烹飪用微波爐解凍的食物。」
- 第 19 頁：
  - 「5℃至 60℃是危險範圍，微生物可以在此溫度範圍內迅速繁殖。」
  - 「冷藏或冷凍食品不能殺死微生物，但能限制其繁殖。」
  - 「不要在冰箱中存放剩飯菜超過 3 天，重複加熱不能超過一次；」
  - 「食物化凍應在冰箱中或冷的環境下進行。」
  - 「剩飯菜的快速冷卻方法：將食物放在敞口盤中；大塊肉切成小塊」。沒引。

## 3. 美國農業部食品安全檢驗局（USDA FSIS）三個頁面

取法：curl 帶代理仍是 Akamai 的 Access Denied，無頭 Chrome 帶代理能取。

- "Danger Zone" (40°F - 140°F)，頁面標 Last Updated: Jun 28, 2023。<https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/danger-zone-40f-140f>
  - 「Bacteria grow most rapidly in the range of temperatures between 40 °F and 140 °F, doubling in number in as little as 20 minutes.」「20 分鐘翻一倍」沒寫進正文。
  - 「Never leave food out of refrigeration over 2 hours. If the temperature is above 90 °F, food should not be left out more than 1 hour.」
  - 「leftovers must be put in shallow containers for quick cooling and refrigerated at 40 °F or below within two hours.」
  - 「Foods should be reheated thoroughly to an internal temperature of 165 °F or until hot and steaming.」正文的「或者熱到整份冒熱氣」出自這句。
- Leftovers and Food Safety，Last Updated: Jul 31, 2020。<https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/leftovers-and-food-safety>
  - 「Within 2 hours of cooking food or after it is removed from an appliance keeping it warm, leftovers must be refrigerated. Throw away all perishable foods that have been left in room temperature for more than 2 hours (1 hour if the temperature is over 90° F, such as at an outdoor picnic during summer).」
  - 「A big pot of soup, for example, will take a long time to cool, inviting bacteria to multiply and increasing the danger of foodborne illness. Instead, divide the pot of soup into smaller containers so it will cool quickly.」
  - **熱的能不能直接進冰箱，原句找到了**：「Hot food can be placed directly in the refrigerator or be rapidly chilled in an ice or cold water bath before refrigerating.」
  - 「Leftovers can be kept in the refrigerator for 3 to 4 days or frozen for 3 to 4 months.」冷凍 3 到 4 個月沒寫。
  - 「When reheating leftovers, be sure they reach 165° F as measured with a food thermometer. Reheat sauces, soups and gravies by bringing them to a rolling boil.」
- The Big Thaw — Safe Defrosting Methods，Last Updated: Jun 15, 2013。<https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/big-thaw-safe-defrosting-methods>
  - 「Perishable foods should never be thawed on the counter, or in hot water and must not be left at room temperature for more than two hours.」
  - 「Even though the center of the package may still be frozen as it thaws on the counter, the outer layer of the food could be in the "Danger Zone," between 40 and 140 °F — temperatures where bacteria multiply rapidly.」
  - 「There are three safe ways to thaw food: in the refrigerator, in cold water, and in the microwave. In a hurry? It's safe to cook foods from the frozen state.」
  - 「Even small amounts of frozen food — such as a pound of ground meat or boneless chicken breasts — require a full day to thaw.」正文寫成「一斤左右的肉也要整整一天」，1 磅約 454 克。
  - 「The food must be in a leak-proof package or plastic bag.」「The bag should be submerged in cold tap water, changing the water every 30 minutes so it continues to thaw.」「If thawed completely, the food must be cooked immediately.」
  - 「After thawing in the microwave, always cook immediately after」
- 華氏度換算（自算）：40°F 約 4.4℃，90°F 約 32.2℃，140°F 是 60℃，165°F 約 73.9℃。正文寫「約 32℃（原文 90°F）」「約 74℃（原文 165°F）」。冷藏溫度正文用了世界衛生組織的 5℃，沒另寫 4℃。

## 4. 蠟樣芽孢桿菌暴發，中國 2010 到 2020 年

- **讀者給的題錄有誤**。doi 10.46234/ccdcw2023.140 在 Europe PMC 上對應的是：Duan S, Yu Y, Guo Y, Lu D, Li N, Liu Z, Liang J, Jiang Y, Wang S, Fu P, Liu J, Liu H (2023). Epidemiological Evaluation of Bacillus cereus-Induced Foodborne Outbreaks — China, 2010–2020. China CDC Weekly 5(33):737-741。PMID 37663900，PMCID PMC10468372。讀者寫的「Liu X 等，5(31):691-696」對不上，正文按 Europe PMC 的題錄寫。Liu J、Liu H 是通訊作者。
- 全文：<https://www.ebi.ac.uk/europepmc/webservices/rest/PMC10468372/fullTextXML>；DOI <https://doi.org/10.46234/ccdcw2023.140>
- 「From 2010 to 2020, a total of 419 foodborne outbreaks prompted by B. cereus were reported in China, leading to 7,892 cases, 2,786 hospital admissions, and 5 fatalities.」
- 表 1：Rice or flour 194 起（46.30%）、3221 例、死亡 3 人；Complex food 54 起、死亡 2 人；合計 419 起、7892 例、住院 2786、死亡 5、病死率 0.06%。
- 「rice and rice products accounted for a higher number of outbreaks (158 outbreaks), compared to flour and flour products (36 outbreaks).」
- 「Multifactor contamination was identified as the cause for 39.14% of outbreaks and 41.02% of associated cases. This was closely followed by improper storage, accounting for 111 outbreaks (26.49%) and 1,981 cases (25.10%).」摘要：「in instances where only one factor contributed, improper storage was most frequently implicated.」正文寫成「只查出一個原因的事件裡，存放不當最多，有 111 起，佔全部事件的 26.49%」。多因素那 39.14% 裡也常有存放不當（兩因素組合裡「inadequate storage and inappropriate processing」佔 48.78%），沒寫進正文。
- 「26.25% of outbreaks could be traced back to food prepared in these school canteens, accounting for 48.34% of cases」「However, the household held the record for the highest hospitalization rate at 53.92%, along with the highest mortality rate at 1.37%.」場所指做飯的場所（setting for food preparation）。家庭的起數和例數只在圖 3 裡，全文 XML 裡沒有數字，沒寫。學校食堂的佔比沒寫，因為本條寫的是家裡。
- **沒寫的**：蠟樣芽孢桿菌的嘔吐毒素耐熱、再加熱破壞不了。這篇全文只說它產生嘔吐型和腹瀉型兩類毒素（「vomiting-type and diarrhea-type enterotoxins」），沒有一句講耐熱。世界衛生組織手冊和美國農業部三個頁面也沒寫。按任務要求，來源裡沒有就不寫。
- 文中「fried rice constituted … 33% within the category of rice and rice products」，炒飯佔三分之一，沒寫。

## 5. Li H 等 (2021)，沒採用

- Characteristics of Settings and Etiologic Agents of Foodborne Disease Outbreaks — China, 2020. China CDC Weekly 3(42):889-893，doi 10.46234/ccdcw2021.219，PMCID PMC8545604。題錄核對無誤。
- 「household had the highest number of outbreaks (4,140) and deaths (128)」「households had the most deaths, accounting for 89.5% of all deaths (Table 1); poisonous mushrooms (79 deaths), aconite (10 deaths), bongkrek acid (11 deaths), and methanol (8 deaths) were the most common causes」。
- 不用的原因：家庭裡的起數和死亡主要來自毒蘑菇、烏頭、米酵菌酸和甲醇，和剩菜存放無關。把「家庭佔 58.5%」放進本條，會讓讀者以為這些都是剩菜惹的。
- 順帶發現：這篇正文寫家庭裡米酵菌酸死亡 11 人、毒蘑菇 79 人、甲醇 8 人，第 48 條收益欄寫的是全年 12 人、80 人、14 人。兩組數口徑不同（家庭對全部場所），本輪沒有去核第 48 條，留給主任務判斷要不要看。

## 證據等級和收益量級

- 證據等級 B：時間和溫度是官方指引，沒有分組試驗。有全國監測資料給出「存放不當」的起數，但算不出照做能少多少，所以不到 A。
- 收益量級「小」，口徑死亡率：11 年 419 起裡死亡 5 人，病死率 0.06%，多數後果是嘔吐、腹瀉和住院，屬於替代終點。讀者 issue 的說法沒有照著往高裡標。
- 成本標籤：錢=0，時間=少，毅力=些（要改「放涼再進冰箱」「檯面上解凍」兩個習慣）。沒加人群標籤。

## 其他

- 節首導覽掛在「孩子、老人和野外的意外」那一塊末尾，緊跟第 48 條木耳，短名「飯菜兩小時內放進冰箱」。
- 孕婦和李斯特菌沒寫，也沒寫指向第 27 節的引用，等主任務補。
- 自檢：`node tools/check-plain.mjs` 773 條不合格 0；`node tools/check-refs.mjs --check` 通過，引用總數 1855 → 1857，正好是新增的兩處（導覽一處、備註指第 48 條一處）。
