// Schedule data function - takes translation function t as parameter
export const getScheduleData = (t) => [
  {
    day: 1,
    date: 'Wed, Mar 18',
    title: t('Arrival', '抵达'),
    location: 'Tokyo',
    color: 'indigo',
    items: [
      { time: '21:15', text: t('CX Lands (HND)', '国泰降落 (HND)') },
      { time: '22:30', text: t('TG Lands (HND)', '泰航降落 (HND)') },
      { 
        time: '23:30', 
        text: t('Private Van to Tokyo Airbnb', '私人包车前往东京Airbnb'),
        transit: t('Travel time: ~45-60 mins (HND → Katsushika-ku)', '车程: 约45-60分钟 (羽田机场 → 葛饰区)')
      },
      { time: '00:30', text: t('Arrive at Tokyo Airbnb', '抵达东京Airbnb') },
    ],
  },
  {
    day: 2,
    date: 'Thu, Mar 19',
    title: t('Tokyo City Tour', '东京城市游'),
    location: 'Tokyo',
    color: 'indigo',
    items: [
      { 
        time: '08:00', 
        text: t('Depart from Airbnb (Katsushika-ku - 5 mins walk to nearest station)', '从Airbnb出发 (葛饰区 - 步行5分钟至最近车站)'),
        transit: t('Walk 5 mins to nearest station → Keisei Line/Toei Asakusa Line to Higashi-Ginza → Walk 5 mins to Tsukiji Outer Market (~30-35 mins train)', '步行5分钟至最近车站 → 京成线/都营浅草线至东银座 → 步行5分钟至筑地外市场 (~30-35分钟电车)')
      },
      { 
        time: '09:00', 
        text: t('Tsukiji Outer Market', '筑地外市场'), 
        highlight: true,
        link: '/attractions/tsukiji-market',
        mapLink: 'https://www.google.com/maps/dir/?api=1&destination=Tsukiji+Outer+Market+Tokyo',
        price: 'Free',
        transit: t('Duration: ~2.5 hours (Walk around market, try street food, fresh seafood, shops)', '停留时间: 约2.5小时 (漫步市场, 品尝街头美食, 新鲜海鲜, 商店)')
      },
      { 
        time: '11:30', 
        text: t('Pain Maison (塩パン屋)', 'Pain Maison (盐面包店)'), 
        highlight: true,
        link: '/food/pain-maison',
        mapLink: 'https://www.google.com/maps/search/?api=1&query=Pain+Maison+Tokyo',
        price: '¥120-¥190',
        transit: t('Walk from Tsukiji Market area (Duration: ~15-20 mins for purchase - Salt bread bakery, max 20 salt bread, max 15 melon bread per person)', '从筑地市场区域步行 (停留时间: 购买约15-20分钟 - 盐面包店, 每人最多20个盐面包, 最多15个菠萝包)')
      },
      { 
        time: '11:50', 
        text: t('Travel to Ginza', '前往银座'),
        mapLink: 'https://www.google.com/maps/dir/?api=1&origin=Tsukiji+Outer+Market+Tokyo&destination=Ginza+Tokyo&travelmode=walking',
        transit: t('Walk 10-15 mins from Pain Maison to Ginza Station', '从Pain Maison步行10-15分钟至银座站')
      },
      { 
        time: '12:00', 
        text: t('Ginza Kanimitsu (Lunch)', '银座蟹みつ (午餐)'), 
        highlight: true,
        link: '/food/ginza-kanimitsu',
        mapLink: 'https://www.google.com/maps/dir/?api=1&destination=Ginza+Kanimitsu+Tokyo',
        transit: t('Walk 3-5 mins from Ginza Station (Duration: ~1-1.5 hours - Crab restaurant, lunch sets from ¥4,600-¥11,000)', '从银座站步行3-5分钟 (停留时间: 约1-1.5小时 - 螃蟹餐厅, 午餐套餐¥4,600-¥11,000)')
      },
      { 
        time: '13:30', 
        text: t('Ginza Shopping', '银座购物'),
        mapLink: 'https://www.google.com/maps/dir/?api=1&destination=Ginza+Tokyo',
        transit: t('Walk within Ginza area (Duration: ~30 mins)', '银座区内步行 (停留时间: 约30分钟)')
      },
      { 
        time: '14:00', 
        text: t('Nakamura Tokichi (Matcha Parfait)', '中村藤吉 (抹茶芭菲)'), 
        highlight: true,
        link: '/food/nakamura-tokichi-ginza',
        mapLink: 'https://www.google.com/maps/search/?api=1&query=Nakamura+Tokichi+Ginza',
        price: 'Tea Time',
        transit: t('Walk 3-5 mins within Ginza area (Duration: ~1 hour)', '银座区内步行3-5分钟 (停留时间: 约1小时)')
      },
      { 
        time: '15:30', 
        text: t('Travel to Tokyo Station', '前往东京站'),
        mapLink: 'https://www.google.com/maps/dir/?api=1&origin=Ginza+Tokyo&destination=Tokyo+Station&travelmode=walking',
        transit: t('Walk 10-15 mins from Ginza or Marunouchi Line from Ginza-itchome to Tokyo Station (~5 mins train)', '从银座步行10-15分钟或丸之内线从银座一丁目至东京站 (~5分钟电车)')
      },
      { 
        time: '16:00', 
        text: t('Tokyo Station (Explore & Buy Souvenirs)', '东京站 (参观 & 购买纪念品)'), 
        highlight: true,
        link: '/attractions/tokyo-station',
        mapLink: 'https://www.google.com/maps/dir/?api=1&destination=Tokyo+Station',
        transit: t('Duration: ~1.5 hours (Explore station architecture, buy souvenirs at Character Street & Gransta)', '停留时间: 约1.5小时 (参观车站建筑, 在角色街 & Gransta购买纪念品)')
      },
      { 
        time: '17:30', 
        text: t('Travel to Asakusa for Dinner', '前往浅草晚餐'),
        mapLink: 'https://www.google.com/maps/dir/?api=1&origin=Tokyo+Station&destination=Asakusa+Tokyo',
        transit: t('Walk 5 mins to Tokyo Station → Ginza Line to Asakusa Station (~15 mins train) → Walk 3-5 mins', '步行5分钟至东京站 → 银座线至浅草站 (~15分钟电车) → 步行3-5分钟')
      },
      { 
        time: '18:00', 
        text: t('Asakusa - Monja Yaki & Okonomiyaki', '浅草 - 文字烧 & 大阪烧'), 
        highlight: true,
        link: '/food/asakusa-monja',
        mapLink: 'https://www.google.com/maps/search/?api=1&query=Monja+Yaki+Asakusa+Okonomiyaki',
        note: t('(Dinner)', '(晚餐)'),
        transit: t('Duration: ~1.5 hours (Traditional Tokyo street food experience)', '停留时间: 约1.5小时 (传统东京街头美食体验)')
      },
      { 
        time: '19:30', 
        text: t('Return to Airbnb (Katsushika-ku)', '返回Airbnb (葛饰区)'),
        transit: t('Walk 3-5 mins to Asakusa Station → Keisei Line/Toei Asakusa Line to nearest station in Katsushika-ku (~20-25 mins train) → Walk 5 mins', '步行3-5分钟至浅草站 → 京成线/都营浅草线至葛饰区最近车站 (~20-25分钟电车) → 步行5分钟')
      },
    ],
  },
  {
    day: 3,
    date: 'Fri, Mar 20',
    title: t('Graduation Day', '毕业典礼日'),
    location: 'Tokyo/Saitama',
    color: 'indigo',
    isHoliday: true,
    items: [
      { 
        time: '08:00', 
        text: t('Depart from Airbnb (Katsushika-ku - 5 mins walk to nearest station)', '从Airbnb出发 (葛饰区 - 步行5分钟至最近车站)'),
        transit: t('Walk 5 mins to nearest station → Keisei Line/Toei Asakusa Line to Asakusa Station (~20-25 mins train) → Walk 5 mins', '步行5分钟至最近车站 → 京成线/都营浅草线至浅草站 (~20-25分钟电车) → 步行5分钟')
      },
      { 
        time: '09:00', 
        text: t('Asakusa (Senso-ji Temple)', '浅草 (浅草寺)'), 
        highlight: true,
        link: '/attractions/sensoji',
        mapLink: 'https://www.google.com/maps/dir/?api=1&destination=Senso-ji+Temple+Tokyo',
        price: 'Free',
        transit: t('Duration: ~2 hours (Explore temple & Nakamise Street)', '停留时间: 约2小时 (参观寺庙 & 仲见世通)')
      },
      { 
        time: '11:30', 
        text: t('Ichiran Ramen (Lunch)', '一兰拉面 (午餐)'),
        highlight: true,
        link: '/food/ichiran-ramen',
        mapLink: 'https://www.google.com/maps/search/?api=1&query=Ichiran+Ramen+Asakusa+Tokyo',
        transit: t('Walk 5-10 mins from Senso-ji (Duration: ~45 mins - Famous tonkotsu ramen, expect possible wait)', '从浅草寺步行5-10分钟 (停留时间: 约45分钟 - 著名豚骨拉面, 可能需要排队)')
      },
      { 
        time: '13:00', 
        text: t('Travel to Saitama for Graduation', '前往埼玉参加毕业典礼'),
        transit: t('Walk 5-10 mins to Asakusa Station → Ginza Line to Ueno → JR Utsunomiya Line to Omiya → Tobu Skytree Line to Miyashiro Station (~1h 20m train)', '步行5-10分钟至浅草站 → 银座线至上野 → JR宇都宫线至大宫 → 东武晴空塔线至宫代站 (~1小时20分钟电车)')
      },
      { 
        time: '14:30', 
        text: t('Nippon Institute of Technology (Graduation Ceremony)', '日本工业大学 (毕业典礼)'), 
        special: true,
        mapLink: 'https://www.google.com/maps/dir/?api=1&destination=Nippon+Institute+of+Technology+Miyashiro+Saitama',
        transit: t('Walk 10 mins from Miyashiro Station (Duration: ~2-3 hours)', '从宫代站步行10分钟 (停留时间: 约2-3小时)')
      },
      { 
        time: '17:30', 
        text: t('Travel to Shibuya', '前往涩谷'),
        transit: t('Walk 10 mins to Miyashiro Station → Tobu Skytree Line to Oshiage → Hanzomon Line to Shibuya (~1h 20m train)', '步行10分钟至宫代站 → 东武晴空塔线至押上 → 半藏门线至涩谷 (~1小时20分钟电车)')
      },
      { 
        time: '19:00', 
        text: t('Shibuya - Crossing & Hachiko Statue', '涩谷 - 十字路口 & 八公像'), 
        highlight: true,
        link: '/attractions/shibuya',
        mapLink: 'https://www.google.com/maps/dir/?api=1&destination=Shibuya+Scramble+Crossing+Tokyo',
        transit: t('Walk 3 mins from Shibuya Station (Duration: ~30-45 mins - Famous scramble crossing & Hachiko statue)', '从涩谷站步行3分钟 (停留时间: 约30-45分钟 - 著名十字路口 & 八公像)')
      },
      { 
        time: '20:00', 
        text: t('Tsukada Shabu Shabu (Graduation Celebration Dinner)', '塚田しゃぶしゃぶ (毕业庆功晚餐)'), 
        highlight: true,
        link: '/food/tsukada-shabu',
        mapLink: 'https://www.google.com/maps/search/?api=1&query=Tsukada+Shabu+Shabu+Shibuya+Tokyo',
        transit: t('Walk 3-5 mins from Shibuya Station to Shibuya Scramble Square 12F (Duration: ~1.5-2 hours - Shabu shabu restaurant, hours: 17:00-23:00)', '从涩谷站步行3-5分钟至涩谷Scramble Square 12楼 (停留时间: 约1.5-2小时 - 涮涮锅餐厅, 营业时间: 17:00-23:00)')
      },
      { 
        time: '22:00', 
        text: t('Return to Airbnb (Katsushika-ku)', '返回Airbnb (葛饰区)'),
        transit: t('Walk 3 mins to Shibuya Station → Hanzomon Line to Oshiage → Keisei Line/Toei Asakusa Line to nearest station in Katsushika-ku (~35-40 mins train) → Walk 5 mins', '步行3分钟至涩谷站 → 半藏门线至押上 → 京成线/都营浅草线至葛饰区最近车站 (~35-40分钟电车) → 步行5分钟')
      },
    ],
  },
  {
    day: 4,
    date: 'Sat, Mar 21',
    title: t('Move to Osaka', '前往大阪'),
    location: 'Osaka',
    color: 'orange',
    items: [
      { 
        time: '10:30', 
        text: t('Travel to Afuri Yurakucho', '前往阿夫利有乐町'),
        transit: t('Walk 5 mins to nearest station in Katsushika-ku → Keisei Line/Toei Asakusa Line to Oshiage → Hanzomon Line to Otemachi → Walk 5 mins to Tokyo Station → Walk 5-10 mins to Yurakucho (~45-50 mins total)', '步行5分钟至葛饰区最近车站 → 京成线/都营浅草线至押上 → 半藏门线至大手町 → 步行5分钟至东京站 → 步行5-10分钟至有乐町 (~45-50分钟总计)')
      },
      { 
        time: '11:00', 
        text: t('Afuri Yurakucho (Lunch)', '阿夫利有乐町 (午餐)'), 
        highlight: true,
        link: '/food/afuri-yurakucho',
        mapLink: 'https://www.google.com/maps/search/?api=1&query=Afuri+Yurakucho+Tokyo',
        price: '¥900-¥1,500',
        transit: t('Duration: ~1 hour (Yuzu ramen, unique citrus flavor - perfect stop before Shinkansen)', '停留时间: 约1小时 (柚子拉面, 独特柑橘风味 - 新干线出发前的完美停留点)')
      },
      { 
        time: '12:00', 
        text: t('Travel to Tokyo Station', '前往东京站'),
        mapLink: 'https://www.google.com/maps/dir/?api=1&origin=Yurakucho+Tokyo&destination=Tokyo+Station&travelmode=walking',
        transit: t('Walk 5-10 mins from Yurakucho to Tokyo Station', '从有乐町步行5-10分钟至东京站')
      },
      { 
        time: '13:00', 
        text: t('Shinkansen to Shin-Osaka', '新干线至新大阪'),
        mapLink: 'https://www.google.com/maps/dir/?api=1&origin=Tokyo+Station&destination=Shin-Osaka+Station&travelmode=transit',
        transit: t('Travel: ~2.5 hrs (Right side for Fuji) - Ticket: ¥13,870', '车程: 约2.5小时 (右侧看富士山) - 票价: ¥13,870')
      },
      { 
        time: '15:30', 
        text: t('Check-in Osaka Airbnb (JR Momodani Station)', '入住大阪Airbnb (JR桃谷站)'),
        mapLink: 'https://www.google.com/maps/dir/?api=1&origin=Shin-Osaka+Station&destination=JR+Momodani+Station+Osaka&travelmode=transit',
        transit: t('Walk 2 mins to Shin-Osaka Station → JR Osaka Loop Line to Momodani Station (~20 mins train) → Walk 2 mins', '步行2分钟至新大阪站 → JR大阪环状线至桃谷站 (~20分钟电车) → 步行2分钟')
      },
      { 
        time: '17:50', 
        text: t('Group 3 lands at KIX', '第三组抵达关西机场'),
        muted: true
      },
      { 
        time: '18:30', 
        text: t('Private Van to Osaka Airbnb', '私人包车前往大阪Airbnb'),
        transit: t('Travel time: ~50-60 mins (KIX → JR Momodani Station area)', '车程: 约50-60分钟 (关西机场 → JR桃谷站附近)')
      },
      { 
        time: '20:00', 
        text: t('Reunion Dinner (Dotonbori)', '团圆晚餐 (道顿堀)'), 
        highlight: true,
        link: '/attractions/dotonbori',
        mapLink: 'https://www.google.com/maps/dir/?api=1&destination=Dotonbori+Osaka',
        special: true 
      },
    ],
  },
  {
    day: 5,
    date: 'Sun, Mar 22',
    title: t('Kobe Day Trip', '神户一日游'),
    location: 'Kobe',
    color: 'red',
    items: [
      { 
        time: '09:30', 
        text: t('Depart from Airbnb (JR Momodani Station)', '从Airbnb出发 (JR桃谷站)'),
        transit: t('Walk 2 mins to Momodani Station → JR Osaka Loop Line to Osaka Station → JR Kobe Line to Sannomiya Station (~30 mins train) → Walk 10 mins', '步行2分钟至桃谷站 → JR大阪环状线至大阪站 → JR神户线至三宫站 (~30分钟电车) → 步行10分钟')
      },
      { 
        time: '10:30', 
        text: t('Meriken Park & Harborland', '美利坚公园 & 港湾乐园'), 
        highlight: true,
        link: '/attractions/harborland',
        mapLink: 'https://www.google.com/maps/dir/?api=1&destination=Meriken+Park+Kobe',
        price: 'Free',
        transit: t('Duration: ~1.5 hours (BE KOBE Sign, Port Tower Photos)', '停留时间: 约1.5小时 (BE KOBE标志, 神户塔拍照)')
      },
      { 
        time: '12:00', 
        text: t('Kobe Steak Nick (Lunch)', 'Kobe Steak Nick (午餐)'), 
        highlight: true,
        link: '/food/kobe-steak-nick',
        mapLink: 'https://www.google.com/maps/search/?api=1&query=Kobe+Steak+Nick+Kobe',
        price: '¥6,000-¥7,000',
        transit: t('Walk 10-15 mins from Meriken Park (Duration: ~1-1.5 hours - Authentic Kobe beef)', '从美利坚公园步行10-15分钟 (停留时间: 约1-1.5小时 - 正宗神户牛肉)')
      },
      { 
        time: '13:30', 
        text: t('Travel to Rokkosan Pasture', '前往六甲山牧场'),
        transit: t('Walk 5-10 mins to Sannomiya Station → Train to Rokko Station (~20 mins train) → Walk to Rokko Cable Car station (~5 mins walk) → Rokko Cable Car to Rokko-sancho (~10 mins ropeway) → Bus or walk to Pasture (~10-15 mins)', '步行5-10分钟至三宫站 → 电车至六甲站 (~20分钟电车) → 步行至六甲缆车站 (~5分钟步行) → 六甲缆车至六甲山顶 (~10分钟缆车) → 巴士或步行至牧场 (~10-15分钟)')
      },
      { 
        time: '14:30', 
        text: t('Rokkosan Pasture (Sheep)', '六甲山牧场'), 
        highlight: true,
        link: '/attractions/rokkosan-pasture',
        mapLink: 'https://www.google.com/maps/dir/?api=1&destination=Rokkosan+Pasture+Kobe',
        price: '¥500',
        transit: t('Duration: ~2 hours (Interact with sheep & enjoy nature)', '停留时间: 约2小时 (与羊互动 & 享受大自然)')
      },
      { 
        time: '16:30', 
        text: t('Descend from Rokkosan Pasture', '从六甲山牧场下山'),
        transit: t('Walk or bus to Rokko-sancho (~10-15 mins) → Rokko Cable Car to Rokko Cable station (~10 mins ropeway) → Train to Sannomiya Station (~20 mins train) → Walk 5-10 mins to Gashoken', '步行或巴士至六甲山顶 (~10-15分钟) → 六甲缆车至六甲缆车站 (~10分钟缆车) → 电车至三宫站 (~20分钟电车) → 步行5-10分钟至賀正軒')
      },
      { 
        time: '17:30', 
        text: t('Gashoken (Dinner)', '賀正軒 (晚餐)'), 
        highlight: true,
        link: '/food/gashoken',
        mapLink: 'https://www.google.com/maps/search/?api=1&query=Gashoken+Sannomiya+Kobe',
        price: '¥1,100-¥1,880',
        transit: t('Duration: ~1 hour (Tonkotsu ramen, unique fusion varieties like Basil Cheese Ramen)', '停留时间: 约1小时 (豚骨拉面, 独特融合品种如罗勒芝士拉面)')
      },
      { 
        time: '18:30', 
        text: t('Travel to Kobe Port Tower', '前往神户塔'),
        mapLink: 'https://www.google.com/maps/dir/?api=1&origin=Gashoken+Kobe&destination=Kobe+Port+Tower',
        transit: t('Walk 10-15 mins from Gashoken', '从賀正軒步行10-15分钟')
      },
      { 
        time: '18:45', 
        text: t('Kobe Port Tower (Night View)', '神户塔 (夜景)'), 
        highlight: true,
        link: '/attractions/kobe-port',
        mapLink: 'https://www.google.com/maps/dir/?api=1&destination=Kobe+Port+Tower',
        price: '¥700',
        transit: t('Duration: ~1 hour', '停留时间: 约1小时')
      },
      { 
        time: '20:00', 
        text: t('Return to Airbnb (JR Momodani Station)', '返回Airbnb (JR桃谷站)'),
        transit: t('Walk 10 mins to Sannomiya Station → JR Kobe Line to Osaka Station (~15 mins train) → JR Osaka Loop Line to Momodani Station (~15 mins train) → Walk 2 mins', '步行10分钟至三宫站 → JR神户线至大阪站 (~15分钟电车) → JR大阪环状线至桃谷站 (~15分钟电车) → 步行2分钟')
      },
    ],
  },
  {
    day: 6,
    date: 'Mon, Mar 23',
    title: t('USJ', '环球影城'),
    location: 'Osaka',
    color: 'sky',
    items: [
      { 
        time: '07:30', 
        text: t('Depart from Airbnb (JR Momodani Station) (Early!)', '从Airbnb出发 (JR桃谷站) (早起!)'),
        transit: t('Walk 2 mins to Momodani Station → JR Osaka Loop Line to Nishikujo → JR Yumesaki Line to Universal City Station (~20 mins train) → Walk 5 mins', '步行2分钟至桃谷站 → JR大阪环状线至西九条 → JR梦咲线至环球影城站 (~20分钟电车) → 步行5分钟')
      },
      { 
        time: '08:00', 
        text: t('USJ All Day', '环球影城全天'), 
        highlight: true,
        link: '/attractions/usj',
        mapLink: 'https://www.google.com/maps/dir/?api=1&destination=Universal+Studios+Japan+Osaka',
        prices: [
          { label: t('Entry', '门票'), value: '~¥9,500' },
          { label: t('Express 7', '快通7'), value: '~¥18,000+', highlight: true }
        ]
      },
      { 
        time: '20:00', 
        text: t('Return to Airbnb (JR Momodani Station) / Dinner', '返回Airbnb (JR桃谷站) / 晚餐'),
        transit: t('Walk 5 mins to Universal City Station → JR Yumesaki Line to Nishikujo → JR Osaka Loop Line to Momodani Station (~20 mins train) → Walk 2 mins', '步行5分钟至环球影城站 → JR梦咲线至西九条 → JR大阪环状线至桃谷站 (~20分钟电车) → 步行2分钟')
      },
    ],
  },
  {
    day: 7,
    date: 'Tue, Mar 24',
    title: t('Osaka City Highlights', '大阪城市精华'),
    location: 'Osaka',
    color: 'orange',
    items: [
      { 
        time: '08:30', 
        text: t('Depart from Airbnb (JR Momodani Station)', '从Airbnb出发 (JR桃谷站)'),
        transit: t('Walk 2 mins to Momodani Station → JR Osaka Loop Line to Osaka Station (~20 mins train) → Walk 5 mins', '步行2分钟至桃谷站 → JR大阪环状线至大阪站 (~20分钟电车) → 步行5分钟')
      },
      { 
        time: '09:00', 
        text: t('Umeda Sky Building', '梅田蓝天大厦'), 
        highlight: true,
        link: '/attractions/umeda-sky-building',
        mapLink: 'https://www.google.com/maps/search/?api=1&query=Umeda+Sky+Building+Osaka',
        price: '¥1,500',
        transit: t('Reach at 9am - Floating Garden Observatory & 360° city view. Duration: ~1.5 hours', '早上9点到达 - 空中庭园展望台 & 360°城市景观。停留时间: 约1.5小时')
      },
      { 
        time: '11:00', 
        text: t('Travel to Osaka Aquarium Kaiyukan', '前往大阪海游馆'),
        mapLink: 'https://www.google.com/maps/dir/?api=1&origin=Umeda+Sky+Building+Osaka&destination=Osaka+Aquarium+Kaiyukan&travelmode=transit',
        transit: t('Walk 5 mins to Osaka Station → JR Osaka Loop Line to Osakako Station (~20 mins train) → Walk 5 mins', '步行5分钟至大阪站 → JR大阪环状线至大阪港站 (~20分钟电车) → 步行5分钟')
      },
      { 
        time: '11:30', 
        text: t('Osaka Aquarium Kaiyukan', '大阪海游馆'), 
        highlight: true,
        link: '/attractions/osaka-aquarium',
        mapLink: 'https://www.google.com/maps/dir/?api=1&origin=Umeda+Sky+Building+Osaka&destination=Osaka+Aquarium+Kaiyukan&travelmode=transit',
        price: '¥2,700',
        transit: t('Duration: ~2-3 hours - One of Japan\'s largest aquariums with whale sharks & marine life', '停留时间: 约2-3小时 - 日本最大的水族馆之一，有鲸鲨 & 海洋生物')
      },
      { 
        time: '14:30', 
        text: t('Travel to Shinsaibashi', '前往心斋桥'),
        mapLink: 'https://www.google.com/maps/dir/?api=1&origin=Osaka+Aquarium+Kaiyukan&destination=Shinsaibashi+Osaka&travelmode=transit',
        transit: t('Walk 5 mins to Osakako Station → Chuo Line to Honmachi → Midosuji Line to Shinsaibashi (~25 mins train) → Walk 2 mins', '步行5分钟至大阪港站 → 中央线至本町 → 御堂筋线至心斋桥 (~25分钟电车) → 步行2分钟')
      },
      { 
        time: '15:00', 
        text: t('Shinsaibashi', '心斋桥'), 
        highlight: true,
        link: '/attractions/shinsaibashi',
        mapLink: 'https://www.google.com/maps/dir/?api=1&origin=Osaka+Aquarium+Kaiyukan&destination=Shinsaibashi+Osaka&travelmode=transit',
        transit: t('Duration: ~2 hours - Shopping Paradise (Daimaru/Parco). Bring Passport for Tax Free!', '停留时间: 约2小时 - 购物天堂 (大丸/Parco). 带护照退税!')
      },
      { 
        time: '17:00', 
        text: t('Travel to Dotonbori', '前往道顿堀'),
        mapLink: 'https://www.google.com/maps/dir/?api=1&origin=Shinsaibashi+Osaka&destination=Dotonbori+Osaka&travelmode=walking',
        transit: t('Walk 5 mins (connected to Shinsaibashi)', '步行5分钟 (与心斋桥相连)')
      },
      { 
        time: '17:15', 
        text: t('Dotonbori (Walk Around)', '道顿堀 (散步)'), 
        highlight: true,
        link: '/attractions/dotonbori',
        mapLink: 'https://www.google.com/maps/dir/?api=1&origin=Shinsaibashi+Osaka&destination=Dotonbori+Osaka&travelmode=walking',
        transit: t('Duration: ~1.5 hours - Glico Man Sign & Street Food. Walk around and explore', '停留时间: 约1.5小时 - 格力高跑男广告牌 & 街头美食。散步探索')
      },
      { 
        time: '19:00', 
        text: t('Dinner in Dotonbori', '道顿堀晚餐'),
        highlight: true,
        link: '/attractions/dotonbori',
        mapLink: 'https://www.google.com/maps/dir/?api=1&destination=Dotonbori+Osaka',
        transit: t('Various dining options in Dotonbori area. Return: Walk 5 mins to Namba Station → JR Osaka Loop Line to Momodani Station (~15 mins train) → Walk 2 mins', '道顿堀区域各种餐饮选择。返回: 步行5分钟至难波站 → JR大阪环状线至桃谷站 (~15分钟电车) → 步行2分钟')
      },
    ],
  },
  {
    day: 8,
    date: 'Wed, Mar 25',
    title: t('Kyoto (Efficient Route)', '京都 (高效路线)'),
    location: 'Kyoto',
    color: 'emerald',
    items: [
      { 
        time: '07:00', 
        text: t('Depart from Airbnb (JR Momodani Station) (Early!)', '从Airbnb出发 (JR桃谷站) (早起!)'),
        transit: t('Walk 2 mins to Momodani Station → JR Osaka Loop Line to Kyobashi → Keihan Line to Fushimi-Inari Station (~50 mins train) → Walk 5 mins', '步行2分钟至桃谷站 → JR大阪环状线至京桥 → 京阪线至伏见稻荷站 (~50分钟电车) → 步行5分钟')
      },
      { 
        time: '08:00', 
        text: t('Fushimi Inari Taisha', '伏见稻荷大社'), 
        highlight: true,
        link: '/attractions/fushimi-inari',
        mapLink: 'https://www.google.com/maps/dir/?api=1&destination=Fushimi+Inari+Taisha+Kyoto',
        price: 'Free',
        transit: t('South start: Beat the crowds!', '南端开始: 避开人潮!')
      },
      { 
        time: '11:00', 
        text: t('Kiyomizu-dera Temple', '清水寺'), 
        highlight: true,
        link: '/attractions/kiyomizu',
        mapLink: 'https://www.google.com/maps/dir/?api=1&origin=Fushimi+Inari+Taisha+Kyoto&destination=Kiyomizu-dera+Temple+Kyoto&travelmode=transit',
        price: '¥400',
        transit: t('Walk 5 mins to Fushimi-Inari Station → Keihan Line to Kiyomizu-Gojo Station (~15 mins train) → Walk 15 mins uphill', '步行5分钟至伏见稻荷站 → 京阪线至清水五条站 (~15分钟电车) → 步行15分钟上坡')
      },
      { 
        time: '13:00', 
        text: t('Ninenzaka & Sannenzaka', '二年坂 & 三年坂'), 
        highlight: true,
        link: '/attractions/ninenzaka-sannenzaka',
        mapLink: 'https://www.google.com/maps/dir/?api=1&origin=Kiyomizu-dera+Temple+Kyoto&destination=Ninenzaka+Kyoto&travelmode=walking',
        price: 'Free',
        transit: t('Walk 5 mins downhill from Kiyomizu-dera (Energy saving!) & Lunch', '从清水寺步行5分钟下坡 (省力!) & 午餐')
      },
      { 
        time: '16:00', 
        text: t('Yasaka Shrine', '八坂神社'), 
        highlight: true,
        link: '/attractions/yasaka',
        mapLink: 'https://www.google.com/maps/dir/?api=1&origin=Ninenzaka+Kyoto&destination=Yasaka+Shrine+Kyoto&travelmode=walking',
        price: 'Free',
        transit: t('Walk 10 mins from Ninenzaka', '从二年坂步行10分钟')
      },
      { 
        time: '17:00', 
        text: t('Gion District', '祇园区'), 
        highlight: true,
        link: '/attractions/gion',
        mapLink: 'https://www.google.com/maps/dir/?api=1&origin=Yasaka+Shrine+Kyoto&destination=Gion+District+Kyoto&travelmode=walking',
        price: 'Free',
        transit: t('Walk 5 mins from Yasaka Shrine (Atmospheric late afternoon walk)', '从八坂神社步行5分钟 (傍晚漫步体验氛围)')
      },
      { 
        time: '17:30', 
        text: t('Kamogawa River', '鸭川'), 
        highlight: true,
        link: '/attractions/kamogawa',
        mapLink: 'https://www.google.com/maps/dir/?api=1&origin=Gion+District+Kyoto&destination=Kamogawa+River+Kyoto&travelmode=walking',
        note: t('(Sunset)', '(日落)'),
        transit: t('Walk 3 mins from Gion (Relax by the river, romantic evening)', '从祇园步行3分钟 (河边放松, 浪漫夜晚)')
      },
      { 
        time: '19:00', 
        text: t('Return to Airbnb (JR Momodani Station)', '返回Airbnb (JR桃谷站)'),
        transit: t('Walk 5 mins to Gion-Shijo Station → Keihan Line to Kyobashi → JR Osaka Loop Line to Momodani Station (~50 mins train) → Walk 2 mins', '步行5分钟至祇园四条站 → 京阪线至京桥 → JR大阪环状线至桃谷站 (~50分钟电车) → 步行2分钟')
      },
    ],
  },
  {
    day: 9,
    date: 'Thu, Mar 26',
    title: t('Uji & Nara (Healing Route)', '宇治 & 奈良 (治愈路线)'),
    location: 'Nara',
    color: 'teal',
    items: [
      { 
        time: '09:00', 
        text: t('Depart from Airbnb (JR Momodani Station)', '从Airbnb出发 (JR桃谷站)'),
        transit: t('Walk 2 mins to Momodani Station → JR Osaka Loop Line to Kyobashi → Keihan Line to Uji Station (~50 mins train) → Walk 3 mins', '步行2分钟至桃谷站 → JR大阪环状线至京桥 → 京阪线至宇治站 (~50分钟电车) → 步行3分钟')
      },
      { 
        time: '10:00', 
        text: t('Nakamura Tokichi Honten', '中村藤吉本店'), 
        highlight: true,
        link: '/food/nakamura-tokichi-uji',
        mapLink: 'https://www.google.com/maps/dir/?api=1&destination=Nakamura+Tokichi+Honten+Uji',
        transit: t('Walk 3 mins from Uji Station (Matcha sweets & early lunch)', '从宇治站步行3分钟 (抹茶甜点 & 早午餐)')
      },
      { 
        time: '11:30', 
        text: t('Ujiagami Shrine & River', '宇治上神社 & 宇治川'), 
        highlight: true,
        link: '/attractions/ujigami',
        mapLink: 'https://www.google.com/maps/dir/?api=1&origin=Nakamura+Tokichi+Honten+Uji&destination=Ujiagami+Shrine+Uji&travelmode=walking',
        price: 'Free',
        transit: t('Walk 10 mins along Uji River & Byodoin Omotesando', '沿宇治川 & 平等院表参道步行10分钟')
      },
      { 
        time: '13:00', 
        text: t('Transfer to Nara', '前往奈良'),
        transit: t('Walk 5 mins to Uji Station → JR Nara Line to Nara Station (~30 mins train) → Walk 15 mins or Bus #2/70 to Nara Park (~5 mins bus)', '步行5分钟至宇治站 → JR奈良线至奈良站 (~30分钟电车) → 步行15分钟或2/70号巴士至奈良公园 (~5分钟巴士)')
      },
      { 
        time: '14:00', 
        text: t('Nara Park', '奈良公园'), 
        highlight: true,
        link: '/attractions/nara-park',
        mapLink: 'https://www.google.com/maps/dir/?api=1&destination=Nara+Park+Nara',
        price: 'Free',
        transit: t('Deer feeding & park exploration', '喂鹿 & 公园探索')
      },
      { 
        time: '15:00', 
        text: t('Todaiji Temple', '东大寺'), 
        highlight: true,
        link: '/attractions/todaiji',
        mapLink: 'https://www.google.com/maps/dir/?api=1&origin=Nara+Park+Nara&destination=Todaiji+Temple+Nara&travelmode=walking',
        price: '¥600',
        transit: t('Walk 10 mins from Nara Park (Great Buddha & temple grounds)', '从奈良公园步行10分钟 (大佛 & 寺庙场地)')
      },
      { 
        time: '16:30', 
        text: t('Kasuga Taisha Shrine', '春日大社'), 
        highlight: true,
        link: '/attractions/kasuga',
        mapLink: 'https://www.google.com/maps/dir/?api=1&origin=Todaiji+Temple+Nara&destination=Kasuga+Taisha+Nara&travelmode=walking',
        price: 'Free',
        transit: t('Walk 15 mins from Todaiji (Stone lanterns forest path)', '从东大寺步行15分钟 (石灯笼森林小径)')
      },
      { 
        time: '17:30', 
        text: t('Mt. Wakakusa', '若草山'), 
        highlight: true,
        link: '/attractions/wakakusa',
        mapLink: 'https://www.google.com/maps/dir/?api=1&origin=Kasuga+Taisha+Nara&destination=Mt+Wakakusa+Nara&travelmode=walking',
        note: t('(Night View)', '(夜景)'),
        price: '¥150',
        transit: t('Walk 15 mins from Kasuga Taisha (Sunset & panoramic city view)', '从春日大社步行15分钟 (日落 & 全景城市景观)')
      },
      { 
        time: '19:30', 
        text: t('Return to Airbnb (JR Momodani Station)', '返回Airbnb (JR桃谷站)'),
        transit: t('Walk 20 mins to Nara Station → JR Nara Line to Kyobashi → JR Osaka Loop Line to Momodani Station (~1h 10m train) → Walk 2 mins', '步行20分钟至奈良站 → JR奈良线至京桥 → JR大阪环状线至桃谷站 (~1小时10分钟电车) → 步行2分钟')
      },
    ],
  },
  {
    day: 10,
    date: 'Fri, Mar 27',
    title: t('Osaka City Highlights', '大阪城市精华'),
    location: 'Osaka',
    color: 'orange',
    items: [
      { 
        time: '06:00', 
        text: t('Depart from Airbnb (JR Momodani Station)', '从Airbnb出发 (JR桃谷站)'),
        transit: t('Walk 2 mins to Momodani Station → JR Osaka Loop Line to Shin-Osaka → Midosuji Line to Minami-Ibaraki → Bus to Katsuoji (~1.5 hours total)', '步行2分钟至桃谷站 → JR大阪环状线至新大阪 → 御堂筋线至南茨木 → 巴士至勝尾寺 (~1.5小时总计)')
      },
      { 
        time: '07:00', 
        text: t('Katsuoji Temple (勝尾寺)', '勝尾寺'), 
        highlight: true,
        link: '/attractions/katsuoji',
        mapLink: 'https://www.google.com/maps/search/?api=1&query=Katsuoji+Temple+Osaka',
        price: '¥500',
        transit: t('Arrive at 7am - Famous temple with thousands of daruma dolls', '早上7点到达 - 以数千个达摩娃娃而闻名的寺庙')
      },
      { 
        time: '09:00', 
        text: t('Depart from Katsuoji', '从勝尾寺出发'),
        transit: t('Bus to Minami-Ibaraki → Midosuji Line to Shin-Osaka → JR Osaka Loop Line to Morinomiya (~1.5 hours total)', '巴士至南茨木 → 御堂筋线至新大阪 → JR大阪环状线至森之宫 (~1.5小时总计)')
      },
      { 
        time: '10:30', 
        text: t('Osaka Castle', '大阪城'), 
        highlight: true,
        link: '/attractions/osaka-castle',
        mapLink: 'https://www.google.com/maps/dir/?api=1&origin=Morinomiya+Station+Osaka&destination=Osaka+Castle&travelmode=walking',
        price: 'Free',
        transit: t('Walk 10 mins from Morinomiya Station. Conan Photo Spot & Tenshukaku (Tower ¥600)', '从森之宫站步行10分钟。柯南打卡点 & 天守阁 (登塔¥600)')
      },
      { 
        time: '12:30', 
        text: t('Kuromon Ichiba Market (Lunch)', '黑门市场 (午餐)'), 
        highlight: true,
        link: '/attractions/kuromon-market',
        mapLink: 'https://www.google.com/maps/dir/?api=1&origin=Osaka+Castle&destination=Kuromon+Ichiba+Market+Osaka&travelmode=transit',
        price: 'Free',
        transit: t('Walk 10 mins to Morinomiya Station → JR Osaka Loop Line to Namba Station (~18 mins train) → Walk 5 mins. Fresh Seafood & Street Food Lunch', '步行10分钟至森之宫站 → JR大阪环状线至难波站 (~18分钟电车) → 步行5分钟。新鲜海鲜 & 街头美食午餐')
      },
      { 
        time: '14:00', 
        text: t('Namba Yasaka Shrine', '难波八阪神社'), 
        highlight: true,
        link: '/attractions/namba-yasaka-shrine',
        mapLink: 'https://www.google.com/maps/dir/?api=1&origin=Kuromon+Ichiba+Market+Osaka&destination=Namba+Yasaka+Shrine+Osaka&travelmode=walking',
        price: 'Free',
        transit: t('Walk 5 mins from Kuromon Market. Giant Lion Head (Great for photos!)', '从黑门市场步行5分钟。巨大狮子头 (拍照绝佳!)')
      },
      { 
        time: '15:00', 
        text: t('Harukas Abeno', '阿倍野HARUKAS'), 
        highlight: true,
        link: '/attractions/harukas-abeno',
        mapLink: 'https://www.google.com/maps/dir/?api=1&origin=Namba+Yasaka+Shrine+Osaka&destination=Harukas+Abeno+Osaka&travelmode=transit',
        transit: t('Walk 5 mins to Namba Station → Midosuji Line to Tennoji Station (~5 mins train) → Walk 2 mins. Shopping at Japan\'s tallest building - Department stores & observation deck', '步行5分钟至难波站 → 御堂筋线至天王寺站 (~5分钟电车) → 步行2分钟。在日本最高建筑购物 - 百货商店 & 观景台')
      },
      { 
        time: '18:00', 
        text: t('Travel to Jumbo Fishing Boat Tsurikichi Shinsekai', '前往ジャンボ釣船 つり吉 新世界店'),
        mapLink: 'https://www.google.com/maps/dir/?api=1&origin=Harukas+Abeno+Osaka&destination=Tsurikichi+Shinsekai+Osaka&travelmode=transit',
        transit: t('Walk 2 mins to Tennoji Station → Midosuji Line to Dobutsuen-mae Station (~5 mins train) → Walk 5 mins', '步行2分钟至天王寺站 → 御堂筋线至动物园前站 (~5分钟电车) → 步行5分钟')
      },
      { 
        time: '18:30', 
        text: t('Jumbo Fishing Boat Tsurikichi Shinsekai (Dinner)', 'ジャンボ釣船 つり吉 新世界店 (晚餐)'), 
        highlight: true,
        link: '/food/tsurikichi-shinsekai',
        mapLink: 'https://www.google.com/maps/search/?api=1&query=Tsurikichi+Shinsekai+Osaka',
        transit: t('Duration: ~1.5-2 hours - Interactive fishing izakaya experience. Catch your own fish and have it prepared fresh (sashimi, grilled, fried, or hot pot). Return: Walk 5 mins to Dobutsuen-mae Station → Midosuji Line to Nishikujo → JR Osaka Loop Line to Momodani Station (~20 mins train) → Walk 2 mins', '停留时间: 约1.5-2小时 - 互动钓鱼居酒屋体验。自己钓鱼并让餐厅新鲜制作 (刺身、烤制、油炸或火锅)。返回: 步行5分钟至动物园前站 → 御堂筋线至西九条 → JR大阪环状线至桃谷站 (~20分钟电车) → 步行2分钟')
      },
    ],
  },
  {
    day: 11,
    date: 'Sat, Mar 28',
    title: t('Fly Home', '回家'),
    location: 'Departure',
    color: 'orange',
    items: [
      { 
        time: '06:30', 
        text: t('Private Van to KIX (CX Group)', '私人包车前往关西机场 (国泰组)'),
        transit: t('Travel time: ~50-60 mins (Osaka Airbnb → KIX)', '车程: 约50-60分钟 (大阪Airbnb → 关西机场)')
      },
      { 
        time: '07:30', 
        text: t('CX Check-in', '国泰值机'),
        special: true
      },
      { 
        time: '07:30', 
        text: t('Private Van to KIX (TG Group)', '私人包车前往关西机场 (泰航组)'),
        transit: t('Travel time: ~50-60 mins (Osaka Airbnb → KIX)', '车程: 约50-60分钟 (大阪Airbnb → 关西机场)')
      },
      { 
        time: '08:30', 
        text: t('TG Check-in', '泰航值机'),
        special: true
      },
      { 
        time: '11:00', 
        text: t('Flight Departs (KIX → PEN)', '航班起飞 (关西机场 → 槟城)')
      },
    ],
  },
]
