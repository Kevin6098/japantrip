// Schedule data function - takes translation function t as parameter
export const getScheduleData = (t) => [
  {
    day: 1,
    date: t('Wed, Mar 18', '3月18日 周三', '3月18日（水）'),
    title: t('Arrival', '抵达', '到着'),
    location: t('Tokyo', '东京', '東京'),
    color: 'indigo',
    items: [
      { time: '21:15', text: t('CX Lands (HND)', '国泰降落 (HND)', 'CX着陸（羽田）') },
      { time: '22:30', text: t('TG Lands (HND)', '泰航降落 (HND)', 'TG着陸（羽田）') },
      { 
        time: '23:30', 
        text: t('Private Van to Tokyo Airbnb', '私人包车前往东京Airbnb', '東京Airbnbへプライベートバン'),
        transit: t('Travel time: ~45-60 mins (HND → 1-chōme-9-2 Yotsugi, Katsushika City)', '车程: 约45-60分钟 (羽田机场 → 葛饰区四つ木1-9-2)', '移動時間：約45〜60分（羽田空港→葛飾区四つ木1-9-2）')
      },
      { time: '00:30', text: t('Arrive at Tokyo Airbnb (1-chōme-9-2 Yotsugi, Katsushika City)', '抵达东京Airbnb (葛饰区四つ木1-9-2)', '東京Airbnb到着（葛飾区四つ木1-9-2）') },
    ],
  },
  {
    day: 2,
    date: t('Thu, Mar 19', '3月19日 周四', '3月19日（木）'),
    title: t('Tokyo City Tour', '东京城市游', '東京市内観光'),
    location: t('Tokyo', '东京', '東京'),
    color: 'indigo',
    items: [
      { 
        time: '08:00', 
        text: t('Depart from Airbnb (1-chōme-9-2 Yotsugi, Katsushika City - 5 mins walk to nearest station)', '从Airbnb出发 (葛饰区四つ木1-9-2 - 步行5分钟至最近车站)', 'Airbnbから出発（葛飾区四つ木1-9-2 - 最寄り駅まで徒歩5分）'),
        transit: t('Walk 5 mins to nearest station → Keisei Line/Toei Asakusa Line to Higashi-Ginza → Walk 5 mins to Tsukiji Outer Market (~30-35 mins train)', '步行5分钟至最近车站 → 京成线/都营浅草线至东银座 → 步行5分钟至筑地外市场 (~30-35分钟电车)', '最寄り駅まで徒歩5分→京成線/都営浅草線で東銀座へ→築地場外市場まで徒歩5分（電車約30〜35分）')
      },
      { 
        time: '09:00', 
        text: t('Tsukiji Outer Market', '筑地外市场', '築地場外市場'), 
        highlight: true,
        link: '/attractions/tsukiji-market',
        mapLink: 'https://www.google.com/maps/dir/?api=1&destination=Tsukiji+Outer+Market+Tokyo',
        price: 'Free',
        transit: t('Duration: ~2.5 hours (Walk around market, try street food, fresh seafood, shops)', '停留时间: 约2.5小时 (漫步市场, 品尝街头美食, 新鲜海鲜, 商店)', '所要時間：約2.5時間（市場を散策、屋台料理、新鮮な海鮮、店舗）')
      },
      { 
        time: '11:30', 
        text: t('Pain Maison (塩パン屋)', 'Pain Maison (盐面包店)', 'Pain Maison（塩パン屋）'), 
        highlight: true,
        link: '/food/pain-maison',
        mapLink: 'https://www.google.com/maps/search/?api=1&query=Pain+Maison+Tokyo',
        price: '¥120-¥190',
        transit: t('Walk from Tsukiji Market area (Duration: ~15-20 mins for purchase - Salt bread bakery, max 20 salt bread, max 15 melon bread per person)', '从筑地市场区域步行 (停留时间: 购买约15-20分钟 - 盐面包店, 每人最多20个盐面包, 最多15个菠萝包)', '築地市場エリアから徒歩（所要時間：購入約15〜20分 - 塩パン屋、1人最大20個の塩パン、最大15個のメロンパン）')
      },
      { 
        time: '11:50', 
        text: t('Travel to Ginza', '前往银座', '銀座へ移動'),
        mapLink: 'https://www.google.com/maps/dir/?api=1&origin=Tsukiji+Outer+Market+Tokyo&destination=Ginza+Tokyo&travelmode=walking',
        transit: t('Walk 10-15 mins from Pain Maison to Ginza Station', '从Pain Maison步行10-15分钟至银座站', 'Pain Maisonから銀座駅まで徒歩10〜15分')
      },
      { 
        time: '12:00', 
        text: t('Ginza Kanimitsu (Lunch)', '银座蟹みつ (午餐)', '銀座 かにみつ（ランチ）'), 
        highlight: true,
        link: '/food/ginza-kanimitsu',
        mapLink: 'https://www.google.com/maps/dir/?api=1&destination=Ginza+Kanimitsu+Tokyo',
        transit: t('Walk 3-5 mins from Ginza Station (Duration: ~1-1.5 hours - Crab restaurant, lunch sets from ¥4,600-¥11,000)', '从银座站步行3-5分钟 (停留时间: 约1-1.5小时 - 螃蟹餐厅, 午餐套餐¥4,600-¥11,000)', '銀座駅から徒歩3〜5分（所要時間：約1〜1.5時間 - カニレストラン、ランチセット¥4,600〜¥11,000）')
      },
      { 
        time: '13:30', 
        text: t('Ginza Shopping', '银座购物', '銀座ショッピング'),
        mapLink: 'https://www.google.com/maps/dir/?api=1&destination=Ginza+Tokyo',
        transit: t('Walk within Ginza area (Duration: ~30 mins)', '银座区内步行 (停留时间: 约30分钟)', '銀座エリア内を徒歩（所要時間：約30分）')
      },
      { 
        time: '14:00', 
        text: t('Nakamura Tokichi (Matcha Parfait)', '中村藤吉 (抹茶芭菲)', '中村藤吉（抹茶パフェ）'), 
        highlight: true,
        link: '/food/nakamura-tokichi-ginza',
        mapLink: 'https://www.google.com/maps/search/?api=1&query=Nakamura+Tokichi+Ginza',
        price: 'Tea Time',
        transit: t('Walk 3-5 mins within Ginza area (Duration: ~1 hour)', '银座区内步行3-5分钟 (停留时间: 约1小时)', '銀座エリア内を徒歩3〜5分（所要時間：約1時間）')
      },
      { 
        time: '15:30', 
        text: t('Travel to Tokyo Station', '前往东京站', '東京駅へ移動'),
        mapLink: 'https://www.google.com/maps/dir/?api=1&origin=Ginza+Tokyo&destination=Tokyo+Station&travelmode=walking',
        transit: t('Walk 10-15 mins from Ginza or Marunouchi Line from Ginza-itchome to Tokyo Station (~5 mins train)', '从银座步行10-15分钟或丸之内线从银座一丁目至东京站 (~5分钟电车)', '銀座から徒歩10〜15分、または丸ノ内線で銀座一丁目から東京駅へ（電車約5分）')
      },
      { 
        time: '16:00', 
        text: t('Tokyo Station (Explore & Buy Souvenirs)', '东京站 (参观 & 购买纪念品)', '東京駅（探索＆お土産購入）'), 
        highlight: true,
        link: '/attractions/tokyo-station',
        mapLink: 'https://www.google.com/maps/dir/?api=1&destination=Tokyo+Station',
        transit: t('Duration: ~1.5 hours (Explore station architecture, buy souvenirs at Character Street & Gransta)', '停留时间: 约1.5小时 (参观车站建筑, 在角色街 & Gransta购买纪念品)', '所要時間：約1.5時間（駅の建築を探索、キャラクターストリート＆グランスタでお土産購入）')
      },
      { 
        time: '17:30', 
        text: t('Travel to Asakusa for Dinner', '前往浅草晚餐', '浅草へ夕食のため移動'),
        mapLink: 'https://www.google.com/maps/dir/?api=1&origin=Tokyo+Station&destination=Asakusa+Tokyo',
        transit: t('Walk 5 mins to Tokyo Station → Ginza Line to Asakusa Station (~15 mins train) → Walk 3-5 mins', '步行5分钟至东京站 → 银座线至浅草站 (~15分钟电车) → 步行3-5分钟', '東京駅まで徒歩5分→銀座線で浅草駅へ（電車約15分）→徒歩3〜5分')
      },
      { 
        time: '18:00', 
        text: t('Asakusa - Monja Yaki & Okonomiyaki', '浅草 - 文字烧 & 大阪烧', '浅草 - もんじゃ焼き＆お好み焼き'), 
        highlight: true,
        link: '/food/asakusa-monja',
        mapLink: 'https://www.google.com/maps/search/?api=1&query=Monja+Yaki+Asakusa+Okonomiyaki',
        note: t('(Dinner)', '(晚餐)', '（ディナー）'),
        transit: t('Duration: ~1.5 hours (Traditional Tokyo street food experience)', '停留时间: 约1.5小时 (传统东京街头美食体验)', '所要時間：約1.5時間（伝統的な東京ストリートフード体験）')
      },
      { 
        time: '19:30', 
        text: t('Return to Airbnb (1-chōme-9-2 Yotsugi, Katsushika City)', '返回Airbnb (葛饰区四つ木1-9-2)', 'Airbnbに戻る（葛飾区四つ木1-9-2）'),
        transit: t('Walk 3-5 mins to Asakusa Station → Keisei Line/Toei Asakusa Line to nearest station in Katsushika-ku (~20-25 mins train) → Walk 5 mins to 1-chōme-9-2 Yotsugi', '步行3-5分钟至浅草站 → 京成线/都营浅草线至葛饰区最近车站 (~20-25分钟电车) → 步行5分钟至四つ木1-9-2', '浅草駅まで徒歩3〜5分→京成線/都営浅草線で葛飾区の最寄り駅へ（電車約20〜25分）→四つ木1-9-2まで徒歩5分')
      },
    ],
  },
  {
    day: 3,
    date: t('Fri, Mar 20', '3月20日 周五', '3月20日（金）'),
    title: t('Graduation Day', '毕业典礼日', '卒業式'),
    location: t('Tokyo/Saitama', '东京/埼玉', '東京・埼玉'),
    color: 'indigo',
    isHoliday: true,
    items: [
      { 
        time: '08:00', 
        text: t('Depart from Airbnb (1-chōme-9-2 Yotsugi, Katsushika City - 5 mins walk to nearest station)', '从Airbnb出发 (葛饰区四つ木1-9-2 - 步行5分钟至最近车站)', 'Airbnbから出発（葛飾区四つ木1-9-2 - 最寄り駅まで徒歩5分）'),
        transit: t('Walk 5 mins to nearest station → Keisei Line/Toei Asakusa Line to Asakusa Station (~20-25 mins train) → Walk 5 mins', '步行5分钟至最近车站 → 京成线/都营浅草线至浅草站 (~20-25分钟电车) → 步行5分钟', '最寄り駅まで徒歩5分→京成線/都営浅草線で浅草駅へ（電車約20〜25分）→徒歩5分')
      },
      { 
        time: '09:00', 
        text: t('Asakusa (Senso-ji Temple)', '浅草 (浅草寺)', '浅草（浅草寺）'), 
        highlight: true,
        link: '/attractions/sensoji',
        mapLink: 'https://www.google.com/maps/dir/?api=1&destination=Senso-ji+Temple+Tokyo',
        price: 'Free',
        transit: t('Duration: ~2 hours (Explore temple & Nakamise Street)', '停留时间: 约2小时 (参观寺庙 & 仲见世通)', '所要時間：約2時間（寺院＆仲見世通りを探索）')
      },
      { 
        time: '11:30', 
        text: t('Ichiran Ramen (Lunch)', '一兰拉面 (午餐)', '一蘭ラーメン（ランチ）'),
        highlight: true,
        link: '/food/ichiran-ramen',
        mapLink: 'https://www.google.com/maps/search/?api=1&query=Ichiran+Ramen+Asakusa+Tokyo',
        transit: t('Walk 5-10 mins from Senso-ji (Duration: ~45 mins - Famous tonkotsu ramen, expect possible wait)', '从浅草寺步行5-10分钟 (停留时间: 约45分钟 - 著名豚骨拉面, 可能需要排队)', '浅草寺から徒歩5〜10分（所要時間：約45分 - 有名な豚骨ラーメン、待ち時間の可能性あり）')
      },
      { 
        time: '13:00', 
        text: t('Travel to Saitama for Graduation', '前往埼玉参加毕业典礼', '卒業式のため埼玉へ移動'),
        transit: t('Walk 5-10 mins to Asakusa Station → Ginza Line to Ueno → JR Utsunomiya Line to Omiya → Tobu Skytree Line to Miyashiro Station (~1h 20m train)', '步行5-10分钟至浅草站 → 银座线至上野 → JR宇都宫线至大宫 → 东武晴空塔线至宫代站 (~1小时20分钟电车)', '浅草駅まで徒歩5〜10分→銀座線で上野へ→JR宇都宮線で大宮へ→東武スカイツリーラインで宮代駅へ（電車約1時間20分）')
      },
      { 
        time: '14:30', 
        text: t('Nippon Institute of Technology (Graduation Ceremony)', '日本工业大学 (毕业典礼)', '日本工業大学（卒業式）'), 
        special: true,
        mapLink: 'https://www.google.com/maps/dir/?api=1&destination=Nippon+Institute+of+Technology+Miyashiro+Saitama',
        transit: t('Walk 10 mins from Miyashiro Station (Duration: ~2-3 hours)', '从宫代站步行10分钟 (停留时间: 约2-3小时)', '宮代駅から徒歩10分（所要時間：約2〜3時間）')
      },
      { 
        time: '17:30', 
        text: t('Travel to Shibuya', '前往涩谷', '渋谷へ移動'),
        transit: t('Walk 10 mins to Miyashiro Station → Tobu Skytree Line to Oshiage → Hanzomon Line to Shibuya (~1h 20m train)', '步行10分钟至宫代站 → 东武晴空塔线至押上 → 半藏门线至涩谷 (~1小时20分钟电车)', '宮代駅まで徒歩10分→東武スカイツリーラインで押上へ→半蔵門線で渋谷へ（電車約1時間20分）')
      },
      { 
        time: '19:00', 
        text: t('Shibuya - Crossing & Hachiko Statue', '涩谷 - 十字路口 & 八公像', '渋谷 - スクランブル交差点＆ハチ公像'), 
        highlight: true,
        link: '/attractions/shibuya',
        mapLink: 'https://www.google.com/maps/dir/?api=1&destination=Shibuya+Scramble+Crossing+Tokyo',
        transit: t('Walk 3 mins from Shibuya Station (Duration: ~30-45 mins - Famous scramble crossing & Hachiko statue)', '从涩谷站步行3分钟 (停留时间: 约30-45分钟 - 著名十字路口 & 八公像)', '渋谷駅から徒歩3分（所要時間：約30〜45分 - 有名なスクランブル交差点＆ハチ公像）')
      },
      { 
        time: '20:00', 
        text: t('Tsukada Shabu Shabu (Graduation Celebration Dinner)', '塚田しゃぶしゃぶ (毕业庆功晚餐)', '塚田しゃぶしゃぶ（卒業祝賀晩餐）'), 
        highlight: true,
        link: '/food/tsukada-shabu',
        mapLink: 'https://www.google.com/maps/search/?api=1&query=Tsukada+Shabu+Shabu+Shibuya+Tokyo',
        transit: t('Walk 3-5 mins from Shibuya Station to Shibuya Scramble Square 12F (Duration: ~1.5-2 hours - Shabu shabu restaurant, hours: 17:00-23:00)', '从涩谷站步行3-5分钟至涩谷Scramble Square 12楼 (停留时间: 约1.5-2小时 - 涮涮锅餐厅, 营业时间: 17:00-23:00)', '渋谷駅から渋谷スクランブルスクエア12階まで徒歩3〜5分（所要時間：約1.5〜2時間 - しゃぶしゃぶレストラン、営業時間：17:00〜23:00）')
      },
      { 
        time: '22:00', 
        text: t('Return to Airbnb (1-chōme-9-2 Yotsugi, Katsushika City)', '返回Airbnb (葛饰区四つ木1-9-2)', 'Airbnbに戻る（葛飾区四つ木1-9-2）'),
        transit: t('Walk 3 mins to Shibuya Station → Hanzomon Line to Oshiage → Keisei Line/Toei Asakusa Line to nearest station in Katsushika-ku (~35-40 mins train) → Walk 5 mins to 1-chōme-9-2 Yotsugi', '步行3分钟至涩谷站 → 半藏门线至押上 → 京成线/都营浅草线至葛饰区最近车站 (~35-40分钟电车) → 步行5分钟至四つ木1-9-2', '渋谷駅まで徒歩3分→半蔵門線で押上へ→京成線/都営浅草線で葛飾区の最寄り駅へ（電車約35〜40分）→四つ木1-9-2まで徒歩5分')
      },
    ],
  },
  {
    day: 4,
    date: t('Sat, Mar 21', '3月21日 周六', '3月21日（土）'),
    title: t('Move to Osaka', '前往大阪', '大阪へ移動'),
    location: t('Osaka', '大阪', '大阪'),
    color: 'orange',
    items: [
      { 
        time: '10:30', 
        text: t('Travel to Afuri Yurakucho', '前往阿夫利有乐町', '阿夫利有楽町へ移動'),
        transit: t('Walk 5 mins to nearest station in Katsushika-ku → Keisei Line/Toei Asakusa Line to Oshiage → Hanzomon Line to Otemachi → Walk 5 mins to Tokyo Station → Walk 5-10 mins to Yurakucho (~45-50 mins total)', '步行5分钟至葛饰区最近车站 → 京成线/都营浅草线至押上 → 半藏门线至大手町 → 步行5分钟至东京站 → 步行5-10分钟至有乐町 (~45-50分钟总计)', '葛飾区の最寄り駅まで徒歩5分→京成線/都営浅草線で押上へ→半蔵門線で大手町へ→東京駅まで徒歩5分→有楽町まで徒歩5〜10分（合計約45〜50分）')
      },
      { 
        time: '11:00', 
        text: t('Afuri Yurakucho (Lunch)', '阿夫利有乐町 (午餐)', '阿夫利 有楽町（ランチ）'), 
        highlight: true,
        link: '/food/afuri-yurakucho',
        mapLink: 'https://www.google.com/maps/search/?api=1&query=Afuri+Yurakucho+Tokyo',
        price: '¥900-¥1,500',
        transit: t('Duration: ~1 hour (Yuzu ramen, unique citrus flavor - perfect stop before Shinkansen)', '停留时间: 约1小时 (柚子拉面, 独特柑橘风味 - 新干线出发前的完美停留点)', '所要時間：約1時間（柚子ラーメン、独特の柑橘風味 - 新幹線前の完璧な立ち寄り）')
      },
      { 
        time: '12:00', 
        text: t('Travel to Tokyo Station', '前往东京站', '東京駅へ移動'),
        mapLink: 'https://www.google.com/maps/dir/?api=1&origin=Yurakucho+Tokyo&destination=Tokyo+Station&travelmode=walking',
        transit: t('Walk 5-10 mins from Yurakucho to Tokyo Station', '从有乐町步行5-10分钟至东京站', '有楽町から東京駅まで徒歩5〜10分')
      },
      { 
        time: '13:00', 
        text: t('Shinkansen to Shin-Osaka', '新干线至新大阪', '新幹線で新大阪へ'),
        mapLink: 'https://www.google.com/maps/dir/?api=1&origin=Tokyo+Station&destination=Shin-Osaka+Station&travelmode=transit',
        transit: t('Travel: ~2.5 hrs (Right side for Fuji) - Ticket: ¥13,870', '车程: 约2.5小时 (右侧看富士山) - 票价: ¥13,870', '移動：約2.5時間（富士山は右側）- チケット：¥13,870')
      },
      { 
        time: '15:30', 
        text: t('Check-in Osaka Airbnb (1-chōme-12-11 Momodani, Ikuno Ward)', '入住大阪Airbnb (生野区桃谷1-12-11)', '大阪Airbnbチェックイン（生野区桃谷1-12-11）'),
        mapLink: 'https://www.google.com/maps/dir/?api=1&origin=Shin-Osaka+Station&destination=1-chōme-12-11+Momodani+Ikuno+Ward+Osaka&travelmode=transit',
        transit: t('Walk 2 mins to Shin-Osaka Station → JR Osaka Loop Line to Momodani Station (~20 mins train) → Walk 2 mins to 1-chōme-12-11 Momodani', '步行2分钟至新大阪站 → JR大阪环状线至桃谷站 (~20分钟电车) → 步行2分钟至桃谷1-12-11', '新大阪駅まで徒歩2分→JR大阪環状線で桃谷駅へ（電車約20分）→桃谷1-12-11まで徒歩2分')
      },
      { 
        time: '17:50', 
        text: t('Group 3 lands at KIX', '第三组抵达关西机场', '第3グループ関空着陸'),
        muted: true
      },
      { 
        time: '18:30', 
        text: t('Private Van to Osaka Airbnb (1-chōme-12-11 Momodani, Ikuno Ward)', '私人包车前往大阪Airbnb (生野区桃谷1-12-11)', '大阪Airbnbへプライベートバン（生野区桃谷1-12-11）'),
        transit: t('Travel time: ~50-60 mins (KIX → 1-chōme-12-11 Momodani, Ikuno Ward)', '车程: 约50-60分钟 (关西机场 → 生野区桃谷1-12-11)', '移動時間：約50〜60分（関空→生野区桃谷1-12-11）')
      },
      { 
        time: '20:00', 
        text: t('Reunion Dinner (Dotonbori)', '团圆晚餐 (道顿堀)', '再会ディナー（道頓堀）'), 
        highlight: true,
        link: '/attractions/dotonbori',
        mapLink: 'https://www.google.com/maps/dir/?api=1&destination=Dotonbori+Osaka',
        special: true 
      },
    ],
  },
  {
    day: 5,
    date: t('Sun, Mar 22', '3月22日 周日', '3月22日（日）'),
    title: t('USJ', '环球影城', 'USJ'),
    location: t('Osaka', '大阪', '大阪'),
    color: 'sky',
    items: [
      { 
        time: '07:30', 
        text: t('Depart from Airbnb (1-chōme-12-11 Momodani, Ikuno Ward) (Early!)', '从Airbnb出发 (生野区桃谷1-12-11) (早起!)', 'Airbnbから出発（生野区桃谷1-12-11）（早起き！）'),
        transit: t('Walk 2 mins from 1-chōme-12-11 Momodani to Momodani Station → JR Osaka Loop Line to Nishikujo → JR Yumesaki Line to Universal City Station (~20 mins train) → Walk 5 mins', '从桃谷1-12-11步行2分钟至桃谷站 → JR大阪环状线至西九条 → JR梦咲线至环球影城站 (~20分钟电车) → 步行5分钟', '桃谷1-12-11から桃谷駅まで徒歩2分→JR大阪環状線で西九条へ→JRゆめ咲線でユニバーサルシティ駅へ（電車約20分）→徒歩5分')
      },
      { 
        time: '08:00', 
        text: t('Arrive at USJ', '抵达环球影城', 'USJ到着'), 
        highlight: true,
        link: '/attractions/usj',
        mapLink: 'https://www.google.com/maps/dir/?api=1&destination=Universal+Studios+Japan+Osaka',
        prices: [
          { label: t('Entry', '门票', '入場券'), value: '~¥9,500' },
          { label: t('Express 7', '快通7', 'エクスプレス7'), value: '~¥18,000+', highlight: true }
        ]
      },
      { 
        time: '09:30', 
        text: t('Super Nintendo World™ (No re-entry)', '超级任天堂世界™ (不可再入场)', 'スーパー・ニンテンドー・ワールド™（再入場不可）'), 
        highlight: true,
        express: true,
        link: '/attractions/usj'
      },
      { 
        time: '09:30', 
        text: t('Mario Kart: Koopa\'s Challenge™', '马力欧卡丁车: 库巴的挑战书™', 'マリオカート ~クッパの挑戦状~™'), 
        highlight: true,
        express: true,
        link: '/attractions/usj'
      },
      { 
        time: '10:00', 
        text: t('Yoshi\'s Adventure™', '耀西的冒险™', 'ヨッシー・アドベンチャー™'), 
        highlight: true,
        express: true,
        link: '/attractions/usj'
      },
      { 
        time: '10:30', 
        text: t('Donkey Kong\'s Crazy Trolley', '大金刚的疯狂手推车', 'ドンキーコングのクレイジー・トロッコ'), 
        highlight: true,
        express: true,
        link: '/attractions/usj'
      },
      { 
        time: '11:00', 
        text: t('Free Time / Other Attractions', '自由时间 / 其他游乐设施', '自由時間 / その他のアトラクション'),
        transit: t('Jurassic Park The Ride, Harry Potter and the Forbidden Journey™ (Express - No time specified)', '侏罗纪公园乘船游, 哈利波特禁忌之旅™ (快通 - 无指定时间)', 'ジュラシック・パーク・ザ・ライド、ハリー・ポッター・アンド・ザ・フォービドゥン・ジャーニー™（エクスプレス - 時間指定なし）')
      },
      { 
        time: '12:00', 
        text: t('Lunch Break', '午餐休息', 'ランチ休憩')
      },
      { 
        time: '13:00', 
        text: t('Continue Exploring USJ', '继续探索环球影城', 'USJ探索続行'),
        transit: t('Selectable Plus One: The Flying Dinosaur OR Minion Hacha Mecha Ride (Express - Choose one)', '可选加一: 飞天翼龙 或 小黄人调皮闹剧乘车游 (快通 - 二选一)', '選べるプラスワン: ザ・フライング・ダイナソー または ミニオン・ハチャメチャ・ライド（エクスプレス - いずれか1つ）')
      },
      { 
        time: '17:30', 
        text: t('Flight of the Hippogriff™', '鹰马的飞行™', 'フライト・オブ・ザ・ヒッポグリフ™'), 
        highlight: true,
        express: true,
        link: '/attractions/usj'
      },
      { 
        time: '18:00', 
        text: t('Evening Activities / Dinner in Park', '晚间活动 / 园区内晚餐', '夕方の活動 / 園内ディナー')
      },
      { 
        time: '20:00', 
        text: t('Return to Airbnb (1-chōme-12-11 Momodani, Ikuno Ward) / Dinner', '返回Airbnb (生野区桃谷1-12-11) / 晚餐', 'Airbnbに戻る（生野区桃谷1-12-11）/ 夕食'),
        transit: t('Walk 5 mins to Universal City Station → JR Yumesaki Line to Nishikujo → JR Osaka Loop Line to Momodani Station (~20 mins train) → Walk 2 mins to 1-chōme-12-11 Momodani', '步行5分钟至环球影城站 → JR梦咲线至西九条 → JR大阪环状线至桃谷站 (~20分钟电车) → 步行2分钟至桃谷1-12-11', 'ユニバーサルシティ駅まで徒歩5分→JRゆめ咲線で西九条へ→JR大阪環状線で桃谷駅へ（電車約20分）→桃谷1-12-11まで徒歩2分')
      },
    ],
  },
  {
    day: 6,
    date: t('Mon, Mar 23', '3月23日 周一', '3月23日（月）'),
    title: t('Kobe Day Trip', '神户一日游', '神戸日帰り'),
    location: t('Kobe', '神户', '神戸'),
    color: 'red',
    items: [
      { 
        time: '09:30', 
        text: t('Depart from Airbnb (1-chōme-12-11 Momodani, Ikuno Ward)', '从Airbnb出发 (生野区桃谷1-12-11)', 'Airbnbから出発（生野区桃谷1-12-11）'),
        transit: t('Walk 2 mins from 1-chōme-12-11 Momodani to Momodani Station → JR Osaka Loop Line to Osaka Station → JR Kobe Line to Sannomiya Station (~30 mins train) → Walk 10 mins', '从桃谷1-12-11步行2分钟至桃谷站 → JR大阪环状线至大阪站 → JR神户线至三宫站 (~30分钟电车) → 步行10分钟', '桃谷1-12-11から桃谷駅まで徒歩2分→JR大阪環状線で大阪駅へ→JR神戸線で三宮駅へ（電車約30分）→徒歩10分')
      },
      { 
        time: '10:30', 
        text: t('Meriken Park & Harborland', '美利坚公园 & 港湾乐园', 'メリケンパーク＆ハーバーランド'), 
        highlight: true,
        link: '/attractions/harborland',
        mapLink: 'https://www.google.com/maps/dir/?api=1&destination=Meriken+Park+Kobe',
        price: 'Free',
        transit: t('Duration: ~1.5 hours (BE KOBE Sign, Port Tower Photos)', '停留时间: 约1.5小时 (BE KOBE标志, 神户塔拍照)', '所要時間：約1.5時間（BE KOBEサイン、ポートタワーで写真撮影）')
      },
      { 
        time: '12:00', 
        text: t('Kobe Steak Nick (Lunch)', 'Kobe Steak Nick (午餐)', 'Kobe Steak Nick（ランチ）'), 
        highlight: true,
        link: '/food/kobe-steak-nick',
        mapLink: 'https://www.google.com/maps/search/?api=1&query=Kobe+Steak+Nick+Kobe',
        price: '¥6,000-¥7,000',
        transit: t('Walk 10-15 mins from Meriken Park (Duration: ~1-1.5 hours - Authentic Kobe beef)', '从美利坚公园步行10-15分钟 (停留时间: 约1-1.5小时 - 正宗神户牛肉)', 'メリケンパークから徒歩10〜15分（所要時間：約1〜1.5時間 - 本格神戸牛）')
      },
      { 
        time: '13:30', 
        text: t('Travel to Rokkosan Pasture', '前往六甲山牧场', '六甲山牧場へ移動'),
        transit: t('Walk 5-10 mins to Sannomiya Station → Train to Rokko Station (~20 mins train) → Walk to Rokko Cable Car station (~5 mins walk) → Rokko Cable Car to Rokko-sancho (~10 mins ropeway) → Bus or walk to Pasture (~10-15 mins)', '步行5-10分钟至三宫站 → 电车至六甲站 (~20分钟电车) → 步行至六甲缆车站 (~5分钟步行) → 六甲缆车至六甲山顶 (~10分钟缆车) → 巴士或步行至牧场 (~10-15分钟)', '三宮駅まで徒歩5〜10分→六甲駅へ電車で（電車約20分）→六甲ケーブルカー駅まで徒歩（徒歩約5分）→六甲ケーブルで六甲山頂へ（ロープウェイ約10分）→牧場までバスまたは徒歩（約10〜15分）')
      },
      { 
        time: '14:30', 
        text: t('Rokkosan Pasture (Sheep)', '六甲山牧场', '六甲山牧場（羊）'), 
        highlight: true,
        link: '/attractions/rokkosan-pasture',
        mapLink: 'https://www.google.com/maps/dir/?api=1&destination=Rokkosan+Pasture+Kobe',
        price: '¥500',
        transit: t('Duration: ~2 hours (Interact with sheep & enjoy nature)', '停留时间: 约2小时 (与羊互动 & 享受大自然)', '所要時間：約2時間（羊と触れ合い＆自然を楽しむ）')
      },
      { 
        time: '16:30', 
        text: t('Descend from Rokkosan Pasture', '从六甲山牧场下山', '六甲山牧場から下山'),
        transit: t('Walk or bus to Rokko-sancho (~10-15 mins) → Rokko Cable Car to Rokko Cable station (~10 mins ropeway) → Train to Sannomiya Station (~20 mins train) → Walk 5-10 mins to Gashoken', '步行或巴士至六甲山顶 (~10-15分钟) → 六甲缆车至六甲缆车站 (~10分钟缆车) → 电车至三宫站 (~20分钟电车) → 步行5-10分钟至賀正軒', '六甲山頂までバスまたは徒歩（約10〜15分）→六甲ケーブルで六甲ケーブル駅へ（ロープウェイ約10分）→三宮駅へ電車で（電車約20分）→賀正軒まで徒歩5〜10分')
      },
      { 
        time: '17:30', 
        text: t('Gashoken (Dinner)', '賀正軒 (晚餐)', '賀正軒（ディナー）'), 
        highlight: true,
        link: '/food/gashoken',
        mapLink: 'https://www.google.com/maps/search/?api=1&query=Gashoken+Sannomiya+Kobe',
        price: '¥1,100-¥1,880',
        transit: t('Duration: ~1 hour (Tonkotsu ramen, unique fusion varieties like Basil Cheese Ramen)', '停留时间: 约1小时 (豚骨拉面, 独特融合品种如罗勒芝士拉面)', '所要時間：約1時間（豚骨ラーメン、バジルチーズラーメンなど独特の融合バラエティ）')
      },
      { 
        time: '18:30', 
        text: t('Travel to Kobe Port Tower', '前往神户塔', '神戸ポートタワーへ移動'),
        mapLink: 'https://www.google.com/maps/dir/?api=1&origin=Gashoken+Kobe&destination=Kobe+Port+Tower',
        transit: t('Walk 10-15 mins from Gashoken', '从賀正軒步行10-15分钟', '賀正軒から徒歩10〜15分')
      },
      { 
        time: '18:45', 
        text: t('Kobe Port Tower (Night View)', '神户塔 (夜景)', '神戸ポートタワー（夜景）'), 
        highlight: true,
        link: '/attractions/kobe-port',
        mapLink: 'https://www.google.com/maps/dir/?api=1&destination=Kobe+Port+Tower',
        price: '¥700',
        transit: t('Duration: ~1 hour', '停留时间: 约1小时', '所要時間：約1時間')
      },
      { 
        time: '20:00', 
        text: t('Return to Airbnb (1-chōme-12-11 Momodani, Ikuno Ward)', '返回Airbnb (生野区桃谷1-12-11)', 'Airbnbに戻る（生野区桃谷1-12-11）'),
        transit: t('Walk 10 mins to Sannomiya Station → JR Kobe Line to Osaka Station (~15 mins train) → JR Osaka Loop Line to Momodani Station (~15 mins train) → Walk 2 mins to 1-chōme-12-11 Momodani', '步行10分钟至三宫站 → JR神户线至大阪站 (~15分钟电车) → JR大阪环状线至桃谷站 (~15分钟电车) → 步行2分钟至桃谷1-12-11', '三宮駅まで徒歩10分→JR神戸線で大阪駅へ（電車約15分）→JR大阪環状線で桃谷駅へ（電車約15分）→桃谷1-12-11まで徒歩2分')
      },
    ],
  },
  {
    day: 7,
    date: t('Tue, Mar 24', '3月24日 周二', '3月24日（火）'),
    title: t('Osaka City Highlights', '大阪城市精华', '大阪市内観光'),
    location: t('Osaka', '大阪', '大阪'),
    color: 'orange',
    items: [
      { 
        time: '08:30', 
        text: t('Depart from Airbnb (1-chōme-12-11 Momodani, Ikuno Ward)', '从Airbnb出发 (生野区桃谷1-12-11)', 'Airbnbから出発（生野区桃谷1-12-11）'),
        transit: t('Walk 2 mins from 1-chōme-12-11 Momodani to Momodani Station → JR Osaka Loop Line to Osaka Station (~20 mins train) → Walk 5 mins', '从桃谷1-12-11步行2分钟至桃谷站 → JR大阪环状线至大阪站 (~20分钟电车) → 步行5分钟', '桃谷1-12-11から桃谷駅まで徒歩2分→JR大阪環状線で大阪駅へ（電車約20分）→徒歩5分')
      },
      { 
        time: '09:00', 
        text: t('Umeda Sky Building', '梅田蓝天大厦', '梅田スカイビル'), 
        highlight: true,
        link: '/attractions/umeda-sky-building',
        mapLink: 'https://www.google.com/maps/search/?api=1&query=Umeda+Sky+Building+Osaka',
        price: '¥1,500',
        transit: t('Reach at 9am - Floating Garden Observatory & 360° city view. Duration: ~1.5 hours', '早上9点到达 - 空中庭园展望台 & 360°城市景观。停留时间: 约1.5小时', '午前9時到着 - 空中庭園展望台＆360°の街の眺め。所要時間：約1.5時間')
      },
      { 
        time: '11:00', 
        text: t('Travel to Osaka Aquarium Kaiyukan', '前往大阪海游馆', '大阪海遊館へ移動'),
        mapLink: 'https://www.google.com/maps/dir/?api=1&origin=Umeda+Sky+Building+Osaka&destination=Osaka+Aquarium+Kaiyukan&travelmode=transit',
        transit: t('Walk 5 mins to Osaka Station → JR Osaka Loop Line to Osakako Station (~20 mins train) → Walk 5 mins', '步行5分钟至大阪站 → JR大阪环状线至大阪港站 (~20分钟电车) → 步行5分钟', '大阪駅まで徒歩5分→JR大阪環状線で大阪港駅へ（電車約20分）→徒歩5分')
      },
      { 
        time: '11:30', 
        text: t('Osaka Aquarium Kaiyukan', '大阪海游馆', '大阪海遊館'), 
        highlight: true,
        link: '/attractions/osaka-aquarium',
        mapLink: 'https://www.google.com/maps/dir/?api=1&origin=Umeda+Sky+Building+Osaka&destination=Osaka+Aquarium+Kaiyukan&travelmode=transit',
        price: '¥2,700',
        transit: t('Duration: ~2-3 hours - One of Japan\'s largest aquariums with whale sharks & marine life', '停留时间: 约2-3小时 - 日本最大的水族馆之一，有鲸鲨 & 海洋生物', '所要時間：約2〜3時間 - 日本最大級の水族館、ジンベエザメ＆海洋生物')
      },
      { 
        time: '14:30', 
        text: t('Travel to Shinsaibashi', '前往心斋桥', '心斎橋へ移動'),
        mapLink: 'https://www.google.com/maps/dir/?api=1&origin=Osaka+Aquarium+Kaiyukan&destination=Shinsaibashi+Osaka&travelmode=transit',
        transit: t('Walk 5 mins to Osakako Station → Chuo Line to Honmachi → Midosuji Line to Shinsaibashi (~25 mins train) → Walk 2 mins', '步行5分钟至大阪港站 → 中央线至本町 → 御堂筋线至心斋桥 (~25分钟电车) → 步行2分钟', '大阪港駅まで徒歩5分→中央線で本町へ→御堂筋線で心斎橋へ（電車約25分）→徒歩2分')
      },
      { 
        time: '15:00', 
        text: t('Shinsaibashi', '心斋桥', '心斎橋'), 
        highlight: true,
        link: '/attractions/shinsaibashi',
        mapLink: 'https://www.google.com/maps/dir/?api=1&origin=Osaka+Aquarium+Kaiyukan&destination=Shinsaibashi+Osaka&travelmode=transit',
        transit: t('Duration: ~2 hours - Shopping Paradise (Daimaru/Parco). Bring Passport for Tax Free!', '停留时间: 约2小时 - 购物天堂 (大丸/Parco). 带护照退税!', '所要時間：約2時間 - ショッピングパラダイス（大丸/パルコ）。免税のためパスポート持参！')
      },
      { 
        time: '17:00', 
        text: t('Travel to Dotonbori', '前往道顿堀', '道頓堀へ移動'),
        mapLink: 'https://www.google.com/maps/dir/?api=1&origin=Shinsaibashi+Osaka&destination=Dotonbori+Osaka&travelmode=walking',
        transit: t('Walk 5 mins (connected to Shinsaibashi)', '步行5分钟 (与心斋桥相连)', '徒歩5分（心斎橋に接続）')
      },
      { 
        time: '17:15', 
        text: t('Dotonbori (Walk Around)', '道顿堀 (散步)', '道頓堀（散策）'), 
        highlight: true,
        link: '/attractions/dotonbori',
        mapLink: 'https://www.google.com/maps/dir/?api=1&origin=Shinsaibashi+Osaka&destination=Dotonbori+Osaka&travelmode=walking',
        transit: t('Duration: ~1.5 hours - Glico Man Sign & Street Food. Walk around and explore', '停留时间: 约1.5小时 - 格力高跑男广告牌 & 街头美食。散步探索', '所要時間：約1.5時間 - グリコマンサイン＆屋台料理。散策して探索')
      },
      { 
        time: '19:00', 
        text: t('Dinner in Dotonbori', '道顿堀晚餐', '道頓堀で夕食'),
        highlight: true,
        link: '/attractions/dotonbori',
        mapLink: 'https://www.google.com/maps/dir/?api=1&destination=Dotonbori+Osaka',
        transit: t('Various dining options in Dotonbori area. Return: Walk 5 mins to Namba Station → JR Osaka Loop Line to Momodani Station (~15 mins train) → Walk 2 mins to 1-chōme-12-11 Momodani', '道顿堀区域各种餐饮选择。返回: 步行5分钟至难波站 → JR大阪环状线至桃谷站 (~15分钟电车) → 步行2分钟至桃谷1-12-11', '道頓堀エリアのさまざまな食事オプション。帰り：難波駅まで徒歩5分→JR大阪環状線で桃谷駅へ（電車約15分）→桃谷1-12-11まで徒歩2分')
      },
    ],
  },
  {
    day: 8,
    date: t('Wed, Mar 25', '3月25日 周三', '3月25日（水）'),
    title: t('Kyoto', '京都', '京都'),
    location: t('Kyoto', '京都', '京都'),
    color: 'emerald',
    items: [
      { 
        time: '06:00', 
        text: t('Leave Airbnb (Osaka)', '离开Airbnb (大阪)', 'Airbnb出発（大阪）'),
        transit: t('Walk → Momodani Station (JR) → JR Osaka Loop Line → Kyobashi Station (~20 min) → Keihan Main Line → Fushimi-Inari Station (~40–45 min)', '步行 → 桃谷站 (JR) → JR大阪环状线 → 京桥站 (~20分钟) → 京阪本线 → 伏见稻荷站 (~40–45分钟)', '徒歩 → 桃谷駅（JR）→ JR大阪環状線 → 京橋駅（約20分）→ 京阪本線 → 伏見稲荷駅（約40〜45分）')
      },
      { 
        time: '07:20', 
        text: t('Fushimi Inari Taisha', '伏见稻荷大社', '伏見稲荷大社'), 
        highlight: true,
        link: '/attractions/fushimi-inari',
        mapLink: 'https://www.google.com/maps/dir/?api=1&destination=Fushimi+Inari+Taisha+Kyoto',
        price: 'Free',
        transit: t('07:20–08:30. Walk first torii gates, take photos. No mountain hike. Still early enough to avoid huge crowds.', '07:20–08:30。步行穿过鸟居、拍照。不爬山。仍足够早避开人潮。', '07:20〜08:30。鳥居を歩く、写真撮影。山登りなし。混雑を避けるにはまだ早い。')
      },
      { 
        time: '08:30', 
        text: t('Fushimi Inari → Kiyomizu Area', '伏见稻荷 → 清水区域', '伏見稲荷 → 清水エリア'),
        transit: t('Keihan Line → Kiyomizu-Gojo Station → Walk to bus stop → Bus 206 or 100 → Gojozaka / Kiyomizu-michi → Walk 10 min gentle uphill', '京阪线 → 清水五条站 → 步行至巴士站 → 巴士206或100 → 五条坂/清水道 → 步行10分钟缓上坡', '京阪線 → 清水五条駅 → バス停まで徒歩 → バス206または100 → 五条坂/清水道 → 徒歩10分ゆるやか上り')
      },
      { 
        time: '09:30', 
        text: t('Kiyomizu-dera Temple', '清水寺', '清水寺'), 
        highlight: true,
        link: '/attractions/kiyomizu',
        mapLink: 'https://www.google.com/maps/dir/?api=1&origin=Fushimi+Inari+Taisha+Kyoto&destination=Kiyomizu-dera+Temple+Kyoto&travelmode=transit',
        price: '¥400',
        transit: t('09:30–10:45. Entry ¥400. Great morning photos.', '09:30–10:45。门票¥400。早晨拍照佳。', '09:30〜10:45。入場¥400。朝の写真に最適。')
      },
      { 
        time: '10:45', 
        text: t('Ninenzaka & Sannenzaka (Short & Sweet)', '二年坂 & 三年坂 (短而精)', '二年坂・三年坂（短くて充実）'), 
        highlight: true,
        link: '/attractions/ninenzaka-sannenzaka',
        mapLink: 'https://www.google.com/maps/dir/?api=1&origin=Kiyomizu-dera+Temple+Kyoto&destination=Ninenzaka+Kyoto&travelmode=walking',
        price: '¥1,000–¥1,500',
        transit: t('10:45–12:00. 1 hour only. Walk the street, photos, snacks/souvenirs, quick lunch (no heavy sit-down). Lunch budget: ¥1,000–¥1,500 per person. Avoids shopping fatigue.', '10:45–12:00。仅1小时。逛街、拍照、小吃/纪念品、轻食 (无正式餐厅)。午餐预算: 每人¥1,000–¥1,500。避免购物疲劳。', '10:45〜12:00。1時間のみ。散策、写真、軽食/お土産、軽いランチ。予算¥1,000〜¥1,500/人。')
      },
      { 
        time: '12:00', 
        text: t('Yasaka Shrine', '八坂神社', '八坂神社'), 
        highlight: true,
        link: '/attractions/yasaka',
        mapLink: 'https://www.google.com/maps/dir/?api=1&origin=Ninenzaka+Kyoto&destination=Yasaka+Shrine+Kyoto&travelmode=walking',
        price: 'Free',
        transit: t('12:00–12:30. Rest + toilet break. Very easy walking.', '12:00–12:30。休息 + 洗手间。步行轻松。', '12:00〜12:30。休憩＋トイレ。とても楽な徒歩。')
      },
      { 
        time: '12:30', 
        text: t('Gion District Walk', '祇园散步', '祇園散策'), 
        highlight: true,
        link: '/attractions/gion',
        mapLink: 'https://www.google.com/maps/dir/?api=1&origin=Yasaka+Shrine+Kyoto&destination=Gion+District+Kyoto&travelmode=walking',
        price: 'Free',
        transit: t('12:30–14:30. Hanamikoji Street, traditional houses, matcha cafés. Slow walking, very flat.', '12:30–14:30。花见小路、传统建筑、抹茶咖啡。慢走，很平坦。', '12:30〜14:30。花見小路、伝統的家屋、抹茶カフェ。ゆっくり歩く、平坦。')
      },
      { 
        time: '14:30', 
        text: t('Kamogawa River (Rest Time)', '鸭川 (休息时间)', '鴨川（休息）'), 
        highlight: true,
        link: '/attractions/kamogawa',
        mapLink: 'https://www.google.com/maps/dir/?api=1&origin=Gion+District+Kyoto&destination=Kamogawa+River+Kyoto&travelmode=walking',
        note: t('(Sunset)', '(日落)', '（夕日）'),
        transit: t('14:30–16:00. Sit down, coffee / dessert. Let parents relax.', '14:30–16:00。坐下、咖啡/甜点。让长辈休息。', '14:30〜16:00。座って、コーヒー/デザート。ゆっくり休む。')
      },
      { 
        time: '17:30', 
        text: t('Unagi Dinner at Gion Unagi Kawato', '祇园うなぎ 川と (鳗鱼晚餐)', '祇園うなぎ 川と（うなぎディナー）'), 
        highlight: true,
        link: '/food/gion-unagi-kawato',
        mapLink: 'https://www.google.com/maps/search/?api=1&query=Gion+Unagi+Kawato+Kyoto',
        price: '¥5,000–¥6,000',
        transit: t('17:30–19:00. ¥5,000–¥6,000 per person. 1–1.5 hours. MUST reserve or split into 2 groups (10 people).', '17:30–19:00。每人¥5,000–¥6,000。1–1.5小时。必须预订或分2组 (10人)。', '17:30〜19:00。1人¥5,000〜¥6,000。1〜1.5時間。要予約または2グループに分ける（10人）。')
      },
      { 
        time: '19:15', 
        text: t('Return to Osaka', '返回大阪', '大阪へ戻る'),
        transit: t('Walk → Gion-Shijo Station → Keihan Line → Kyobashi (~45–50 min) → JR Loop Line → Momodani (~20 min). Back 20:45–21:15. Good timing, not too late.', '步行 → 祇园四条站 → 京阪线 → 京桥 (~45–50分钟) → JR环状线 → 桃谷 (~20分钟)。20:45–21:15抵大阪。时间合适，不会太晚。', '徒歩 → 祇園四条駅 → 京阪線 → 京橋（約45〜50分）→ JR環状線 → 桃谷（約20分）。20:45〜21:15着。程よい時間。')
      },
    ],
  },
  {
    day: 9,
    date: t('Thu, Mar 26', '3月26日 周四', '3月26日（木）'),
    title: t('Uji & Nara (Healing Route)', '宇治 & 奈良 (治愈路线)', '宇治・奈良（癒しルート）'),
    location: t('Nara', '奈良', '奈良'),
    color: 'teal',
    items: [
      { 
        time: '09:00', 
        text: t('Leave Airbnb (Osaka → Uji)', '离开Airbnb (大阪→宇治)', 'Airbnb出発（大阪→宇治）'),
        mapLink: 'https://www.google.com/maps/dir/?api=1&origin=Momodani+Station+Osaka&destination=Uji+Station+Kyoto&travelmode=transit',
        transit: t('Walk → Momodani Station (JR) → JR Osaka Loop Line → Kyobashi (~20 min) → Keihan Main Line → Uji Station (~45–50 min) → Walk 3–5 min to Uji town. Total travel: ~1h 15min', '步行 → 桃谷站 (JR) → JR大阪环状线 → 京桥 (~20分钟) → 京阪本线 → 宇治站 (~45–50分钟) → 步行3–5分钟至宇治。总行程约1小时15分', '徒歩 → 桃谷駅（JR）→ JR大阪環状線 → 京橋（約20分）→ 京阪本線 → 宇治駅（約45〜50分）→ 徒歩3〜5分。合計約1時間15分')
      },
      { 
        time: '10:30', 
        text: t('Nakamura Tokichi Honten (Matcha Café)', '中村藤吉本店 (抹茶咖啡)', '中村藤吉本店（抹茶カフェ）'), 
        highlight: true,
        link: '/food/nakamura-tokichi-uji',
        mapLink: 'https://www.google.com/maps/dir/?api=1&origin=Uji+Station+Kyoto&destination=Nakamura+Tokichi+Honten+Uji&travelmode=walking',
        price: '¥1,000–¥2,000',
        transit: t('10:30–11:15. Very close to Uji Station. Matcha parfait, soba, tea. Good early lunch/snack. For 10 people: expect queue → split group or takeaway matcha snacks.', '10:30–11:15。宇治站旁。抹茶芭菲、荞麦、茶。早午餐/轻食。10人可分批或外带。', '10:30〜11:15。宇治駅すぐ。抹茶パフェ・そば・茶。10人なら分団か持ち帰り推奨。')
      },
      { 
        time: '11:20', 
        text: t('Byōdō-in Temple (Phoenix Hall)', '平等院 (凤凰堂)', '平等院（鳳凰堂）'), 
        highlight: true,
        mapLink: 'https://www.google.com/maps/dir/?api=1&origin=Nakamura+Tokichi+Honten+Uji&destination=Byodoin+Temple+Uji&travelmode=walking',
        price: '¥600',
        transit: t('11:20–12:20. 10 min walk from Nakamura Tokichi. Phoenix Hall (on ¥10 coin), Byōdō-in Museum, garden walk. ~¥600. 1 hour. Highlight of Uji.', '11:20–12:20。从中村藤吉步行10分钟。凤凰堂（10円硬币）、博物馆、庭园。约¥600。1小时。宇治精华。', '11:20〜12:20。中村藤吉から徒歩10分。鳳凰堂・博物館・庭園。¥600。1時間。')
      },
      { 
        time: '12:30', 
        text: t('Ujigami Shrine + Uji River Walk', '宇治上神社 + 宇治川散步', '宇治上神社・宇治川散策'), 
        highlight: true,
        link: '/attractions/ujigami',
        mapLink: 'https://www.google.com/maps/dir/?api=1&origin=Byodoin+Temple+Uji&destination=Ujigami+Shrine+Uji&travelmode=walking',
        price: 'Free',
        transit: t('12:30–13:15. UNESCO shrine. Flat riverside walking (easy for parents). Ice cream / tea shops.', '12:30–13:15。UNESCO神社。平坦河岸步行。冰淇淋/茶店。', '12:30〜13:15。ユネスコ神社。河畔の平坦な散歩。')
      },
      { 
        time: '13:30', 
        text: t('Transfer Uji → Nara', '宇治 → 奈良', '宇治→奈良'),
        mapLink: 'https://www.google.com/maps/dir/?api=1&origin=Uji+Station+Kyoto&destination=Nara+Station&travelmode=transit',
        transit: t('Walk → Uji Station (JR Nara Line) → JR Nara Line → JR Nara Station (~30 min)', '步行 → 宇治站 (JR奈良线) → JR奈良线 → 奈良站 (~30分钟)', '徒歩 → 宇治駅（JR奈良線）→ JR奈良線 → 奈良駅（約30分）')
      },
      { 
        time: '14:15', 
        text: t('Nara Park (Deer Feeding)', '奈良公园 (喂鹿)', '奈良公園（鹿せんべい）'), 
        highlight: true,
        link: '/attractions/nara-park',
        mapLink: 'https://www.google.com/maps/dir/?api=1&origin=Nara+Station&destination=Nara+Park+Nara&travelmode=walking',
        price: '¥200',
        transit: t('14:15–15:30. Buy deer crackers (¥200). Photos with deer. Relaxing walk. Large park, flat.', '14:15–15:30。鹿仙贝¥200。与鹿拍照。平坦大公园。', '14:15〜15:30。鹿せんべい¥200。平坦な公園。')
      },
      { 
        time: '15:30', 
        text: t('Tōdai-ji Temple (Great Buddha)', '东大寺 (大佛)', '東大寺（大仏）'), 
        highlight: true,
        link: '/attractions/todaiji',
        mapLink: 'https://www.google.com/maps/dir/?api=1&origin=Nara+Park+Nara&destination=Todaiji+Temple+Nara&travelmode=walking',
        price: '¥600',
        transit: t('15:30–16:30. Entry ¥600. Short walk from Nara Park.', '15:30–16:30。门票¥600。奈良公园步行即达。', '15:30〜16:30。¥600。奈良公園から徒歩。')
      },
      { 
        time: '16:30', 
        text: t('Kasuga Taisha Shrine', '春日大社', '春日大社'), 
        highlight: true,
        link: '/attractions/kasuga',
        mapLink: 'https://www.google.com/maps/dir/?api=1&origin=Todaiji+Temple+Nara&destination=Kasuga+Taisha+Nara&travelmode=walking',
        price: 'Free',
        transit: t('16:30–17:15. Lantern forest path. Peaceful atmosphere. Optional if group tired (can skip).', '16:30–17:15。石灯笼森林。可选，累可跳过。', '16:30〜17:15。石灯籠の森。疲れたらスキップ可。')
      },
      { 
        time: '17:30', 
        text: t('Mt. Wakakusa (Sunset View)', '若草山 (日落)', '若草山（夕景）'), 
        highlight: true,
        link: '/attractions/wakakusa',
        mapLink: 'https://www.google.com/maps/dir/?api=1&origin=Kasuga+Taisha+Nara&destination=Mt+Wakakusa+Nara&travelmode=walking',
        note: t('(Optional)', '(可选)', '（オプション）'),
        price: '¥150',
        transit: t('17:30–18:00. Entry ¥150. Gentle slope (NOT full mountain hike). Great city view. If parents tired → SKIP and rest at café.', '17:30–18:00。¥150。缓坡。累可跳过，咖啡厅休息。', '17:30〜18:00。¥150。ゆるやか。疲れたらスキップ可。')
      },
      { 
        time: '18:30', 
        text: t('Return to Osaka (Momodani)', '返回大阪 (桃谷)', '大阪・桃谷へ戻る'),
        mapLink: 'https://www.google.com/maps/dir/?api=1&origin=Nara+Station&destination=Momodani+Station+Osaka&travelmode=transit',
        transit: t('Walk → JR Nara Station → JR Nara Line → Kyobashi (~45 min) → JR Osaka Loop Line → Momodani (~20 min) → Walk to Airbnb. Total return ~1h 10min. Back 19:45–20:00. Perfect for dinner in Namba.', '步行 → 奈良站 → JR奈良线 → 京桥 (~45分钟) → JR环状线 → 桃谷 (~20分钟) → 步行回Airbnb。返程约1小时10分。19:45–20:00抵。可至难波晚餐。', '徒歩 → 奈良駅 → JR奈良線 → 京橋（約45分）→ JR環状線 → 桃谷（約20分）→ Airbnb。19:45〜20:00着。難波で夕食可。')
      },
    ],
  },
  {
    day: 10,
    date: t('Fri, Mar 27', '3月27日 周五', '3月27日（金）'),
    title: t('Osaka City Highlights', '大阪城市精华', '大阪市内観光'),
    location: t('Osaka', '大阪', '大阪'),
    color: 'orange',
    note: t('Osaka Amazing Pass (RM101) covers: Metro + city buses, Osaka Castle Tower, Tsutenkaku Observation Deck, and many other attractions. JR lines and buses outside Osaka City are NOT covered.', '大阪周游卡 (RM101) 包含: 地铁 + 城市巴士, 大阪城天守阁, 通天阁展望台, 以及许多其他景点。JR线和市外巴士不包含。', '大阪周遊パス（RM101）に含まれるもの: 地下鉄＋市バス、大阪城天守閣、通天閣展望台、その他多くの観光スポット。JR線・市外バスは含まれません。'),
    items: [
      { 
        time: '06:00', 
        text: t('Leave Airbnb → Katsuōji Temple', '离开Airbnb → 勝尾寺', 'Airbnb出発 → 勝尾寺'),
        transit: t('Walk → Momodani Station → JR Osaka Loop Line → Shin-Osaka → Midosuji Line → Minami-Ibaraki → Hankyu Bus → Katsuōji (~1.5 hours). Note: Bus NOT covered by Amazing Pass', '步行 → 桃谷站 → JR大阪环状线 → 新大阪 → 御堂筋线 → 南茨木 → 阪急巴士 → 勝尾寺 (~1.5小时)。注意: 巴士不包含在周游卡内', '徒歩 → 桃谷駅 → JR大阪環状線 → 新大阪 → 御堂筋線 → 南茨木 → 阪急バス → 勝尾寺（約1.5時間）。注意: バスは周遊パスに含まれません')
      },
      { 
        time: '09:00', 
        text: t('Katsuōji → Osaka Castle', '勝尾寺 → 大阪城', '勝尾寺 → 大阪城'), 
        transit: t('Bus → Minami-Ibaraki → Umeda → Morinomiya → Walk (~1h 20m). Note: Bus NOT covered by Amazing Pass', '巴士 → 南茨木 → 梅田 → 森之宫 → 步行 (~1小时20分钟)。注意: 巴士不包含在周游卡内', 'バス → 南茨木 → 梅田 → 森ノ宮 → 徒歩（約1時間20分）。注意: バスは周遊パスに含まれません')
      },
      { 
        time: '10:30', 
        text: t('Osaka Castle Tower', '大阪城天守阁', '大阪城天守閣'), 
        highlight: true,
        link: '/attractions/osaka-castle',
        mapLink: 'https://www.google.com/maps/dir/?api=1&origin=Morinomiya+Station+Osaka&destination=Osaka+Castle&travelmode=walking',
        price: t('FREE (Amazing Pass)', '免费 (周游卡)', '無料（周遊パス）'),
        transit: t('Osaka Castle Tower: FREE (Amazing Pass)', '大阪城天守阁: 免费 (周游卡)', '大阪城天守閣: 無料（周遊パス）')
      },
      { 
        time: '12:00', 
        text: t('Osaka Castle → Kuromon Market (Lunch)', '大阪城 → 黑门市场 (午餐)', '大阪城 → 黒門市場（ランチ）'),
        transit: t('Morinomiya → Namba → Walk (~25 min). Metro covered by Amazing Pass', '森之宫 → 难波 → 步行 (~25分钟)。地铁包含在周游卡内', '森ノ宮 → 難波 → 徒歩（約25分）。地下鉄は周遊パスに含まれる')
      },
      { 
        time: '14:00', 
        text: t('Kuromon Market (Lunch)', '黑门市场 (午餐)', '黒門市場（ランチ）'), 
        highlight: true,
        link: '/attractions/kuromon-market',
        mapLink: 'https://www.google.com/maps/dir/?api=1&origin=Osaka+Castle&destination=Kuromon+Ichiba+Market+Osaka&travelmode=transit',
        price: '¥1,500-¥3,000',
        transit: t('Street food / seafood / wagyu. Budget: ¥1,500-¥3,000 per person', '街头美食 / 海鲜 / 和牛。预算: 每人¥1,500-¥3,000', '屋台料理 / 海鮮 / 和牛。予算: 1人あたり¥1,500-¥3,000')
      },
      { 
        time: '14:00', 
        text: t('Kuromon Market → Namba Yasaka Shrine', '黑门市场 → 难波八阪神社', '黒門市場 → 難波八阪神社'),
        transit: t('Walk 10 minutes', '步行10分钟', '徒歩10分')
      },
      { 
        time: '15:00', 
        text: t('Namba Yasaka Shrine', '难波八阪神社', '難波八阪神社'), 
        highlight: true,
        link: '/attractions/namba-yasaka-shrine',
        mapLink: 'https://www.google.com/maps/dir/?api=1&origin=Kuromon+Ichiba+Market+Osaka&destination=Namba+Yasaka+Shrine+Osaka&travelmode=walking',
        price: 'Free',
        transit: t('Shrine entrance: FREE', '神社入口: 免费', '神社入場: 無料')
      },
      { 
        time: '15:00', 
        text: t('Namba Yasaka → Shinsekai + Tsutenkaku', '难波八阪 → 新世界 + 通天阁', '難波八阪 → 新世界＋通天閣'),
        transit: t('Namba → Dobutsuen-mae → Walk. Metro covered by Amazing Pass', '难波 → 动物园前 → 步行。地铁包含在周游卡内', '難波 → 動物園前 → 徒歩。地下鉄は周遊パスに含まれる')
      },
      { 
        time: '16:00', 
        text: t('Tsutenkaku Observation Deck', '通天阁展望台', '通天閣展望台'), 
        highlight: true,
        link: '/attractions/tsutenkaku',
        mapLink: 'https://www.google.com/maps/dir/?api=1&destination=Tsutenkaku+Osaka',
        price: t('FREE (Amazing Pass). Outdoor deck optional: ¥300', '免费 (周游卡)。户外展望台可选: ¥300', '無料（周遊パス）。屋外デッキオプション: ¥300'),
        transit: t('Photos + souvenirs. Optional spending: ¥500-¥2,000 for souvenirs/gachapon', '拍照 + 纪念品。可选消费: ¥500-¥2,000 用于纪念品/扭蛋', '写真撮影＋お土産。オプション支出: お土産/ガチャポンで¥500-¥2,000')
      },
      { 
        time: '18:00', 
        text: t('Jumbo Fishing Boat Tsurikichi (Dinner)', 'ジャンボ釣船 つり吉 (晚餐)', 'ジャンボ釣船 つり吉（ディナー）'), 
        highlight: true,
        link: '/food/tsurikichi-shinsekai',
        mapLink: 'https://www.google.com/maps/dir/?api=1&origin=Tsutenkaku+Osaka&destination=Jumbo+Fishing+Boat+Tsurikichi+Shinsekai',
        price: '¥3,000-¥6,000',
        transit: t('Walk 5 minutes. Fishing + cooking fish: ¥3,000-¥6,000. Drinks: ¥500-¥1,500. Duration: ~1.5-2 hours. BIGGEST EXPENSE - For 10 people: ¥40,000-¥70,000 total', '步行5分钟。钓鱼 + 烹饪: ¥3,000-¥6,000。饮料: ¥500-¥1,500。停留时间: 约1.5-2小时。最大支出 - 10人总计: ¥40,000-¥70,000', '徒歩5分。釣り＋魚を調理: ¥3,000-¥6,000。飲み物: ¥500-¥1,500。所要時間: 約1.5〜2時間。最大の支出 - 10人で合計: ¥40,000-¥70,000')
      },
      { 
        time: '20:30', 
        text: t('Return to Airbnb (1-chōme-12-11 Momodani, Ikuno Ward)', '返回Airbnb (生野区桃谷1-12-11)', 'Airbnbに戻る（生野区桃谷1-12-11）'),
        transit: t('Dobutsuen-mae → Tennoji → Momodani. Metro covered by Amazing Pass', '动物园前 → 天王寺 → 桃谷。地铁包含在周游卡内', '動物園前 → 天王寺 → 桃谷。地下鉄は周遊パスに含まれる')
      },
    ],
  },
  {
    day: 11,
    date: t('Sat, Mar 28', '3月28日 周六', '3月28日（土）'),
    title: t('Fly Home', '回家', '帰国'),
    location: t('Departure', '出发', '出発'),
    color: 'orange',
    items: [
      { 
        time: '06:30', 
        text: t('Private Van to KIX (CX Group)', '私人包车前往关西机场 (国泰组)', '関空へプライベートバン（CXグループ）'),
        transit: t('Travel time: ~50-60 mins (1-chōme-12-11 Momodani, Ikuno Ward → KIX)', '车程: 约50-60分钟 (生野区桃谷1-12-11 → 关西机场)', '移動時間：約50〜60分（生野区桃谷1-12-11→関空）')
      },
      { 
        time: '07:30', 
        text: t('CX Check-in', '国泰值机', 'CXチェックイン'),
        special: true
      },
      { 
        time: '07:30', 
        text: t('Private Van to KIX (TG Group)', '私人包车前往关西机场 (泰航组)', '関空へプライベートバン（TGグループ）'),
        transit: t('Travel time: ~50-60 mins (1-chōme-12-11 Momodani, Ikuno Ward → KIX)', '车程: 约50-60分钟 (生野区桃谷1-12-11 → 关西机场)', '移動時間：約50〜60分（生野区桃谷1-12-11→関空）')
      },
      { 
        time: '08:30', 
        text: t('TG Check-in', '泰航值机', 'TGチェックイン'),
        special: true
      },
      { 
        time: '11:00', 
        text: t('Flight Departs (KIX → PEN)', '航班起飞 (关西机场 → 槟城)', 'フライト出発（関空→ペナン）')
      },
    ],
  },
]
