#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/scheduleData.js');
let src = fs.readFileSync(filePath, 'utf8');

// Map ONLY the remaining 2-arg t(en, zh) strings to Japanese.
// Keep en + zh untouched; only add ja as the 3rd argument.
const jaByEn = {
  "Private Van to Tokyo Airbnb": "東京Airbnbへプライベートバン",
  "Depart from Airbnb (1-chōme-9-2 Yotsugi, Katsushika City - 5 mins walk to nearest station)": "Airbnbから出発（葛飾区四つ木1-9-2 - 最寄り駅まで徒歩5分）",
  "Tsukiji Outer Market": "築地場外市場",
  "Pain Maison (塩パン屋)": "Pain Maison（塩パン屋）",
  "Travel to Ginza": "銀座へ移動",
  "Ginza Kanimitsu (Lunch)": "銀座 かにみつ（ランチ）",
  "Ginza Shopping": "銀座ショッピング",
  "Nakamura Tokichi (Matcha Parfait)": "中村藤吉（抹茶パフェ）",
  "Travel to Tokyo Station": "東京駅へ移動",
  "Tokyo Station (Explore & Buy Souvenirs)": "東京駅（探索＆お土産購入）",
  "Travel to Asakusa for Dinner": "浅草へ夕食のため移動",
  "Asakusa - Monja Yaki & Okonomiyaki": "浅草 - もんじゃ焼き＆お好み焼き",
  "(Dinner)": "（ディナー）",
  "Return to Airbnb (1-chōme-9-2 Yotsugi, Katsushika City)": "Airbnbに戻る（葛飾区四つ木1-9-2）",
  "Asakusa (Senso-ji Temple)": "浅草（浅草寺）",
  "Ichiran Ramen (Lunch)": "一蘭ラーメン（ランチ）",
  "Travel to Saitama for Graduation": "卒業式のため埼玉へ移動",
  "Nippon Institute of Technology (Graduation Ceremony)": "日本工業大学（卒業式）",
  "Travel to Shibuya": "渋谷へ移動",
  "Shibuya - Crossing & Hachiko Statue": "渋谷 - スクランブル交差点＆ハチ公像",
  "Tsukada Shabu Shabu (Graduation Celebration Dinner)": "塚田しゃぶしゃぶ（卒業祝賀晩餐）",
  "Afuri Yurakucho (Lunch)": "阿夫利 有楽町（ランチ）",
  "Shinkansen to Shin-Osaka": "新幹線で新大阪へ",
  "Check-in Osaka Airbnb (1-chōme-12-11 Momodani, Ikuno Ward)": "大阪Airbnbチェックイン（生野区桃谷1-12-11）",
  "Group 3 lands at KIX": "第3グループ関空着陸",
  "Private Van to Osaka Airbnb (1-chōme-12-11 Momodani, Ikuno Ward)": "大阪Airbnbへプライベートバン（生野区桃谷1-12-11）",
  "Reunion Dinner (Dotonbori)": "再会ディナー（道頓堀）",
  "Depart from Airbnb (1-chōme-12-11 Momodani, Ikuno Ward)": "Airbnbから出発（生野区桃谷1-12-11）",
  "Meriken Park & Harborland": "メリケンパーク＆ハーバーランド",
  "Kobe Steak Nick (Lunch)": "Kobe Steak Nick（ランチ）",
  "Rokkosan Pasture (Sheep)": "六甲山牧場（羊）",
  "Gashoken (Dinner)": "賀正軒（ディナー）",
  "Travel to Kobe Port Tower": "神戸ポートタワーへ移動",
  "Kobe Port Tower (Night View)": "神戸ポートタワー（夜景）",
  "Return to Airbnb (1-chōme-12-11 Momodani, Ikuno Ward)": "Airbnbに戻る（生野区桃谷1-12-11）",
  "Depart from Airbnb (1-chōme-12-11 Momodani, Ikuno Ward) (Early!)": "Airbnbから出発（生野区桃谷1-12-11）（早起き！）",
  "USJ All Day": "USJ終日",
  "Entry": "入場券",
  "Express 7": "エクスプレス7",
  "Return to Airbnb (1-chōme-12-11 Momodani, Ikuno Ward) / Dinner": "Airbnbに戻る（生野区桃谷1-12-11）/ 夕食",
  "Umeda Sky Building": "梅田スカイビル",
  "Travel to Osaka Aquarium Kaiyukan": "大阪海遊館へ移動",
  "Osaka Aquarium Kaiyukan": "大阪海遊館",
  "Travel to Shinsaibashi": "心斎橋へ移動",
  "Shinsaibashi": "心斎橋",
  "Travel to Dotonbori": "道頓堀へ移動",
  "Dotonbori (Walk Around)": "道頓堀（散策）",
  "Dinner in Dotonbori": "道頓堀で夕食",
  "Fushimi Inari Taisha": "伏見稲荷大社",
  "Kiyomizu-dera Temple": "清水寺",
  "Ninenzaka & Sannenzaka": "二年坂・三年坂",
  "Yasaka Shrine": "八坂神社",
  "Gion District": "祇園地区",
  "Kamogawa River": "鴨川",
  "(Sunset)": "（夕日）",
  "Nakamura Tokichi Honten": "中村藤吉本店",
  "Ujiagami Shrine & River": "宇治上神社・宇治川",
  "Transfer to Nara": "奈良へ移動",
  "Nara Park": "奈良公園",
  "Todaiji Temple": "東大寺",
  "Kasuga Taisha Shrine": "春日大社",
  "Mt. Wakakusa": "若草山",
  "(Night View)": "（夜景）",
  "Katsuoji Temple (勝尾寺)": "勝尾寺",
  "Depart from Katsuoji": "勝尾寺から出発",
  "Osaka Castle": "大阪城",
  "Kuromon Ichiba Market (Lunch)": "黒門市場（ランチ）",
  "Namba Yasaka Shrine": "難波八阪神社",
  "Harukas Abeno": "あべのハルカス",
  "Travel to Jumbo Fishing Boat Tsurikichi Shinsekai": "ジャンボ釣船 つり吉 新世界店へ移動",
  "Jumbo Fishing Boat Tsurikichi Shinsekai (Dinner)": "ジャンボ釣船 つり吉 新世界店（ディナー）",
  "Private Van to KIX (CX Group)": "関空へプライベートバン（CXグループ）",
  "CX Check-in": "CXチェックイン",
  "Private Van to KIX (TG Group)": "関空へプライベートバン（TGグループ）",
  "TG Check-in": "TGチェックイン",
};

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

let changed = 0;
for (const [en, ja] of Object.entries(jaByEn)) {
  const re = new RegExp(`t\\('${escapeRegExp(en)}', '([^']+)'\\)`, 'g');
  const before = src;
  src = src.replace(re, (m, zh) => `t('${en}', '${zh}', '${ja}')`);
  if (src !== before) changed++;
}

fs.writeFileSync(filePath, src, 'utf8');
console.log(`Updated ${changed} key(s).`);

// Sanity: how many 2-arg t() remain?
const remaining = [...src.matchAll(/t\('([^']+)', '([^']+)'\)/g)];
console.log('Remaining 2-arg t() calls:', remaining.length);
if (remaining.length) {
  console.log('First remaining examples (en):');
  console.log(remaining.slice(0, 15).map(r => r[1]).join('\n'));
  process.exitCode = 2;
}
