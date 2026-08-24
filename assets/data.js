// 內容資料來源：臺南孔廟官網（tn-confucius.org.tw）建築導覽／孔廟故事／參觀資訊、
// 國家文化資產網、台南旅遊網（twtainan.net）。抽籤／解籤文字為本站原創祝福語，
// 非官方籤詩，僅供互動體驗使用。
//
// 文案語氣：全站採第二人稱、引導式的導覽口吻——像有人站在你身邊，一邊走一邊指給你看，
// 而不是條列式的百科資料。歷史事實（年代／皇帝／經典出處）維持原樣，只調整敘述方式。

// ---------------- 建築特色：跟著問句一路走進孔廟 ----------------
// 圖片皆取自 Wikimedia Commons 公開授權圖庫的孔廟現場實拍照（非示意圖），
// 已在 credit 註明攝影者、授權條款、原始檔案連結。
const ARCHITECTURE = [
  {
    id: "wall",
    title: "紅牆宮牆",
    subtitle: "你有沒有發現，這片牆特別紅？",
    text: "孔子是周朝人，周代崇尚赤色，冠服宮室皆以紅色為貴，孔廟的圍牆因此沿用這個顏色。這道高牆還有個名字，叫「宮牆」——出自《論語》，子貢曾自謙，自己的學問只有肩膀高的牆，孔子的牆卻高達數仞（一仞七尺）。後人便用「萬仞宮牆」形容孔子學問之高，這句話，也就成了孔廟圍牆的定制。",
    detail:
      "孔子是周朝人，周代崇尚赤色，冠服宮室皆以紅色為貴，孔廟的圍牆因此沿用這個顏色，是全園區最鮮明的印象。這道高牆還有個名字，叫「宮牆」——出自《論語．子張》，子貢曾自謙，自己的學問只有肩膀高的牆，一眼就能看穿；孔子的牆卻高達數仞（一仞約七尺），一般人根本看不到牆內宗廟的壯麗與百官的富有。後人便用「萬仞宮牆」形容孔子學問之高不可測，這句話也就成了歷代孔廟圍牆的定制——只要看到成片的紅牆，就知道自己正走在儒家聖域的邊界上。",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/%E5%AD%94%E5%AD%90%E5%BB%9F%E7%B4%85%E5%A2%BB.jpg?width=900",
    imageAlt: "台南孔廟紅牆",
    credit: "曾寶儀",
    license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:孔子廟紅墻.jpg",
  },
  {
    id: "panyi",
    title: "泮宮石坊",
    subtitle: "在你踏進廟埕之前，還有一道更早的門",
    text: "「泮宮」二字代表學府所在，古時考取生員、正式入學稱為「入泮」。這座石坊原本立在孔廟最外圍，日治時期因闢建南門路而被往東移，如今隔著馬路，與「全臺首學」大成坊遙遙相望——是全臺灣僅存的一座泮宮石坊。",
    detail:
      "「泮宮」二字代表學府所在，古時考取生員、正式入學稱為「入泮」「游泮」。這座石坊原本立在孔廟最外圍，是進入整個文教區的第一道門檻；日治時期因闢建南門路，才被往東移到現在的位置，隔著馬路和「全臺首學」大成坊遙遙相望。它是全臺灣僅存的一座泮宮石坊，見證了清代府城「先有孔廟、後有城市」的文教發展軌跡。",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/%E5%8F%B0%E5%8D%97%E5%AD%94%E5%BB%9F%E6%B3%AE%E5%AE%AE.jpg?width=900",
    imageAlt: "台南孔廟泮宮石坊",
    credit: "臺南以成書院（1933年舊照）",
    license: "公有領域（日本1899年著作權法，1958年前出版）",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:台南孔廟泮宮.jpg",
  },
  {
    id: "dachengfang",
    title: "全臺首學．大成坊",
    subtitle: "抬頭看看坊上那四個金字",
    text: "「大成」取自孔子「大成至聖先師」的封號。坊側還嵌著一塊「下馬碑」，提醒著每一位經過的人：從前不管官階多高，走到這裡都得下馬步行，這是對聖廟最基本的敬意。",
    detail:
      "「大成」取自孔子「大成至聖先師」的封號，也呼應《孟子》讚譽孔子「集大成」的評價。坊為門樓形式，十字形承重牆增加穩定效果，牆頂前後左右飛起六個燕尾脊；坊上高懸「全臺首學」四個金字，正是清領初期臺南孔廟做為全臺唯一官方學府的最佳寫照。坊側還嵌著一塊「下馬碑」，提醒每一位經過的人：不管官階多高，走到這裡都得下馬步行，這是對聖廟最基本的敬意。",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/%E5%8F%B0%E5%8D%97%E5%AD%94%E5%BB%9F%E3%80%8C%E5%85%A8%E8%87%BA%E9%A6%96%E5%AD%B8%E3%80%8D.jpg?width=900",
    imageAlt: "台南孔廟「全臺首學」大成坊",
    credit: "Ynto5304",
    license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:台南孔廟「全臺首學」.jpg",
  },
  {
    id: "dachengmen",
    title: "大成門",
    subtitle: "你會不會覺得，這裡少了點什麼？",
    text: "走近大成門，你可能會發現一件怪事——兩側柱子上竟然沒有對聯。這是刻意的安排，為的是避免「孔夫子面前賣文章」之譏。不妨數數看每扇門板上的門釘，一共一百零八顆：「九」是陽數之極，取其倍數象徵聖廟威儀，是只有帝王等級才配享的規制。",
    detail:
      "大成門是孔廟建築組群中最華麗的一座門，兩側柱子卻刻意不書寫對聯——為的是避免「孔夫子面前賣文章」之譏，展現讀書人謙遜自持的分寸。每一扇門板上都飾有一百零八顆門釘：「九」是陽數之極，取其倍數象徵聖廟的威儀，是只有帝王等級才配享有的規制。走進這道門，就等於正式踏入了祭祀至聖先師的核心空間。",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Confucius_Temple_Tainan_-_Da_Cheng_Gate_%E8%87%BA%E5%8D%97%E5%AD%94%E5%BB%9F%E5%A4%A7%E6%88%90%E9%96%80_%282026%29_-_IMG_01.jpg?width=900",
    imageAlt: "台南孔廟大成門",
    credit: "Laxthree",
    license: "CC BY-SA 4.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Confucius_Temple_Tainan_-_Da_Cheng_Gate_臺南孔廟大成門_(2026)_-_IMG_01.jpg",
  },
  {
    id: "dachengdian",
    title: "大成殿",
    subtitle: "整座孔廟最核心的地方，你到了",
    text: "殿前的露臺，是祭孔大典六佾舞的舞台；臺基四角，藏著形似龍頭的石刻「散水螭首」，兼作排水口，也悄悄呼應「獨佔鰲頭」的祈願。再抬頭看看正脊兩端立著的「藏經筒」，象徵孔子德配天地、道貫古今——這裡，正是等一下要找八方御匾的地方。",
    detail:
      "大成殿是整座孔廟的核心，殿前的露臺是祭孔大典六佾舞的舞台，臺基四角藏著形似龍頭的石刻「散水螭首」，兼作排水口，也悄悄呼應「獨佔鰲頭」的祈願。殿內供奉至聖先師孔子牌位，兩側東西廡奉祀七十二弟子及歷代先儒先賢神位；正脊兩端立著象徵孔子德配天地、道貫古今的「藏經筒」，重簷四角懸掛的八個銅鐸，寓意上天以孔子為木鐸，警醒世人。大成殿內懸掛的清代八方御匾，也是整座孔廟最重要的文化資產。",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Confucius_Temple_Tainan_-_Ta_Cheng_Hall_%E8%87%BA%E5%8D%97%E5%AD%94%E5%BB%9F%E5%A4%A7%E6%88%90%E6%AE%BF_%282026%29_-_img_06.jpg?width=900",
    imageAlt: "台南孔廟大成殿",
    credit: "Chainwit.",
    license: "CC BY 4.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Confucius_Temple_Tainan_-_Ta_Cheng_Hall_臺南孔廟大成殿_(2026)_-_img_06.jpg",
  },
  {
    id: "mingluntang",
    title: "明倫堂",
    subtitle: "轉個方向，你現在走進的是「左學」",
    text: "這裡是清代臺灣府學所在。試著想像三百多年前，生員就是從你腳下這道門走進去，接受教授督導、議事策論。三川門的橫額分別題著「入德之門」「聖域」「賢關」，每天低頭進出，品德的提醒，就這樣悄悄刻進日常裡。",
    detail:
      "「左學右廟」格局中，明倫堂即是「左學」，為清代臺灣府學所在，入學生員在此接受教授督導、議事策論，是府城正式的官辦教育場所。明倫堂三川門橫額分別題著「入德之門」「聖域」「賢關」，生員每天低頭進出，品德的提醒也就這樣悄悄刻進日常裡。今日明倫堂仍不定期舉辦讀經、書法等文教活動，延續三百多年來作育英才的角色。",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/%E5%8F%B0%E5%8D%97%E5%AD%94%E5%BB%9F%E6%98%8E%E5%80%AB%E5%A0%82%E5%A4%96.jpg?width=900",
    imageAlt: "台南孔廟明倫堂外觀",
    credit: "Orean190",
    license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:台南孔廟明倫堂外.jpg",
  },
  {
    id: "wenchang",
    title: "文昌閣",
    subtitle: "全孔廟唯一一座樓塔，你看到了嗎？",
    text: "文昌閣又叫「魁星樓」，位於明倫堂左後方。清代的讀書人在科舉放榜前，總會特地繞來這裡，向主掌文運的魁星與文昌帝君，求一個好成績。",
    detail:
      "文昌閣又叫「魁星樓」，位於明倫堂左後方，是孔廟建築組群中唯一的樓塔狀建築，共三層樓。清代的讀書人在科舉放榜前，總會特地繞來這裡，向主掌文運的魁星與文昌帝君祈求好成績；直到今天，文昌閣仍是臺南學子考前祈福、繫上准考證影本祈願的熱門地點。",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/%E5%8F%B0%E5%8D%97%E5%AD%94%E5%BB%9F%E6%96%87%E6%98%8C%E9%96%A3.jpg?width=900",
    imageAlt: "台南孔廟文昌閣",
    credit: "Orean190",
    license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:台南孔廟文昌閣.jpg",
  },
  {
    id: "roof",
    title: "燕尾脊與花格窗",
    subtitle: "最後，把視線放遠一點",
    text: "看看整片屋頂——硬山式的燕尾脊高高翹起，牆面上還點綴著細緻的花格窗。這些窗花是老師傅們一格一格拼出來的幾何圖案，既通風採光，也是他們留給後人的工藝簽名——就像你剛剛在入口動畫裡看過的那樣。",
    detail:
      "孔廟各殿堂多採硬山式屋頂、燕尾脊收頭，屋脊兩端裝飾著「鴟吻」（又稱螭吻）——傳說中喜歡吞火、能鎮宅避災的神獸造型，安置在屋脊兩端，象徵鎮火防災。牆面則點綴著細緻的花格窗，以磚瓦或木格拼成幾何圖案，既通風採光，也是傳統匠師展現工藝美感之處——這正是本站入口動畫「窗格一片片拼起」的靈感來源。",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/KongmiaochishouTainanTaiwan.jpg?width=900",
    imageAlt: "台南孔廟屋脊上的鴟吻（螭吻）石雕",
    credit: "Peter Bronski",
    license: "公有領域（Public Domain）",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:KongmiaochishouTainanTaiwan.jpg",
  },
];

// ---------------- 孔廟的故事：大成殿八方御匾 ----------------
const PLAQUES = [
  {
    phrase: "萬世師表",
    bestower: "康熙皇帝",
    era: "康熙 23 年（1684）",
    story: "康熙皇帝南巡至山東曲阜孔廟祭孔，聽監生孔尚任講畢《大學》首章後御筆賜書，並頒行各地文廟摹製懸掛。",
    meaning: "意為孔子是千秋萬世的老師與表率。是全臺孔廟中最早、也是知名度最高的一方御匾。",
  },
  {
    phrase: "生民未有",
    bestower: "雍正皇帝",
    era: "雍正 3 年（1725）",
    story: "語出《孟子．公孫丑》：「自生民以來，未有夫子也。」",
    meaning: "意為自有生民以來，世間就只出現過孔子這一位至高無上的聖賢。",
  },
  {
    phrase: "與天地參",
    bestower: "乾隆皇帝",
    era: "乾隆 2 年（1737）",
    story: "朱熹注：「與天地參，謂與天地並立而為三也。」",
    meaning: "讚譽孔子的德行足以與天、地並列，同為化育萬物的三大根本。",
  },
  {
    phrase: "聖集大成",
    bestower: "嘉慶皇帝",
    era: "嘉慶 4 年（1799）",
    story: "語出《孟子．萬章下》：「孔子之謂集大成也者，金聲而玉振之也。」",
    meaning: "寓意孔子集古代諸聖賢學問之大成於一身，如樂章金聲玉振、始終條理分明。",
  },
  {
    phrase: "聖協時中",
    bestower: "道光皇帝",
    era: "道光元年（1821）",
    story: "語出《中庸》：「君子之中庸也，君子而時中。」朱熹注：「以其有君子之德，而又能隨時以處中也。」",
    meaning: "意為孔子的思想教育能順應時代潮流、合乎客觀實際，恰如其分。",
  },
  {
    phrase: "德齊幬載",
    bestower: "咸豐皇帝",
    era: "咸豐元年（1851）",
    story: "語出《中庸》：「仲尼祖述堯舜，憲章文武……譬如天地無不持載，無不覆幬。」「幬」讀作「道」，即覆蓋之意。",
    meaning: "言孔子的學術思想與個人品德，如天地般經天緯地、無所不包。",
  },
  {
    phrase: "聖神天縱",
    bestower: "同治皇帝",
    era: "同治元年（1862）",
    story: "語出《論語．子罕》：「固天縱之將聖，又多能也。」",
    meaning: "意為孔子是順應天時應運而生的聖人，頌揚其品德學識為上天所賦予。",
  },
  {
    phrase: "斯文在茲",
    bestower: "光緒皇帝",
    era: "光緒元年（1875）",
    story: "語出《論語．子罕》：「文王既沒，文不在茲乎！」朱熹注：「道之顯者謂之文，蓋禮樂制度之謂。」",
    meaning: "意指世間所有文明教化，皆源自孔子——這是清代帝王賜給臺南孔廟的最後一方御匾。",
  },
];

const PLAQUE_EPILOGUE =
  "如果你在大成殿裡多看兩眼，會發現御匾的故事其實還沒結束——清朝滅亡後，歷任元首仍持續獻匾臺南孔廟，如蔣中正總統獻「有教無類」、蔡英文總統獻「德侔道昌」、賴清德總統獻「川流敦化」等，讓這裡橫跨清代到當代的匾額，成為全球僅見、跨越三百餘年不曾間斷的珍貴文化資產系列。";

// ---------------- 在地連結與歷史脈絡 ----------------
const LOCAL_CONTEXT = [
  {
    title: "1665．你腳下這塊土地，曾經是一片空地",
    text: "明永曆 19 年（1665），鄭經執政、諮議參軍陳永華輔佐，力主「建聖廟、設學校，以收人材」。鄭經應允，就在承天府治（今臺南）建立全臺第一座孔子廟——你現在走的每一步，都是三百多年前為了「興國學、行教化」而鋪下的路。",
  },
  {
    title: "如果你是清領初期的臺南人",
    text: "想讀書、想考功名，這裡就是你唯一能去的地方——清領初期，臺南孔廟是全臺童生唯一的入學之所，府學就設在廟內明倫堂，「全臺首學」因此得名。這不只是一座廟，更是臺灣教育史的實體起點。",
  },
  {
    title: "隔著一池水，還有個百年鄰居",
    text: "孔廟旁的忠義國小與孔廟僅一池之隔，校舍入口設計了一個樹木意象的頂蓋「四方之樹」，融入百年老樹意象，呼應「百年樹人」的教育寓意——古老學府與現代小學，在同一塊土地上，延續著同一份「育人」的心意。",
  },
  {
    title: "海濱鄒魯，說的就是這裡",
    text: "三百多年來，孔廟巍巍聖殿、峨峨黌宮，見證儒家文化在臺灣落地生根，府城也因此贏得「海濱鄒魯」的美譽——意指這座濱海城市文風鼎盛，可與孔孟故鄉鄒、魯二地相提並論。",
  },
];

// ---------------- 建議參觀路線 ----------------
const ROUTE_STEPS = [
  { step: 1, title: "泮宮石坊", note: "從南門路上的石坊開始，感受一下「入泮」求學的第一道門檻。" },
  { step: 2, title: "全臺首學．大成坊與下馬碑", note: "抬頭看「全臺首學」金字匾，體會文武官員至此下馬的敬意。" },
  { step: 3, title: "萬仞宮牆", note: "沿紅牆而行，古樹參天，正是「杏壇夏蔭」之美——放慢腳步，別急著往前。" },
  { step: 4, title: "東大成坊．文物陳列室", note: "順道看看文物展示，了解孔廟修復與典藏的故事。" },
  { step: 5, title: "大成門", note: "還記得嗎？留意一百零八顆門釘，還有那不書對聯的細節。" },
  { step: 6, title: "大成殿（御匾核心）", note: "全程重點：抬頭尋找八方清代御匾，對照本站「孔廟的故事」一一認出它們。" },
  { step: 7, title: "東廡．西廡", note: "禮器庫、樂器庫所在，遙想春秋祭孔的莊嚴場面。" },
  { step: 8, title: "崇聖祠", note: "大成殿之後，奉祀孔子先祖，是整條軸線最深處的空間。" },
  { step: 9, title: "明倫堂．入德之門", note: "轉往「左學」，感受清代府學生員讀書議事的氛圍。" },
  { step: 10, title: "文昌閣（魁星樓）", note: "壓軸登場的樓塔建築，適合為這趟巡禮拍下代表照。" },
];

// ---------------- 周邊景點指南 ----------------
// 圖片皆取自 Wikimedia Commons 公開授權圖庫的現場實拍照，
// 已在 credit 註明攝影者、授權條款、原始檔案連結。
const NEARBY = [
  {
    title: "府中街",
    walk: "孔廟側門即達",
    text: "從孔廟側門走出去就是府中街，選物小店、文創與在地小吃聚集在此，是孔廟文化園區最有生活感的一條街。",
    detail:
      "從孔廟側門走出去就是府中街，這條老街緊鄰泮宮石坊，早年因鄰近孔廟文教區而發展成商業街道，現在聚集選物小店、文創與在地小吃，紅磚老屋與新開的個性小店交錯，是孔廟文化園區裡最有生活感、也最適合散步慢逛的一條街。",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/%E5%8F%B0%E5%8D%97%E5%AD%94%E5%BB%9F%E8%80%81%E8%A1%97.jpg?width=900",
    imageAlt: "府中街（台南孔廟老街）街景",
    credit: "E501135",
    license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:台南孔廟老街.jpg",
  },
  {
    title: "臺灣文學館",
    walk: "步行約 2 分鐘",
    text: "日治時期臺南州廳整修而成，館內典藏臺灣文學史料，與孔廟同屬府城古蹟密度最高的一角。",
    detail:
      "前身是日治時期的臺南州廳，紅磚洋樓建築本身就是國定古蹟。2003 年正式成立為國立臺灣文學館，是全臺第一座國家級的文學博物館，典藏、研究並展示臺灣文學史料，館內常設展介紹從古典漢詩到當代文學的完整脈絡，是認識臺灣文學不可錯過的一站。",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/National_Museum_of_Taiwan_Literature_by_JohnZhang.jpg?width=900",
    imageAlt: "國立臺灣文學館（原臺南州廳）建築外觀",
    credit: "JohnZhang0519",
    license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:National_Museum_of_Taiwan_Literature_by_JohnZhang.jpg",
  },
  {
    title: "湯德章紀念公園",
    walk: "步行約 5 分鐘",
    text: "圓環型的城市公園，周邊環繞多座古蹟，是府城觀光精華地帶的地標中心。",
    detail:
      "又稱「民生綠園」，是府城七條道路交會的圓環中心，也是臺灣公路原點「台20線」的起點。這裡紀念的湯德章律師，是二二八事件中犧牲的臺南在地菁英，公園周邊環繞著臺灣文學館、林百貨等多座古蹟，是府城古蹟密度最高的一個街廓中心。",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/2022%E5%B9%B4%E7%9A%84%E6%B9%AF%E5%BE%B7%E7%AB%A0%E7%B4%80%E5%BF%B5%E5%85%AC%E5%9C%92.jpg?width=900",
    imageAlt: "湯德章紀念公園（民生綠園）",
    credit: "Mrmarkertw",
    license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:2022年的湯德章紀念公園.jpg",
  },
  {
    title: "赤崁樓",
    walk: "步行約 10 分鐘",
    text: "荷治時期普羅民遮城遺址，是府城最具代表性的古蹟之一，適合安排在孔廟之後的下一站。",
    detail:
      "前身是荷蘭時期興建的「普羅民遮城」（Fort Provintia），鄭成功登陸後曾在此辦公，清代改建為中式樓閣，現在所見的文昌閣、海神廟等建築是清末以後陸續增建的結果。館內保存多座清代石碑與贔屭（石龜）馱碑，是府城歷史最悠久的地標之一，距離孔廟步行約十分鐘。",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/%E8%B5%A4%E5%B4%81%E6%A8%93.jpg?width=900",
    imageAlt: "赤崁樓（普羅民遮城遺址）",
    credit: "Derrickhsux",
    license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:赤崁樓.jpg",
  },
  {
    title: "大天后宮．祀典武廟",
    walk: "與赤崁樓相鄰",
    text: "全臺歷史最悠久的媽祖廟與關帝廟之一，紅牆巷弄的氛圍與孔廟相呼應，可以安排在同一條散步路線裡。",
    detail:
      "祀典武廟主祀關聖帝君，與一旁的大天后宮（主祀媽祖）合稱府城信仰重鎮，兩者相鄰而立，紅牆巷弄氛圍與孔廟遙相呼應。祀典武廟的山牆是府城著名的「馬背山牆」代表作，也是少數保有官方祭典規格的關帝廟；大天后宮則是全臺歷史最悠久的媽祖廟之一，兩座廟宇都是國定古蹟，適合安排在同一條散步路線裡一併參觀。",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/%E5%8F%B0%E5%8D%97%E6%AD%A6%E5%BB%9F.jpg?width=900",
    imageAlt: "祀典武廟外觀（與大天后宮相鄰）",
    credit: "Winertai",
    license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:台南武廟.jpg",
  },
  {
    title: "忠義國小",
    walk: "與孔廟一池之隔",
    text: "校舍前的「四方之樹」意象頂蓋，呼應孔廟「百年樹人」的教育精神，隔著水池與孔廟靜靜相望。",
    detail:
      "與孔廟僅一池之隔，前身歷史可追溯至日治時期，戰後改制為忠義國小。校舍前方入口設計了一個樹木意象的頂蓋，稱為「四方之樹」，融入百年老樹意象，呼應「百年樹人」的教育寓意——古老學府與現代小學，就這樣隔著一池水，延續著同一份「育人」的心意。",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Tainan_Municipal_Jhongyi_Elementary_School_01.jpg?width=900",
    imageAlt: "台南市忠義國小校舍",
    credit: "Tze Chiang Hao",
    license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Tainan_Municipal_Jhongyi_Elementary_School_01.jpg",
  },
];

// ---------------- 園區植物小介紹（點進去看詳細內容＋真實物種照片） ----------------
// 圖片皆取自 Wikimedia Commons 公開授權圖庫，為該樹種的代表性照片（示意），
// 並非孔廟現場實際拍攝，已在 credit 註明出處與授權條款、附原始檔案連結。
const PLANTS = [
  {
    title: "榕樹",
    latin: "Ficus microcarpa",
    text: "抬頭看看中庭這棵老榕樹——盤根錯節、樹蔭濃密，「杏壇夏蔭」的美名正是由它而來。",
    detail:
      "學名 Ficus microcarpa，桑科榕屬常綠大喬木，臺灣低海拔平地最常見的老樹樹種之一，正式俗名「正榕」。榕樹會從枝幹垂下細長的氣生根，落地後逐漸增粗成為支柱根，樹冠因此能不斷向外擴張、越長越開闊，是廟埕、學校最常見的遮蔭大樹。孔廟中庭這棵老榕樹盤根錯節，樹蔭濃密，「杏壇夏蔭」的美名正是由它而來，也是遊客歇腳乘涼的最佳去處。",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Starr_080608-7463_Ficus_microcarpa.jpg?width=900",
    imageAlt: "榕樹（Ficus microcarpa）樹冠與氣生根特寫",
    credit: "Forest & Kim Starr",
    license: "CC BY 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Starr_080608-7463_Ficus_microcarpa.jpg",
  },
  {
    title: "樟樹",
    latin: "Cinnamomum camphora",
    text: "孔廟門前曾栽有樟樹，象徵讀書人的「操守」，原樹枯死後依傳統重新復植。",
    detail:
      "學名 Cinnamomum camphora，樟科常綠喬木，原生於臺灣與中國南方，樹幹粗壯、樹皮縱向深裂，枝葉搓揉後會散發濃郁樟腦香氣。日治時期，樟腦曾是臺灣重要的出口經濟作物，樟樹也因此與這塊土地的近代史緊緊相繫。孔廟門前復植的樟樹，取其木質堅韌、歷久不朽的特質，象徵讀書人堅守原則、不輕易動搖的「操守」。",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Camphor_tree.jpg?width=900",
    imageAlt: "樟樹（Cinnamomum camphora）樹形全貌",
    credit: "Santha Kumar.G",
    license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Camphor_tree.jpg",
  },
  {
    title: "楷樹",
    latin: "Pistacia chinensis（黃連木）",
    text: "相傳楷樹是孔子弟子子貢在墓旁所植的樹種，象徵讀書人端正的「品德」。",
    detail:
      "正式名稱「黃連木」，學名 Pistacia chinensis，漆樹科落葉喬木，枝幹挺直、木質堅韌、紋理細膩。相傳孔子過世後，弟子子貢在墓旁守喪六年，並親手栽種了這種樹——「楷木」因此與另一種樹「模」合稱，成了「楷模」一詞的由來。孔廟門前復植楷樹，正是取其枝幹不彎曲的特質，呼應儒家對讀書人品格端正、不阿諛曲折的重視。",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Pistacia_chinensis_(Anacardiaceae)_(tree).JPG?width=900",
    imageAlt: "楷樹／黃連木（Pistacia chinensis）樹形全貌",
    credit: "Magnus Manske",
    license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Pistacia_chinensis_(Anacardiaceae)_(tree).JPG",
  },
  {
    title: "楓樹",
    latin: "Liquidambar formosana（楓香）",
    text: "楓樹象徵讀書人的「氣節」，與樟樹、楷樹並列孔廟門前三樹。",
    detail:
      "一般所稱的「楓樹」，多指「楓香」，學名 Liquidambar formosana，金縷梅科落葉喬木，是臺灣平地與低海拔山區常見的原生樹種。楓香的葉片呈掌狀三裂，入秋轉冬時葉色由綠轉黃、轉紅，是臺灣少數會有明顯秋色的原生樹種之一。孔廟門前的楓樹，象徵讀書人歷經寒暑仍堅持到底的「氣節」，與樟樹的操守、楷樹的品德並列，合稱孔廟門前三樹的精神象徵。",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Liquidambar_formosana_01.jpg?width=900",
    imageAlt: "楓香（Liquidambar formosana）掌狀三裂葉特寫",
    credit: "Yoiyoi_kancho",
    license: "公有領域（Public Domain）",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Liquidambar_formosana_01.jpg",
  },
];

// ---------------- 抽籤解籤：籤詩池（本站原創祝福語） ----------------
const FORTUNE_POOL = [
  { title: "杏壇夏蔭", stars: 5, text: "今天的你，就像大成殿前那片老樹濃蔭，安穩地庇護著身邊的人，也被人放心依靠。" },
  { title: "萬仞宮牆", stars: 4, text: "眼前看似有一道高牆，但只要願意向前一步，牆內的風景會比你想像的開闊。" },
  { title: "入德之門", stars: 4, text: "適合靜下心來學一件新事，今天累積的一小步，會是往後的一大步。" },
  { title: "杏壇秋實", stars: 5, text: "先前的努力今天會被看見，該來的成果正沿著熟悉的路走向你。" },
  { title: "全臺首學", stars: 5, text: "今天適合把心裡想很久的計畫踏出第一步，起步的這一刻，本身就值得紀念。" },
  { title: "文昌高照", stars: 5, text: "腦筋特別清楚的一天，考試、報告、談判都適合排在今天。" },
  { title: "散水螭首", stars: 4, text: "遇到卡關的小麻煩，順著它原本的方向走，很快就能找到出口。" },
  { title: "泮宮入學", stars: 4, text: "今天適合請教前輩，你問的問題，會有人願意好好回答。" },
  { title: "德齊幬載", stars: 4, text: "你的用心今天會被人看在眼裡，值得信賴的人，值得被信賴。" },
  { title: "斯文在茲", stars: 3, text: "今天不用急著表現，安靜把手上的事做好，本身就是一種說服力。" },
  { title: "海濱鄒魯", stars: 4, text: "適合走遠一點的路，今天在外面遇到的人事物，會帶給你意外的收穫。" },
  { title: "禮門義路", stars: 3, text: "今天做選擇時，多想一步「這樣做對嗎」，比想「這樣做快嗎」更重要。" },
];

function drawFortune() {
  return FORTUNE_POOL[Math.floor(Math.random() * FORTUNE_POOL.length)];
}

function todayStr() {
  const d = new Date();
  const p = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}
