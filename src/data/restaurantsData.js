// Comprehensive restaurants data with details, images, and information

export const restaurantsData = {
  'pain-maison': {
    id: 'pain-maison',
    title: { en: 'Pain Maison (塩パン屋)', zh: 'Pain Maison (盐面包店)' },
    location: { en: 'Tokyo', zh: '东京' },
    city: 'tokyo',
    price: '¥120-¥190',
    hours: { en: 'Hours Vary', zh: '营业时间不定' },
    images: [
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/restaurants/pain-maison/bakery-sign.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/restaurants/pain-maison/bread-individual.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/restaurants/pain-maison/bread-display.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/restaurants/pain-maison/bread-basket.jpg',
    ],
    about: {
      en: "Pain Maison (塩パン屋) is a famous salt bread bakery in Tokyo, known for its original salt bread (塩パン). The bakery specializes in premium salt bread and melon bread, offering freshly baked goods with high-quality ingredients. Popular with both locals and tourists, expect possible wait times especially during peak hours.",
      zh: 'Pain Maison (塩パン屋) 是东京著名的盐面包店，以其原创盐面包（塩パン）而闻名。面包店专门提供优质盐面包和菠萝包，使用高品质食材新鲜烘焙。深受当地人和游客欢迎，特别是在高峰时段可能需要排队。'
    },
    highlights: [
      { en: 'Original Salt Bread (塩パン): Famous signature bread, ¥120 per piece', zh: '原创盐面包 (塩パン): 著名招牌面包，每个¥120' },
      { en: 'Melon Bread (メロンパン): Premium melon bread, ¥190 per piece', zh: '菠萝包 (メロンパン): 优质菠萝包，每个¥190' },
      { en: 'Salt Bread Sandwiches: Various sandwich options using salt bread', zh: '盐面包三明治: 使用盐面包的各种三明治选项' },
      { en: 'Freshly Baked: All bread baked fresh daily with premium ingredients', zh: '新鲜烘焙: 所有面包每天使用优质食材新鲜烘焙' },
    ],
    tips: [
      { en: 'Expect possible wait times, especially during peak hours - the bakery is very popular', zh: '可能需要等待，特别是在高峰时段 - 面包店非常受欢迎' },
      { en: 'Purchase limits apply: Max 20 salt bread, max 15 melon bread, max 2 sandwiches per person', zh: '购买限制：每人最多20个盐面包，最多15个菠萝包，最多2个三明治' },
      { en: 'Duration: ~15-20 mins for purchase', zh: '停留时间: 购买约15-20分钟' },
      { en: 'Walk from Tsukiji Market area - convenient stop before continuing to Ginza', zh: '从筑地市场区域步行 - 前往银座前的便捷停留点' },
    ],
    address: { en: 'Tokyo (Multiple locations)', zh: '东京（多家分店）' },
    station: { en: 'Near Tsukiji Market', zh: '筑地市场附近' },
    access: { en: 'Walk from Tsukiji Market area', zh: '从筑地市场区域步行' },
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Pain+Maison+Tokyo',
  },
  'ginza-kanimitsu': {
    id: 'ginza-kanimitsu',
    title: { en: 'Ginza Kanimitsu', zh: '银座蟹みつ' },
    location: { en: 'Ginza, Tokyo', zh: '东京银座' },
    city: 'tokyo',
    price: '¥4,600-¥11,000',
    hours: { en: '11:30 AM - 3:00 PM (Lunch)', zh: '11:30 AM - 3:00 PM (Lunch)' },
    images: [
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/restaurants/ginza-kanimitsu/crab-whole-dish.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/restaurants/ginza-kanimitsu/restaurant-interior.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/restaurants/ginza-kanimitsu/crab-rice-pot.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/restaurants/ginza-kanimitsu/multi-course-meal.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/restaurants/ginza-kanimitsu/meal-set-tray.jpg',
    ],
    about: {
      en: "Ginza Kanimitsu is a premium crab restaurant specializing in fresh crab dishes. The restaurant offers various lunch sets featuring different parts of the crab, from crab sashimi to grilled crab legs. Known for its high-quality ingredients and traditional preparation methods, it's a must-visit for seafood lovers.",
      zh: '银座蟹みつ是一家高级螃蟹餐厅，专门提供新鲜螃蟹料理。餐厅提供各种午餐套餐，包括螃蟹的不同部位，从螃蟹刺身到烤蟹腿。以其高品质的食材和传统的烹饪方法而闻名，是海鲜爱好者的必访之地。'
    },
    highlights: [
      { en: 'Premium crab dishes', zh: '高级螃蟹料理' },
      { en: 'Lunch sets from ¥4,600-¥11,000', zh: '午餐套餐¥4,600-¥11,000起' },
      { en: 'Fresh crab sashimi and grilled options', zh: '新鲜螃蟹刺身和烤制选项' },
      { en: 'Traditional Japanese preparation', zh: '传统日式烹饪' },
    ],
    tips: [
      { en: 'Reservations recommended for lunch', zh: '建议预订午餐' },
      { en: 'Duration: ~1-1.5 hours', zh: '停留时间: 约1-1.5小时' },
      { en: 'Walk 3-5 mins from Ginza Station', zh: '从银座站步行3-5分钟' },
    ],
    address: { en: 'Ginza, Tokyo', zh: '东京银座' },
    station: { en: 'Ginza Station', zh: '银座站' },
    access: { en: 'Walk 3-5 mins from Ginza Station', zh: '从银座站步行3-5分钟' },
    mapUrl: 'https://www.google.com/maps/dir/?api=1&destination=Ginza+Kanimitsu+Tokyo',
  },
  'nakamura-tokichi-ginza': {
    id: 'nakamura-tokichi-ginza',
    title: { en: 'Nakamura Tokichi Ginza', zh: '中村藤吉 银座店' },
    location: { en: 'Ginza, Tokyo', zh: '东京银座' },
    city: 'tokyo',
    price: 'Tea Time',
    hours: { en: 'Hours Vary', zh: '营业时间不定' },
    images: [
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/restaurants/nakamura-tokichi-ginza/matcha-parfait.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/restaurants/nakamura-tokichi-ginza/matcha-dessert-set.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/restaurants/nakamura-tokichi-ginza/matcha-meal-set.jpg',
    ],
    about: {
      en: "Nakamura Tokichi is a famous matcha specialty shop from Uji, Kyoto, with a branch in Ginza. Known for premium matcha parfaits, matcha desserts, and traditional tea time experiences. The Ginza location offers a modern setting to enjoy authentic Uji matcha flavors.",
      zh: '中村藤吉是来自京都宇治的著名抹茶专门店，在银座设有分店。以优质抹茶芭菲、抹茶甜点和传统茶时光体验而闻名。银座店提供现代环境，享受正宗的宇治抹茶风味。'
    },
    highlights: [
      { en: 'Matcha Parfait: Famous signature dessert', zh: '抹茶芭菲: 著名招牌甜点' },
      { en: 'Premium Uji Matcha: Authentic matcha from Uji, Kyoto', zh: '优质宇治抹茶: 来自京都宇治的正宗抹茶' },
      { en: 'Traditional Tea Time: Experience authentic Japanese tea culture', zh: '传统茶时光: 体验正宗的日本茶文化' },
    ],
    tips: [
      { en: 'Duration: ~1 hour', zh: '停留时间: 约1小时' },
      { en: 'Walk 3-5 mins within Ginza area', zh: '银座区内步行3-5分钟' },
    ],
    address: { en: 'Ginza, Tokyo', zh: '东京银座' },
    station: { en: 'Ginza Station', zh: '银座站' },
    access: { en: 'Walk 3-5 mins within Ginza area', zh: '银座区内步行3-5分钟' },
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Nakamura+Tokichi+Ginza',
  },
  'asakusa-monja': {
    id: 'asakusa-monja',
    title: { en: 'Asakusa - Monja Yaki & Okonomiyaki', zh: '浅草 - 文字烧 & 大阪烧' },
    location: { en: 'Asakusa, Tokyo', zh: '东京浅草' },
    city: 'tokyo',
    price: 'Varies',
    hours: { en: 'Hours Vary', zh: '营业时间不定' },
    images: [
      'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=1200&q=80',
    ],
    about: {
      en: "Traditional Tokyo street food experience featuring Monja Yaki and Okonomiyaki. Monja Yaki is a Tokyo specialty - a runny, gooey pancake-like dish cooked on a hot plate. Okonomiyaki is a savory pancake with various ingredients. Both are popular local foods in the Asakusa area.",
      zh: '传统东京街头美食体验，包括文字烧和大阪烧。文字烧是东京特色 - 一种在热板上烹制的流质、粘稠的煎饼状菜肴。大阪烧是一种带有各种配料的咸味煎饼。两者都是浅草地区受欢迎的当地美食。'
    },
    highlights: [
      { en: 'Monja Yaki: Tokyo specialty street food', zh: '文字烧: 东京特色街头美食' },
      { en: 'Okonomiyaki: Savory pancake with various ingredients', zh: '大阪烧: 带有各种配料的咸味煎饼' },
      { en: 'Traditional Experience: Cook on hot plate at your table', zh: '传统体验: 在桌上的热板上烹饪' },
    ],
    tips: [
      { en: 'Duration: ~1.5 hours', zh: '停留时间: 约1.5小时' },
      { en: 'Walk 3-5 mins from Asakusa Station', zh: '从浅草站步行3-5分钟' },
    ],
    address: { en: 'Asakusa, Tokyo', zh: '东京浅草' },
    station: { en: 'Asakusa Station', zh: '浅草站' },
    access: { en: 'Walk 3-5 mins from Asakusa Station', zh: '从浅草站步行3-5分钟' },
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Monja+Yaki+Asakusa+Okonomiyaki',
  },
  'ichiran-ramen': {
    id: 'ichiran-ramen',
    title: { en: 'Ichiran Ramen', zh: '一兰拉面' },
    location: { en: 'Asakusa, Tokyo', zh: '东京浅草' },
    city: 'tokyo',
    price: '¥890-¥1,490',
    hours: { en: 'Hours Vary', zh: '营业时间不定' },
    images: [
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/restaurants/ichiran-ramen/restaurant-interior.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/restaurants/ichiran-ramen/restaurant-dining-area.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/restaurants/ichiran-ramen/ramen-bowl-closeup.jpg',
    ],
    about: {
      en: "Ichiran is a famous tonkotsu ramen chain known for its rich, creamy pork bone broth and customizable ramen experience. The restaurant features private booths for solo dining, allowing you to focus on your ramen without distractions. Famous for its signature tonkotsu ramen with thin noodles, chashu pork, and green onions.",
      zh: '一兰是著名的豚骨拉面连锁店，以其浓郁、奶油般的猪骨汤和可定制的拉面体验而闻名。餐厅设有私人隔间，适合独自用餐，让您可以专注于拉面而不受干扰。以其招牌豚骨拉面而闻名，配有细面条、叉烧和葱。'
    },
    highlights: [
      { en: 'Famous Tonkotsu Ramen: Rich, creamy pork bone broth', zh: '著名豚骨拉面: 浓郁、奶油般的猪骨汤' },
      { en: 'Private Booths: Solo dining experience with privacy', zh: '私人隔间: 私密的独自用餐体验' },
      { en: 'Customizable: Adjust richness, spiciness, and toppings', zh: '可定制: 调整浓度、辣度和配料' },
    ],
    tips: [
      { en: 'Expect possible wait times, especially during peak hours', zh: '可能需要等待，特别是在高峰时段' },
      { en: 'Duration: ~45 mins', zh: '停留时间: 约45分钟' },
      { en: 'Walk 5-10 mins from Senso-ji Temple', zh: '从浅草寺步行5-10分钟' },
    ],
    address: { en: 'Asakusa, Tokyo', zh: '东京浅草' },
    station: { en: 'Asakusa Station', zh: '浅草站' },
    access: { en: 'Walk 5-10 mins from Senso-ji Temple', zh: '从浅草寺步行5-10分钟' },
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Ichiran+Ramen+Asakusa+Tokyo',
  },
  'tsukada-shabu': {
    id: 'tsukada-shabu',
    title: { en: 'Tsukada Shabu Shabu', zh: '塚田しゃぶしゃぶ' },
    location: { en: 'Shibuya, Tokyo', zh: '东京涩谷' },
    city: 'tokyo',
    price: 'Varies',
    hours: { en: '5:00 PM - 11:00 PM', zh: '下午5点 - 晚上11点' },
    images: [
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/restaurants/tsukada-shabu/restaurant-interior.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/restaurants/tsukada-shabu/shabu-dining-counter.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/restaurants/tsukada-shabu/shabu-meal-setup.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/restaurants/tsukada-shabu/shabu-meal-closeup.jpg',
    ],
    about: {
      en: "Tsukada Shabu Shabu is a premium shabu shabu restaurant located in Shibuya Scramble Square 12F. The restaurant offers high-quality meat and vegetables for shabu shabu, a Japanese hot pot dish where you cook thin slices of meat in boiling broth. Perfect for graduation celebration dinner with a group.",
      zh: '塚田しゃぶしゃぶ是一家位于涩谷Scramble Square 12楼的高级涮涮锅餐厅。餐厅提供优质的肉类和蔬菜用于涮涮锅，这是一种日本火锅，您在沸腾的汤中烹制薄肉片。非常适合团体毕业庆功晚餐。'
    },
    highlights: [
      { en: 'Premium Shabu Shabu: High-quality meat and vegetables', zh: '高级涮涮锅: 优质的肉类和蔬菜' },
      { en: 'Shibuya Scramble Square: Located on 12F with city views', zh: '涩谷Scramble Square: 位于12楼，可欣赏城市景观' },
      { en: 'Group Dining: Perfect for celebrations', zh: '团体用餐: 非常适合庆祝活动' },
    ],
    tips: [
      { en: 'Reservations recommended', zh: '建议预订' },
      { en: 'Duration: ~1.5-2 hours', zh: '停留时间: 约1.5-2小时' },
      { en: 'Walk 3-5 mins from Shibuya Station to Shibuya Scramble Square 12F', zh: '从涩谷站步行3-5分钟至涩谷Scramble Square 12楼' },
    ],
    address: { en: 'Shibuya Scramble Square 12F, Tokyo', zh: '涩谷Scramble Square 12楼，东京' },
    station: { en: 'Shibuya Station', zh: '涩谷站' },
    access: { en: 'Walk 3-5 mins from Shibuya Station', zh: '从涩谷站步行3-5分钟' },
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Tsukada+Shabu+Shabu+Shibuya+Tokyo',
  },
  'afuri-yurakucho': {
    id: 'afuri-yurakucho',
    title: { en: 'Afuri (阿夫利)', zh: '阿夫利' },
    location: { en: 'Yurakucho, Tokyo', zh: '东京有乐町' },
    city: 'tokyo',
    price: '¥900-¥1,500',
    hours: { en: 'Hours Vary', zh: '营业时间不定' },
    images: [
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/restaurants/afuri-yurakucho/restaurant-exterior.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/restaurants/afuri-yurakucho/ramen-bowl-closeup.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/restaurants/afuri-yurakucho/meal-spread.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/restaurants/afuri-yurakucho/ramen-bowls-table.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/restaurants/afuri-yurakucho/ramen-dipping-style.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/restaurants/afuri-yurakucho/spicy-ramen-bowl.jpg',
    ],
    about: {
      en: "Afuri (阿夫利) is a famous ramen restaurant in Tokyo, known for its unique yuzu-flavored ramen. The restaurant specializes in light, citrusy shio (salt) and shoyu (soy sauce) ramen with a refreshing yuzu twist. The modern, sleek interior features counter seating and an open kitchen concept.",
      zh: '阿夫利是东京著名的拉面餐厅，以其独特的柚子味拉面而闻名。餐厅专门提供清淡、带有柑橘味的盐拉面和酱油拉面，带有清爽的柚子风味。现代化、时尚的内部设有吧台座位和开放式厨房概念。'
    },
    highlights: [
      { en: 'Yuzu Ramen: Signature light, citrusy ramen with fresh yuzu flavor', zh: '柚子拉面: 招牌清淡、带有柑橘味的拉面，带有新鲜柚子风味' },
      { en: 'Tsukemen (Dipping Ramen): Thick noodles served with rich dipping sauce', zh: '蘸面: 粗面条配浓郁蘸酱' },
      { en: 'Spicy Options: Various spicy ramen options', zh: '辣味选项: 多种辣味拉面选项' },
      { en: 'Modern Atmosphere: Sleek interior with counter seating', zh: '现代氛围: 时尚的内部，设有吧台座位' },
    ],
    tips: [
      { en: 'Try the signature yuzu shio ramen for the unique citrus flavor experience', zh: '尝试招牌柚子盐拉面，体验独特的柑橘风味' },
      { en: 'Duration: ~1 hour for lunch (including possible wait time)', zh: '停留时间: 午餐约1小时（包括可能的等待时间）' },
      { en: 'Conveniently located near Tokyo Station - perfect stop before Shinkansen departure', zh: '位于东京站附近 - 新干线出发前的完美停留点' },
      { en: 'Pricing: ¥900-¥1,500 per bowl depending on toppings and options', zh: '价格: 每碗¥900-¥1,500，取决于配料和选项' },
    ],
    address: { en: 'Yurakucho, Tokyo (Multiple locations)', zh: '东京有乐町（多家分店）' },
    station: { en: 'Yurakucho Station', zh: '有乐町站' },
    access: { en: 'Walk 5-10 mins from Tokyo Station', zh: '从东京站步行5-10分钟' },
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Afuri+Yurakucho+Tokyo',
  },
  'dotonbori-dinner': {
    id: 'dotonbori-dinner',
    title: { en: 'Dotonbori Dinner', zh: '道顿堀晚餐' },
    location: { en: 'Dotonbori, Osaka', zh: '大阪道顿堀' },
    city: 'osaka',
    price: 'Varies',
    hours: { en: 'Hours Vary', zh: '营业时间不定' },
    images: [
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/dotonbori/canal-night-view.jpg',
    ],
    about: {
      en: "Dotonbori is Osaka's most famous entertainment and dining district, known for its vibrant neon signs, street food, and local cuisine. The area offers countless dining options from traditional Osaka dishes like takoyaki and okonomiyaki to modern restaurants and izakaya.",
      zh: '道顿堀是大阪最著名的娱乐和餐饮区，以其充满活力的霓虹灯招牌、街头美食和当地美食而闻名。该地区提供无数餐饮选择，从传统的大阪料理如章鱼烧和大阪烧到现代餐厅和居酒屋。'
    },
    highlights: [
      { en: 'Local Cuisine: Traditional Osaka dishes', zh: '当地美食: 传统大阪料理' },
      { en: 'Vibrant Atmosphere: Neon signs and bustling streets', zh: '充满活力的氛围: 霓虹灯招牌和繁华街道' },
      { en: 'Street Food: Takoyaki, okonomiyaki, and more', zh: '街头美食: 章鱼烧、大阪烧等' },
    ],
    tips: [
      { en: 'Duration: ~1.5-2 hours', zh: '停留时间: 约1.5-2小时' },
      { en: 'Walk from Namba Station', zh: '从难波站步行' },
    ],
    address: { en: 'Dotonbori, Osaka', zh: '大阪道顿堀' },
    station: { en: 'Namba Station', zh: '难波站' },
    access: { en: 'Walk from Namba Station', zh: '从难波站步行' },
    mapUrl: 'https://www.google.com/maps/dir/?api=1&destination=Dotonbori+Osaka',
  },
  'kushikatsu-shinsekai': {
    id: 'kushikatsu-shinsekai',
    title: { en: 'Kushikatsu (Shinsekai)', zh: '炸串 (新世界)' },
    location: { en: 'Shinsekai, Osaka', zh: '大阪新世界' },
    city: 'osaka',
    price: '¥100-¥500 per skewer',
    hours: { en: 'Hours Vary', zh: '营业时间不定' },
    images: [
      'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=1200&q=80',
    ],
    about: {
      en: "Kushikatsu is Osaka's famous deep-fried skewers, and Shinsekai is the best area to try them. Various ingredients like meat, vegetables, and seafood are breaded and deep-fried, then served with a special dipping sauce. The rule is: no double-dipping!",
      zh: '炸串是大阪著名的深炸串，新世界是尝试它们的最佳区域。各种食材如肉类、蔬菜和海鲜被裹上面包屑并深炸，然后配以特殊的蘸酱。规则是：不要二次蘸酱！'
    },
    highlights: [
      { en: "Osaka's Famous Dish: Deep-fried skewers", zh: '大阪著名料理: 深炸串' },
      { en: 'Shinsekai Area: Best place to try kushikatsu', zh: '新世界区域: 尝试炸串的最佳地点' },
      { en: 'Special Dipping Sauce: Unique flavor', zh: '特殊蘸酱: 独特风味' },
    ],
    tips: [
      { en: 'No double-dipping rule!', zh: '不要二次蘸酱规则！' },
      { en: 'Duration: ~1 hour', zh: '停留时间: 约1小时' },
      { en: 'Near Tsutenkaku Tower', zh: '通天阁附近' },
    ],
    address: { en: 'Shinsekai, Osaka', zh: '大阪新世界' },
    station: { en: 'Tennoji Station', zh: '天王寺站' },
    access: { en: 'Walk 5 mins from Tennoji Station', zh: '从天王寺站步行5分钟' },
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Kushikatsu+Shinsekai+Osaka',
  },
  'kobe-steak-nick': {
    id: 'kobe-steak-nick',
    title: { en: 'Kobe Steak Nick (KOBE STEAK 青斜塔)', zh: 'Kobe Steak Nick (KOBE STEAK 青斜塔)' },
    location: { en: 'Kobe, Hyogo', zh: '兵库县神户' },
    city: 'kobe',
    price: '¥6,000-¥7,000',
    hours: { en: 'Hours Vary', zh: '营业时间不定' },
    images: [
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/restaurants/kobe-steak-nick/restaurant-exterior.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/restaurants/kobe-steak-nick/restaurant-interior.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/restaurants/kobe-steak-nick/steak-slices-closeup.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/restaurants/kobe-steak-nick/meal-set.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/restaurants/kobe-steak-nick/meal-presentation.jpg',
    ],
    about: {
      en: "Kobe Steak Nick (KOBE STEAK 青斜塔) is a premium meat shop and restaurant in Kobe, specializing in authentic Kobe beef. The restaurant offers high-quality wagyu beef with beautiful marbling, prepared to perfection. The modern, elegant interior features wooden tables with warm lighting, creating an intimate dining atmosphere perfect for enjoying premium Kobe beef.",
      zh: 'Kobe Steak Nick (KOBE STEAK 青斜塔) 是神户一家优质肉店和餐厅，专门提供正宗神户牛肉。餐厅提供具有美丽大理石花纹的优质和牛，精心烹制至完美。现代优雅的内部设有木桌和温暖照明，营造出亲密用餐氛围，非常适合享用优质神户牛肉。'
    },
    highlights: [
      { en: 'Authentic Kobe Beef: Premium wagyu with exceptional marbling', zh: '正宗神户牛肉: 优质和牛，大理石花纹丰富' },
      { en: 'Signature Presentation: Thick slices of seared beef with coarse salt, pepper, and garlic chips', zh: '招牌呈现: 厚切烤牛肉片配粗盐、胡椒和蒜片' },
      { en: 'Traditional Accompaniments: Rice with bonito flakes, miso soup, salad with fish roe, and dipping sauces', zh: '传统配菜: 鲣鱼片米饭、味噌汤、鱼籽沙拉和蘸酱' },
      { en: 'Elegant Atmosphere: Modern interior with wooden tables and warm lighting', zh: '优雅氛围: 现代内部配有木桌和温暖照明' },
    ],
    tips: [
      { en: 'Reservations recommended, especially for dinner', zh: '建议预订，特别是晚餐' },
      { en: 'Duration: ~1-1.5 hours for lunch, ~2 hours for dinner', zh: '停留时间: 午餐约1-1.5小时，晚餐约2小时' },
      { en: 'Walk 10-15 mins from Meriken Park area', zh: '从美利坚公园区域步行10-15分钟' },
      { en: 'Pricing: ¥6,000-¥7,000 per person (lunch menu)', zh: '价格: 每人¥6,000-¥7,000（午餐菜单）' },
    ],
    address: { en: '3 Chome-10 Nakayamatedori, Chuo Ward, Kobe, Hyogo', zh: '兵库县神户市中央区中山手通3丁目10' },
    station: { en: 'Sannomiya Station', zh: '三宫站' },
    access: { en: 'Walk 10-15 mins from Meriken Park area', zh: '从美利坚公园区域步行10-15分钟' },
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Kobe+Steak+Nick+Kobe',
  },
  'gashoken': {
    id: 'gashoken',
    title: { en: 'Gashoken (賀正軒) Sannomiya', zh: '賀正軒 三宮店' },
    location: { en: 'Sannomiya, Kobe', zh: '神户三宫' },
    city: 'kobe',
    price: '¥1,100-¥1,880',
    hours: { en: '11:00 AM - 10:00 PM', zh: '11:00 AM - 10:00 PM' },
    images: [
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/restaurants/gashoken/restaurant-exterior-night.png',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/restaurants/gashoken/menu-display.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/restaurants/gashoken/ramen-varieties-promo.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/restaurants/gashoken/tonkotsu-ramen-bowl.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/restaurants/gashoken/basil-cheese-ramen.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/restaurants/gashoken/spicy-ramen-bowl.jpg',
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/restaurants/gashoken/black-tonkotsu-ramen.jpg',
    ],
    about: {
      en: "Gashoken (賀正軒) is a famous tonkotsu ramen restaurant in Kobe, specializing in rich, creamy pork bone broth ramen. The Sannomiya location offers a modern dining experience with various unique ramen varieties, including their signature tonkotsu, fusion-style ramen with cheese and basil, spicy mentaiko miso, and black squid ink ramen.",
      zh: '賀正軒是神户著名的豚骨拉面餐厅，专门提供浓郁、奶油般的猪骨汤拉面。三宫店提供现代用餐体验，提供各种独特的拉面品种，包括招牌豚骨拉面、芝士罗勒融合拉面、辣味明太子味噌拉面和黑色鱿鱼墨拉面。'
    },
    highlights: [
      { en: 'Signature Tonkotsu Ramen: Rich, creamy pork bone broth with thin noodles, chashu, green onions', zh: '招牌豚骨拉面: 浓郁、奶油般的猪骨汤，配细面条、叉烧、葱' },
      { en: 'Unique Fusion Ramen: Basil Cheese Ramen, Pesto Ramen with innovative toppings', zh: '独特融合拉面: 罗勒芝士拉面、罗勒拉面配创新配料' },
      { en: 'Spicy Varieties: Spicy Mentaiko Miso Ramen, Spicy Ramen with chili oil', zh: '辣味品种: 辣味明太子味噌拉面、辣油拉面' },
      { en: 'Black Tonkotsu: Squid ink-infused black broth with perilla leaves', zh: '黑豚骨: 鱿鱼墨注入的黑色汤配紫苏叶' },
    ],
    tips: [
      { en: 'Duration: ~1 hour for dinner', zh: '停留时间: 晚餐约1小时' },
      { en: 'Walk 5-10 mins from Sannomiya Station to the restaurant', zh: '从三宫站步行5-10分钟至餐厅' },
      { en: 'Try the unique fusion varieties like Basil Cheese Ramen or Black Tonkotsu', zh: '尝试独特的融合品种，如罗勒芝士拉面或黑豚骨拉面' },
      { en: 'Pricing: ¥1,100-¥1,880 per bowl depending on variety (Extra noodles ¥100)', zh: '价格: 每碗¥1,100-¥1,880，取决于品种（加面¥100）' },
    ],
    address: { en: '1 Chome-9-5 Kitanagasadori, Chuo Ward, Kobe, Hyogo 650-0012', zh: '兵库县神户市中央区北長狭通1丁目9-5' },
    station: { en: 'Sannomiya Station', zh: '三宫站' },
    access: { en: 'Walk 5-10 mins from Sannomiya Station', zh: '从三宫站步行5-10分钟' },
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Gashoken+Sannomiya+Kobe',
  },
  'kyoto-lunch': {
    id: 'kyoto-lunch',
    title: { en: 'Lunch (Ninenzaka & Sannenzaka)', zh: '午餐 (二三年坂)' },
    location: { en: 'Ninenzaka & Sannenzaka, Kyoto', zh: '京都二三年坂' },
    city: 'kyoto',
    price: 'Varies',
    hours: { en: 'Hours Vary', zh: '营业时间不定' },
    images: [
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/attractions/kiyomizu/main-hall-veranda.jpg',
    ],
    about: {
      en: "Traditional Kyoto cuisine in the historic Ninenzaka and Sannenzaka area, known for its preserved traditional streets and traditional restaurants. The area offers various dining options featuring Kyoto's traditional kaiseki cuisine, tofu dishes, and local specialties.",
      zh: '历史悠久的二三年坂地区的传统京都料理，以其保存完好的传统街道和传统餐厅而闻名。该地区提供各种餐饮选择，包括京都的传统怀石料理、豆腐料理和当地特色菜。'
    },
    highlights: [
      { en: 'Traditional Kyoto Cuisine: Kaiseki, tofu dishes, and local specialties', zh: '传统京都料理: 怀石、豆腐料理和当地特色菜' },
      { en: 'Historic Area: Preserved traditional streets', zh: '历史区域: 保存完好的传统街道' },
      { en: 'Cultural Experience: Authentic Japanese dining', zh: '文化体验: 正宗的日本用餐' },
    ],
    tips: [
      { en: 'Duration: ~1-1.5 hours', zh: '停留时间: 约1-1.5小时' },
      { en: 'Walk from Kiyomizu-dera Temple area', zh: '从清水寺区域步行' },
    ],
    address: { en: 'Ninenzaka & Sannenzaka, Kyoto', zh: '京都二三年坂' },
    station: { en: 'Kiyomizu-Gojo Station', zh: '清水五条站' },
    access: { en: 'Walk from Kiyomizu-dera Temple area', zh: '从清水寺区域步行' },
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Ninenzaka+Sannenzaka+Kyoto',
  },
  'nakamura-tokichi-uji': {
    id: 'nakamura-tokichi-uji',
    title: { en: 'Nakamura Tokichi Honten', zh: '中村藤吉 本店' },
    location: { en: 'Uji, Kyoto', zh: '京都宇治' },
    city: 'uji',
    price: 'Varies',
    hours: { en: 'Hours Vary', zh: '营业时间不定' },
    images: [
      'https://res.cloudinary.com/dput41tre/image/upload/japantrip/restaurants/nakamura-tokichi-ginza/matcha-parfait.jpg',
    ],
    about: {
      en: "Nakamura Tokichi Honten is the historic main store in Uji, Kyoto, famous for premium matcha sweets and traditional tea. The original location where the brand was founded, offering authentic Uji matcha experiences including matcha parfaits, matcha desserts, and traditional tea ceremonies.",
      zh: '中村藤吉本店是位于京都宇治的历史悠久的主店，以优质抹茶甜点和传统茶而闻名。品牌创始的原始地点，提供正宗的宇治抹茶体验，包括抹茶芭菲、抹茶甜点和传统茶道。'
    },
    highlights: [
      { en: 'Historic Main Store: Original location in Uji', zh: '历史主店: 宇治的原始地点' },
      { en: 'Premium Matcha Sweets: Authentic Uji matcha desserts', zh: '优质抹茶甜点: 正宗的宇治抹茶甜点' },
      { en: 'Traditional Tea: Experience authentic Japanese tea culture', zh: '传统茶: 体验正宗的日本茶文化' },
    ],
    tips: [
      { en: 'Duration: ~1 hour', zh: '停留时间: 约1小时' },
      { en: 'Early lunch option before exploring Uji', zh: '探索宇治前的早午餐选项' },
    ],
    address: { en: 'Uji, Kyoto', zh: '京都宇治' },
    station: { en: 'Uji Station', zh: '宇治站' },
    access: { en: 'Walk from Uji Station', zh: '从宇治站步行' },
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Nakamura+Tokichi+Honten+Uji',
  },
}
