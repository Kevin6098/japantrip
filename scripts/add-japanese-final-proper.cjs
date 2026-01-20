#!/usr/bin/env node
/**
 * PROPER comprehensive Japanese translation adder
 * Uses proper Chinese→Japanese kanji conversion + grammar
 */

const fs = require('fs');
const path = require('path');

console.log('🇯🇵 Adding proper Japanese translations...\n');

// Proper Chinese to Japanese conversion
function translateToJapanese(en, zh) {
  // Use English as the source for clarity, but reference Chinese for kanji
  
  // Direct translations for common phrases
  const directTranslations = {
    // Times
    '6:00 AM - 5:00 PM': '午前6時 - 午後5時',
    '24 Hours': '24時間',
    'Open 24 Hours': '24時間営業',
    'Best at Night': '夜が最高',
    '24 Hours (Best in Evening)': '24時間（夕方が最高）',
    'Station: 24 Hours | Shops: 10 AM - 9 PM': '駅：24時間 | 店舗：午前10時 - 午後9時',
    '5:00 AM - 2:00 PM': '午前5時 - 午後2時',
    '9:00 AM - 5:00 PM (Castle Tower)': '午前9:00 - 午後5:00（天守閣）',
    '9:30 AM - 10:30 PM': '午前9:30 - 午後10:30',
    '10:00 AM - 8:00 PM (varies by season)': '午前10:00 - 午後8:00（季節により異なる）',
    'Varies by Season (Usually 9 AM - 8 PM)': '季節により異なる（通常午前9時 - 午後8時）',
    '9:00 AM - 9:00 PM': '午前9:00 - 午後9:00',
    'Shops: 10 AM - 9 PM': '店舗：午前10時 - 午後9時',
    '10:00 AM - 9:00 PM': '午前10:00 - 午後9:00',
    'Open Daily': '毎日営業',
    'Best: Cherry Blossom & Evening': '最適：桜の季節と夕方',
    '8:00 AM - 5:00 PM': '午前8時 - 午後5時',
    '9:00 AM - 5:00 PM (varies by season)': '午前9:00 - 午後5:00（季節により異なる）',
    'Best: Early Morning or Evening': '最適：早朝または夕方',
    '9:00 AM - 10:00 PM': '午前9時 - 午後10時',
    '9:00 AM - 6:00 PM': '午前9:00 - 午後6:00',
    '9:00 AM - 4:30 PM': '午前9:00 - 午後4:30',
    '6:00 AM - 6:00 PM': '午前6:00 - 午後6:00',
    '6:00 AM - 6:00 PM (Apr-Sep), 6:30 AM - 5:00 PM (Oct-Mar)': '午前6:00 - 午後6:00（4-9月）、午前6:30 - 午後5:00（10-3月）',
    '7:30 AM - 5:30 PM (Apr-Oct), 8:00 AM - 5:00 PM (Nov-Mar)': '午前7:30 - 午後5:30（4-10月）、午前8:00 - 午後5:00（11-3月）',
    'Hours Vary': '営業時間不定',
    '11:30 AM - 3:00 PM (Lunch)': '午前11:30 - 午後3:00（ランチ）',
    '5:00 PM - 11:00 PM': '午後5時 - 午後11時',
    '11:00 AM - 3:00 PM': '午前11:00 - 午後3:00',
    '5:00 PM - 11:00 PM (Dinner)': '午後5:00 - 午後11:00（ディナー）',
    
    // Locations
    'Asakusa, Tokyo': '東京浅草',
    'Shibuya, Tokyo': '東京渋谷',
    'Marunouchi, Tokyo': '東京丸の内',
    'Ueno, Tokyo': '東京上野',
    'Tsukiji, Tokyo': '東京築地',
    'Ginza, Tokyo': '東京銀座',
    'Yurakucho, Tokyo': '東京有楽町',
    'Namba, Osaka': '大阪難波',
    'Gion, Kyoto': '京都祇園',
    'Fushimi, Kyoto': '京都伏見',
    'Higashiyama, Kyoto': '京都東山',
    'Nara': '奈良',
    'Uji, Kyoto': '京都宇治',
    'Nara City': '奈良市',
    'Osaka': '大阪',
    'Umeda, Osaka': '大阪梅田',
    'Osaka Bay, Osaka': '大阪湾、大阪',
    'Kobe': '神戸',
    'Kobe, Hyogo': '兵庫県神戸',
    'Shinsekai, Osaka': '大阪新世界',
    'Chuo Ward, Osaka': '大阪中央区',
    'Central Kyoto': '京都中心部',
    'Sannomiya, Kobe': '神戸三宮',
    'Tennoji, Osaka': '大阪天王寺',
    'Temma, Osaka': '大阪天満',
    'Shibuya, Tokyo': '東京渋谷',
    'Dotonbori, Osaka': '大阪道頓堀',
    'Kuromon, Osaka': '大阪黒門',
    'Shinsaibashi, Osaka': '大阪心斎橋',
    'Tokyo': '東京',
    'Tokyo (Multiple locations)': '東京（複数店舗）',
    'Nara Park, Nara': '奈良公園、奈良',
    'Nara, Nara Prefecture': '奈良県奈良市',
    
    // Prices
    'Free': '無料',
    'Free (Park) | ¥600 (Castle Tower)': '無料（公園）| ¥600（天守閣）',
    'Park: Free | Museums: Varies': '公園：無料 | 博物館：様々',
    'Free (Main Area) | ¥500 (Inner Area)': '無料（メインエリア）| ¥500（内部エリア）',
    
    // Genres
    'Bread': 'パン',
    'Crab / Kaiseki': 'カニ / 懐石料理',
    'Matcha / Tea': '抹茶 / お茶',
    'Monjayaki / Okonomiyaki': 'もんじゃ焼き / お好み焼き',
    'Ramen': 'ラーメン',
    'Shabu Shabu': 'しゃぶしゃぶ',
    'Kobe Beef / Steak': '神戸牛 / ステーキ',
    'Unagi / Eel': 'うなぎ',
    'Kamameshi / Rice Pot': '釜飯',
    'Sushi': '寿司',
    'Seafood / Izakaya': '海鮮 / 居酒屋',
    'Noodles': '麺',
    'Kushikatsu': '串カツ',
    'Tempura': '天ぷら',
    'Takoyaki': 'たこ焼き',
    'Tonkatsu / Katsudon': 'とんかつ / カツ丼',
    'Okonomiyaki': 'お好み焼き',
    'Oden': 'おでん',
    'Tsukemen': 'つけ麺',
    'Seafood': '海鮮',
    'Omakase': 'おまかせ',
    'Omurice': 'オムライス',
    'Traditional Japanese': '日本料理',
    
    // Categories
    'Temple': '寺院',
    'Shrine': '神社',
    'Castle': '城',
    'Park': '公園',
    'Market': '市場',
    'District': '地区',
    'Landmark': 'ランドマーク',
    'Theme Park': 'テーマパーク',
    
    // Meal types
    'Lunch': 'ランチ',
    'Dinner': 'ディナー',
    'Snack': 'スナック',
    'Tea Time': 'お茶の時間',
    'Breakfast': '朝食',
    'Early Lunch / Tea Time': '早めのランチ / お茶の時間',
    'Dinner (Graduation Celebration)': 'ディナー（卒業祝賀）',
    'Dinner (Reunion)': 'ディナー（再会）',
    
    // Stations
    'Ginza Station': '銀座駅',
    'Asakusa Station': '浅草駅',
    'Shibuya Station': '渋谷駅',
    'Yurakucho Station': '有楽町駅',
    'Uji Station': '宇治駅',
    'Nara Station': '奈良駅',
    'Namba Station': '難波駅',
    'Tennoji Station': '天王寺駅',
    'Dobutsuen-mae Station': '動物園前駅',
    'Sannomiya Station': '三宮駅',
    'Gion-Shijo Station': '祇園四条駅',
    'Kiyomizu-Gojo Station': '清水五条駅',
    'Temmabashi Station': '天満橋駅',
    'Shinsaibashi Station Area': '心斎橋駅エリア',
    'Namba Station Area': '難波駅エリア',
    'Dotonbori Area': '道頓堀エリア',
    'Osaka Area': '大阪エリア',
    'Kyoto Area': '京都エリア',
    
    // Common access phrases
    'Walk 3-5 mins from Ginza Station': '銀座駅から徒歩3〜5分',
    'Walk 5-10 mins from Senso-ji Temple': '浅草寺から徒歩5〜10分',
    'Walk 3-5 mins from Shibuya Station': '渋谷駅から徒歩3〜5分',
    'Walk from Uji Station': '宇治駅から徒歩',
    'Walk from Namba Station': '難波駅から徒歩',
    'Walk 5 mins from Dobutsuen-mae Station or near Tsutenkaku': '動物園前駅から徒歩5分または通天閣近く',
    'Walk 5-10 mins from Sannomiya Station to the restaurant': '三宮駅から徒歩5〜10分',
    'Walk 10-15 mins from Meriken Park area': 'メリケンパークエリアから徒歩10〜15分',
    'Walk from Kiyomizu-dera Temple area': '清水寺エリアから徒歩',
    'Walk 3-5 mins within Ginza area': '銀座エリア内を徒歩3〜5分',
    'Walk 2 mins from Tennoji Station to Abeno Harukas': '天王寺駅からあべのハルカスまで徒歩2分',
    'Walk 5 mins from Namba Station to Kuromon Market': '難波駅から黒門市場まで徒歩5分',
    'Check location for specific access details': '詳細なアクセス情報は場所を確認してください',
    'Located in Dotonbori area, accessible from Namba Station': '道頓堀エリアに位置、難波駅からアクセス可能',
    'Located in Gion area, accessible from Gion-Shijo Station': '祇園エリアに位置、祇園四条駅からアクセス可能',
    
    // Tips
    'Reservations recommended': '予約推奨',
    'Reservations recommended for lunch': 'ランチは予約推奨',
    'Reservations recommended, especially for dinner': '予約推奨、特にディナー',
    'Reservations highly recommended, especially for dinner': '予約強く推奨、特にディナー',
    'Duration: ~1-1.5 hours': '所要時間：約1〜1.5時間',
    'Duration: ~1.5-2 hours': '所要時間：約1.5〜2時間',
    'Duration: ~2-3 hours': '所要時間：約2〜3時間',
    'Duration: ~1 hour': '所要時間：約1時間',
    'Duration: ~1 hour for lunch': '所要時間：ランチ約1時間',
    'Duration: ~1-1.5 hours for lunch, ~2 hours for dinner': '所要時間：ランチ約1〜1.5時間、ディナー約2時間',
    'Popular spot, may have queues': '人気スポット、行列の可能性あり',
    'Try the signature yuzu shio ramen for the unique citrus flavor experience': '独特の柑橘風味を体験するために柚子塩ラーメンを試してください',
    'Expect possible wait times, especially during peak hours': 'ピーク時には待ち時間の可能性があります',
  };
  
  // Check for direct translation first
  if (directTranslations[en]) {
    return directTranslations[en];
  }
  
  // Pattern-based translation using proper Japanese
  let ja = zh;
  
  // Replace Chinese characters with Japanese equivalents
  const charReplacements = {
    '东京': '東京',
    '大阪': '大阪',
    '京都': '京都',
    '神户': '神戸',
    '奈良': '奈良',
    '宇治': '宇治',
    '浅草': '浅草',
    '涩谷': '渋谷',
    '银座': '銀座',
    '有乐町': '有楽町',
    '难波': '難波',
    '梅田': '梅田',
    '心斋桥': '心斎橋',
    '祇园': '祇園',
    '伏见': '伏見',
    '东山': '東山',
    '清水': '清水',
    '春日': '春日',
    '若草': '若草',
    '六甲': '六甲',
    '三宫': '三宮',
    '道顿堀': '道頓堀',
    '黑门': '黒門',
    '鸭川': '鴨川',
    '上野': '上野',
    '筑地': '築地',
    '羽田': '羽田',
    '关西': '関西',
    '关空': '関空',
    '新世界': '新世界',
    '通天阁': '通天閣',
    '丸之内': '丸の内',
    '中央区': '中央区',
    '兵库县': '兵庫県',
    '葛饰区': '葛飾区',
    '生野区': '生野区',
    '天王寺': '天王寺',
    '天满': '天満',
    
    // Grammar and common words
    '免费': '無料',
    '公园': '公園',
    '博物馆': '博物館',
    '寺庙': '寺院',
    '神社': '神社',
    '城': '城',
    '市场': '市場',
    '商店': '店舗',
    '餐厅': 'レストラン',
    '酒店': 'ホテル',
    '站': '駅',
    '车站': '駅',
    '步行': '徒歩',
    '分钟': '分',
    '小时': '時間',
    '时间': '時間',
    '早上': '午前',
    '上午': '午前',
    '下午': '午後',
    '晚上': '夜',
    '开放': '営業',
    '营业时间': '営業時間',
    '不定': '不定',
    '门票': 'チケット',
    '购物': 'ショッピング',
    '景点': '観光地',
    '住宿': '宿泊',
    '午餐': 'ランチ',
    '晚餐': 'ディナー',
    '建议': '推奨',
    '预订': '予約',
    '停留': '所要',
    '约': '約',
    '从': '',
    '前往': 'へ移動',
    '返回': 'に戻る',
    '抵达': '到着',
    '出发': 'から出発',
    '至': 'へ',
    '乘坐': 'で',
    '线': '線',
    '环状': '環状',
    '电车': '電車',
    '新干线': '新幹線',
    '地铁': '地下鉄',
    '巴士': 'バス',
    '出租车': 'タクシー',
    '面包': 'パン',
    '拉面': 'ラーメン',
    '寿司': '寿司',
    '螃蟹': 'カニ',
    '怀石料理': '懐石料理',
    '抹茶': '抹茶',
    '茶': 'お茶',
    '海鲜': '海鮮',
    '居酒屋': '居酒屋',
    '文字烧': 'もんじゃ焼き',
    '大阪烧': 'お好み焼き',
    '涮涮锅': 'しゃぶしゃぶ',
    '鳗鱼': 'うなぎ',
    '釜饭': '釜飯',
    '串炸': '串カツ',
    '章鱼烧': 'たこ焼き',
    '猪排': 'とんかつ',
    '关东煮': 'おでん',
    '蘸面': 'つけ麺',
    '主厨套餐': 'おまかせ',
    '蛋包饭': 'オムライス',
    '日本料理': '日本料理',
  };
  
  // Apply replacements in order
  Object.entries(charReplacements).forEach(([cn, jp]) => {
    ja = ja.replace(new RegExp(cn, 'g'), jp);
  });
  
  return ja;
}

function processDataFile(filepath, filename) {
  let content = fs.readFileSync(filepath, 'utf-8');
  let updateCount = 0;
  
  // Match { en: '...', zh: '...' } without ja:
  const regex = /{ en: '([^']+)', zh: '([^']+)' }(?!\s*,\s*ja:)/g;
  
  content = content.replace(regex, (match, en, zh) => {
    const ja = translateToJapanese(en, zh);
    updateCount++;
    return `{ en: '${en}', zh: '${zh}', ja: '${ja}' }`;
  });
  
  fs.writeFileSync(filepath, content, 'utf-8');
  console.log(`✓ ${filename} - Added ${updateCount} Japanese translations`);
  return updateCount;
}

// Process all files
const attr = processDataFile(
  path.join(__dirname, '../src/data/attractionsData.js'),
  'attractionsData.js'
);

const rest = processDataFile(
  path.join(__dirname, '../src/data/restaurantsData.js'),
  'restaurantsData.js'
);

console.log('\n' + '='.repeat(60));
console.log(`✅ Added Japanese translations:`);
console.log(`   📸 Attractions: ${attr} entries`);
console.log(`   🍜 Restaurants: ${rest} entries`);
console.log('\n💡 Next: npm run build');
console.log('='.repeat(60));
