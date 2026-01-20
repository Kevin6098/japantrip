#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/restaurantsData.js');
let src = fs.readFileSync(filePath, 'utf8');

const jaById = {
  'pain-maison': '東京の人気塩パン専門店。看板の塩パン（塩パン）やメロンパンが評判で、焼きたてを楽しめます。地元客・観光客ともに人気のため、混雑時は行列になることもあります。',
  'ginza-kanimitsu': '銀座の高級カニ料理店。カニ刺しや焼きガニなど、部位ごとの味を楽しめるランチセットが揃います。素材の良さと丁寧な調理で、海鮮好きにおすすめです。',
  'nakamura-tokichi-ginza': '京都・宇治の老舗抹茶店「中村藤吉」の銀座店。宇治抹茶のパフェやスイーツ、喫茶メニューをモダンな空間で楽しめます。',
  'asakusa-monja': '浅草で味わう東京下町グルメ。鉄板で焼くもんじゃ焼きとお好み焼きが名物で、とろっとした食感が魅力。浅草エリアでも人気のローカルフードです。',
  'ichiran-ramen': '濃厚な豚骨スープで有名な一蘭。仕切り付きの個室風ブースで、自分好みに味をカスタムして集中して食べられます。細麺・チャーシュー・ねぎの定番構成が人気です。',
  'tsukada-shabu': '渋谷スクランブルスクエア12階の上質なしゃぶしゃぶ店。薄切り肉と野菜を出汁でさっとくぐらせる日本の鍋料理を楽しめます。グループでの特別な食事にもぴったりです。',
  'afuri-yurakucho': '柚子香るラーメンで有名なAFURI。有楽町では、さっぱりした塩／醤油スープに柚子のアクセントが効いた一杯が楽しめます。スタイリッシュな店内で気軽に立ち寄れます。',
  'tsurikichi-shinsekai': '新世界名物の“釣り居酒屋”。生け簀で自分で釣った魚を、刺身・焼き・揚げ・鍋など好みの調理法で提供してくれる体験型のお店です。',
  'shinsekai-kushikatsu-ittoku': '道頓堀の人気串カツ店。大阪名物の串カツを、揚げたてサクサクで楽しめます。種類も豊富で、本場の雰囲気を味わえます。',
  'naniwa-omurice': '大阪で人気のオムライス専門店。ふわとろ卵とケチャップライスの定番から、バリエーション豊富なオムライスを楽しめます。',
  'ajinoya-honten': '大阪の名店お好み焼き店。大阪風お好み焼きを中心に、鉄板で焼き上げる本場の味を提供しています。',
  'ganso-5cm-katsudon': '厚さ5cm級の極厚カツ丼が名物のとんかつ店。揚げたての分厚いカツは食べ応え抜群で、大阪らしいガッツリ系グルメを楽しめます。',
  'dotonbori-kukuru': '道頓堀で有名な「くくる」。外はふんわり、中はとろっとしたたこ焼きが名物で、食べ歩きにもぴったりです。',
  'mugen-ramen': '難波エリアの牛だしラーメン店。牛の旨味が凝縮した濃厚なスープが特徴で、ボリュームのある一杯が楽しめます。',
  'oden-no-den-maki-sennichimae': '千日前の人気おでん店。だしが染みた具材を中心に、温かいおでんを気軽に楽しめます。',
  'tsukemen-suzume': '心斎橋のつけ麺店。濃厚で風味のあるつけ汁に麺をくぐらせて食べるつけ麺が人気です。',
  'men-wa-tomoare': '道頓堀の鶏白湯ラーメン店。鶏の旨味が詰まった濃厚でクリーミーなスープが特徴です。',
  'torepichi-kuromon': '大阪の台所・黒門市場にある海鮮店。市場直送の新鮮な魚介を、刺身や海鮮料理で楽しめます。活気ある市場の雰囲気も魅力です。',
  'shinuoei-kuromon': '黒門市場の海鮮店「新魚栄」。市場の新鮮な魚介を、手頃な価格で味わえるのが魅力です。',
  'nodobotoke-kamoru': '大阪・天満の高級おまかせ店。旬の食材を使ったコースを、落ち着いた空間でゆっくり楽しめます。記念日にもおすすめです。',
  'sushi-jin-harukas': 'あべのハルカスのダイニングフロアにある寿司店。手頃な価格で本格的な寿司や和食を楽しめ、モダンな空間で食事ができます。',
  'kobe-steak-nick': '神戸牛を扱う専門店＆レストラン。美しいサシの和牛を丁寧に焼き上げ、落ち着いた店内で堪能できます。',
  'gashoken': '神戸の豚骨ラーメン店「賀正軒」。濃厚クリーミーな豚骨スープに加え、チーズ＆バジルの融合系、辛口明太子味噌、イカ墨など個性的なメニューも揃います。',
  'gion-unagi-kawato': '京都・祇園にあるうなぎ専門店。伝統的な調理法で仕上げるうなぎ料理を、花街の雰囲気の中で味わえます。',
  'kyo-kiyomizu-shigemori': '清水寺近くの清水エリアにある京料理店。京都らしい味わいと、伝統を感じる空間での食事を楽しめます。',
  'issun-boushi': '京都の和麺処。うどん・そばなどの麺料理を中心に、落ち着いた雰囲気で楽しめます。',
  'gokago-matcha': '京都の抹茶茶屋／カフェ。抹茶ドリンクや抹茶スイーツ、和の喫茶体験で京都の茶文化を感じられます。',
  'gion-gozu': '祇園の和食店。京料理を中心に、京都の文化を感じる空間で伝統的な食事体験ができます。',
  'ichiren-kyoto': '京都の麺処。新鮮な食材で作る本格的な麺料理を、和の雰囲気の中で楽しめます。',
  'salmon-noodle-kyoto': 'サーモンを使った麺料理が特徴のお店。新鮮なサーモンの旨味を活かした一杯を楽しめます。',
  'masaichi': '京都・二年坂周辺の和食店。旬の食材を使った料理で、京都らしい食文化を味わえます。',
  'nakamura-tokichi-uji': '宇治にある中村藤吉の本店。上質な宇治抹茶のパフェやスイーツ、伝統的なお茶を、創業の地で楽しめます。',
  'kamameshi-shizuka': '奈良公園近くの釜めし名店。鉄釜で炊き上げる具だくさんの釜めしが人気で、観光の合間のランチに最適です。',
  'yamatoen-honten': '奈良の老舗和食店。地元食材を使った料理と落ち着いた雰囲気で、若草山や周辺観光の後の夕食にも便利です。',
};

function escapeSingleQuotes(s) {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function findEntryStart(id) {
  const needle = `'${id}': {`;
  return src.indexOf(needle);
}

function findAboutBlock(entryStartIdx) {
  const aboutIdx = src.indexOf('\n    about:', entryStartIdx);
  if (aboutIdx === -1) return null;
  const braceStart = src.indexOf('{', aboutIdx);
  if (braceStart === -1) return null;

  let depth = 0;
  for (let i = braceStart; i < src.length; i++) {
    const ch = src[i];
    if (ch === '{') depth++;
    else if (ch === '}') {
      depth--;
      if (depth === 0) return { start: braceStart, end: i + 1 };
    }
  }
  return null;
}

let updated = 0;
for (const [id, ja] of Object.entries(jaById)) {
  const entryStart = findEntryStart(id);
  if (entryStart === -1) {
    console.warn(`Entry not found: ${id}`);
    continue;
  }

  const about = findAboutBlock(entryStart);
  if (!about) {
    console.warn(`About block not found: ${id}`);
    continue;
  }

  const aboutText = src.slice(about.start, about.end);
  if (/\bja\s*:/.test(aboutText)) continue;

  // Ensure zh line ends with a comma before inserting ja.
  let newAboutText = aboutText.replace(/\n(\s*zh\s*:\s*[^\n]*?)\s*\n\s*\}/m, (m, zhLine) => {
    const zhWithComma = zhLine.trimEnd().endsWith(',') ? zhLine : `${zhLine},`;
    return `\n${zhWithComma}\n      ja: '${escapeSingleQuotes(ja)}'\n    }`;
  });

  if (newAboutText === aboutText) {
    console.warn(`Could not inject ja into about for: ${id}`);
    continue;
  }

  src = src.slice(0, about.start) + newAboutText + src.slice(about.end);
  updated++;
}

fs.writeFileSync(filePath, src, 'utf8');
console.log(`Inserted about.ja for ${updated} restaurant(s).`);
