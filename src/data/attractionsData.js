// Comprehensive attractions data with explanations, images, and details

export const attractionsData = {
  'sensoji': {
    id: 'sensoji',
    title: { en: 'Senso-ji Temple', zh: '浅草寺', ja: '浅草寺' },
    location: { en: 'Asakusa, Tokyo', zh: '东京浅草', ja: '東京浅草' },
    city: 'tokyo',
    price: 'Free',
    hours: { en: '6:00 AM - 5:00 PM', zh: '早上6点 - 下午5点', ja: '午前6時 - 午後5時' },
    images: [
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/sensoji/kaminarimon-gate.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/sensoji/nakamise-dori.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/sensoji/temple-complex.jpg',
    ],
    about: {
      en: "Senso-ji is Tokyo's oldest temple, founded in 628 AD. According to legend, two fishermen found a statue of Kannon (the goddess of mercy) in the Sumida River. The temple was built to enshrine this sacred statue. Today, it's one of Tokyo's most visited spiritual sites, attracting millions of visitors annually. The temple complex includes the famous Kaminarimon (Thunder Gate) with its massive red lantern, Nakamise-dori shopping street with traditional snacks and souvenirs, and the main hall (Hondo) where the sacred Kannon statue is enshrined.",
      zh: '浅草寺是东京最古老的寺庙，建于公元628年。据传说，两个渔民在隅田川中发现了一尊观音像（慈悲女神）。寺庙是为了供奉这尊神圣的雕像而建造的。如今，它是东京访问量最大的精神场所之一，每年吸引数百万游客。寺庙建筑群包括著名的雷门（带有巨大的红灯笼）、仲见世通购物街（有传统小吃和纪念品）以及供奉神圣观音像的主殿（本堂）。',
      ja: '浅草寺は628年創建とされる東京最古の寺院です。伝説によると、隅田川で漁師が観音（慈悲の菩薩）の像を見つけたことが起源とされています。現在は年間を通じて多くの参拝者が訪れる東京屈指の霊場で、巨大な提灯が印象的な雷門、名物の食べ歩きや土産物が並ぶ仲見世通り、観音像を安置する本堂（観音堂）など見どころが集まっています。'
    },
    highlights: [
      { en: 'Kaminarimon Gate: The iconic entrance with a 3.9-meter tall red lantern weighing 700kg', zh: '雷门: 标志性入口，有一个3.9米高、重700公斤的红灯笼', ja: '雷门: 标志性入口，有一个3.9米高、重700公斤的红灯笼' },
      { en: 'Nakamise-dori: 250-meter shopping street with traditional Japanese snacks like senbei (rice crackers) and ningyo-yaki (doll-shaped cakes)', zh: '仲见世通: 250米长的购物街，有传统日本小吃，如煎饼和人形烧', ja: '仲见世通: 250米长的ショッピング街，有传统日本小吃，如煎饼和人形烧' },
      { en: 'Main Hall: Rebuilt after WWII, houses the sacred Kannon statue (not publicly displayed)', zh: '本堂: 二战后重建，供奉神圣的观音像（不公开展示）', ja: '本堂: 二战后重建，供奉神圣的观音像（不公开展示）' },
      { en: 'Five-Story Pagoda: Reconstructed in 1973, standing 53 meters tall', zh: '五层塔: 1973年重建，高53米', ja: '五层塔: 1973年重建，高53米' },
    ],
    tips: [
      { en: 'Early Morning: Visit before 9 AM to avoid crowds and experience the temple in peace', zh: '清晨: 早上9点前参观，避开人群，安静体验寺庙', ja: '清晨: 午前9点前参观，避开人群，安静体验寺院' },
      { en: 'Try the Snacks: Sample traditional treats like ningyo-yaki and senbei from Nakamise-dori', zh: '尝试小吃: 在仲见世通品尝传统美食，如人形烧和煎饼', ja: '尝试小吃: 在仲见世通品尝传统美食，如人形烧和煎饼' },
      { en: 'Weekend Crowds: Very busy on weekends - weekdays are better for a peaceful visit', zh: '周末人群: 周末非常拥挤 - 工作日更适合安静参观', ja: '周末人群: 周末非常拥挤 - 工作日更适合安静参观' },
    ],
  },
  'harajuku': {
    id: 'harajuku',
    title: { en: 'Harajuku & Omotesando', zh: '原宿 & 表参道', ja: '原宿 & 表参道' },
    location: { en: 'Shibuya, Tokyo', zh: '东京涩谷', ja: '東京渋谷' },
    city: 'tokyo',
    price: 'Free',
    hours: { en: 'Shops: 10 AM - 8 PM', zh: '商店: 上午10点 - 晚上8点', ja: '店舗: 午前10点 - 夜8点' },
    images: [
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/harajuku/takeshita-street.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/harajuku/harajuku-station.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/harajuku/mirrored-building.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/harajuku/omotesando-night.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/harajuku/tokyu-plaza.jpg',
    ],
    about: {
      en: "Harajuku is Tokyo's center of youth culture and fashion, famous for its vibrant street style, unique boutiques, and trendy cafes. Takeshita Street is the heart of Harajuku, a narrow pedestrian street packed with shops selling everything from kawaii (cute) fashion to crepes and cotton candy. Just a few minutes away, Omotesando offers a complete contrast with its tree-lined boulevard and luxury brand stores, earning it the nickname \"Tokyo's Champs-Élysées.\" The area perfectly represents Tokyo's dual nature - the playful, experimental Harajuku versus the sophisticated, elegant Omotesando. Both areas are must-visits for anyone wanting to experience Tokyo's fashion and culture scene.",
      zh: '原宿是东京青年文化和时尚的中心，以其充满活力的街头风格、独特的精品店和潮流咖啡厅而闻名。竹下通是原宿的心脏，是一条狭窄的步行街，商店林立，从卡哇伊（可爱）时尚到可丽饼和棉花糖应有尽有。几分钟外，表参道提供完全不同的体验，有绿树成荫的大道和奢侈品牌商店，赢得了"东京香榭丽舍大街"的绰号。该地区完美地代表了东京的双重性 - 有趣、实验性的原宿与精致、优雅的表参道。对于任何想要体验东京时尚和文化场景的人来说，这两个地区都是必游之地。',
      ja: '原宿は東京の若者文化とファッションの中心地で、個性的なショップやカフェが集まるエリアです。竹下通りは原宿の象徴で、カワイイ系ファッションからクレープ、綿あめまで多彩なお店がぎゅっと詰まっています。一方、徒歩数分の表参道は並木道と高級ブランドが並ぶ洗練された雰囲気で、「東京のシャンゼリゼ」とも呼ばれます。遊び心の原宿と上質な表参道の対比を同時に楽しめる、東京らしさが詰まったスポットです。'
    },
    highlights: [
      { en: 'Takeshita Street: 350-meter street with colorful shops, crepe stands, and unique fashion items', zh: '竹下通: 350米长的街道，有色彩缤纷的商店、可丽饼摊和独特的时尚物品', ja: '竹下通: 350米长的街道，有色彩缤纷的店舗、可丽饼摊和独特的时尚物品' },
      { en: 'Omotesando Hills: Modern shopping complex designed by Tadao Ando with luxury brands and restaurants', zh: '表参道Hills: 由安藤忠雄设计的现代购物中心，有奢侈品牌和餐厅', ja: '表参道Hills: 由安藤忠雄设计的现代ショッピング中心，有奢侈品牌和レストラン' },
      { en: 'Meiji Shrine: Adjacent peaceful shrine offering a contrast to the busy streets', zh: '明治神宫: 邻近的宁静神社，与繁忙的街道形成对比', ja: '明治神宫: 邻近的宁静神社，与繁忙的街道形成对比' },
      { en: 'Cat Street: Trendy street connecting Harajuku and Shibuya with unique boutiques and cafes', zh: '猫街: 连接原宿和涩谷的潮流街道，有独特的精品店和咖啡厅', ja: '猫街: 连接原宿和渋谷的潮流街道，有独特的精品店和咖啡厅' },
    ],
    tips: [
      { en: 'Weekend Crowds: Takeshita Street gets extremely crowded on weekends - visit on weekdays if possible', zh: '周末人群: 竹下通在周末非常拥挤 - 如果可能，在工作日参观', ja: '周末人群: 竹下通在周末非常拥挤 - 如果可能，在工作日参观' },
      { en: 'Try the Food: Sample crepes, giant cotton candy, and other Harajuku street food specialties', zh: '尝试美食: 品尝可丽饼、巨型棉花糖和其他原宿街头美食特色', ja: '尝试美食: 品尝可丽饼、巨型棉花糖和其他原宿街头美食特色' },
      { en: 'Fashion Shopping: Great place to find unique Japanese fashion items and souvenirs', zh: '时尚购物: 寻找独特日本时尚物品和纪念品的绝佳地点', ja: '时尚ショッピング: 寻找独特日本时尚物品和纪念品的绝佳地点' },
    ],
  },
  'fushimi-inari': {
    id: 'fushimi-inari',
    title: { en: 'Fushimi Inari Taisha', zh: '伏见稻荷大社', ja: '伏見稻荷大社' },
    location: { en: 'Fushimi, Kyoto', zh: '京都伏见', ja: '京都伏見' },
    city: 'kyoto',
    price: 'Free',
    hours: { en: 'Open 24 Hours', zh: '24小时开放', ja: '24時間営業' },
    images: [
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/fushimi-inari/torii-tunnel-day.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/fushimi-inari/torii-tunnel-night.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/fushimi-inari/torii-pathway.jpg',
    ],
    about: {
      en: "Fushimi Inari Taisha is one of Japan's most important Shinto shrines, dedicated to Inari, the god of rice, agriculture, and business. Founded in 711 AD, it's the head shrine of over 30,000 Inari shrines across Japan. The shrine is world-famous for its thousands of vermillion torii gates that create stunning tunnel-like paths up the mountainside. The torii gates are donated by individuals and companies, with names inscribed on the back. The main path leads to the summit of Mount Inari (233 meters), taking about 2-3 hours for a round trip. The shrine is open 24 hours, making it perfect for early morning or evening visits to avoid crowds.",
      zh: '伏见稻荷大社是日本最重要的神道教神社之一，供奉稻荷神（农业、商业之神）。建于公元711年，是日本30,000多个稻荷神社的总本社。该神社以其数千个朱红色鸟居而闻名世界，这些鸟居在山坡上形成了令人惊叹的隧道式路径。鸟居由个人和公司捐赠，背面刻有名字。主路径通往稻荷山山顶（233米），往返约需2-3小时。神社24小时开放，非常适合清晨或傍晚参观以避开人群。',
      ja: '伏見稲荷大社は、稲荷大神（五穀豊穣・商売繁盛の神）を祀る日本屈指の神社で、711年創建とされています。全国に約3万社ある稲荷神社の総本宮として知られ、朱色の鳥居が連なる「千本鳥居」は世界的に有名です。鳥居は個人や企業の奉納によるもので、裏面に奉納者名が刻まれています。参道は稲荷山（標高233m）の山頂へ続き、往復で約2〜3時間。24時間参拝できるため、混雑を避けたい人は早朝や夕方の訪問がおすすめです。'
    },
    highlights: [
      { en: 'Senbon Torii (Thousand Gates): The iconic tunnel of thousands of closely-spaced torii gates creating a mesmerizing vermillion path', zh: '千本鸟居: 标志性的数千个紧密排列的鸟居隧道，形成迷人的朱红色路径', ja: '千本鸟居: 标志性的数千个紧密排列的鸟居隧道，形成迷人的朱红色路径' },
      { en: 'Fox Statues: Inari\'s messengers, fox statues (kitsune) are found throughout the shrine grounds', zh: '狐狸雕像: 稻荷神的使者，狐狸雕像（狐）遍布神社场地' },
      { en: 'Mount Inari Summit: Beautiful views of Kyoto from the top, with smaller shrines along the way', zh: '稻荷山山顶: 从山顶可以欣赏到京都的美景，沿途有较小的神社', ja: '稻荷山山顶: 山顶可以欣赏到京都的美景，沿途有较小的神社' },
      { en: 'Omokaru Stones: Heavy stones that feel lighter when your wish comes true - a popular test of fortune', zh: '重轻石: 当你的愿望实现时，重石会感觉更轻 - 一个受欢迎的占卜测试', ja: '重轻石: 当你的愿望实现时，重石会感觉更轻 - 一个受欢迎的占卜测试' },
    ],
    tips: [
      { en: 'Start from the South: Most tourists start from the main entrance. Starting from the south entrance helps you avoid the initial crowds', zh: '从南端开始: 大多数游客从主入口开始。从南入口开始可以帮助您避开最初的人群', ja: '南端开始: 大多数游客主入口开始。南入口开始可以帮助您避开最初的人群' },
      { en: 'Early Morning Visit: Arrive before 8 AM for the best experience with fewer people and better lighting for photos', zh: '清晨参观: 早上8点前到达，体验最佳，人少，拍照光线更好', ja: '清晨参观: 午前8点前到达，体验最佳，人少，拍照光線更好' },
      { en: 'Wear Comfortable Shoes: The hike to the summit involves many steps and uneven paths', zh: '穿舒适的鞋子: 登顶需要走很多台阶和不平坦的小径', ja: '穿舒适的鞋子: 登顶需要走很多台阶和不平坦的小径' },
    ],
  },
  'kiyomizu': {
    id: 'kiyomizu',
    title: { en: 'Kiyomizu-dera Temple', zh: '清水寺', ja: '清水寺' },
    location: { en: 'Higashiyama, Kyoto', zh: '京都东山', ja: '京都東山' },
    city: 'kyoto',
    price: '¥400',
    hours: { en: '6:00 AM - 6:00 PM', zh: '早上6点 - 下午6点', ja: '午前6:00 - 午後6:00' },
    images: [
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/kiyomizu/main-hall-veranda.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/kiyomizu/autumn-sunset.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/kiyomizu/cherry-blossom-view.jpg',
    ],
    about: {
      en: "Kiyomizu-dera (Pure Water Temple) is one of Kyoto's most celebrated temples and a UNESCO World Heritage Site. Founded in 778 AD, the temple is famous for its wooden stage (butai) that juts out from the main hall, offering spectacular views of Kyoto city and the surrounding mountains. The stage is built without using a single nail, showcasing traditional Japanese architecture. The temple gets its name from the Otowa Waterfall, where three streams of water fall into a pond. Visitors can drink from the streams using long-handled cups, with each stream said to grant a different blessing: longevity, success in studies, or a fortunate love life.",
      zh: '清水寺（清水寺）是京都最著名的寺庙之一，也是联合国教科文组织世界遗产。建于公元778年，该寺庙以其从主殿突出的木制舞台（舞台）而闻名，可欣赏京都城市和周围山脉的壮丽景色。舞台建造时没有使用一颗钉子，展示了传统的日本建筑。寺庙的名字来自音羽瀑布，三股水流落入池塘。游客可以使用长柄杯从水流中饮水，据说每股水流都会带来不同的祝福：长寿、学业成功或幸运的爱情生活。',
      ja: '清水寺は778年創建の京都を代表する寺院で、ユネスコ世界遺産にも登録されています。釘を使わずに組み上げられた本堂の舞台（清水の舞台）は、京都市街や周辺の山々を一望できる絶景スポットとして有名です。寺名の由来となった音羽の滝では、三本の清水を柄杓で汲んで飲むことができ、それぞれ「長寿」「学業成就」「恋愛成就」のご利益があると伝えられています。'
    },
    highlights: [
      { en: 'Wooden Stage: The 13-meter high stage offers panoramic views - especially beautiful during cherry blossom and autumn seasons', zh: '木制舞台: 13米高的舞台提供全景 - 在樱花和秋季特别美丽', ja: '木制舞台: 13米高的舞台提供全景 - 在樱花和秋季特别美丽' },
      { en: 'Otowa Waterfall: Drink from the three streams for different blessings - but choose only one!', zh: '音羽瀑布: 从三股水流中饮水以获得不同的祝福 - 但只能选择一个！', ja: '音羽瀑布: 三股水流中饮水以获得不同的祝福 - 但只能选择一个！' },
      { en: 'Ninenzaka & Sannenzaka: Historic stone-paved streets leading to the temple with traditional shops and cafes', zh: '二年坂 & 三年坂: 通往寺庙的历史石铺街道，有传统商店和咖啡厅', ja: '二年坂 & 三年坂: 通往寺院的历史石铺街道，有传统店舗和咖啡厅' },
    ],
    tips: [
      { en: 'Early Morning Visit: Arrive before 8 AM to avoid crowds and enjoy the peaceful atmosphere', zh: '清晨参观: 早上8点前到达，避开人群，享受宁静的氛围', ja: '清晨参观: 午前8点前到达，避开人群，享受宁静的氛围' },
    ],
  },
  'shibuya': {
    id: 'shibuya',
    title: { en: 'Shibuya Crossing', zh: '涩谷十字路口', ja: '渋谷十字路口' },
    location: { en: 'Shibuya, Tokyo', zh: '东京涩谷', ja: '東京渋谷' },
    city: 'tokyo',
    price: 'Free',
    hours: { en: '24 Hours', zh: '24小时', ja: '24時間' },
    images: [
      'https://res.cloudinary.com/dput41tre/image/upload/v1768649339/japantrip/attractions/shibuya/aerial-view.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/shibuya/night-view.jpg',
    ],
    about: {
      en: "Shibuya Crossing is the world's busiest pedestrian crossing, with up to 3,000 people crossing at once during peak times. Located in front of Shibuya Station, this iconic intersection has become a symbol of modern Tokyo. The area is surrounded by massive video screens and neon advertisements, creating an electric atmosphere. The famous Hachiko Statue, honoring the loyal dog who waited for his owner for years, is a popular meeting point. Shibuya is also a major shopping and entertainment district with countless stores, restaurants, and nightlife options.",
      zh: '涩谷十字路口是世界上最繁忙的十字路口，在高峰时段一次有多达3,000人过马路。位于涩谷站前，这个标志性的交叉路口已成为现代东京的象征。该地区被巨大的视频屏幕和霓虹灯广告所包围，营造出充满活力的氛围。著名的忠犬八公像，纪念多年来等待主人的忠诚狗，是一个受欢迎的会面点。涩谷也是一个主要的购物和娱乐区，有无数商店、餐厅和夜生活选择。',
      ja: '渋谷スクランブル交差点は、世界でも有数の人通りを誇る交差点で、ピーク時には一度に約3,000人が横断すると言われます。渋谷駅前の象徴的なスポットで、大型ビジョンやネオンサインに囲まれた景観は「現代の東京」を体感できる雰囲気です。待ち合わせ場所として有名な忠犬ハチ公像もすぐ近くにあり、周辺にはショッピング、グルメ、ナイトライフまで楽しめる施設が集まっています。'
    },
    highlights: [
      { en: 'Hachiko Statue: The famous bronze statue of the loyal Akita dog - a popular meeting point', zh: '忠犬八公像: 著名的忠诚秋田犬青铜雕像 - 一个受欢迎的会面点', ja: '忠犬八公像: 著名的忠诚秋田犬青铜雕像 - 一个受欢迎的会面点' },
      { en: 'Scramble Crossing: Watch thousands of people cross simultaneously from the Shibuya Sky observation deck', zh: '混乱十字路口: 从涩谷天空观景台观看数千人同时过马路', ja: '混乱十字路口: 渋谷天空观景台观看数千人同时过马路' },
      { en: 'Shibuya 109: Iconic fashion building with trendy Japanese brands', zh: '涩谷109: 标志性的时尚建筑，有潮流日本品牌', ja: '渋谷109: 标志性的时尚建筑，有潮流日本品牌' },
    ],
    tips: [
      { en: 'Best View: Visit Shibuya Sky or Mag\'s Park for aerial views of the crossing', zh: '最佳视角: 参观涩谷天空或Mag\'s Park，从空中观看十字路口' },
      { en: 'Peak Times: Most impressive during rush hour (7-9 AM, 5-7 PM)', zh: '高峰时段: 在高峰时段（上午7-9点，下午5-7点）最令人印象深刻', ja: '高峰时段: 在高峰时段（午前7-9点，午後5-7点）最令人印象深刻' },
    ],
  },
  'tokyo-station': {
    id: 'tokyo-station',
    title: { en: 'Tokyo Station', zh: '东京站', ja: '東京駅' },
    location: { en: 'Marunouchi, Tokyo', zh: '东京丸之内', ja: '東京丸の内' },
    city: 'tokyo',
    price: 'Free',
    hours: { en: 'Station: 24 Hours | Shops: 10 AM - 9 PM', zh: '车站: 24小时 | 商店: 上午10点 - 晚上9点', ja: '駅：24時間 | 店舗：午前10時 - 午後9時' },
    images: [
      'https://japanjourneys.jp/wp-content/uploads/2020/10/TokyoStationHeader4.jpg',
      'https://cdn.gaijinpot.com/app/uploads/sites/6/2017/06/Tokyo-Station-S-.jpg',
      'https://www.jal.co.jp/br/en/guide-to-japan/destinations/articles/tokyo/tokyo-station/_jcr_content/root/responsivegrid/sectioncontainer_cop/image_74573324.coreimg.jpeg/1738649008853.jpeg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Qhq0qip-y5K7bEkQ2gnszCyD2oZE_a8_Hg&s',
      'https://www.gov-online.go.jp/en/assets/hj_2025_02_03_02.jpg',
    ],
    about: {
      en: "Tokyo Station is one of Japan's most important railway stations and a historic architectural landmark. The station opened in 1914 and features a beautiful red-brick facade in the Marunouchi area, designed by Kingo Tatsuno. The station has been restored to its original early 20th-century appearance, combining historical charm with modern functionality. Tokyo Station serves as a major hub for multiple JR lines, Shinkansen (bullet trains), and subway lines, connecting to destinations throughout Japan. The station complex includes extensive shopping areas, restaurants, and the famous Character Street with themed shops selling merchandise from popular anime and manga characters. The station is also home to the luxurious Tokyo Station Hotel.",
      zh: '东京站是日本最重要的火车站之一，也是历史建筑地标。车站于1914年开放，在丸之内地区拥有美丽的红砖外墙，由辰野金吾设计。车站已恢复到其20世纪初的原始外观，将历史魅力与现代功能相结合。东京站是多个JR线、新干线（子弹头列车）和地铁线的主要枢纽，连接日本各地的目的地。车站综合体包括广泛的购物区、餐厅和著名的角色街，有主题商店销售来自热门动漫和漫画角色的商品。车站还设有豪华的东京站酒店。',
      ja: '東京駅は日本を代表するターミナル駅で、歴史的建築としても有名です。1914年開業の赤レンガ駅舎（丸の内側）は辰野金吾の設計で、復原工事により20世紀初頭の姿が美しく蘇りました。JR各線や新幹線、地下鉄が乗り入れる一大ハブとして全国各地へアクセスでき、駅ナカにはグランスタなどの商業エリアや飲食店が充実。アニメ・キャラクターショップが集まる「東京キャラクターストリート」も人気で、東京ステーションホテルも併設されています。'
    },
    highlights: [
      { en: 'Historic Red-Brick Building: Beautiful restored facade showcasing early 20th-century architecture', zh: '历史红砖建筑: 美丽的修复外墙，展示20世纪初的建筑', ja: '历史红砖建筑: 美丽的修复外墙，展示20世纪初的建筑' },
      { en: 'Character Street: Famous shopping arcade with themed shops selling anime and manga merchandise', zh: '角色街: 著名的购物拱廊，有主题商店销售动漫和漫画商品', ja: '角色街: 著名的ショッピング拱廊，有主题店舗销售动漫和漫画商品' },
      { en: 'Gransta: Large underground shopping mall with restaurants, souvenirs, and Japanese snacks', zh: 'Gransta: 大型地下购物中心，有餐厅、纪念品和日本小吃', ja: 'Gransta: 大型地下ショッピング中心，有レストラン、纪念品和日本小吃' },
      { en: 'Shinkansen Hub: Gateway to bullet trains connecting to major cities across Japan', zh: '新干线枢纽: 连接日本主要城市的子弹头列车门户', ja: '新干線枢纽: 连接日本主要城市的子弹头列车门户' },
    ],
    tips: [
      { en: 'Shopping: Explore Character Street and Gransta for unique souvenirs and Japanese snacks', zh: '购物: 探索角色街和Gransta，寻找独特的纪念品和日本小吃', ja: 'ショッピング: 探索角色街和Gransta，寻找独特的纪念品和日本小吃' },
      { en: 'Architecture: Admire the restored red-brick facade from the Marunouchi side', zh: '建筑: 从丸之内一侧欣赏修复的红砖外墙', ja: '建筑: 丸の内一侧欣赏修复的红砖外墙' },
      { en: 'Station Layout: The station is large - use the many signs to navigate or ask station staff', zh: '车站布局: 车站很大 - 使用许多标志导航或询问车站工作人员', ja: '车駅布局: 车駅很大 - 使用许多标志导航或询问车駅工作人员' },
      { en: 'Early Visit: Visit in the morning for fewer crowds and better photo opportunities', zh: '早访: 早上参观，人群较少，拍照机会更好', ja: '早访: 午前参观，人群较少，拍照机会更好' },
    ],
  },
  'ueno': {
    id: 'ueno',
    title: { en: 'Ueno Park', zh: '上野公园', ja: '上野公園' },
    location: { en: 'Ueno, Tokyo', zh: '东京上野', ja: '東京上野' },
    city: 'tokyo',
    price: { en: 'Park: Free | Museums: Varies', zh: '公园: 免费 | 博物馆: 不同', ja: '公園：無料 | 博物館：様々' },
    hours: { en: 'Open 24 Hours', zh: '24小时开放', ja: '24時間営業' },
    images: [
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/ueno/cherry-blossom-avenue.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/ueno/hanami-crowd.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/ueno/boat-ride.jpg',
    ],
    about: {
      en: "Ueno Park is one of Tokyo's first public parks, established in 1873. The park is famous for its cherry blossoms in spring, making it one of Tokyo's most popular hanami (flower viewing) spots. The park houses several major museums, a zoo, temples, and shrines, making it a cultural hub in the heart of Tokyo. The park was originally part of Kaneiji Temple, one of the city's wealthiest temples. After the Battle of Ueno in 1868, the temple was destroyed, and the land was converted into one of Japan's first Western-style parks. Today, it's a perfect blend of nature, culture, and history.",
      zh: '上野公园是东京最早的公共公园之一，建于1873年。该公园以春季樱花而闻名，是东京最受欢迎的花见（赏花）地点之一。公园内设有几个主要博物馆、一个动物园、寺庙和神社，使其成为东京市中心的文化中心。该公园最初是宽永寺的一部分，这是该市最富有的寺庙之一。1868年上野之战后，寺庙被毁，土地被改造成日本最早的西式公园之一。今天，它是自然、文化和历史的完美结合。',
      ja: '上野公園は1873年に開園した東京最古級の公園で、春の桜（花見）の名所として特に有名です。園内には東京国立博物館をはじめとする複数の博物館や上野動物園、寺社などが集まり、都心の文化拠点となっています。もともとは寛永寺の境内の一部で、1868年の上野戦争など歴史の舞台にもなりました。現在は自然・文化・歴史が一度に楽しめる、散策にぴったりのエリアです。'
    },
    highlights: [
      { en: 'Cherry Blossoms: Over 1,000 cherry trees create a stunning tunnel of pink in spring (late March to early April)', zh: '樱花: 1000多棵樱花树在春季（3月下旬至4月初）形成令人惊叹的粉色隧道', ja: '樱花: 1000多棵樱花树在春季（3月下旬へ4月初）形成令人惊叹的粉色隧道' },
      { en: 'Tokyo National Museum: Japan\'s oldest and largest museum with extensive art and archaeological collections', zh: '东京国立博物馆: 日本最古老和最大的博物馆，拥有丰富的艺术和考古收藏' },
      { en: 'Ueno Zoo: Japan\'s oldest zoo, home to pandas and over 3,000 animals', zh: '上野动物园: 日本最古老的动物园，是大熊猫和3000多只动物的家园' },
      { en: 'Shinobazu Pond: Large pond with lotus flowers and boat rentals, perfect for relaxation', zh: '不忍池: 有荷花和租船服务的大池塘，非常适合放松', ja: '不忍池: 有荷花和租船服务的大池塘，非常适合放松' },
    ],
    tips: [
      { en: 'Cherry Blossom Season: Extremely crowded during sakura season - arrive early or visit on weekdays', zh: '樱花季节: 樱花季节非常拥挤 - 提前到达或在工作日参观', ja: '樱花季节: 樱花季节非常拥挤 - 提前到达或在工作日参观' },
      { en: 'Museum Pass: Consider the Ueno Park Pass for discounted entry to multiple museums', zh: '博物馆通票: 考虑购买上野公园通票，可折扣进入多个博物馆', ja: '博物館通票: 考虑购买上野公園通票，可折扣进入多个博物館' },
      { en: 'Food Options: Many food vendors and restaurants in the park - perfect for lunch break', zh: '餐饮选择: 公园内有许多食品摊和餐厅 - 非常适合午餐休息', ja: '餐饮选择: 公園内有许多食品摊和レストラン - 非常适合ランチ休息' },
      { en: 'Combine with Asakusa: Ueno is just one stop away from Asakusa on the Ginza Line - easy to visit both', zh: '与浅草结合: 上野距离浅草只有一站（银座线）- 很容易参观两者', ja: '与浅草结合: 上野距离浅草只有一駅（銀座線）- 很容易参观两者' },
    ],
  },
  'tsukiji-market': {
    id: 'tsukiji-market',
    title: { en: 'Tsukiji Outer Market', zh: '筑地外市场', ja: '築地外市場' },
    location: { en: 'Tsukiji, Tokyo', zh: '东京筑地', ja: '東京築地' },
    city: 'tokyo',
    price: 'Free',
    hours: { en: '5:00 AM - 2:00 PM', zh: '早上5点 - 下午2点', ja: '午前5時 - 午後2時' },
    images: [
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/tsukiji-market/market-overview.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/tsukiji-market/fish-stall.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/tsukiji-market/market-interior.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/tsukiji-market/market-street.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/tsukiji-market/market-vendors.jpg',
    ],
    about: {
      en: "Tsukiji Outer Market is a vibrant marketplace offering fresh seafood, produce, and Japanese kitchen supplies. While the inner wholesale market moved to Toyosu in 2018, the outer market remains a popular destination for food lovers. The market features hundreds of small shops and restaurants selling fresh sushi, sashimi, tamagoyaki (Japanese omelet), and various street food. It's the perfect place to experience Tokyo's food culture and enjoy a fresh seafood breakfast.",
      zh: '筑地外市场是一个充满活力的市场，提供新鲜海鲜、农产品和日本厨房用品。虽然内部批发市场于2018年搬迁到丰洲，但外市场仍然是美食爱好者的热门目的地。市场有数百家小商店和餐厅，出售新鲜寿司、生鱼片、玉子烧（日式煎蛋）和各种街头美食。这是体验东京美食文化和享用新鲜海鲜早餐的完美场所。',
      ja: '築地場外市場は、新鮮な魚介や青果、調理道具などが集まる活気ある市場です。2018年に場内（卸売市場）は豊洲へ移転しましたが、場外は今も食べ歩きや朝ごはん目当ての人で賑わいます。寿司・刺身・玉子焼き、各種屋台グルメなどを楽しめ、東京の食文化を体感できる絶好のスポットです。'
    },
    highlights: [
      { en: 'Fresh Sushi & Sashimi: Some of the freshest seafood in Tokyo', zh: '新鲜寿司和生鱼片: 东京最新鲜的海鲜之一', ja: '新鲜寿司和生鱼片: 東京最新鲜的海鮮之一' },
      { en: 'Tamagoyaki: Famous sweet Japanese omelet on a stick', zh: '玉子烧: 著名的日式甜煎蛋串', ja: '玉子烧: 著名的日式甜煎蛋串' },
      { en: 'Street Food: Various Japanese snacks and treats', zh: '街头美食: 各种日本小吃和美食', ja: '街头美食: 各种日本小吃和美食' },
    ],
    tips: [
      { en: 'Early Morning: Best time to visit is 7-10 AM for freshest food', zh: '清晨: 最佳参观时间是上午7-10点，食物最新鲜', ja: '清晨: 最佳参观時間是午前7-10点，食物最新鲜' },
      { en: 'Bring Cash: Many vendors don\'t accept credit cards', zh: '带现金: 许多摊位不接受信用卡' },
    ],
  },
  'dotonbori': {
    id: 'dotonbori',
    title: { en: 'Dotonbori', zh: '道顿堀', ja: '道頓堀' },
    location: { en: 'Namba, Osaka', zh: '大阪难波', ja: '大阪難波' },
    city: 'osaka',
    price: 'Free',
    hours: { en: 'Best at Night', zh: '夜晚最佳', ja: '夜が最高' },
    images: [
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/dotonbori/canal-night-view.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/dotonbori/glico-billboard-night.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/dotonbori/neon-signs-street.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/dotonbori/canal-bridge-day.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/dotonbori/gyoza-sign-street.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/dotonbori/canal-boat-night.jpg',
    ],
    about: {
      en: "Dotonbori is Osaka's most famous entertainment and dining district, running along the Dotonbori canal. Known as \"Osaka's kitchen,\" this vibrant area is famous for its extravagant neon signs, street food, and energetic nightlife. The name comes from the Dotonbori canal, which was constructed in 1615. The area comes alive at night with massive animated signs including the famous Glico running man, giant crabs, octopuses, and other food-themed displays. It's the perfect place to experience Osaka's food culture with takoyaki (octopus balls), okonomiyaki (savory pancakes), and kushikatsu (deep-fried skewers).",
      zh: '道顿堀是大阪最著名的娱乐和餐饮区，沿着道顿堀运河延伸。被称为"大阪的厨房"，这个充满活力的地区以其奢华的霓虹灯招牌、街头美食和充满活力的夜生活而闻名。这个名字来自道顿堀运河，建于1615年。该地区在夜晚充满活力，有巨大的动画招牌，包括著名的格力高跑男、巨大的螃蟹、章鱼和其他以食物为主题的展示。这是体验大阪美食文化的完美场所，有章鱼烧、大阪烧和串炸。',
      ja: '道頓堀は道頓堀川沿いに広がる大阪随一の繁華街で、「大阪の台所」とも呼ばれるグルメの聖地です。1615年に開削された運河に由来し、夜になるとグリコの看板をはじめ、巨大なカニやタコなど派手な立体看板が街を彩ります。たこ焼き、お好み焼き、串カツなど大阪名物の食べ歩きを楽しむのにぴったりのエリアです。'
    },
    highlights: [
      { en: 'Glico Running Man Sign: The iconic neon sign of a runner crossing a finish line - Osaka\'s most photographed landmark', zh: '格力高跑男广告牌: 标志性的霓虹灯招牌，显示一个跑步者冲过终点线 - 大阪最受拍照的地标' },
      { en: 'Giant Food Signs: Massive 3D signs including a moving crab (Kani Doraku), octopus (Tako Tako King), and pufferfish', zh: '巨大食物招牌: 巨大的3D招牌，包括移动的螃蟹（蟹道乐）、章鱼（章鱼章鱼王）和河豚', ja: '巨大食物招牌: 巨大的3D招牌，包括移动的カニ（蟹道乐）、章鱼（章鱼章鱼王）和河豚' },
      { en: 'Street Food: Try takoyaki, okonomiyaki, kushikatsu, and other Osaka specialties from street vendors', zh: '街头美食: 从街头小贩那里尝试章鱼烧、大阪烧、串炸和其他大阪特色菜', ja: '街头美食: 街头小贩那里尝试たこ焼き、お好み焼き、串カツ和其他大阪特色菜' },
    ],
    tips: [
      { en: 'Visit at Night: The neon signs are most impressive after dark', zh: '夜晚参观: 霓虹灯招牌在夜晚最令人印象深刻', ja: '夜晚参观: 霓虹灯招牌在夜晚最令人印象深刻' },
      { en: 'Try the Food: Don\'t miss takoyaki, okonomiyaki, and kushikatsu', zh: '尝试美食: 不要错过章鱼烧、大阪烧和串炸' },
    ],
  },
  'gion': {
    id: 'gion',
    title: { en: 'Gion District', zh: '祇园区', ja: '祇園区' },
    location: { en: 'Gion, Kyoto', zh: '京都祇园', ja: '京都祇園' },
    city: 'kyoto',
    price: 'Free',
    hours: { en: '24 Hours (Best in Evening)', zh: '24小时（傍晚最佳）', ja: '24時間（夕方が最高）' },
    images: [
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/gion/hanamikoji-street.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/gion/evening-lanterns.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/gion/traditional-street.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/gion/yasaka-pagoda.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/gion/cherry-blossom-street.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/gion/twilight-street.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/gion/night-street.jpg',
    ],
    about: {
      en: "Gion is Kyoto's famous geisha district, known for its traditional wooden machiya houses, narrow cobblestone streets, and traditional teahouses. The area has preserved its historic charm and is one of the best places in Japan to see geishas (geiko) and maikos (apprentice geishas) walking to appointments. Hanamikoji Street is the main thoroughfare, lined with traditional architecture, exclusive restaurants, and ochaya (teahouses). Gion is especially beautiful in the evening when lanterns light up the streets, creating a magical atmosphere that transports visitors back to old Japan.",
      zh: '祇园是京都著名的艺伎区，以其传统的木制町屋、狭窄的鹅卵石街道和传统茶屋而闻名。该地区保留了其历史魅力，是日本观赏艺伎（艺子）和舞伎（学徒艺伎）前往约会的绝佳地点之一。花见小路是主要街道，两旁是传统建筑、独家餐厅和茶屋。祇园在傍晚特别美丽，当灯笼照亮街道时，营造出一种神奇的氛围，将游客带回古老的日本。',
      ja: '祇園は京都を代表する花街（芸妓の街）で、町家が並ぶ路地や石畳、茶屋など、昔ながらの風情が色濃く残るエリアです。夕方以降には、芸妓（げいこ）や舞妓（まいこ）が稽古やお座敷へ向かう姿を見かけることもあります。花見小路通を中心に、伝統的な建築と老舗の飲食店、お茶屋が並び、提灯の灯りがともる夕景は特に幻想的です。'
    },
    highlights: [
      { en: 'Hanamikoji Street: The main street with traditional architecture and exclusive teahouses', zh: '花见小路: 主要街道，有传统建筑和独家茶屋', ja: '花见小路: 主要街道，有传统建筑和独家お茶屋' },
      { en: 'Geisha Spotting: Best chance to see geishas and maikos in traditional attire (evening hours)', zh: '观赏艺伎: 看到传统服装的艺伎和舞伎的最佳机会（傍晚时段）', ja: '观赏艺伎: 看到传统服装的艺伎和舞伎的最佳机会（傍晚时段）' },
      { en: 'Yasaka Shrine: Beautiful shrine at the end of Hanamikoji with hundreds of lanterns', zh: '八坂神社: 花见小路尽头的美丽神社，有数百个灯笼', ja: '八坂神社: 花见小路尽头的美丽神社，有数百个灯笼' },
    ],
    tips: [
      { en: 'Evening Visit: Best time to see geishas and experience the magical atmosphere', zh: '傍晚参观: 观赏艺伎和体验神奇氛围的最佳时间', ja: '傍晚参观: 观赏艺伎和体验神奇氛围的最佳時間' },
      { en: 'Respect Privacy: Don\'t chase or harass geishas - observe from a respectful distance', zh: '尊重隐私: 不要追逐或骚扰艺伎 - 从尊重的距离观察' },
      { en: 'Traditional Restaurants: Many exclusive restaurants require reservations', zh: '传统餐厅: 许多独家餐厅需要预订', ja: '传统レストラン: 许多独家レストラン需要予約' },
    ],
  },
  'yasaka': {
    id: 'yasaka',
    title: { en: 'Yasaka Shrine', zh: '八坂神社', ja: '八坂神社' },
    location: { en: 'Gion, Kyoto', zh: '京都祇园', ja: '京都祇園' },
    city: 'kyoto',
    price: 'Free',
    hours: { en: 'Open 24 Hours', zh: '24小时开放', ja: '24時間営業' },
    images: [
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/yasaka/main-gate-day.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/yasaka/lanterns-hall.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/yasaka/shrine-complex.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/yasaka/winter-snow.jpg',
    ],
    about: {
      en: "Yasaka Shrine (also known as Gion Shrine) is one of Kyoto's most famous shrines, located at the end of Hanamikoji Street in the Gion district. Founded over 1,350 years ago, the shrine is dedicated to Susanoo-no-Mikoto and his consort. The shrine is famous for its hundreds of lanterns that line the main hall, creating a beautiful and photogenic scene, especially at night when they're lit. The shrine hosts the famous Gion Matsuri festival in July, one of Japan's three major festivals. The main hall (honden) is designated as a National Treasure.",
      zh: '八坂神社（也称为祇园神社）是京都最著名的神社之一，位于祇园区花见小路的尽头。建于1,350多年前，神社供奉素戋呜尊及其配偶。神社以其主殿旁的数百个灯笼而闻名，创造出美丽且上镜的场景，特别是在夜晚点亮时。神社在7月举办著名的祇园祭，这是日本三大节日之一。主殿（本殿）被指定为国宝。',
      ja: '八坂神社（祇園社）は祇園の象徴的な神社で、花見小路通の突き当たりに位置します。約1,350年以上の歴史を持ち、素戔嗚尊（すさのおのみこと）などを祀っています。境内には数多くの提灯が並び、夜に灯りが入るととても写真映えする雰囲気に。7月の祇園祭は日本三大祭の一つとして有名で、本殿は国宝に指定されています。'
    },
    highlights: [
      { en: 'Hundreds of Lanterns: Beautiful lanterns lining the main hall, especially stunning at night', zh: '数百个灯笼: 主殿旁的美丽灯笼，在夜晚特别令人惊叹', ja: '数百个灯笼: 主殿旁的美丽灯笼，在夜晚特别令人惊叹' },
      { en: 'Gion Matsuri: One of Japan\'s three major festivals held in July', zh: '祇园祭: 7月举行的日本三大节日之一' },
      { en: 'Main Hall: National Treasure-designated building with unique architecture', zh: '主殿: 被指定为国宝的建筑，具有独特的建筑风格', ja: '主殿: 被指定为国宝的建筑，具有独特的建筑风格' },
    ],
    tips: [
      { en: 'Night Visit: The lanterns are most beautiful when lit at night', zh: '夜晚参观: 灯笼在夜晚点亮时最美丽', ja: '夜晚参观: 灯笼在夜晚点亮时最美丽' },
      { en: 'Gion Matsuri: Visit in July to experience the famous festival', zh: '祇园祭: 在7月参观，体验著名的节日', ja: '祇園祭: 在7月参观，体验著名的节日' },
    ],
  },
  'nara-park': {
    id: 'nara-park',
    title: { en: 'Nara Park', zh: '奈良公园', ja: '奈良公園' },
    location: { en: 'Nara', zh: '奈良', ja: '奈良' },
    city: 'nara',
    price: 'Free',
    hours: { en: 'Open 24 Hours', zh: '24小时开放', ja: '24時間営業' },
    images: [
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/nara-park/deer-feeding.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/nara-park/cherry-blossom-deer.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/nara-park/deer-interaction.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/nara-park/autumn-deer-herd.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/nara-park/deer-temple-gate.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/nara-park/park-pathway.jpg',
    ],
    about: {
      en: "Nara Park is a large public park in the heart of Nara, famous for its population of over 1,200 freely roaming sika deer. The deer are considered sacred messengers of the gods in Shinto religion and are designated as a National Natural Treasure. Visitors can interact with the friendly deer, feed them special deer crackers (shika senbei) sold throughout the park, and take photos. The park covers 660 hectares and includes several major temples and shrines including Todaiji Temple, Kasuga Taisha, and Kofukuji Temple. The park is especially beautiful during cherry blossom season in spring.",
      zh: '奈良公园是奈良市中心的一个大型公园，以其1,200多只自由漫游的梅花鹿而闻名。在神道教中，这些鹿被认为是神圣的神的使者，被指定为国家自然宝藏。游客可以与友好的鹿互动，喂它们在整个公园出售的特殊鹿饼干（鹿煎饼），并拍照。公园占地660公顷，包括几个主要寺庙和神社，包括东大寺、春日大社和兴福寺。公园在春季樱花季节特别美丽。',
      ja: '奈良公園は奈良市中心部に広がる大きな公園で、約1,200頭以上の野生のシカが自由に歩き回ることで有名です。シカは神の使いとされ、国の天然記念物にも指定されています。園内では「鹿せんべい」を購入して餌やり体験ができ、写真撮影も人気。東大寺、春日大社、興福寺など主要な寺社が点在し、春は桜の名所としても美しいスポットです。'
    },
    highlights: [
      { en: 'Friendly Deer: Over 1,200 sika deer freely roaming and interacting with visitors', zh: '友好的鹿: 超过1,200只梅花鹿自由漫游并与游客互动', ja: '友好的鹿: 超过1,200只梅花鹿自由漫游并与游客互动' },
      { en: 'Deer Feeding: Buy special deer crackers (shika senbei) to feed the deer', zh: '喂鹿: 购买特殊的鹿饼干（鹿煎饼）来喂鹿', ja: '喂鹿: 购买特殊的鹿饼干（鹿煎饼）来喂鹿' },
      { en: 'Major Temples: Home to Todaiji, Kasuga Taisha, and Kofukuji temples', zh: '主要寺庙: 东大寺、春日大社和兴福寺的所在地', ja: '主要寺院: 东大寺、春日大社和兴福寺的所在地' },
      { en: 'Cherry Blossoms: Beautiful sakura trees throughout the park in spring', zh: '樱花: 春天整个公园都有美丽的樱花树', ja: '樱花: 春天整个公園都有美丽的樱花树' },
    ],
    tips: [
      { en: 'Deer Crackers: Available for ¥200 - be careful, deer can be persistent!', zh: '鹿饼干: 售价200日元 - 小心，鹿可能会很坚持！', ja: '鹿饼干: 售价200日元 - 小心，鹿可能会很坚持！' },
      { en: 'Respect the Deer: Don\'t tease or chase them - they can bow for food!', zh: '尊重鹿: 不要戏弄或追逐它们 - 它们会为食物鞠躬！' },
      { en: 'Early Morning: Best time to visit with fewer crowds and active deer', zh: '清晨: 参观的最佳时间，人少，鹿活跃', ja: '清晨: 参观的最佳時間，人少，鹿活跃' },
    ],
  },
  'todaiji': {
    id: 'todaiji',
    title: { en: 'Todaiji Temple', zh: '东大寺', ja: '东大寺' },
    location: { en: 'Nara', zh: '奈良', ja: '奈良' },
    city: 'nara',
    price: '¥600',
    hours: { en: '7:30 AM - 5:30 PM (Apr-Oct), 8:00 AM - 5:00 PM (Nov-Mar)', zh: '早上7:30 - 下午5:30（4-10月），早上8:00 - 下午5:00（11-3月）', ja: '午前7:30 - 午後5:30（4-10月）、午前8:00 - 午後5:00（11-3月）' },
    images: [
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/todaiji/daibutsuden-hall.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/todaiji/great-buddha-interior.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/todaiji/buddha-statue-altar.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/todaiji/main-hall-exterior.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/todaiji/temple-complex.jpg',
    ],
    about: {
      en: "Todaiji (Great Eastern Temple) is one of Japan's most famous and historically significant temples. Founded in 752 AD, it was constructed by Emperor Shomu to serve as the head temple of all provincial Buddhist temples. The main hall (Daibutsuden) is the world's largest wooden building, despite being rebuilt at only two-thirds of its original size after fires. Inside stands the Great Buddha (Daibutsu), a massive bronze statue of Vairocana Buddha that is 15 meters tall and weighs 500 tons. The temple complex also includes the Nandaimon Gate with its fierce guardian statues and the Nigatsudo Hall with beautiful views.",
      zh: '东大寺（大东寺）是日本最著名和历史意义最重大的寺庙之一。建于公元752年，由圣武天皇建造，作为所有省级佛教寺庙的总本山。主殿（大佛殿）是世界上最大的木制建筑，尽管在火灾后重建时只有原始尺寸的三分之二。内部矗立着大佛（大仏），一尊巨大的毗卢遮那佛青铜雕像，高15米，重500吨。寺庙建筑群还包括有凶猛守护神像的南大门和有美丽景色的二月堂。',
      ja: '東大寺は752年創建の日本を代表する大寺院で、聖武天皇が国分寺の総本山として建立しました。大仏殿は世界最大級の木造建築で、火災後の再建により当初より小さくなったとはいえ圧巻の規模です。堂内には高さ約15m、重さ約500トンともいわれる盧舎那仏（大仏）が鎮座します。境内には仁王像で知られる南大門や、眺望の良い二月堂など見どころが多くあります。'
    },
    highlights: [
      { en: 'Great Buddha Hall: World\'s largest wooden building housing the massive bronze Buddha statue', zh: '大佛殿: 世界上最大的木制建筑，内有巨大的青铜佛像' },
      { en: 'Great Buddha: 15-meter tall bronze statue weighing 500 tons - one of Japan\'s largest', zh: '大佛: 高15米、重500吨的青铜雕像 - 日本最大的之一' },
      { en: 'Nandaimon Gate: Massive gate with fierce guardian statues (Nio)', zh: '南大门: 有凶猛守护神像（仁王）的巨大门', ja: '南大门: 有凶猛守护神像（仁王）的巨大门' },
      { en: 'Pillar Hole: Try to crawl through a hole in a pillar - said to bring enlightenment', zh: '柱子洞: 尝试爬过柱子上的洞 - 据说能带来开悟', ja: '柱子洞: 尝试爬过柱子上的洞 - 据说能带来开悟' },
    ],
    tips: [
      { en: 'Early Visit: Arrive early to avoid crowds, especially during peak season', zh: '早到: 早到以避开人群，特别是在旺季', ja: '早到: 早到以避开人群，特别是在旺季' },
      { en: 'Pillar Challenge: The hole in the pillar is said to be the same size as the Buddha\'s nostril', zh: '柱子挑战: 柱子上的洞据说与佛像的鼻孔大小相同' },
      { en: 'Combined Ticket: Consider buying a combined ticket for multiple Nara attractions', zh: '联票: 考虑购买多个奈良景点的联票', ja: '联票: 考虑购买多个奈良観光地的联票' },
    ],
  },
  'kasuga': {
    id: 'kasuga',
    title: { en: 'Kasuga Taisha', zh: '春日大社', ja: '春日大社' },
    location: { en: 'Nara', zh: '奈良', ja: '奈良' },
    city: 'nara',
    price: 'Free (Main Area) | ¥500 (Inner Area)',
    hours: { en: '6:00 AM - 6:00 PM (Apr-Sep), 6:30 AM - 5:00 PM (Oct-Mar)', zh: '早上6:00 - 下午6:00（4-9月），早上6:30 - 下午5:00（10-3月）', ja: '午前6:00 - 午後6:00（4-9月）、午前6:30 - 午後5:00（10-3月）' },
    images: [
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/kasuga/stone-lanterns-pathway.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/kasuga/lanterns-hall.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/kasuga/main-hall-vermillion.png',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/kasuga/shrine-complex.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/kasuga/shrine-gate-entrance.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/kasuga/temple-staircase.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/kasuga/traditional-building.jpg',
    ],
    about: {
      en: "Kasuga Taisha is Nara's most celebrated Shinto shrine, famous for its 3,000 stone and bronze lanterns. Founded in 768 AD, the shrine is dedicated to the deity responsible for the protection of Nara. The approach to the shrine is lined with hundreds of stone lanterns, creating a magical pathway. The main hall features hundreds of bronze lanterns hanging from the eaves. The shrine is especially beautiful during the Lantern Festivals in February and August when all lanterns are lit. The vermillion-colored buildings stand out beautifully against the surrounding forest.",
      zh: '春日大社是奈良最著名的神道教神社，以其3,000个石制和青铜灯笼而闻名。建于公元768年，神社供奉负责保护奈良的神灵。通往神社的道路两旁有数百个石制灯笼，创造出一条神奇的路径。主殿有数百个青铜灯笼从屋檐垂下。神社在2月和8月的灯笼节期间特别美丽，所有灯笼都被点亮。朱红色的建筑在周围的森林中显得格外美丽。',
      ja: '春日大社は奈良を代表する神社で、境内に約3,000基の石灯籠・釣灯籠があることで知られます。768年創建とされ、奈良の守護神を祀っています。参道には石灯籠がずらりと並び、幻想的な雰囲気に。社殿の軒下には無数の釣灯籠が掛けられ、2月と8月の万灯籠の時期にはすべての灯籠に火が灯り、特に美しい光景が広がります。'
    },
    highlights: [
      { en: '3,000 Lanterns: Stone and bronze lanterns throughout the shrine grounds', zh: '3,000个灯笼: 整个神社场地的石制和青铜灯笼', ja: '3,000个灯笼: 整个神社场地的石制和青铜灯笼' },
      { en: 'Lantern Festivals: All lanterns lit during festivals in February and August', zh: '灯笼节: 在2月和8月的节日期间，所有灯笼都被点亮', ja: '灯笼节: 在2月和8月的节日期间，所有灯笼都被点亮' },
      { en: 'Vermillion Buildings: Beautiful traditional architecture in vibrant vermillion color', zh: '朱红色建筑: 鲜艳朱红色的美丽传统建筑', ja: '朱红色建筑: 鲜艳朱红色的美丽传统建筑' },
      { en: 'Stone Lantern Path: Magical pathway lined with hundreds of stone lanterns', zh: '石灯笼路径: 两旁有数百个石灯笼的神奇路径', ja: '石灯笼路径: 两旁有数百个石灯笼的神奇路径' },
    ],
    tips: [
      { en: 'Lantern Festivals: Visit in February or August to see all lanterns lit', zh: '灯笼节: 在2月或8月参观，看到所有灯笼被点亮', ja: '灯笼节: 在2月或8月参观，看到所有灯笼被点亮' },
      { en: 'Early Morning: Beautiful lighting and fewer crowds in the morning', zh: '清晨: 早晨光线美丽，人少', ja: '清晨: 早晨光線美丽，人少' },
      { en: 'Inner Area: Pay ¥500 to see the inner area with more lanterns', zh: '内区: 支付500日元参观内区，有更多灯笼', ja: '内区: 支付500日元参观内区，有更多灯笼' },
    ],
  },
  'ujigami': {
    id: 'ujigami',
    title: { en: 'Ujigami Shrine (宇治上神社)', zh: '宇治上神社', ja: '宇治上神社' },
    location: { en: 'Uji, Kyoto', zh: '京都宇治', ja: '京都宇治' },
    city: 'kyoto',
    price: 'Free',
    hours: { en: '9:00 AM - 4:30 PM', zh: '9:00 AM - 4:30 PM', ja: '午前9:00 - 午後4:30' },
    images: [
      'https://www.japan-guide.com/g17/3978_02.jpg',
      'https://www.japan-guide.com/g17/3978_01.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYAf7rVPnFq06KA0cE0jLE4ZwQkdPOd-NCrA&s',
      'https://japanjourneys.jp/wp-content/uploads/2019/10/ujigami-shrine-kyoto-header-2.jpg',
    ],
    about: {
      en: "Ujigami Shrine (宇治上神社) is one of Japan's oldest Shinto shrines and a UNESCO World Heritage Site, located in Uji, Kyoto. The shrine is believed to have been established in the late Heian period (794-1185) and is dedicated to the imperial prince Uji no Wakiiratsuko. The shrine's main hall (honden) is considered one of the oldest surviving examples of Shinto shrine architecture in Japan, dating back to the 11th century. The shrine is part of the \"Historic Monuments of Ancient Kyoto\" UNESCO World Heritage Site. The shrine features traditional Japanese architecture with a simple, elegant design. It's located along the Uji River, making it a peaceful and scenic spot to visit. The shrine is less crowded than many other Kyoto attractions, offering a tranquil experience.",
      zh: '宇治上神社是日本最古老的神道教神社之一，也是联合国教科文组织世界遗产，位于京都宇治。神社被认为建于平安时代后期（794-1185年），供奉皇族宇治若郎子。神社的主殿（本殿）被认为是日本现存最古老的神道教神社建筑之一，可追溯到11世纪。神社是"古都京都的历史遗迹"联合国教科文组织世界遗产的一部分。神社具有传统日本建筑风格，设计简洁优雅。它位于宇治川沿岸，是一个宁静而风景如画的景点。神社比京都的许多其他景点人少，提供宁静的体验。',
      ja: '宇治上神社は京都・宇治にある日本最古級の神社で、「古都京都の文化財」としてユネスコ世界遺産にも登録されています。平安時代後期の創建とされ、宇治若郎子（うじのわきいらつこ）を祀ります。本殿（国宝）は11世紀の神社建築の遺構として非常に貴重で、素朴で端正な佇まいが魅力です。宇治川の近くにあり、京都市内の有名観光地より比較的落ち着いて参拝できる静かなスポットです。'
    },
    highlights: [
      { en: 'UNESCO World Heritage: Part of "Historic Monuments of Ancient Kyoto"', zh: '联合国教科文组织世界遗产: "古都京都的历史遗迹"的一部分', ja: '联合国教科文组织世界遗产: "古都京都的历史遗迹"的一部分' },
      { en: 'Oldest Shrine Architecture: Main hall dates back to the 11th century', zh: '最古老的神社建筑: 主殿可追溯到11世纪', ja: '最古老的神社建筑: 主殿可追溯到11世纪' },
      { en: 'Peaceful Atmosphere: Less crowded than other Kyoto attractions', zh: '宁静氛围: 比京都其他景点人少', ja: '宁静氛围: 比京都其他観光地人少' },
      { en: 'Riverside Location: Beautiful location along the Uji River', zh: '河畔位置: 位于宇治川沿岸的美丽位置', ja: '河畔位置: 位于宇治川沿岸的美丽位置' },
      { en: 'Traditional Architecture: Simple and elegant Shinto shrine design', zh: '传统建筑: 简洁优雅的神道教神社设计', ja: '传统建筑: 简洁优雅的神道教神社设计' },
    ],
    tips: [
      { en: 'Duration: ~30-45 mins (walk around shrine grounds)', zh: '停留时间: 约30-45分钟（在神社场地周围散步）', ja: '所要時間: 約30-45分（在神社场地周围散步）' },
      { en: 'Access: Walk 10 mins from Nakamura Tokichi Honten along Uji River', zh: '交通: 从中村藤吉本店沿宇治川步行10分钟', ja: '交通: 中村藤吉本店沿宇治川徒歩10分' },
      { en: 'Perfect Timing: Visit at 10:30 AM after Nakamura Tokichi (9:30 AM), then leave for Nara at 11:30 AM', zh: '完美时机: 在中村藤吉（上午9:30）之后上午10:30参观，然后在上午11:30前往奈良', ja: '完美时机: 在中村藤吉（午前9:30）之后午前10:30参观，然后在午前11:30へ移動奈良' },
      { en: 'Free Admission: No entrance fee required', zh: '免费入场: 无需入场费', ja: '無料入场: 无需入场费' },
      { en: 'Riverside Walk: Enjoy a peaceful walk along the Uji River to reach the shrine', zh: '河畔散步: 沿着宇治川享受宁静的步行到达神社', ja: '河畔散步: 沿着宇治川享受宁静的徒歩到达神社' },
    ],
  },
  'wakakusa': {
    id: 'wakakusa',
    title: { en: 'Mt. Wakakusa (若草山)', zh: '若草山', ja: '若草山' },
    location: { en: 'Nara City', zh: '奈良市', ja: '奈良市' },
    city: 'nara',
    price: '¥150',
    hours: { en: '9:00 AM - 5:00 PM (varies by season)', zh: '9:00 AM - 5:00 PM (因季节而异)', ja: '午前9:00 - 午後5:00（季節により異なる）' },
    images: [
      'https://narashikanko.or.jp/lsc/upfile/spot/0001/0108/10108_1_l.jpg',
      'https://narashikanko.or.jp/lsc/upfile/spot/0001/0108/10108_2_l.jpg',
      'https://cdn.prod.rexby.com/image/a3c42040a8e34c88bc5500d192bb3128?format=webp&width=1080&height=1350',
      'https://nara-sightseeing.com/ns/wp-content/uploads/2020/04/PMH_160821_191900_2402-1024x683.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD0xx8OJilJe2a2PqCCTQY1x7YaNS-0wm7DA&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0HXUMDBtNp71oMQXYLTpi88sZJltLuxt_4A&s',
      'https://www.travelingjapan.net/wp-content/uploads/2022/11/night-veiw-from-mount-wakakusa-2-scaled.jpg',
    ],
    about: {
      en: "Mt. Wakakusa (若草山), also known as Mount Mikasa, is a 342-meter-high grass-covered mountain located in Nara Park. The mountain offers spectacular panoramic views of Nara City and is famous for its beautiful sunset views. The entire mountain is covered with grass, creating a unique landscape that changes color with the seasons - green in spring and summer, golden in autumn, and brown in winter. The mountain is particularly famous for the annual Wakakusa Yamayaki festival in January, where the entire mountain is set on fire in a spectacular display. The best time to visit is during sunset (around 5:30 PM) when you can enjoy breathtaking views of Nara City bathed in golden light. The climb to the top takes about 15-20 minutes and is relatively easy, making it accessible for most visitors.",
      zh: '若草山，也被称为三笠山，是一座342米高的草覆盖的山，位于奈良公园。这座山提供壮观的奈良市全景，以其美丽的日落景色而闻名。整座山都被草覆盖，创造了独特的景观，随着季节变化颜色 - 春天和夏天是绿色，秋天是金色，冬天是棕色。这座山特别以每年一月的若草山烧山节而闻名，整个山被点燃，形成壮观的展示。最佳访问时间是日落时分（约下午5:30），您可以欣赏到沐浴在金色光线中的奈良市的壮丽景色。爬到山顶大约需要15-20分钟，相对容易，大多数游客都可以到达。',
      ja: '若草山（みかさやま）は奈良公園内にある標高342mの草山で、奈良市街を一望できる眺望スポットとして人気です。山全体が芝に覆われ、春夏は緑、秋は黄金色、冬は茶色へと季節によって表情が変わります。毎年1月の「若草山焼き」では山肌を焼く行事が行われ、奈良の冬の風物詩として有名です。夕暮れ時（目安は17:30頃）は特に美しく、山頂までは徒歩15〜20分ほどで登れるため気軽に訪れやすい場所です。'
    },
    highlights: [
      { en: 'Panoramic Views: Spectacular 360-degree views of Nara City from the summit', zh: '全景: 从山顶欣赏奈良市的壮丽360度全景', ja: '全景: 山顶欣赏奈良市的壮丽360度全景' },
      { en: 'Sunset Views: Famous for breathtaking sunset views over Nara City - best time is around 5:30 PM', zh: '日落景色: 以奈良市上空的壮丽日落景色而闻名 - 最佳时间是下午5:30左右', ja: '日落景色: 以奈良市上空的壮丽日落景色而闻名 - 最佳時間是午後5:30左右' },
      { en: 'Grass-Covered Mountain: Unique landscape with grass covering the entire mountain, changing colors with seasons', zh: '草覆盖的山: 独特的景观，整座山都被草覆盖，随季节变化颜色', ja: '草覆盖的山: 独特的景观，整座山都被草覆盖，随季节变化颜色' },
      { en: 'Easy Climb: 15-20 minute walk to the summit, accessible for most visitors', zh: '轻松攀登: 步行15-20分钟到达山顶，大多数游客都可以到达', ja: '轻松攀登: 徒歩15-20分到达山顶，大多数游客都可以到达' },
      { en: 'Wakakusa Yamayaki Festival: Annual fire festival in January where the mountain is set ablaze', zh: '若草山烧山节: 每年一月的火节，整座山被点燃', ja: '若草山烧山节: 每年一月的火节，整座山被点燃' },
    ],
    tips: [
      { en: 'Best Time to Visit: Sunset (around 5:30 PM) for the most spectacular views - arrive at 5:00 PM to secure a good spot', zh: '最佳访问时间: 日落时分（约下午5:30）获得最壮观的景色 - 下午5:00到达以确保好位置', ja: '最佳访问時間: 日落时分（約午後5:30）获得最壮观的景色 - 午後5:00到达以确保好位置' },
      { en: 'Duration: ~30-45 mins (15-20 mins climb up, 10-15 mins at top, 10 mins climb down)', zh: '停留时间: 约30-45分钟（15-20分钟爬上去，10-15分钟在顶部，10分钟爬下来）', ja: '所要時間: 約30-45分（15-20分爬上去，10-15分在顶部，10分爬下来）' },
      { en: 'Entrance Fee: ¥150 per person', zh: '入场费: 每人¥150', ja: '入场费: 每人¥150' },
      { en: 'Access: Walk 15 mins from Kasuga Taisha Shrine - perfect after visiting the shrine', zh: '交通: 从春日大社步行15分钟 - 参观神社后的完美选择', ja: '交通: 春日大社徒歩15分 - 参观神社后的完美选择' },
      { en: 'Perfect Timing: Visit at 5:30 PM (sunset) after exploring Kasuga Taisha, then head to Yamatoen Honten for dinner at 7:00 PM', zh: '完美时机: 下午5:30（日落）参观，在探索春日大社之后，然后在晚上7:00前往大和园本店享用晚餐', ja: '完美时机: 午後5:30（日落）参观，在探索春日大社之后，然后在夜7:00へ移動大和园本店享用ディナー' },
      { en: 'What to Bring: Camera for sunset photos, comfortable walking shoes, and a jacket as it can get windy at the top', zh: '携带物品: 用于拍摄日落照片的相机，舒适的步行鞋，以及夹克，因为山顶可能多风', ja: '携带物品: 用于拍摄日落照片的相机，舒适的徒歩鞋，以及夹克，因为山顶可能多风' },
    ],
  },
  'osaka-castle': {
    id: 'osaka-castle',
    title: { en: 'Osaka Castle', zh: '大阪城', ja: '大阪城' },
    location: { en: 'Osaka', zh: '大阪', ja: '大阪' },
    city: 'osaka',
    price: 'Free (Park) | ¥600 (Castle Tower)',
    hours: { en: '9:00 AM - 5:00 PM (Castle Tower)', zh: '上午9:00 - 下午5:00（天守阁）', ja: '午前9:00 - 午後5:00（天守閣）' },
    images: [
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/osaka-castle/castle-close-up.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/osaka-castle/cherry-blossom-spring.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/osaka-castle/castle-city-skyline.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/osaka-castle/castle-autumn-foliage.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/osaka-castle/castle-complex-wide.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/osaka-castle/castle-sunset.jpg',
    ],
    about: {
      en: "Osaka Castle is one of Japan's most famous castles, originally built in 1583 by Toyotomi Hideyoshi. The current castle tower is a concrete reconstruction completed in 1931, but it houses a museum with artifacts and displays about the castle's history. The castle is surrounded by beautiful gardens and moats, making it a popular spot for cherry blossom viewing in spring. The castle played a crucial role in the unification of Japan during the 16th century. The observation deck on the 8th floor offers panoramic views of Osaka city.",
      zh: '大阪城是日本最著名的城堡之一，最初由丰臣秀吉于1583年建造。现在的天守阁是1931年完成的混凝土重建，但它设有一个博物馆，展示有关城堡历史的文物和展品。城堡被美丽的花园和护城河所环绕，使其成为春季赏樱的热门地点。城堡在16世纪日本统一中发挥了关键作用。8楼的观景台可欣赏大阪市的全景。',
      ja: '大阪城は1583年に豊臣秀吉が築いた、日本を代表する城の一つです。現在の天守は1931年に再建されたもので、内部は博物館となっており、大阪城の歴史や資料が展示されています。広い公園と堀に囲まれ、春は桜の名所としても有名です。16世紀の天下統一の歴史に深く関わった城で、天守最上階（8階）の展望フロアからは大阪の街並みを一望できます。'
    },
    highlights: [
      { en: 'Castle Tower: 8-story reconstruction with museum and observation deck', zh: '天守阁: 8层重建，有博物馆和观景台', ja: '天守阁: 8层重建，有博物館和观景台' },
      { en: 'Cherry Blossoms: Beautiful sakura trees throughout the park in spring', zh: '樱花: 春天整个公园都有美丽的樱花树', ja: '樱花: 春天整个公園都有美丽的樱花树' },
      { en: 'Museum: Exhibits about Toyotomi Hideyoshi and the castle\'s history', zh: '博物馆: 关于丰臣秀吉和城堡历史的展览' },
      { en: 'Gardens: Beautiful traditional Japanese gardens surrounding the castle', zh: '花园: 围绕城堡的美丽传统日本花园', ja: '花园: 围绕城堡的美丽传统日本花园' },
    ],
    tips: [
      { en: 'Cherry Blossom Season: Visit in late March to early April for stunning views', zh: '樱花季节: 在3月下旬至4月初参观，欣赏令人惊叹的景色', ja: '樱花季节: 在3月下旬へ4月初参观，欣赏令人惊叹的景色' },
      { en: 'Observation Deck: Great views of Osaka from the 8th floor', zh: '观景台: 从8楼可以欣赏到大阪的美景', ja: '观景台: 8楼可以欣赏到大阪的美景' },
      { en: 'Park is Free: You can enjoy the gardens and exterior without entering the tower', zh: '公园免费: 您可以享受花园和外观，无需进入天守阁', ja: '公園無料: 您可以享受花园和外观，无需进入天守阁' },
    ],
  },
  'umeda-sky-building': {
    id: 'umeda-sky-building',
    title: { en: 'Umeda Sky Building', zh: '梅田蓝天大厦', ja: '梅田蓝天大厦' },
    location: { en: 'Umeda, Osaka', zh: '大阪梅田', ja: '大阪梅田' },
    city: 'osaka',
    price: '¥1,500',
    hours: { en: '9:30 AM - 10:30 PM', zh: '上午9:30 - 晚上10:30', ja: '午前9:30 - 午後10:30' },
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQhBjC1p5BC3btUgkz2UG0AYPs9wkIpay1aw&s',
      'https://www.skybldg.co.jp/lang/asset/img/top/mv_bg01.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLaN5VyCrmbhKoEW-YRpPZEqcgzrfuxQAgAw&s',
      'https://img.enjoy-osaka-kyoto-kobe.com/wp-content/uploads/2025/07/04163652/umeda-sky-building-08-1024x683.webp',
      'https://cdn-imgix.headout.com/mircobrands-banner/image/ef36d2145750317dcf8a549ee02fee1e-59f4d24f-867f-420c-8d95-02d1a2de343c-17836-osaka-osaka-umeda-sky-building-admission-ticket-02.jpg',
      'https://q-xx.bstatic.com/xdata/images/xphoto/800x800/384807396.jpg?k=6d9f0044e1feb18154aa4ef94904317449ef5ce82c7fa109ede1e235746abff0&o='
    ],
    about: {
      en: "Umeda Sky Building (梅田スカイビル) is one of Osaka's most iconic landmarks, completed in 1993. The building consists of two 40-story towers connected at the top by the Floating Garden Observatory, creating a distinctive architectural design. The observatory offers stunning 360-degree panoramic views of Osaka city and beyond. The building is renowned for its unique design, featuring an open-air deck on the 39th floor and an enclosed observatory on the 40th floor. The Floating Garden Observatory provides breathtaking views both day and night, making it a must-visit attraction for anyone exploring Osaka.",
      zh: '梅田蓝天大厦（梅田スカイビル）是大阪最具标志性的地标之一，于1993年完工。该建筑由两座40层高的塔楼组成，顶部通过空中庭园展望台相连，创造出独特的建筑设计。展望台提供令人惊叹的大阪市及周边360度全景。该建筑以其独特的设计而闻名，在39层设有露天观景台，40层设有封闭式展望台。空中庭园展望台提供令人叹为观止的白天和夜晚景观，是探索大阪的必游景点。',
      ja: '梅田スカイビルは1993年に完成した大阪の代表的ランドマークで、2棟の高層タワーが最上部で連結された特徴的なデザインが魅力です。最上部の「空中庭園展望台」からは大阪市街を360度見渡せ、昼は広がる街並み、夜はきらめく夜景を楽しめます。39階の屋外デッキと40階の屋内展望フロアがあり、建築好きにも人気の観光スポットです。'
    },
    highlights: [
      { en: 'Floating Garden Observatory: Open-air deck on 39th floor offering stunning 360° panoramic views of Osaka', zh: '空中庭园展望台: 39层的露天观景台，提供令人惊叹的大阪360°全景', ja: '空中庭园展望台: 39层的露天观景台，提供令人惊叹的大阪360°全景' },
      { en: 'Unique Architecture: Two towers connected by a circular observatory bridge at the top', zh: '独特建筑: 两座塔楼通过顶部的圆形展望台桥相连', ja: '独特建筑: 两座塔楼通过顶部的圆形展望台桥相连' },
      { en: 'Day & Night Views: Beautiful cityscape views during the day and dazzling city lights at night', zh: '白天和夜景: 白天美丽的城市景观和夜晚耀眼的城市灯光', ja: '白天和夜景: 白天美丽的城市景观和夜晚耀眼的城市灯光' },
      { en: 'Luminarie Walkway: Tunnel-like escalator connecting the two towers with beautiful lighting', zh: '光之隧道: 连接两座塔楼的隧道式自动扶梯，配有美丽的灯光', ja: '光之隧道: 连接两座塔楼的隧道式自动扶梯，配有美丽的灯光' },
    ],
    tips: [
      { en: 'Best Time to Visit: Early morning (around 9am) to avoid crowds, or evening for city lights', zh: '最佳参观时间: 清晨（约9点）避开人群，或傍晚欣赏城市灯光', ja: '最佳参观時間: 清晨（約9点）避开人群，或傍晚欣赏城市灯光' },
      { en: 'Duration: Allow 1-1.5 hours to fully enjoy the observatory and views', zh: '停留时间: 预留1-1.5小时充分享受展望台和景观', ja: '所要時間: 预留1-1.5時間充分享受展望台和景观' },
      { en: 'Weather: Clear days offer the best views. Check weather forecast before visiting', zh: '天气: 晴天提供最佳景观。访问前查看天气预报', ja: '天气: 晴天提供最佳景观。访问前查看天气预报' },
      { en: 'Photography: Great spot for panoramic photos of Osaka cityscape', zh: '摄影: 拍摄大阪城市景观全景照片的绝佳地点', ja: '摄影: 拍摄大阪城市景观全景照片的绝佳地点' },
    ],
    address: { en: '1-1-88 Oyodonaka, Kita-ku, Osaka 531-6023, Japan', zh: '日本大阪府大阪市北区大淀中1-1-88 531-6023', ja: '日本大阪府大阪市北区大淀中1-1-88 531-6023' },
    station: { en: 'Osaka Station', zh: '大阪站', ja: '大阪駅' },
    access: { en: 'Walk 5 mins from Osaka Station (JR Osaka Loop Line from Momodani Station, ~20 mins train)', zh: '从大阪站步行5分钟（从桃谷站乘坐JR大阪环状线，约20分钟电车）', ja: '大阪駅徒歩5分（桃谷駅でJR大阪環状線，約20分電車）' },
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Umeda+Sky+Building+Osaka',
  },
  'osaka-aquarium': {
    id: 'osaka-aquarium',
    title: { en: 'Osaka Aquarium Kaiyukan (大阪海游馆)', zh: '大阪海游馆', ja: '大阪海游馆' },
    location: { en: 'Osaka Bay, Osaka', zh: '大阪湾，大阪', ja: '大阪湾、大阪' },
    city: 'osaka',
    price: '¥2,700',
    hours: { en: '10:00 AM - 8:00 PM (varies by season)', zh: '10:00 AM - 8:00 PM (因季节而异)', ja: '午前10:00 - 午後8:00（季節により異なる）' },
    images: [
      'https://asset.japan.travel/image/upload/v1648205341/osaka/H_00496_001.jpg',
      'https://res.klook.com/image/upload/w_750,h_469,c_fill,q_85/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/hhdp9n7ww2yltm73opvb.jpg',
      'https://www.the-kansai-guide.com/kansaiguide/data/directory/12000/11430/20211015_060912_bada8ec9_w640.jpg',
      'https://pic.japanholiday.com/osakaaquas-1.jpg',
      'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/91000/91756-Osaka-Aquarium-Kaiyukan.jpg',
    ],
    about: {
      en: "Osaka Aquarium Kaiyukan (大阪海游馆) is one of Japan's largest and most impressive aquariums, located in the Tempozan Harbor Village area of Osaka Bay. The aquarium features a massive central tank that holds 5,400 tons of water and is home to whale sharks, the largest fish in the ocean. The aquarium takes visitors on a journey through the Pacific Rim, showcasing marine life from different regions including the Pacific Ocean, Antarctica, and the Great Barrier Reef. The aquarium is designed as a spiral walkway that descends through multiple floors, allowing visitors to view marine life from different depths and perspectives. The main attraction is the massive Pacific Ocean tank featuring whale sharks, manta rays, and various other large marine species.",
      zh: '大阪海游馆是日本最大、最令人印象深刻的水族馆之一，位于大阪湾的天保山港口村地区。水族馆设有一个巨大的中央水槽，可容纳5,400吨水，是海洋中最大的鱼类鲸鲨的家园。水族馆带游客环游太平洋沿岸，展示来自不同地区的海洋生物，包括太平洋、南极洲和大堡礁。水族馆设计为螺旋式走道，通过多层下降，让游客从不同深度和角度观看海洋生物。主要景点是巨大的太平洋水槽，展示鲸鲨、蝠鲼和各种其他大型海洋物种。',
      ja: '海遊館は大阪湾の天保山エリアにある日本最大級の水族館で、特に巨大な中央水槽（約5,400トン）とジンベエザメで有名です。館内は太平洋を中心とした環太平洋の海をテーマに、南極やグレートバリアリーフなど各地域の海洋生物を紹介しています。螺旋状のスロープを下りながら複数階を巡る構造で、さまざまな深さ・視点から生き物を観察できるのも魅力。メインの太平洋水槽ではジンベエザメやマンタなど迫力ある大型生物が見られます。'
    },
    highlights: [
      { en: 'Whale Sharks: See the world\'s largest fish species in the massive central tank', zh: '鲸鲨: 在巨大的中央水槽中看到世界上最大的鱼类' },
      { en: 'Massive Central Tank: 5,400-ton tank featuring whale sharks, manta rays, and large marine species', zh: '巨大的中央水槽: 5,400吨水槽，展示鲸鲨、蝠鲼和大型海洋物种', ja: '巨大的中央水槽: 5,400吨水槽，展示鲸鲨、蝠鲼和大型海洋物种' },
      { en: 'Pacific Rim Journey: Explore marine life from different regions of the Pacific', zh: '环太平洋之旅: 探索来自太平洋不同地区的海洋生物', ja: '环太平洋之旅: 探索来自太平洋不同地区的海洋生物' },
      { en: 'Spiral Design: Unique descending walkway through multiple floors', zh: '螺旋设计: 独特的下降走道，通过多层', ja: '螺旋设计: 独特的下降走道，通过多层' },
      { en: 'Interactive Exhibits: Educational displays and feeding shows', zh: '互动展览: 教育展示和喂食表演', ja: '互动展览: 教育展示和喂食表演' },
    ],
    tips: [
      { en: 'Duration: ~2-3 hours to fully explore all exhibits', zh: '停留时间: 约2-3小时充分探索所有展览', ja: '所要時間: 約2-3時間充分探索所有展览' },
      { en: 'Admission: ¥2,700 for adults (discounts available for children and seniors)', zh: '入场费: 成人¥2,700（儿童和老年人有折扣）', ja: '入场费: 成人¥2,700（儿童和老年人有折扣）' },
      { en: 'Access: Walk 5 mins from Osakako Station (JR Osaka Loop Line from Osaka Station, ~20 mins)', zh: '交通: 从大阪港站步行5分钟（从大阪站乘坐JR大阪环状线，约20分钟）', ja: '交通: 大阪港駅徒歩5分（大阪駅でJR大阪環状線，約20分）' },
      { en: 'Perfect Timing: Visit at 11:00 AM after Umeda Sky Building (9:00 AM), then head to Shinsaibashi at 2:30 PM', zh: '完美时机: 在梅田蓝天大厦（上午9:00）之后上午11:00参观，然后在下午2:30前往心斋桥', ja: '完美时机: 在梅田蓝天大厦（午前9:00）之后午前11:00参观，然后在午後2:30へ移動心斎橋' },
      { en: 'Feeding Shows: Check the schedule for whale shark and other marine life feeding times', zh: '喂食表演: 查看鲸鲨和其他海洋生物的喂食时间表', ja: '喂食表演: 查看鲸鲨和其他海洋生物的喂食時間表' },
      { en: 'Photography: Photography allowed (no flash), perfect for capturing the amazing marine life', zh: '摄影: 允许摄影（禁止闪光灯），非常适合拍摄令人惊叹的海洋生物', ja: '摄影: 允许摄影（禁止闪光灯），非常适合拍摄令人惊叹的海洋生物' },
    ],
  },
  'usj': {
    id: 'usj',
    title: { en: 'Universal Studios Japan', zh: '环球影城', ja: '环球影城' },
    location: { en: 'Osaka', zh: '大阪', ja: '大阪' },
    city: 'osaka',
    price: '~¥9,500',
    hours: { en: 'Varies by Season (Usually 9 AM - 8 PM)', zh: '因季节而异（通常上午9点 - 晚上8点）', ja: '季節により異なる（通常午前9時 - 午後8時）' },
    images: [
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/usj/universal-globe-iconic.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/usj/super-nintendo-world-entrance.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/usj/super-nintendo-world-overview.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/usj/harry-potter-castle.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/usj/park-entrance-day.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/usj/parade-float-universal.jpg',
    ],
    about: {
      en: "Universal Studios Japan (USJ) is one of Japan's most popular theme parks, featuring attractions based on Hollywood movies and Japanese pop culture. The park is famous for its Wizarding World of Harry Potter, Super Nintendo World (the first of its kind globally), and various themed areas. With thrilling rides, shows, and character meet-and-greets, USJ offers entertainment for all ages. The park is especially popular with both Japanese and international visitors, so expect crowds and consider purchasing Express Passes for popular attractions.",
      zh: '日本环球影城（USJ）是日本最受欢迎的主题公园之一，设有基于好莱坞电影和日本流行文化的景点。该公园以其哈利波特魔法世界、超级任天堂世界（全球首个此类世界）和各种主题区域而闻名。凭借惊险的游乐设施、表演和角色见面会，USJ为所有年龄段提供娱乐。该公园在日本和国际游客中特别受欢迎，因此预计会有人群，并考虑为热门景点购买快速通行证。',
      ja: 'ユニバーサル・スタジオ・ジャパン（USJ）は、ハリウッド映画や日本のポップカルチャーをテーマにしたアトラクションが集まる日本屈指のテーマパークです。ハリー・ポッターの世界観を体験できるエリアや、世界初の「スーパー・ニンテンドー・ワールド」など、人気のテーマエリアが充実。スリル満点のライド、ショー、キャラクターとのグリーティングなど、年齢を問わず楽しめます。国内外からの来場者が多く混雑しやすいので、人気アトラクションはエクスプレス・パスの利用も検討すると安心です。'
    },
    highlights: [
      { en: 'Super Nintendo World: First-of-its-kind interactive theme park area with Mario Kart ride', zh: '超级任天堂世界: 首个互动主题公园区域，有马里奥卡丁车游乐设施', ja: '超级任天堂世界: 首个互动主题公園区域，有马里奥卡丁车游乐设施' },
      { en: 'Wizarding World of Harry Potter: Immersive experience with Hogwarts Castle and Butterbeer', zh: '哈利波特魔法世界: 沉浸式体验，有霍格沃茨城堡和黄油啤酒', ja: '哈利波特魔法世界: 沉浸式体验，有霍格沃茨城堡和黄油啤酒' },
      { en: 'The Flying Dinosaur: One of the world\'s longest and fastest flying roller coasters', zh: '飞天翼龙: 世界上最长和最快的飞行过山车之一' },
    ],
    tips: [
      { en: 'Express Passes: Highly recommended to avoid long wait times', zh: '快速通行证: 强烈推荐以避免长时间等待', ja: '快速通行证: 强烈推荐以避免长時間等待' },
      { en: 'Early Arrival: Arrive before opening time to be first in line', zh: '早到: 在开放时间前到达，成为第一批', ja: '早到: 在営業時間前到达，成为第一批' },
      { en: 'Nintendo World: May require timed entry ticket - check park app', zh: '任天堂世界: 可能需要定时入场票 - 查看公园应用', ja: '任天堂世界: 可能需要定时入场票 - 查看公園应用' },
    ],
    visitGuide: {
      groupInfo: {
        en: '10 people - Mixed ages (40–50s, Gen Z, Gen Alpha) - Some with Express Pass, some without - Everyone OK with very early arrival',
        zh: '10人 - 混合年龄（40-50岁、Z世代、Alpha世代） - 部分有快速通行证，部分没有 - 所有人都可以非常早到达'
      },
      arrivalPlan: {
        title: { en: 'Arrival Plan (Very Important)', zh: '到达计划（非常重要）', ja: '到达计划（非常重要）' },
        time: { en: 'Arrive at USJ: 6:30 AM | Official opening: ~8:30 AM | Gates often open earlier: 7:15–7:45 AM', zh: '到达USJ: 早上6:30 | 正式开放: 约早上8:30 | 大门通常提前开放: 早上7:15–7:45', ja: '到达USJ: 午前6:30 | 正式営業: 約午前8:30 | 大门通常提前営業: 午前7:15–7:45' },
        whyMatters: [
          { en: 'Best chance to enter Super Nintendo World without timed entry', zh: '无需定时入场券进入超级任天堂世界的最佳机会', ja: '无需定时入场券进入超级任天堂世界的最佳机会' },
          { en: 'Shortest waiting times of the day', zh: '一天中最短的等待时间', ja: '一天中最短的等待時間' },
          { en: 'Helps non-Express guests ride popular attractions early', zh: '帮助没有快速通行证的客人早早乘坐热门景点', ja: '帮助没有快速通行证的客人早早で热门観光地' }
        ]
      },
      ticketsStrategy: {
        required: { en: '1-Day Studio Pass (for everyone)', zh: '1日票（每个人都需要）', ja: '1日票（每个人都需要）' },
        expressPass: {
          recommendedFor: [
            { en: 'Gen Z / thrill riders', zh: 'Z世代 / 刺激游乐设施爱好者', ja: 'Z世代 / 刺激游乐设施爱好者' },
            { en: 'Anyone who wants to avoid long queues', zh: '任何想避免长队的人', ja: '任何想避免长队的人' }
          ],
          bestType: [
            { en: 'Mario Kart', zh: '马里奥卡丁车', ja: '马里奥卡丁车' },
            { en: 'Donkey Kong Mine Cart', zh: '大金刚矿山车', ja: '大金刚矿山车' },
            { en: 'Flying Dinosaur', zh: '飞天翼龙', ja: '飞天翼龙' },
            { en: '(Optional: Harry Potter / Minions)', zh: '（可选：哈利波特 / 小黄人）', ja: '（可选：哈利波特 / 小黄人）' }
          ],
          budgetTip: { en: 'Give Express Pass to 3–5 people only. Others rely on early entry + normal lines', zh: '只为3-5人购买快速通行证。其他人依靠早到入场 + 普通排队', ja: '只为3-5人购买快速通行证。其他人依靠早到入场 + 普通排队' }
        }
      },
      morningRoute: {
        destination: { en: 'Super Nintendo World (8:00–10:30)', zh: '超级任天堂世界（8:00–10:30）', ja: '超级任天堂世界（8:00–10:30）' },
        ridePriority: [
          { en: 'Mario Kart (must-do for everyone)', zh: '马里奥卡丁车（每个人必玩）', ja: '马里奥卡丁车（每个人必玩）' },
          { en: 'Donkey Kong Mine Cart (thrill ride)', zh: '大金刚矿山车（刺激游乐设施）', ja: '大金刚矿山车（刺激游乐设施）' },
          { en: 'Yoshi\'s Adventure (easy, kid-friendly)', zh: '耀西冒险（简单，适合儿童）' }
        ],
        important: { en: 'As soon as you enter the park, use the USJ App to get a Timed Entry ticket for Super Nintendo World (for later return if needed)', zh: '一进入公园，立即使用USJ应用程序获取超级任天堂世界的定时入场券（如需要，稍后可返回）', ja: '一进入公園，立即使用USJ应用程序获取超级任天堂世界的定时入场券（如需要，稍后可に戻る）' }
      },
      lunch: {
        destination: { en: 'Wizarding World of Harry Potter (11:30–13:00)', zh: '哈利波特魔法世界（11:30–13:00）', ja: '哈利波特魔法世界（11:30–13:00）' },
        thingsToDo: [
          { en: 'Hogwarts Castle / Forbidden Journey (skip if motion sick)', zh: '霍格沃茨城堡 / 禁忌之旅（如果晕车可跳过）', ja: '霍格沃茨城堡 / 禁忌之旅（如果晕车可跳过）' },
          { en: 'Hippogriff (family-friendly)', zh: '鹰马飞行（适合家庭）', ja: '鹰马飞行（适合家庭）' },
          { en: 'Photos + Butterbeer', zh: '拍照 + 黄油啤酒', ja: '拍照 + 黄油啤酒' }
        ],
        restaurant: { en: 'Three Broomsticks - Eat early to avoid peak lunch crowd', zh: '三把扫帚 - 早吃以避开午餐高峰期人群', ja: '三把扫帚 - 早吃以避开ランチ高峰期人群' }
      },
      afternoonStrategy: {
        groupA: {
          title: { en: 'Group A — Express Pass users', zh: 'A组 — 快速通行证用户', ja: 'A组 — 快速通行证用户' },
          tasks: [
            { en: 'Follow Express Pass ride times', zh: '按照快速通行证的游乐设施时间', ja: '按照快速通行证的游乐设施時間' },
            { en: 'Focus on: Flying Dinosaur, other major rides included in pass', zh: '专注于：飞天翼龙，通行证中包含的其他主要游乐设施', ja: '专注于：飞天翼龙，通行证中包含的其他主要游乐设施' }
          ]
        },
        groupB: {
          title: { en: 'Group B — No Express Pass', zh: 'B组 — 无快速通行证', ja: 'B组 — 无快速通行证' },
          attractions: [
            { en: 'JAWS (fun, suitable for all ages)', zh: '大白鲨（有趣，适合所有年龄）', ja: '大白鲨（有趣，适合所有年龄）' },
            { en: 'WaterWorld show (great rest time)', zh: '水世界表演（很好的休息时间）', ja: '水世界表演（很好的休息時間）' },
            { en: 'Minions area (optional)', zh: '小黄人区域（可选）', ja: '小黄人区域（可选）' }
          ]
        },
        meetupTip: { en: 'Set a fixed meeting point. Regroup every 1–2 hours', zh: '设置固定会合点。每1-2小时重新集合', ja: '设置固定会合点。每1-2時間重新集合' }
      },
      eveningPlan: {
        bestTime: [
          { en: 'Crowds reduce', zh: '人群减少', ja: '人群减少' },
          { en: 'Cooler weather', zh: '天气更凉爽', ja: '天气更凉爽' },
          { en: 'Best photos', zh: '最佳拍照时间', ja: '最佳拍照時間' }
        ],
        returnToNintendo: [
          { en: 'Night lighting is beautiful', zh: '夜间灯光很美', ja: '夜间灯光很美' },
          { en: 'Ride missed attractions', zh: '游玩错过的景点', ja: '游玩错过的観光地' },
          { en: 'Gen Z can use Single Rider for faster queues', zh: 'Z世代可以使用单人通道以更快排队', ja: 'Z世代可以使用单人通道以更快排队' }
        ],
        dinner: { en: 'Early dinner around 5:30–6:00 PM. Choose quick-service restaurants to save time', zh: '下午5:30–6:00左右早晚餐。选择快餐厅以节省时间', ja: '午後5:30–6:00左右早ディナー。选择快レストラン以节省時間' }
      },
      quickTips: [
        { en: 'Use USJ App all day (wait times, tickets)', zh: '全天使用USJ应用程序（等待时间、门票）', ja: '全天使用USJ应用程序（等待時間、チケット）' },
        { en: 'Single Rider = fastest for Gen Z', zh: '单人通道 = Z世代最快方式', ja: '单人通道 = Z世代最快方式' },
        { en: 'Wear comfortable shoes', zh: '穿舒适的鞋子', ja: '穿舒适的鞋子' },
        { en: 'Bring power bank', zh: '携带充电宝', ja: '携带充电宝' },
        { en: 'Take breaks with shows (WaterWorld)', zh: '通过表演（水世界）休息', ja: '通过表演（水世界）休息' }
      ],
      summary: {
        en: 'Arrive early, go to Super Nintendo World first, use Express Pass strategically, split the group smartly in the afternoon, and enjoy Super Nintendo World again at night.',
        zh: '早到，先到超级任天堂世界，战略性使用快速通行证，下午明智地分组，晚上再次享受超级任天堂世界。'
      }
    },
  },
  'kobe-port': {
    id: 'kobe-port',
    title: { en: 'Kobe Port Tower', zh: '神户塔', ja: '神戸塔' },
    location: { en: 'Kobe', zh: '神户', ja: '神戸' },
    city: 'kobe',
    price: '¥700',
    hours: { en: '9:00 AM - 9:00 PM', zh: '上午9:00 - 晚上9:00', ja: '午前9:00 - 午後9:00' },
    images: [
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/kobe-port/tower-plaza-day.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/kobe-port/tower-illuminated-night.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/kobe-port/tower-observation-deck.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/kobe-port/waterfront-night-view.jpg',
    ],
    about: {
      en: "Kobe Port Tower is an iconic red steel tower that has become the symbol of Kobe. Standing 108 meters tall, the tower was completed in 1963 to commemorate the 90th anniversary of Kobe's opening as a port city. The tower's unique design resembles a traditional Japanese drum (tsuzumi) and offers panoramic views of Kobe city, the port, and the surrounding mountains. The tower is especially beautiful at night when it's illuminated in various colors. The observation deck provides 360-degree views, and there's a revolving restaurant on the 3rd floor.",
      zh: '神户塔是一个标志性的红色钢塔，已成为神户的象征。高108米，该塔于1963年完工，以纪念神户作为港口城市开放90周年。塔的独特设计类似于传统的日本鼓（鼓），可欣赏神户市、港口和周围山脉的全景。塔在夜晚特别美丽，当它以各种颜色点亮时。观景台提供360度视野，3楼有一个旋转餐厅。',
      ja: '神戸ポートタワーは、赤い鋼鉄の外観が印象的な神戸のシンボルです。1963年に「開港90周年」を記念して建設され、高さは108m。鼓（つづみ）をイメージした独特のデザインで、神戸の街並みや港、周囲の山々まで見渡せるパノラマビューが楽しめます。夜はライトアップが美しく、展望フロアは360度の眺望。3階には回転レストランもあります。'
    },
    highlights: [
      { en: 'Panoramic Views: 360-degree views of Kobe city, port, and mountains', zh: '全景: 神户市、港口和山脉的360度视野', ja: '全景: 神戸市、港口和山脉的360度视野' },
      { en: 'Night Illumination: Beautifully lit in various colors at night', zh: '夜间照明: 在夜晚以各种颜色美丽地点亮', ja: '夜间照明: 在夜晚以各种颜色美丽地点亮' },
      { en: 'Unique Design: Resembles a traditional Japanese drum (tsuzumi)', zh: '独特设计: 类似于传统的日本鼓（鼓）', ja: '独特设计: 类似于传统的日本鼓（鼓）' },
      { en: 'Revolving Restaurant: Dine with a view on the 3rd floor', zh: '旋转餐厅: 在3楼用餐，欣赏美景', ja: '旋转レストラン: 在3楼用餐，欣赏美景' },
    ],
    tips: [
      { en: 'Night Visit: Most beautiful when illuminated at night', zh: '夜晚参观: 在夜晚点亮时最美丽', ja: '夜晚参观: 在夜晚点亮时最美丽' },
      { en: 'Clear Day: Best views on clear days with good visibility', zh: '晴天: 在能见度好的晴天视野最佳', ja: '晴天: 在能见度好的晴天视野最佳' },
      { en: 'Combined Ticket: Consider buying a ticket with Harborland attractions', zh: '联票: 考虑购买与港湾乐园景点的联票', ja: '联票: 考虑购买与港湾乐园観光地的联票' },
    ],
  },
  'harborland': {
    id: 'harborland',
    title: { en: 'Harborland', zh: '港湾乐园', ja: '港湾乐园' },
    location: { en: 'Kobe', zh: '神户', ja: '神戸' },
    city: 'kobe',
    price: 'Free',
    hours: { en: 'Shops: 10 AM - 9 PM', zh: '商店: 上午10点 - 晚上9点', ja: '店舗：午前10時 - 午後9時' },
    images: [
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/harborland/harborland-night-view.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/harborland/ferris-wheel-waterfront.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/harborland/be-kobe-sign.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/harborland/mosaic-shopping-complex.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/harborland/waterfront-promenade.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/harborland/indoor-mall-interior.jpg',
    ],
    about: {
      en: "Harborland is Kobe's premier waterfront shopping and entertainment district, located near Kobe Port. The area features a large shopping mall (Umie), restaurants, cafes, and entertainment facilities. The highlight is the giant Ferris wheel offering panoramic views of Kobe Bay and the city. The area is perfect for shopping, dining, and enjoying the waterfront atmosphere. Harborland is especially beautiful at sunset and in the evening when the area is illuminated. It's a great place to relax after exploring Kobe's other attractions.",
      zh: '港湾乐园是神户首屈一指的海滨购物和娱乐区，位于神户港附近。该地区设有大型购物中心（Umie）、餐厅、咖啡厅和娱乐设施。亮点是提供神户湾和城市全景的巨型摩天轮。该地区非常适合购物、用餐和享受海滨氛围。港湾乐园在日落和傍晚特别美丽，当该地区被点亮时。这是在探索神户其他景点后放松的好地方。',
      ja: 'ハーバーランドは神戸港近くに広がる海辺のショッピング＆エンタメエリアで、大型商業施設「umie」をはじめ、レストランやカフェ、各種施設が集まります。大観覧車からは神戸湾と街並みを一望でき、海辺の雰囲気を感じながら買い物や食事を楽しめるのが魅力。夕方のサンセットや夜のイルミネーションも美しく、神戸観光の締めくくりにゆったり過ごすのにぴったりです。'
    },
    highlights: [
      { en: 'Giant Ferris Wheel: Panoramic views of Kobe Bay and city', zh: '巨型摩天轮: 神户湾和城市的全景', ja: '巨型摩天轮: 神戸湾和城市的全景' },
      { en: 'Shopping Mall: Large shopping complex with various stores', zh: '购物中心: 有各种商店的大型购物中心', ja: 'ショッピング中心: 有各种店舗的大型ショッピング中心' },
      { en: 'Waterfront Dining: Restaurants and cafes with harbor views', zh: '海滨餐饮: 有港口景色的餐厅和咖啡厅', ja: '海滨餐饮: 有港口景色的レストラン和咖啡厅' },
      { en: 'Evening Illumination: Beautiful lighting in the evening', zh: '夜间照明: 傍晚美丽的照明', ja: '夜间照明: 傍晚美丽的照明' },
    ],
    tips: [
      { en: 'Sunset Visit: Most beautiful during sunset hours', zh: '日落参观: 在日落时段最美丽', ja: '日落参观: 在日落时段最美丽' },
      { en: 'Ferris Wheel: Great views especially on clear days', zh: '摩天轮: 特别是在晴天的美景', ja: '摩天轮: 特别是在晴天的美景' },
      { en: 'Shopping: Great place to buy Kobe souvenirs', zh: '购物: 购买神户纪念品的绝佳地点', ja: 'ショッピング: 购买神戸纪念品的绝佳地点' },
    ],
  },
  'rokkosan-pasture': {
    id: 'rokkosan-pasture',
    title: { en: 'Rokkosan Pasture', zh: '六甲山牧场', ja: '六甲山牧场' },
    location: { en: 'Kobe', zh: '神户', ja: '神戸' },
    city: 'kobe',
    price: '¥500',
    hours: { en: '9:00 AM - 5:00 PM', zh: '上午9:00 - 下午5:00', ja: '午前9:00 - 午後5:00' },
    images: [
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/rokkosan-pasture/pasture-overview.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/rokkosan-pasture/pasture-sheep-interaction.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/rokkosan-pasture/sheep-grazing-hillside.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/rokkosan-pasture/sheep-field-landscape.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/rokkosan-pasture/pasture-building-view.jpg',
    ],
    about: {
      en: "Rokkosan Pasture is a beautiful mountain farm located on Mount Rokko, offering a peaceful escape from the city with scenic views, farm animals, and fresh air. The pasture features sheep, cows, and other farm animals that visitors can interact with. The area offers stunning panoramic views of Kobe city and Osaka Bay. Visitors can enjoy fresh dairy products, take part in farm activities, and relax in the natural mountain setting. The pasture is especially beautiful during spring and autumn when the weather is pleasant and the views are clear.",
      zh: '六甲山牧场是一个美丽的山地农场，位于六甲山上，提供远离城市的宁静，有风景、农场动物和新鲜空气。牧场有绵羊、奶牛和其他农场动物，游客可以与它们互动。该地区提供神户市和大阪湾的令人惊叹的全景。游客可以享受新鲜乳制品，参加农场活动，并在自然山地环境中放松。牧场在春季和秋季特别美丽，天气宜人，视野清晰。',
      ja: '六甲山牧場は六甲山上にある自然豊かな牧場で、街の喧騒を離れてのんびり過ごせる人気スポットです。羊や牛などの動物と触れ合えるほか、神戸の街や大阪湾を見渡す爽快な眺望も魅力。新鮮な乳製品を味わったり、牧場体験を楽しんだり、山の空気の中でリラックスできます。気候が穏やかで景色が澄みやすい春や秋は特におすすめです。'
    },
    highlights: [
      { en: 'Farm Animals: Interact with sheep, cows, and other farm animals', zh: '农场动物: 与绵羊、奶牛和其他农场动物互动', ja: '农场动物: 与绵羊、奶牛和其他农场动物互动' },
      { en: 'Mountain Views: Panoramic views of Kobe city and Osaka Bay', zh: '山景: 神户市和大阪湾的全景', ja: '山景: 神戸市和大阪湾的全景' },
      { en: 'Fresh Dairy: Enjoy fresh milk, ice cream, and other dairy products', zh: '新鲜乳制品: 享受新鲜牛奶、冰淇淋和其他乳制品', ja: '新鲜乳制品: 享受新鲜牛奶、冰淇淋和其他乳制品' },
      { en: 'Natural Setting: Peaceful mountain environment away from the city', zh: '自然环境: 远离城市的宁静山地环境', ja: '自然环境: 远离城市的宁静山地环境' },
    ],
    tips: [
      { en: 'Weather Check: Mountain weather can be different - bring layers', zh: '天气检查: 山地天气可能不同 - 带多层衣服', ja: '天气检查: 山地天气可能不同 - 带多层衣服' },
      { en: 'Clear Day: Best views on clear days with good visibility', zh: '晴天: 在能见度好的晴天视野最佳', ja: '晴天: 在能见度好的晴天视野最佳' },
      { en: 'Dairy Products: Don\'t miss the fresh ice cream and milk', zh: '乳制品: 不要错过新鲜冰淇淋和牛奶' },
    ],
  },
  'namba-yasaka-shrine': {
    id: 'namba-yasaka-shrine',
    title: { en: 'Namba Yasaka Shrine', zh: '难波八阪神社', ja: '難波八阪神社' },
    location: { en: 'Namba, Osaka', zh: '大阪难波', ja: '大阪難波' },
    city: 'osaka',
    price: 'Free',
    hours: { en: 'Open Daily', zh: '每日开放', ja: '毎日営業' },
    images: [
      'https://pic.k-cdn.media/2024/10/ortbQdhu-20240920-namba-yasaka-main.jpg',
      'https://static.japan-food.guide/uploads/article/cover_image/000/000/570/005457c1682a6027b97207fce1994c417ca202da43009b77092356bd5239dcbd/eye_catch_29284747_s__1_.jpg?1759897952',
      'https://www.howto-osaka.com/en/wp/wp-content/uploads/2023/09/yasaka-4.jpg',
      'https://photos.smugmug.com/Osaka/Central-Osaka/i-MpmXgxr/0/63f52ae3/L/Minami_TSD_NambaYasakaShrine4-L.jpg',
      'https://osaka.b-cdn.net/wp-content/uploads/2025/11/IMG_9460-1024x683.jpg',
    ],
    about: {
      en: "Namba Yasaka Shrine (難波八阪神社) is a unique Shinto shrine located in the Namba district of Osaka. What makes this shrine truly special is its massive 12-meter-tall lion head stage (Shishiden), which is one of the largest and most impressive lion heads in Japan. The lion's open mouth is believed to swallow evil spirits and bring good fortune to visitors. The shrine is conveniently located near Namba Station, making it an easy stop during your Osaka exploration. It's a popular spot for taking photos, especially with the impressive lion head as a backdrop. The shrine also hosts various festivals throughout the year, and the surrounding area offers plenty of shopping and dining options.",
      zh: '难波八阪神社（難波八阪神社）是位于大阪难波地区的一座独特的神社。这座神社最特别的是其12米高的巨大狮子头舞台（狮子殿），这是日本最大、最令人印象深刻的狮子头之一。据说狮子张开的嘴巴可以吞噬邪灵，为游客带来好运。神社位于难波站附近，交通便利，是大阪探索中的便捷停留点。这是一个受欢迎的拍照地点，尤其是以令人印象深刻的狮子头为背景。神社全年举办各种节日活动，周围区域提供丰富的购物和餐饮选择。',
      ja: '難波八阪神社は大阪・難波エリアにある個性的な神社で、最大の見どころは高さ約12mの巨大な獅子殿（ししでん）です。大きく開いた獅子の口が邪気を飲み込み、勝運や厄除けのご利益があるといわれます。難波駅から徒歩圏内で立ち寄りやすく、迫力ある獅子頭を背景にした写真スポットとしても大人気。年間を通して行事もあり、周辺にはショッピングやグルメも充実しています。'
    },
    highlights: [
      { en: 'Giant Lion Head (Shishiden): The 12-meter-tall lion head stage is absolutely stunning and perfect for photos', zh: '巨大狮子头（狮子殿）：12米高的狮子头舞台绝对令人惊叹，非常适合拍照', ja: '巨大狮子头（狮子殿）：12米高的狮子头舞台绝对令人惊叹，非常适合拍照' },
      { en: 'Easy Access: Just a short walk from Namba Station, making it a convenient stop', zh: '交通便利：距离难波站仅几步之遥，是一个便捷的停留点', ja: '交通便利：距离難波駅仅几步之遥，是一个便捷的所要点' },
      { en: 'Free Admission: No entrance fee, perfect for a quick visit', zh: '免费入场：无需门票，非常适合快速参观', ja: '無料入场：无需チケット，非常适合快速参观' },
      { en: 'Near Attractions: Close to Kuromon Market, Dotonbori, and Shinsaibashi shopping area', zh: '附近景点：靠近黑门市场、道顿堀和心斋桥购物区', ja: '附近観光地：靠近黒門市場、道頓堀和心斎橋ショッピング区' },
      { en: 'Photography: The lion head makes for an impressive and unique photo opportunity', zh: '摄影：狮子头提供了令人印象深刻且独特的拍照机会', ja: '摄影：狮子头提供了令人印象深刻且独特的拍照机会' },
    ],
    tips: [
      { en: 'The shrine is free to enter and usually takes 15-20 minutes to explore', zh: '神社免费进入，通常需要15-20分钟探索', ja: '神社無料进入，通常需要15-20分探索' },
      { en: 'Best time to visit is during the day when you can clearly see the lion head details', zh: '最佳参观时间是白天，可以清楚地看到狮子头的细节', ja: '最佳参观時間是白天，可以清楚地看到狮子头的细节' },
      { en: 'Combine your visit with nearby attractions like Kuromon Market (5 mins walk) or Dotonbori (10 mins walk)', zh: '可以将参观与附近景点结合，如黑门市场（步行5分钟）或道顿堀（步行10分钟）', ja: '可以将参观与附近観光地结合，如黒門市場（徒歩5分）或道頓堀（徒歩10分）' },
      { en: 'Be respectful when taking photos, especially if there are ceremonies or prayers in progress', zh: '拍照时要尊重，特别是在进行仪式或祈祷时', ja: '拍照时要尊重，特别是在进行仪式或祈祷时' },
    ],
  },
  'kuromon-market': {
    id: 'kuromon-market',
    title: { en: 'Kuromon Ichiba Market', zh: '黑门市场', ja: '黒門市場' },
    location: { en: 'Namba, Osaka', zh: '大阪难波', ja: '大阪難波' },
    city: 'osaka',
    price: 'Free',
    hours: { en: '9:00 AM - 6:00 PM', zh: '9:00 - 18:00', ja: '午前9:00 - 午後6:00' },
    images: [
      'https://article-image.travel.navitime.jp/img/NTJtrv1084-en/NTJtrv1084-en_kuromon_market_0.jpg',
      'https://onb-cdn.b-cdn.net/images-stn-osaka/121-Kuromon-Ichiba-Market-Osaka1.jpg',
      'https://www.japan-guide.com/g19/4031_11.jpg',
      'https://www.datocms-assets.com/101439/1706245431-kuromon-ichiba.webp?auto=format&fit=max&w=1200',
      'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/91000/91692-Kuromon-Ichiba.jpg',
      'https://cdn.globaleur.com/places/5e5ed54401b751678fee2196/63742d7b00467f49704ea126/gV7SkceMeG_ori.jpg',
    ],
    about: {
      en: "Kuromon Ichiba Market (黒門市場), also known as \"Osaka's Kitchen,\" is a vibrant public market located in the Namba district of Osaka. Established over 190 years ago, this covered market stretches for about 600 meters and is home to over 150 shops selling everything from fresh seafood, fruits, vegetables, meat, and traditional Japanese snacks to kitchenware and daily necessities. The market is famous for its fresh seafood, especially tuna, crab, and sea urchin. Many shops offer prepared food that you can eat on the spot, making it a popular destination for food lovers. The lively atmosphere, friendly vendors, and incredible variety of food make Kuromon Ichiba a must-visit destination for anyone exploring Osaka.",
      zh: '黑门市场（黒門市場），也被称为"大阪的厨房"，是位于大阪难波地区的一个充满活力的公共市场。这个有盖市场已有190多年的历史，长约600米，拥有150多家店铺，销售从新鲜海鲜、水果、蔬菜、肉类和传统日本小吃到厨具和日用品的各种商品。该市场以其新鲜海鲜而闻名，特别是金枪鱼、螃蟹和海胆。许多商店提供即食食品，使其成为美食爱好者的热门目的地。热闹的氛围、友好的摊主和令人难以置信的各种食物使黑门市场成为探索大阪的必游之地。',
      ja: '黒門市場は「大阪の台所」と呼ばれる食のマーケットで、難波エリアにある全長約600mのアーケード商店街です。190年以上の歴史があり、約150店以上が軒を連ね、新鮮な魚介や果物、野菜、精肉、和菓子、調理道具、日用品まで幅広く揃います。特にマグロ、カニ、ウニなどの海鮮が名物で、その場で食べられる食べ歩きグルメも充実。活気ある雰囲気と品揃えの豊富さで、大阪観光の定番スポットです。'
    },
    highlights: [
      { en: 'Fresh Seafood: World-class tuna, crab, oysters, and sea urchin available at various stalls', zh: '新鲜海鲜：世界级的金枪鱼、螃蟹、牡蛎和海胆在各摊位均有售', ja: '新鲜海鮮：世界级的金枪鱼、カニ、牡蛎和海胆在各摊位均有售' },
      { en: 'Street Food: Try takoyaki, kushikatsu, fresh fruit, and other local specialties', zh: '街头美食：尝试章鱼烧、炸串、新鲜水果和其他当地特色美食', ja: '街头美食：尝试たこ焼き、炸串、新鲜水果和其他当地特色美食' },
      { en: 'Local Atmosphere: Experience authentic Osaka market culture with friendly vendors', zh: '当地氛围：体验正宗的大阪市场文化与友好的摊主', ja: '当地氛围：体验正宗的大阪市場文化与友好的摊主' },
      { en: 'Great for Lunch: Many vendors offer prepared food perfect for a quick and delicious meal', zh: '午餐好去处：许多摊主提供即食食品，非常适合快速美味的用餐', ja: 'ランチ好去处：许多摊主提供即食食品，非常适合快速美味的用餐' },
      { en: 'Perfect Location: Just a 5-minute walk from Namba Yasaka Shrine and close to Dotonbori', zh: '位置绝佳：距离难波八阪神社仅5分钟步行路程，靠近道顿堀', ja: '位置绝佳：距离難波八阪神社仅5分徒歩路程，靠近道頓堀' },
    ],
    tips: [
      { en: 'Best time to visit is in the morning (9:00-12:00) when the market is liveliest and food is freshest', zh: '最佳参观时间是早上（9:00-12:00），此时市场最热闹，食物最新鲜', ja: '最佳参观時間是午前（9:00-12:00），此时市場最热闹，食物最新鲜' },
      { en: 'Bring cash - many vendors don\'t accept credit cards', zh: '带现金 - 许多摊主不接受信用卡' },
      { en: 'Try the fresh tuna sashimi, grilled crab, and Japanese strawberries - they\'re incredible!', zh: '尝试新鲜金枪鱼生鱼片、烤螃蟹和日本草莓 - 它们非常棒！' },
      { en: 'The market is covered, so it\'s great to visit even on rainy days', zh: '市场有顶棚，所以即使在雨天也是参观的好去处' },
      { en: 'Combine your visit with Namba Yasaka Shrine (5 mins walk) and Dotonbori (10 mins walk)', zh: '可以将参观与难波八阪神社（步行5分钟）和道顿堀（步行10分钟）结合起来', ja: '可以将参观与難波八阪神社（徒歩5分）和道頓堀（徒歩10分）结合起来' },
    ],
  },
  'tsutenkaku': {
    id: 'tsutenkaku',
    title: { en: 'Tsutenkaku Tower (通天阁)', zh: '通天阁', ja: '通天閣' },
    location: { en: 'Shinsekai, Osaka', zh: '大阪新世界', ja: '大阪新世界' },
    city: 'osaka',
    price: '¥900',
    hours: { en: '9:00 AM - 9:00 PM', zh: '9:00 AM - 9:00 PM', ja: '午前9:00 - 午後9:00' },
    images: [
      'https://www.wamazing.com/media/wp-content/uploads/sites/7/2024/11/tsutenkaku_pixta_92512158_M-853x569-1.jpg.webp',
      'https://res-2.cloudinary.com/jnto/image/upload/w_2064,h_1300,c_fill,f_auto,fl_lossy,q_auto/v1675232782/osaka/Osaka_s_id26_1',
      'https://cdn.prod.rexby.com/image/7f560b0585544a4eb098c3d1a0379ac0?format=webp&width=1080&height=1350',
      'https://rimage.gnst.jp/livejapan.com/public/article/detail/a/20/00/a2000120/img/basic/a2000120_thumbnail.jpg',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1e/5f/78/ea/caption.jpg?w=1200&h=-1&s=1',
    ],
    about: {
      en: "Tsutenkaku Tower is an iconic landmark in Osaka's Shinsekai district. The name \"Tsutenkaku\" means \"tower reaching heaven\" in Japanese. The current tower, completed in 1956, is the second iteration - the original was built in 1912 but was dismantled during World War II. Standing at 103 meters tall, it's one of Osaka's most recognizable symbols. The tower features an observation deck at 91 meters offering panoramic views of Osaka, a Billiken statue (god of happiness) on the 5th floor, and colorful LED lights that change with the weather forecast. The surrounding Shinsekai area is famous for its retro atmosphere, kushikatsu restaurants, and vibrant street life.",
      zh: '通天阁是大阪新世界区的标志性地标。"Tsutenkaku"这个名字在日语中意思是"通向天空的塔"。现在的塔建于1956年，是第二个版本 - 原版建于1912年，但在第二次世界大战期间被拆除。高103米，是大阪最知名的象征之一。塔在91米处设有观景台，可欣赏大阪全景，5楼有比利肯雕像（幸福之神），还有根据天气预报改变颜色的彩色LED灯。周围的新世界区以其复古氛围、串炸餐厅和充满活力的街头生活而闻名。',
      ja: '通天閣は大阪・新世界のシンボル的存在で、「天に通じる塔」という意味を持ちます。現在の塔は1956年完成の2代目で、初代（1912年建設）は戦時中に解体されました。高さ103m、地上約91mの展望台からは大阪の街を一望できます。5階には“幸福の神様”ビリケンさんが鎮座し、足の裏を撫でるとご利益があると人気。外観のLEDは天気予報に合わせて色が変わるのも特徴で、周辺の新世界は串カツやレトロな街並みで賑わいます。'
    },
    highlights: [
      { en: 'Observation Deck: Panoramic views of Osaka from 91 meters high', zh: '观景台: 从91米高处欣赏大阪全景', ja: '观景台: 91米高处欣赏大阪全景' },
      { en: 'Billiken Statue: Rub the feet of the Billiken for good luck - a popular tradition', zh: '比利肯雕像: 抚摸比利肯的脚以求好运 - 一个受欢迎的传统', ja: '比利肯雕像: 抚摸比利肯的脚以求好运 - 一个受欢迎的传统' },
      { en: 'LED Light Display: Color-coded lights indicate weather forecast (blue=sunny, orange=cloudy, pink=rainy)', zh: 'LED灯光显示: 颜色编码的灯光显示天气预报（蓝色=晴天，橙色=多云，粉色=雨天）', ja: 'LED灯光显示: 颜色编码的灯光显示天气预报（蓝色=晴天，橙色=多云，粉色=雨天）' },
      { en: 'Shinsekai District: Explore the retro neighborhood with kushikatsu restaurants and local shops', zh: '新世界区: 探索有串炸餐厅和当地商店的复古社区', ja: '新世界区: 探索有串カツレストラン和当地店舗的复古社区' },
    ],
    tips: [
      { en: 'Best Time to Visit: Visit during sunset for beautiful views of Osaka illuminated at dusk', zh: '最佳参观时间: 在日落时参观，欣赏黄昏时大阪的美丽景色', ja: '最佳参观時間: 在日落时参观，欣赏黄昏时大阪的美丽景色' },
      { en: 'Combine with Shinsekai: Explore the surrounding area for kushikatsu and local street food', zh: '与新世界结合: 探索周边地区，品尝串炸和当地街头美食', ja: '与新世界结合: 探索周边地区，品尝串カツ和当地街头美食' },
      { en: 'Access: 3-minute walk from Ebisucho Station (Osaka Metro Sakaisuji Line) or Dobutsuen-mae Station', zh: '交通: 从惠美须町站（大阪地铁堺筋线）或动物园前站步行3分钟', ja: '交通: 惠美须町駅（大阪地下鉄堺筋線）或动物园前駅徒歩3分' },
      { en: 'Duration: Allow 30-45 minutes for the tower visit, plus time to explore Shinsekai', zh: '停留时间: 塔参观需要30-45分钟，加上探索新世界的时间', ja: '所要時間: 塔参观需要30-45分，加上探索新世界的時間' },
    ],
  },
  'shinsaibashi': {
    id: 'shinsaibashi',
    title: { en: 'Shinsaibashi (心斎橋)', zh: '心斋桥', ja: '心斎橋' },
    location: { en: 'Chuo Ward, Osaka', zh: '大阪中央区', ja: '大阪中央区' },
    city: 'osaka',
    price: 'Free',
    hours: { en: '10:00 AM - 9:00 PM', zh: '10:00 AM - 9:00 PM', ja: '午前10:00 - 午後9:00' },
    images: [
      'https://www.jocjapantravel.com/wp-content/uploads/2025/08/Shinsaibashi-1270144.jpg',
      'https://assets.hldycdn.com/cdn-cgi/image/format=webp,width=1024,quality=75/articles/4eeb57_6778c5d866d04e09880369eb9379d4b3~mv2.webp',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/06/22/5f/caption.jpg?w=800&h=800&s=1',
      'https://cdn.cheapoguides.com/wp-content/uploads/sites/3/2019/01/Shinsaibashi-suji-Shotengai.jpg',
      'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/490000/490590-shinsaibashi.jpg',
    ],
    about: {
      en: "Shinsaibashi is one of Osaka's most famous shopping districts, featuring a 580-meter long covered shopping arcade known as Shinsaibashi-suji. This vibrant shopping street connects to Dotonbori and offers everything from high-end department stores to trendy boutiques, traditional shops, and countless restaurants and cafes. The arcade dates back to the Edo period and has been a commercial center for over 300 years. Today, it's a bustling pedestrian-only street filled with shops selling fashion, cosmetics, electronics, souvenirs, and local specialties. The area is particularly popular with both locals and tourists for shopping, dining, and entertainment.",
      zh: '心斋桥是大阪最著名的购物区之一，拥有580米长的有盖购物拱廊，称为心斋桥筋。这个充满活力的购物街连接到道顿堀，提供从高端百货商店到时尚精品店、传统商店以及无数餐厅和咖啡厅的一切。拱廊可以追溯到江户时代，作为商业中心已有300多年的历史。今天，它是一个繁华的步行街，到处都是销售时尚、化妆品、电子产品、纪念品和当地特色商品的商店。该地区特别受当地人和游客的欢迎，用于购物、餐饮和娱乐。',
      ja: '心斎橋は大阪を代表するショッピングエリアで、全長約580mのアーケード商店街「心斎橋筋商店街」が中心です。道頓堀へもつながり、百貨店から流行のブティック、老舗店、飲食店やカフェまで幅広く揃います。江戸時代から300年以上続く商業地としての歴史もあり、現在はファッション、コスメ、家電、土産物などを求める人で賑わう歩行者専用の繁華街です。'
    },
    highlights: [
      { en: 'Covered Shopping Arcade: 580-meter long pedestrian-only street protected from weather', zh: '有盖购物拱廊: 580米长的步行街，不受天气影响', ja: '有盖ショッピング拱廊: 580米长的徒歩街，不受天气影响' },
      { en: 'Diverse Shopping: From luxury brands to affordable fashion, cosmetics, electronics, and souvenirs', zh: '多样化购物: 从奢侈品牌到平价时尚、化妆品、电子产品和纪念品', ja: '多样化ショッピング: 奢侈品牌到平价时尚、化妆品、电子产品和纪念品' },
      { en: 'Connects to Dotonbori: Seamlessly connects to Osaka\'s famous food and entertainment district', zh: '连接道顿堀: 无缝连接到大阪著名的美食和娱乐区' },
      { en: 'Historic Significance: Commercial center dating back over 300 years to the Edo period', zh: '历史意义: 可追溯到300多年前江户时代的商业中心', ja: '历史意义: 可追溯到300多年前江户时代的商业中心' },
    ],
    tips: [
      { en: 'Best Time to Visit: Weekday mornings are less crowded; evenings are livelier with more people', zh: '最佳参观时间: 工作日上午人较少；晚上更热闹，人更多', ja: '最佳参观時間: 工作日午前人较少；夜更热闹，人更多' },
      { en: 'Tax-Free Shopping: Many stores offer tax-free shopping for tourists - bring your passport', zh: '免税购物: 许多商店为游客提供免税购物 - 请携带护照', ja: '免税ショッピング: 许多店舗为游客提供免税ショッピング - 请携带护照' },
      { en: 'Combine with Dotonbori: Perfect for shopping during the day, then dining in Dotonbori at night', zh: '与道顿堀结合: 白天购物，晚上在道顿堀用餐的完美选择', ja: '与道頓堀结合: 白天ショッピング，夜在道頓堀用餐的完美选择' },
      { en: 'Access: Direct access from Shinsaibashi Station (Osaka Metro Midosuji Line) or Namba Station', zh: '交通: 从心斋桥站（大阪地铁御堂筋线）或难波站直接到达', ja: '交通: 心斎橋駅（大阪地下鉄御堂筋線）或難波駅直接到达' },
    ],
  },
  'ninenzaka-sannenzaka': {
    id: 'ninenzaka-sannenzaka',
    title: { en: 'Ninenzaka & Sannenzaka (二三年坂)', zh: '二三年坂', ja: '二三年坂' },
    location: { en: 'Higashiyama, Kyoto', zh: '京都东山', ja: '京都東山' },
    city: 'kyoto',
    price: 'Free',
    hours: { en: 'Best: Early Morning or Evening', zh: '最佳: 清晨或傍晚', ja: '最適：早朝または夕方' },
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvHeYA5VNkPHxgm023xTgXN500BhHbSEMJ-A&s',
      'https://waplus-kimono.com/kyoto/wp-content/uploads/2022/09/pixta_68238894_M.jpg',
      'https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=center,quality=60,width=400,height=265,dpr=2/tour_img/9565110d28180a365d2a47ad1dfa76c658fadf49bd3c8ab357111c67878d2989.png',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvbn6bT8UEOc5WuvIa29L3DD4G51oOiGPdPg&s',
      'https://rimage.gnst.jp/livejapan.com/public/article/detail/a/20/00/a2000498/img/basic/a2000498_main.jpg',
      'https://mediaim.expedia.com/destination/1/3bc76a96d16aed5e1f00c3a30a815b11.jpg',
    ],
    about: {
      en: "Ninenzaka (二寧坂) and Sannenzaka (産寧坂) are two of Kyoto's most famous preserved historic streets, located in the Higashiyama district near Kiyomizu-dera Temple. These charming stone-paved slopes are lined with traditional wooden machiya houses, shops selling local crafts, souvenirs, and traditional sweets, creating an atmosphere that transports visitors back to old Kyoto. The streets are pedestrian-only and have been carefully preserved to maintain their traditional appearance. Ninenzaka means \"two-year slope\" and Sannenzaka means \"three-year slope\" - names that may refer to the time it took to build them or to prayers for safe childbirth. Both streets offer beautiful views, especially during cherry blossom season and autumn foliage, and are perfect for experiencing traditional Kyoto culture.",
      zh: '二寧坂和産寧坂是京都最著名的保存历史街道中的两条，位于清水寺附近的东山区。这些迷人的石砌斜坡两旁是传统的木制町屋、销售当地工艺品、纪念品和传统甜点的商店，营造出一种将游客带回古老京都的氛围。这些街道仅供行人通行，并经过精心保护以保持其传统外观。二寧坂意思是"二年坂"，産寧坂意思是"三年坂" - 这些名称可能指的是建造它们所需的时间，或者是为了祈求安全分娩的祈祷。两条街道都提供美丽的景色，特别是在樱花季节和秋叶季节，是体验传统京都文化的完美场所。',
      ja: '二寧坂（二年坂）・産寧坂（三年坂）は、清水寺近くの東山エリアに残る京都屈指の歴史的街並みです。石畳の坂道沿いに町家が建ち並び、工芸品や土産物、和菓子などのお店が続き、古都らしい風情を味わえます。景観保存地区として整備されており、歩いて散策するのに最適。桜の季節や紅葉シーズンは特に美しく、伝統的な京都文化を感じられる人気スポットです。'
    },
    highlights: [
      { en: 'Historic Preservation: Beautifully preserved traditional streets with stone paving and wooden buildings', zh: '历史保护: 保存完好的传统街道，有石砌路面和木制建筑', ja: '历史保护: 保存完好的传统街道，有石砌路面和木制建筑' },
      { en: 'Traditional Shops: Local crafts, pottery, sweets, tea, and souvenirs in traditional machiya buildings', zh: '传统商店: 传统町屋建筑中的当地工艺品、陶器、甜点、茶和纪念品', ja: '传统店舗: 传统町屋建筑中的当地工艺品、陶器、甜点、お茶和纪念品' },
      { en: 'Scenic Beauty: Stunning views especially during cherry blossom and autumn foliage seasons', zh: '风景优美: 特别是在樱花和秋叶季节的壮丽景色', ja: '风景优美: 特别是在樱花和秋叶季节的壮丽景色' },
      { en: 'Near Kiyomizu-dera: Perfect combination visit with the famous temple just above the streets', zh: '靠近清水寺: 与位于街道上方的著名寺庙完美结合参观', ja: '靠近清水寺: 与位于街道上方的著名寺院完美结合参观' },
    ],
    tips: [
      { en: 'Best Time to Visit: Early morning (before 9 AM) or late afternoon to avoid crowds; cherry blossom and autumn are especially beautiful', zh: '最佳参观时间: 清晨（上午9点前）或下午晚些时候以避免人群；樱花和秋季特别美丽', ja: '最佳参观時間: 清晨（午前9点前）或午後晚些时候以避免人群；樱花和秋季特别美丽' },
      { en: 'Photography: The streets are very photogenic, but be respectful of shop owners and other visitors', zh: '摄影: 街道非常适合拍照，但要尊重店主和其他游客', ja: '摄影: 街道非常适合拍照，但要尊重店主和其他游客' },
      { en: 'Combine with Kiyomizu-dera: Visit the temple first, then walk down these historic streets', zh: '与清水寺结合: 先参观寺庙，然后沿着这些历史街道步行', ja: '与清水寺结合: 先参观寺院，然后沿着这些历史街道徒歩' },
      { en: 'Access: 5-minute walk from Kiyomizu-dera Temple, or 10-minute walk from Kiyomizu-Gojo Station', zh: '交通: 从清水寺步行5分钟，或从清水五条站步行10分钟', ja: '交通: 清水寺徒歩5分，或清水五条駅徒歩10分' },
      { en: 'Duration: Allow 30-60 minutes to explore both streets and browse shops', zh: '停留时间: 留出30-60分钟探索两条街道并浏览商店', ja: '所要時間: 留出30-60分探索两条街道并浏览店舗' },
    ],
  },
  'kamogawa': {
    id: 'kamogawa',
    title: { en: 'Kamogawa River (鴨川)', zh: '鸭川', ja: '鴨川' },
    location: { en: 'Central Kyoto', zh: '京都中心', ja: '京都中心部' },
    city: 'kyoto',
    price: 'Free',
    hours: { en: 'Best: Cherry Blossom & Evening', zh: '最佳: 樱花季和傍晚', ja: '最適：桜の季節と夕方' },
    images: [
      'https://a3.cdn.japantravel.com/photo/29194-148400/1440x960!/kyoto-a-walk-along-kamo-river-148400.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/3/30/Kamogawa_sakura.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6kD54kb3bX0XFZ2s9Awl1ZLVbfdifBw2Lhg&s',
      'https://en.japantravel.com/photo/poi-788-243945/1200x630/kyoto-kamo-river-243945.jpg',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/cc/37/43/caption.jpg?w=900&h=500&s=1',
    ],
    about: {
      en: "Kamogawa (Kamo River) is a scenic river that flows through the heart of Kyoto, dividing the city into east and west. The river is one of Kyoto's most beloved natural features, offering a peaceful escape from the bustling city streets. The riverbanks are beautifully maintained with walking paths, making it a popular spot for locals and tourists to stroll, jog, or simply relax and enjoy the scenery. The river is especially beautiful during cherry blossom season (late March to early April) when the sakura trees along the banks burst into bloom, creating a stunning pink tunnel. In summer, the riverbanks come alive with people enjoying yuka (outdoor dining platforms) at restaurants, and in the evenings, the area is popular for romantic walks. The river also features traditional stepping stones (dai-odan) that allow people to cross to the small islands in the middle of the river.",
      zh: '鸭川是一条风景如画的河流，流经京都中心，将城市分为东西两部分。这条河是京都最受喜爱的自然景观之一，为繁忙的城市街道提供了一个宁静的避风港。河岸维护良好，有步行道，是当地人和游客散步、慢跑或只是放松和享受风景的热门地点。这条河在樱花季节（3月下旬至4月初）特别美丽，河岸两旁的樱花树盛开，形成令人惊叹的粉色隧道。在夏天，河岸因人们在餐厅享受纳凉床（户外用餐平台）而充满活力，在傍晚，该地区是浪漫散步的热门地点。这条河还设有传统的踏脚石（大跳石），让人们可以过河到河中央的小岛上。',
      ja: '鴨川は京都の中心部を流れる風情ある川で、街を東西に分ける京都の象徴的な景観の一つです。川沿いには遊歩道が整備され、散歩やジョギング、のんびり休憩する人々で賑わいます。春（3月下旬〜4月上旬）は桜並木が見事で、川辺がピンク色に彩られます。夏は川沿いの飲食店で「川床（ゆか）」が楽しめ、夕方以降はロマンチックな散策コースとしても人気。川の中央に渡る飛び石（大跳石）も京都らしい名物です。'
    },
    highlights: [
      { en: 'Cherry Blossom Season: Stunning sakura tunnel along the riverbanks in spring', zh: '樱花季节: 春天河岸两旁令人惊叹的樱花隧道', ja: '樱花季节: 春天河岸两旁令人惊叹的樱花隧道' },
      { en: 'Riverside Walks: Beautiful walking paths perfect for strolling and jogging', zh: '河畔散步: 美丽的步行道，非常适合散步和慢跑', ja: '河畔散步: 美丽的徒歩道，非常适合散步和慢跑' },
      { en: 'Summer Yuka Dining: Outdoor dining platforms at riverside restaurants during summer', zh: '夏季纳凉床: 夏季河畔餐厅的户外用餐平台', ja: '夏季纳凉床: 夏季河畔レストラン的户外用餐平台' },
      { en: 'Stepping Stones: Traditional dai-odan stones for crossing to river islands', zh: '踏脚石: 传统的踏脚石，用于过河到河中的小岛', ja: '踏脚石: 传统的踏脚石，用于过河到河中的小岛' },
      { en: 'Evening Atmosphere: Romantic evening walks with beautiful city lights reflecting on the water', zh: '傍晚氛围: 浪漫的晚间散步，美丽的城市灯光倒映在水面上', ja: '傍晚氛围: 浪漫的晚间散步，美丽的城市灯光倒映在水面上' },
    ],
    tips: [
      { en: 'Best Time to Visit: Early morning for peaceful walks, evening for romantic atmosphere, or during cherry blossom season for stunning views', zh: '最佳参观时间: 清晨进行宁静的散步，傍晚享受浪漫氛围，或在樱花季节欣赏壮丽景色', ja: '最佳参观時間: 清晨进行宁静的散步，傍晚享受浪漫氛围，或在樱花季节欣赏壮丽景色' },
      { en: 'Popular Sections: The area between Shijo-dori and Sanjo-dori is most popular, especially near Gion district', zh: '热门区域: 四条通和三条通之间的区域最受欢迎，特别是靠近祇园区的区域', ja: '热门区域: 四条通和三条通之间的区域最受欢迎，特别是靠近祇園区的区域' },
      { en: 'Summer Yuka: Many restaurants set up outdoor platforms (yuka) from May to September - perfect for riverside dining', zh: '夏季纳凉床: 许多餐厅从5月到9月设置户外平台（纳凉床）- 非常适合河畔用餐', ja: '夏季纳凉床: 许多レストラン5月到9月设置户外平台（纳凉床）- 非常适合河畔用餐' },
      { en: 'Access: Easily accessible from multiple stations including Shijo Station, Sanjo Station, or Gion-Shijo Station', zh: '交通: 从多个车站轻松到达，包括四条站、三条站或祇园四条站', ja: '交通: 多个车駅轻松到达，包括四条駅、三条駅或祇園四条駅' },
      { en: 'Duration: Allow 30-60 minutes for a leisurely walk along the river', zh: '停留时间: 沿河悠闲散步需要30-60分钟', ja: '所要時間: 沿河悠闲散步需要30-60分' },
    ],
  },
  'katsuoji': {
    id: 'katsuoji',
    title: { en: 'Katsuoji Temple (勝尾寺)', zh: '勝尾寺', ja: '勝尾寺' },
    location: { en: 'Osaka', zh: '大阪', ja: '大阪' },
    city: 'osaka',
    price: '¥500',
    hours: { en: '8:00 AM - 5:00 PM', zh: '早上8点 - 下午5点', ja: '午前8時 - 午後5時' },
    images: [
      'https://maido-storage.oss-cn-hongkong.aliyuncs.com/maido/uploads/2020/08/katsuoji-01.jpg',
      'https://maido-storage.oss-cn-hongkong.aliyuncs.com/maido/uploads/2020/08/katsuoji-02-400x280.jpg',
      'https://katsuo-ji-temple.or.jp/seasons/img/img_autumn01_3.jpg',
      'https://res.klook.com/image/upload/w_750,h_469,c_fill,q_85/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/mmnqsbcymiztuwzrvyml.jpg',
      'https://res.cloudinary.com/dbeud0a7k/image/upload/c_fill,w_1200,h_800,q_auto:low,f_webp,fl_progressive/v1756090846/locations/osaka/286-katsuoji-temple/286-katsuoji-temple_1756090845_UdBRrzpK.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqXvRWWq2U4E655Xt82GaXclOH7-p8vTq_QA&s',
    ],
    about: {
      en: "Katsuoji Temple (勝尾寺) is a famous Buddhist temple located in the mountains of northern Osaka, known for its thousands of daruma dolls. The temple is often called \"Daruma-dera\" (Daruma Temple) because of the countless daruma dolls that visitors place throughout the temple grounds. Founded in 727 AD, Katsuoji Temple has a long history and is known as a temple for \"winning luck\" (katsuo means \"victory\" in Japanese). Visitors come to pray for success in various endeavors and purchase daruma dolls to place around the temple, creating a unique and colorful atmosphere.",
      zh: '勝尾寺是大阪北部山区的一座著名佛教寺庙，以其数千个达摩娃娃而闻名。这座寺庙通常被称为"达摩寺"，因为游客在整个寺庙场地放置了无数达摩娃娃。勝尾寺建于公元727年，历史悠久，被称为"胜利之寺"（勝尾在日语中意为"胜利"）。游客来这里祈祷在各种努力中取得成功，并购买达摩娃娃放置在寺庙周围，营造出独特而多彩的氛围。',
      ja: '勝尾寺（かつおうじ）は大阪北部の山中にある寺院で、境内に並ぶ無数のだるまが名物です。だるまが至る所に置かれていることから「だるま寺」とも呼ばれ、写真映えする独特の雰囲気があります。727年創建とされ、「勝運（かちうん）」のご利益で知られるため、受験・仕事・スポーツなどの成功祈願に訪れる人が多いスポットです。'
    },
    highlights: [
      { en: 'Thousands of Daruma Dolls: The temple grounds are filled with colorful daruma dolls placed by visitors, creating a unique and photogenic atmosphere', zh: '数千个达摩娃娃: 寺庙场地充满了游客放置的彩色达摩娃娃，营造出独特而适合拍照的氛围', ja: '数千个达摩娃娃: 寺院场地充满了游客放置的彩色达摩娃娃，营造出独特而适合拍照的氛围' },
      { en: 'Victory Temple: Known as a temple for "winning luck" - visitors pray for success in exams, business, sports, and other endeavors', zh: '胜利之寺: 被称为"胜利之寺" - 游客祈祷在考试、商业、体育和其他努力中取得成功', ja: '胜利之寺: 被称为"胜利之寺" - 游客祈祷在考试、商业、体育和其他努力中取得成功' },
      { en: 'Seasonal Beauty: Beautiful mountain temple surrounded by nature - especially stunning in autumn when the maple leaves change color', zh: '季节性美景: 美丽的山寺被自然环绕 - 尤其是在秋季枫叶变色时格外美丽', ja: '季节性美景: 美丽的山寺被自然环绕 - 尤其是在秋季枫叶变色时格外美丽' },
      { en: 'Early Morning Access: Opens at 8:00 AM, perfect for early morning visits before crowds arrive', zh: '清晨开放: 早上8点开放，非常适合在人群到达之前清晨参观', ja: '清晨営業: 午前8点営業，非常适合在人群到达之前清晨参观' },
    ],
    tips: [
      { en: 'Early Arrival: Arriving at 7:00 AM allows you to experience the temple before the crowds and enjoy the peaceful morning atmosphere', zh: '早到: 早上7点到达可以让您在人群到达之前体验寺庙，享受宁静的早晨氛围', ja: '早到: 午前7点到达可以让您在人群到达之前体验寺院，享受宁静的早晨氛围' },
      { en: 'Daruma Dolls: You can purchase daruma dolls at the temple to place around the grounds - they come in various sizes', zh: '达摩娃娃: 您可以在寺庙购买达摩娃娃放置在场地周围 - 它们有各种尺寸', ja: '达摩娃娃: 您可以在寺院购买达摩娃娃放置在场地周围 - 它们有各种尺寸' },
      { en: 'Autumn Season: The temple is especially beautiful in autumn (late October to early December) when the maple leaves turn red and yellow', zh: '秋季: 寺庙在秋季（10月下旬至12月初）特别美丽，此时枫叶变红变黄', ja: '秋季: 寺院在秋季（10月下旬へ12月初）特别美丽，此时枫叶变红变黄' },
      { en: 'Mountain Location: Located in the mountains, the temple offers beautiful views and a peaceful escape from the city', zh: '山区位置: 位于山区，寺庙提供美丽的景色和远离城市的宁静避风港', ja: '山区位置: 位于山区，寺院提供美丽的景色和远离城市的宁静避风港' },
    ],
  },
  'harukas-abeno': {
    id: 'harukas-abeno',
    title: { en: 'Abeno Harukas (阿倍野HARUKAS)', zh: '阿倍野HARUKAS', ja: '阿倍野HARUKAS' },
    location: { en: 'Osaka', zh: '大阪', ja: '大阪' },
    city: 'osaka',
    price: '¥1,500 (Observation Deck)',
    hours: { en: '9:00 AM - 10:00 PM', zh: '早上9点 - 晚上10点', ja: '午前9時 - 午後10時' },
    images: [
      'https://tenmabashi-ekimae.hotelkeihan.co.jp/wp-content/uploads/sites/425/2022/02/POI_ABENOHARUKAS.jpg',
      'https://www.abenoharukas-300.jp/en/images/bnr-ph01.jpg',
      'https://ichibanosaka.com/wdps/wp-content/uploads/2018/07/ad6ff09de8b12f7c591affa1ef81a225.jpg',
      'https://www.offthetrackjapan.com/wp-content/uploads/2019/02/abeno-harukas-4025468_1280_1000x667-min.jpg',
      'https://cdn.gaijinpot.com/app/uploads/sites/6/2016/12/Abeno-Harukas-.jpg',
      'https://www.neverendingvoyage.com/wp-content/uploads/2019/03/abeno-harukas300-3.jpg',
      'https://s3-ap-northeast-1.amazonaws.com/thegate/2020/12/21/15/45/57/Abeno-Harukas.jpg',
    ],
    about: {
      en: "Abeno Harukas (阿倍野HARUKAS) is Japan's tallest building, standing at 300 meters (984 feet) tall with 60 floors. Located in the Abeno district of Osaka, it opened in 2014 and has quickly become one of the city's most iconic landmarks. The complex houses a department store, hotel, office spaces, and the highest observation deck in Japan. The name \"Harukas\" comes from the ancient Japanese word meaning \"to make bright, clear, and cheerful.\" The building features stunning modern architecture and offers panoramic views of Osaka from its observation deck on the 58th, 59th, and 60th floors.",
      zh: '阿倍野HARUKAS是日本最高的建筑，高300米（984英尺），共60层。位于大阪的阿倍野区，于2014年开放，并迅速成为该市最具标志性的地标之一。该综合建筑内设有百货商店、酒店、办公空间和日本最高的观景台。"HARUKAS"这个名字来自古代日语单词，意思是"使明亮、清晰和愉快"。该建筑采用令人惊叹的现代建筑，从其位于58、59和60层的观景台可欣赏大阪的全景。',
      ja: 'あべのハルカスは高さ300m・60階建ての日本一高い超高層ビルで、2014年に大阪・阿倍野エリアに開業しました。百貨店、ホテル、オフィス、美術館などが入る複合施設で、最上部の「HARUKAS 300」展望台（58〜60階）からは大阪の街並みを360度見渡せます。名称の「ハルカス」は「晴るかす（明るくする）」に由来するとされ、近代的な建築と眺望の良さで大阪観光の定番スポットになっています。'
    },
    highlights: [
      { en: 'Japan\'s Tallest Building: At 300 meters tall, Abeno Harukas is the tallest building in Japan, offering breathtaking views of Osaka', zh: '日本最高的建筑: 高300米，阿倍野HARUKAS是日本最高的建筑，提供令人叹为观止的大阪景色' },
      { en: 'HARUKAS 300 Observation Deck: Located on floors 58-60, the observation deck offers 360-degree panoramic views of Osaka and surrounding areas', zh: 'HARUKAS 300观景台: 位于58-60层，观景台提供360度全景，可欣赏大阪及周边地区', ja: 'HARUKAS 300观景台: 位于58-60层，观景台提供360度全景，可欣赏大阪及周边地区' },
      { en: 'Shopping Paradise: The building houses a massive department store with luxury brands, fashion, electronics, and local products', zh: '购物天堂: 该建筑内设有大型百货商店，有奢侈品牌、时尚、电子产品和当地产品', ja: 'ショッピング天堂: 该建筑内设有大型百货店舗，有奢侈品牌、时尚、电子产品和当地产品' },
      { en: 'Dining Options: Wide variety of restaurants and cafes throughout the building, from casual dining to fine dining', zh: '餐饮选择: 整个建筑内有各种餐厅和咖啡馆，从休闲餐饮到高级餐饮', ja: '餐饮选择: 整个建筑内有各种レストラン和咖啡馆，休闲餐饮到高级餐饮' },
      { en: 'Easy Access: Directly connected to Tennoji Station, making it easily accessible by train', zh: '交通便利: 直接连接到天王寺站，乘坐火车即可轻松到达', ja: '交通便利: 直接连接到天王寺駅，で火车即可轻松到达' },
    ],
    tips: [
      { en: 'Best Time to Visit: Visit during sunset hours for the most spectacular views of Osaka bathed in golden light', zh: '最佳访问时间: 在日落时分访问，可欣赏大阪沐浴在金色光芒中最壮观的景色', ja: '最佳访问時間: 在日落时分访问，可欣赏大阪沐浴在金色光芒中最壮观的景色' },
      { en: 'Shopping Tax-Free: Bring your passport for tax-free shopping at the department store - many international brands available', zh: '免税购物: 携带护照在百货商店享受免税购物 - 有许多国际品牌可供选择', ja: '免税ショッピング: 携带护照在百货店舗享受免税ショッピング - 有许多国际品牌可供选择' },
      { en: 'Observation Deck: The HARUKAS 300 observation deck offers indoor and outdoor viewing areas - tickets can be purchased on-site or online', zh: '观景台: HARUKAS 300观景台提供室内和室外观景区 - 可以在现场或在线购买门票', ja: '观景台: HARUKAS 300观景台提供室内和室外观景区 - 可以在现场或在線购买チケット' },
      { en: 'Combine with Nearby Attractions: Visit nearby Tennoji Zoo, Shitennoji Temple, or Tsutenkaku Tower in the same area', zh: '与附近景点结合: 参观附近的天王寺动物园、四天王寺或通天阁塔，都在同一地区', ja: '与附近観光地结合: 参观附近的天王寺动物园、四天王寺或通天閣塔，都在同一地区' },
    ],
  },
}
