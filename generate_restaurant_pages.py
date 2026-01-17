#!/usr/bin/env python3
"""
Generate restaurant pages from template
"""

restaurants = [
    {
        "filename": "ginza-kanimitsu.html",
        "name_en": "Ginza Kanimitsu",
        "name_zh": "银座蟹みつ",
        "location": "tokyo",
        "location_name_en": "Ginza, Tokyo",
        "location_name_zh": "东京银座",
        "price": "¥4,600-¥11,000",
        "hours": "11:30 AM - 3:00 PM (Lunch)",
        "about_en": "Ginza Kanimitsu is a premium crab restaurant specializing in fresh crab dishes. The restaurant offers various lunch sets featuring different parts of the crab, from crab sashimi to grilled crab legs. Known for its high-quality ingredients and traditional preparation methods, it's a must-visit for seafood lovers.",
        "about_zh": "银座蟹みつ是一家高级螃蟹餐厅，专门提供新鲜螃蟹料理。餐厅提供各种午餐套餐，包括螃蟹的不同部位，从螃蟹刺身到烤蟹腿。以其高品质的食材和传统的烹饪方法而闻名，是海鲜爱好者的必访之地。",
        "highlights": [
            ("Premium crab dishes", "高级螃蟹料理"),
            ("Lunch sets from ¥4,600-¥11,000", "午餐套餐¥4,600-¥11,000起"),
            ("Fresh crab sashimi and grilled options", "新鲜螃蟹刺身和烤制选项"),
            ("Traditional Japanese preparation", "传统日式烹饪")
        ],
        "tips": [
            ("Reservations recommended, especially for lunch", "建议预订，特别是午餐时段"),
            ("Duration: ~1-1.5 hours", "停留时间: 约1-1.5小时"),
            ("Walk 3-5 mins from Ginza Station", "从银座站步行3-5分钟"),
            ("Website: https://ginza-kanimitsu.com/menu/lunch/", "网站: https://ginza-kanimitsu.com/menu/lunch/")
        ],
        "address": "Ginza, Chuo City, Tokyo",
        "station": "Ginza Station",
        "access": "Walk 3-5 mins from Ginza Station",
        "map_url": "https://www.google.com/maps/dir/?api=1&destination=Ginza+Kanimitsu+Tokyo"
    },
    {
        "filename": "nakamura-tokichi-ginza.html",
        "name_en": "Nakamura Tokichi Ginza",
        "name_zh": "中村藤吉银座",
        "location": "tokyo",
        "location_name_en": "Ginza, Tokyo",
        "location_name_zh": "东京银座",
        "price": "¥1,000-¥2,500",
        "hours": "10:00 AM - 8:00 PM",
        "about_en": "Nakamura Tokichi is a historic matcha tea house with branches in Kyoto and Tokyo. The Ginza location offers their famous matcha parfait, traditional matcha sweets, and tea ceremony experiences. Established in 1854, it's one of Japan's most respected tea merchants.",
        "about_zh": "中村藤吉是一家历史悠久的抹茶茶屋，在京都和东京都有分店。银座店提供他们著名的抹茶芭菲、传统抹茶甜点和茶道体验。成立于1854年，是日本最受尊敬的茶商之一。",
        "highlights": [
            ("Famous matcha parfait", "著名抹茶芭菲"),
            ("Traditional matcha sweets", "传统抹茶甜点"),
            ("Historic tea house since 1854", "自1854年以来的历史茶屋"),
            ("Tea ceremony experience available", "可体验茶道")
        ],
        "tips": [
            ("Popular spot, may have wait times", "热门地点，可能需要等待"),
            ("Duration: ~1 hour for tea time", "停留时间: 下午茶约1小时"),
            ("Walk 3-5 mins within Ginza area", "银座区内步行3-5分钟"),
            ("Perfect for afternoon break", "非常适合下午休息")
        ],
        "address": "Ginza, Chuo City, Tokyo",
        "station": "Ginza Station",
        "access": "Walk 3-5 mins within Ginza area",
        "map_url": "https://www.google.com/maps/search/?api=1&query=Nakamura+Tokichi+Ginza"
    },
    {
        "filename": "asakusa-monja.html",
        "name_en": "Asakusa - Monja Yaki & Okonomiyaki",
        "name_zh": "浅草 - 文字烧 & 大阪烧",
        "location": "tokyo",
        "location_name_en": "Asakusa, Tokyo",
        "location_name_zh": "东京浅草",
        "price": "¥800-¥2,000",
        "hours": "5:00 PM - 11:00 PM",
        "about_en": "Asakusa is famous for its monja yaki and okonomiyaki restaurants. Monja yaki is a Tokyo specialty - a runny, gooey version of okonomiyaki that you cook yourself on a hot plate. Okonomiyaki is a savory pancake with various ingredients. Both are quintessential Tokyo street food experiences.",
        "about_zh": "浅草以其文字烧和大阪烧餐厅而闻名。文字烧是东京的特色 - 一种稀薄、粘稠的大阪烧版本，您可以在热板上自己烹饪。大阪烧是一种带有各种配料的咸味煎饼。两者都是典型的东京街头美食体验。",
        "highlights": [
            ("Authentic monja yaki experience", "正宗文字烧体验"),
            ("Traditional okonomiyaki", "传统大阪烧"),
            ("Cook your own food on hot plate", "在热板上自己烹饪"),
            ("Local Tokyo street food", "当地东京街头美食")
        ],
        "tips": [
            ("Duration: ~1.5 hours", "停留时间: 约1.5小时"),
            ("Many restaurants in Asakusa area", "浅草地区有许多餐厅"),
            ("Walk 3-5 mins from Asakusa Station", "从浅草站步行3-5分钟"),
            ("Great for dinner experience", "非常适合晚餐体验")
        ],
        "address": "Asakusa, Taito City, Tokyo",
        "station": "Asakusa Station",
        "access": "Walk 3-5 mins from Asakusa Station",
        "map_url": "https://www.google.com/maps/search/?api=1&query=Monja+Yaki+Asakusa+Okonomiyaki"
    },
    {
        "filename": "ichiran-ramen.html",
        "name_en": "Ichiran Ramen",
        "name_zh": "一兰拉面",
        "location": "tokyo",
        "location_name_en": "Asakusa, Tokyo",
        "location_name_zh": "东京浅草",
        "price": "¥890-¥1,490",
        "hours": "10:00 AM - 10:00 PM",
        "about_en": "Ichiran is one of Japan's most famous ramen chains, known for its tonkotsu (pork bone) broth and customizable ramen experience. Each diner sits in a private booth, allowing you to focus entirely on your ramen. The rich, creamy tonkotsu soup and perfectly cooked noodles make it a must-try.",
        "about_zh": "一兰是日本最著名的拉面连锁店之一，以其豚骨汤和可定制的拉面体验而闻名。每位食客坐在私人隔间中，让您完全专注于拉面。浓郁、奶油般的豚骨汤和完美烹制的面条使其成为必试之选。",
        "highlights": [
            ("Famous tonkotsu ramen", "著名豚骨拉面"),
            ("Private booth dining experience", "私人隔间用餐体验"),
            ("Customizable spice and flavor levels", "可定制辣度和口味"),
            ("24-hour locations available", "有24小时营业的分店")
        ],
        "tips": [
            ("Expect possible wait times, especially during peak hours", "可能需要等待，特别是在高峰时段"),
            ("Duration: ~45 mins", "停留时间: 约45分钟"),
            ("Walk 5-10 mins from Senso-ji", "从浅草寺步行5-10分钟"),
            ("Order using ticket machine at entrance", "在入口处使用售票机点餐")
        ],
        "address": "Asakusa, Taito City, Tokyo",
        "station": "Asakusa Station",
        "access": "Walk 5-10 mins from Senso-ji",
        "map_url": "https://www.google.com/maps/search/?api=1&query=Ichiran+Ramen+Asakusa+Tokyo"
    },
    {
        "filename": "tsukada-shabu.html",
        "name_en": "Tsukada Shabu Shabu",
        "name_zh": "塚田しゃぶしゃぶ",
        "location": "tokyo",
        "location_name_en": "Shibuya, Tokyo",
        "location_name_zh": "东京涩谷",
        "price": "¥3,000-¥6,000",
        "hours": "5:00 PM - 11:00 PM",
        "about_en": "Tsukada Shabu Shabu is a premium shabu shabu restaurant located in Shibuya Scramble Square 12F. Shabu shabu is a Japanese hot pot dish where you cook thin slices of meat and vegetables in a boiling pot of water or broth. Perfect for graduation celebration dinner with high-quality ingredients and excellent service.",
        "about_zh": "塚田しゃぶしゃぶ是一家位于涩谷Scramble Square 12楼的高级涮涮锅餐厅。涮涮锅是一种日本火锅料理，您在沸腾的水或汤锅中烹饪薄肉片和蔬菜。非常适合毕业庆功晚餐，提供高品质食材和优质服务。",
        "highlights": [
            ("Premium shabu shabu experience", "高级涮涮锅体验"),
            ("High-quality meat and vegetables", "高品质肉类和蔬菜"),
            ("Located in Shibuya Scramble Square", "位于涩谷Scramble Square"),
            ("Perfect for special celebrations", "非常适合特殊庆祝活动")
        ],
        "tips": [
            ("Duration: ~1.5-2 hours", "停留时间: 约1.5-2小时"),
            ("Reservations recommended for dinner", "建议预订晚餐"),
            ("Walk 3-5 mins from Shibuya Station to Shibuya Scramble Square 12F", "从涩谷站步行3-5分钟至涩谷Scramble Square 12楼"),
            ("Great for group dining", "非常适合团体用餐")
        ],
        "address": "Shibuya Scramble Square 12F, Shibuya, Tokyo",
        "station": "Shibuya Station",
        "access": "Walk 3-5 mins from Shibuya Station to Shibuya Scramble Square 12F",
        "map_url": "https://www.google.com/maps/search/?api=1&query=Tsukada+Shabu+Shabu+Shibuya+Tokyo"
    },
    {
        "filename": "dotonbori-dinner.html",
        "name_en": "Dotonbori Dinner",
        "name_zh": "道顿堀晚餐",
        "location": "osaka",
        "location_name_en": "Dotonbori, Osaka",
        "location_name_zh": "大阪道顿堀",
        "price": "¥2,000-¥5,000",
        "hours": "5:00 PM - 11:00 PM",
        "about_en": "Dotonbori is Osaka's most famous entertainment and dining district, known for its vibrant neon signs, street food, and diverse restaurant scene. The area offers everything from traditional Osaka cuisine like takoyaki and okonomiyaki to high-end restaurants. Perfect for reunion dinner with family.",
        "about_zh": "道顿堀是大阪最著名的娱乐和餐饮区，以其充满活力的霓虹灯招牌、街头美食和多样化的餐厅场景而闻名。该地区提供从传统大阪料理（如章鱼烧和大阪烧）到高端餐厅的各种选择。非常适合家庭团圆晚餐。",
        "highlights": [
            ("Iconic Glico Man sign", "标志性的格力高跑男广告牌"),
            ("Wide variety of Osaka cuisine", "各种大阪料理"),
            ("Vibrant nightlife and atmosphere", "充满活力的夜生活和氛围"),
            ("Street food and restaurants", "街头美食和餐厅")
        ],
        "tips": [
            ("Many restaurant options, explore before choosing", "许多餐厅选择，选择前先探索"),
            ("Duration: ~2 hours for dinner", "停留时间: 晚餐约2小时"),
            ("Walk 5 mins from Namba Station", "从难波站步行5分钟"),
            ("Great for experiencing Osaka's food culture", "非常适合体验大阪的美食文化")
        ],
        "address": "Dotonbori, Chuo Ward, Osaka",
        "station": "Namba Station",
        "access": "Walk 5 mins from Namba Station",
        "map_url": "https://www.google.com/maps/dir/?api=1&destination=Dotonbori+Osaka"
    },
    {
        "filename": "kushikatsu-shinsekai.html",
        "name_en": "Kushikatsu (Shinsekai)",
        "name_zh": "炸串 (新世界)",
        "location": "osaka",
        "location_name_en": "Shinsekai, Osaka",
        "location_name_zh": "大阪新世界",
        "price": "¥1,000-¥3,000",
        "hours": "11:00 AM - 10:00 PM",
        "about_en": "Kushikatsu is Osaka's famous deep-fried skewers, and Shinsekai (New World) is the best place to try them. This retro district near Tsutenkaku Tower is filled with kushikatsu restaurants. You dip the skewers in a shared sauce (only once - no double dipping!) and enjoy with beer.",
        "about_zh": "炸串是大阪著名的油炸串，新世界是尝试它们的最佳地点。这个位于通天阁附近的复古区域到处都是炸串餐厅。您将串串蘸入共享酱汁（只蘸一次 - 不要重复蘸！）并与啤酒一起享用。",
        "highlights": [
            ("Osaka's signature dish", "大阪的标志性料理"),
            ("Retro Shinsekai atmosphere", "复古新世界氛围"),
            ("Near Tsutenkaku Tower", "靠近通天阁"),
            ("Affordable and delicious", "价格实惠且美味")
        ],
        "tips": [
            ("No double dipping in the shared sauce!", "不要在共享酱汁中重复蘸！"),
            ("Duration: ~1 hour for lunch", "停留时间: 午餐约1小时"),
            ("Many restaurants in Shinsekai area", "新世界地区有许多餐厅"),
            ("Great with beer", "配啤酒很棒")
        ],
        "address": "Shinsekai, Naniwa Ward, Osaka",
        "station": "Tennoji Station",
        "access": "Walk 5 mins from Tennoji Station",
        "map_url": "https://www.google.com/maps/dir/?api=1&destination=Shinsekai+Osaka"
    },
    {
        "filename": "mosaic-lunch.html",
        "name_en": "Lunch at Mosaic",
        "name_zh": "Mosaic 广场午餐",
        "location": "kobe",
        "location_name_en": "Harborland, Kobe",
        "location_name_zh": "神户港湾乐园",
        "price": "¥1,500-¥4,000",
        "hours": "11:00 AM - 9:00 PM",
        "about_en": "Mosaic is a waterfront shopping complex in Kobe's Harborland area, offering various dining options with beautiful views of the port. The complex features restaurants serving Japanese, Western, and international cuisine, perfect for a relaxed lunch after exploring Harborland.",
        "about_zh": "Mosaic是神户港湾乐园地区的海滨购物中心，提供各种餐饮选择，可欣赏美丽的港口景色。该中心设有提供日式、西式和国际料理的餐厅，非常适合在探索港湾乐园后享用轻松的午餐。",
        "highlights": [
            ("Waterfront dining with port views", "可欣赏港口景色的海滨用餐"),
            ("Various cuisine options", "各种料理选择"),
            ("Shopping complex with restaurants", "带餐厅的购物中心"),
            ("Relaxed atmosphere", "轻松的氛围")
        ],
        "tips": [
            ("Duration: ~1 hour for lunch", "停留时间: 午餐约1小时"),
            ("Walk 3 mins from Harborland", "从港湾乐园步行3分钟"),
            ("Many restaurant choices available", "有许多餐厅选择"),
            ("Great views of Kobe Port", "可欣赏神户港的美景")
        ],
        "address": "Mosaic, Harborland, Kobe",
        "station": "Sannomiya Station",
        "access": "Walk 3 mins from Harborland",
        "map_url": "https://www.google.com/maps/dir/?api=1&destination=Mosaic+Kobe"
    },
    {
        "filename": "kobe-beef.html",
        "name_en": "Kobe Beef or Izakaya",
        "name_zh": "神户牛肉或居酒屋",
        "location": "kobe",
        "location_name_en": "Kobe City Center",
        "location_name_zh": "神户市中心",
        "price": "¥5,000-¥15,000 (Kobe Beef) / ¥2,000-¥5,000 (Izakaya)",
        "hours": "5:00 PM - 11:00 PM",
        "about_en": "Kobe is famous for its premium Kobe beef, one of the world's most expensive and sought-after meats. Alternatively, you can enjoy a traditional izakaya (Japanese pub) experience with grilled skewers, small plates, and drinks. Both options offer authentic Japanese dining experiences.",
        "about_zh": "神户以其优质的神户牛肉而闻名，这是世界上最昂贵和最受欢迎的肉类之一。或者，您可以享受传统的居酒屋（日本酒吧）体验，包括烤串、小盘菜和饮品。两种选择都提供正宗的日本用餐体验。",
        "highlights": [
            ("World-famous Kobe beef", "世界著名的神户牛肉"),
            ("Traditional izakaya experience", "传统居酒屋体验"),
            ("Authentic Japanese dining", "正宗日本料理"),
            ("Great for special occasions", "非常适合特殊场合")
        ],
        "tips": [
            ("Kobe beef restaurants require reservations", "神户牛肉餐厅需要预订"),
            ("Duration: ~2 hours for dinner", "停留时间: 晚餐约2小时"),
            ("Many options in Kobe city center", "神户市中心有许多选择"),
            ("Izakaya offers more affordable option", "居酒屋提供更实惠的选择")
        ],
        "address": "Kobe City Center",
        "station": "Sannomiya Station",
        "access": "Walk 10 mins from Sannomiya Station",
        "map_url": "https://www.google.com/maps/dir/?api=1&destination=Kobe+City+Center"
    },
    {
        "filename": "kyoto-lunch.html",
        "name_en": "Lunch (Ninenzaka & Sannenzaka)",
        "name_zh": "午餐 (二三年坂)",
        "location": "kyoto",
        "location_name_en": "Ninenzaka & Sannenzaka, Kyoto",
        "location_name_zh": "京都二三年坂",
        "price": "¥1,500-¥4,000",
        "hours": "11:00 AM - 3:00 PM",
        "about_en": "Ninenzaka and Sannenzaka are historic preserved streets leading to Kiyomizu-dera Temple, lined with traditional wooden buildings housing shops, cafes, and restaurants. The area offers traditional Kyoto cuisine including kaiseki, soba noodles, and local specialties in a beautiful historic setting.",
        "about_zh": "二三年坂是通往清水寺的历史保护街道，两旁是传统木制建筑，设有商店、咖啡厅和餐厅。该地区提供传统京都料理，包括怀石料理、荞麦面和当地特色菜，环境优美且具有历史意义。",
        "highlights": [
            ("Traditional Kyoto cuisine", "传统京都料理"),
            ("Historic preserved streets", "历史保护街道"),
            ("Beautiful traditional architecture", "美丽的传统建筑"),
            ("Near Kiyomizu-dera Temple", "靠近清水寺")
        ],
        "tips": [
            ("Duration: ~1 hour for lunch", "停留时间: 午餐约1小时"),
            ("Walk 5 mins downhill from Kiyomizu-dera", "从清水寺步行5分钟下坡"),
            ("Many traditional restaurants available", "有许多传统餐厅"),
            ("Great for experiencing Kyoto culture", "非常适合体验京都文化")
        ],
        "address": "Ninenzaka & Sannenzaka, Higashiyama Ward, Kyoto",
        "station": "Kiyomizu-Gojo Station",
        "access": "Walk 5 mins downhill from Kiyomizu-dera",
        "map_url": "https://www.google.com/maps/dir/?api=1&destination=Ninenzaka+Sannenzaka+Kyoto"
    },
    {
        "filename": "nakamura-tokichi-uji.html",
        "name_en": "Nakamura Tokichi Honten",
        "name_zh": "中村藤吉本店",
        "location": "kyoto",
        "location_name_en": "Uji, Kyoto",
        "location_name_zh": "京都宇治",
        "price": "¥1,000-¥2,500",
        "hours": "10:00 AM - 5:30 PM",
        "about_en": "Nakamura Tokichi Honten is the original and main branch of the historic tea house, located in Uji - the birthplace of Japanese green tea. The honten (main store) offers authentic matcha sweets, tea ceremony experiences, and traditional Japanese desserts. Uji is famous for producing the highest quality matcha in Japan.",
        "about_zh": "中村藤吉本店是历史茶屋的原始和主要分店，位于宇治 - 日本绿茶的诞生地。本店提供正宗的抹茶甜点、茶道体验和传统日本甜点。宇治以生产日本最高品质的抹茶而闻名。",
        "highlights": [
            ("Historic tea house main branch", "历史茶屋主店"),
            ("Authentic Uji matcha sweets", "正宗宇治抹茶甜点"),
            ("Tea ceremony experience", "茶道体验"),
            ("Located in matcha's birthplace", "位于抹茶的诞生地")
        ],
        "tips": [
            ("Duration: ~1 hour for matcha sweets & early lunch", "停留时间: 抹茶甜点和早午餐约1小时"),
            ("Walk 3 mins from Uji Station", "从宇治站步行3分钟"),
            ("Popular spot, may have wait times", "热门地点，可能需要等待"),
            ("Perfect for matcha lovers", "非常适合抹茶爱好者")
        ],
        "address": "Uji, Kyoto",
        "station": "Uji Station",
        "access": "Walk 3 mins from Uji Station",
        "map_url": "https://www.google.com/maps/dir/?api=1&destination=Nakamura+Tokichi+Honten+Uji"
    }
]

template = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{name_en} - Japan Trip 2026</title>
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&family=Zen+Maru+Gothic:wght@500;700;900&family=Noto+Sans+SC:wght@400;500;700&display=swap" rel="stylesheet">
    
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <!-- Custom Styles -->
    <link rel="stylesheet" href="../styles.css">
</head>
<body class="text-slate-700 location-{location}" id="main-body">

    <!-- Sakura Animation -->
    <div id="sakura-container" class="sakura-container"></div>

    <!-- Navigation -->
    <nav class="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-pink-200 no-print transition-all duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
                <div class="flex items-center">
                    <a href="../homepage.html" class="flex items-center">
                        <span class="text-pink-500 text-2xl mr-2">🌸</span>
                        <span class="font-header text-xl font-bold text-slate-800 tracking-tight">
                            <span class="lang-en">Japan Trip</span><span class="lang-zh">日本之旅</span>
                        </span>
                    </a>
                </div>
                <div class="hidden md:flex space-x-1 items-center">
                    <a href="../food.html" class="nav-link">
                        <span class="lang-en">← Back to Food</span><span class="lang-zh">← 返回美食</span>
                    </a>
                    <button onclick="toggleLanguage()" class="ml-4 bg-slate-100 hover:bg-slate-200 text-slate-600 px-3 py-1 rounded-full border border-slate-300 font-bold text-xs transition">
                        🌐 EN / 中
                    </button>
                </div>
                <div class="flex items-center md:hidden">
                    <button onclick="toggleLanguage()" class="mr-3 bg-slate-100 text-slate-600 px-2 py-1 rounded border border-slate-300 text-xs">
                        🌐
                    </button>
                    <a href="../food.html" class="text-slate-600 hover:text-pink-600 p-2">
                        <i class="fa-solid fa-arrow-left text-xl"></i>
                    </a>
                </div>
            </div>
        </div>
    </nav>

    <!-- Back Button -->
    <a href="../food.html" class="back-button no-print" aria-label="Back to Food">
        <i class="fa-solid fa-arrow-left"></i>
    </a>

    <main class="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-12 pb-20 md:pb-24">
        <!-- Image -->
        <div class="mb-8 relative">
            <div class="relative rounded-2xl overflow-hidden shadow-xl h-64 sm:h-80 md:h-96">
                <img src="https://images.unsplash.com/photo-1574781330855-d0db8cc4c2a8?auto=format&fit=crop&w=1200&q=80" alt="{name_en}" class="w-full h-full object-cover">
            </div>
        </div>

        <!-- Content -->
        <article class="animate-fade-in">
            <div class="mb-6">
                <h1 class="font-header text-3xl sm:text-4xl font-black text-slate-800 mb-3">
                    <span class="lang-en">{name_en}</span><span class="lang-zh">{name_zh}</span>
                </h1>
                <div class="flex flex-wrap items-center gap-3 text-sm text-slate-600">
                    <span class="flex items-center"><i class="fa-solid fa-location-dot mr-2" style="color: var(--location-primary, #4f46e5);"></i><span class="lang-en">{location_name_en}</span><span class="lang-zh">{location_name_zh}</span></span>
                    <span class="flex items-center"><i class="fa-solid fa-yen-sign mr-2 text-emerald-500"></i><span class="lang-en">{price}</span><span class="lang-zh">{price}</span></span>
                    <span class="flex items-center"><i class="fa-solid fa-clock mr-2 text-blue-500"></i><span class="lang-en">{hours}</span><span class="lang-zh">{hours}</span></span>
                </div>
            </div>

            <div class="glass-card location-{location} rounded-2xl p-6 mb-8">
                <h2 class="font-header text-2xl font-bold location-heading-{location} mb-4 flex items-center">
                    <i class="fa-solid fa-info-circle mr-2"></i>
                    <span class="lang-en">About</span><span class="lang-zh">关于</span>
                </h2>
                <p class="text-slate-700 leading-relaxed mb-4">
                    <span class="lang-en">{about_en}</span>
                    <span class="lang-zh">{about_zh}</span>
                </p>
            </div>

            <div class="glass-card location-{location} rounded-2xl p-6 mb-8">
                <h2 class="font-header text-2xl font-bold location-heading-{location} mb-4 flex items-center">
                    <i class="fa-solid fa-star mr-2"></i>
                    <span class="lang-en">Highlights</span><span class="lang-zh">亮点</span>
                </h2>
                <ul class="space-y-3 text-slate-700">
{highlights_html}
                </ul>
            </div>

            <div class="glass-card location-{location} rounded-2xl p-6 mb-8">
                <h2 class="font-header text-2xl font-bold location-heading-{location} mb-4 flex items-center">
                    <i class="fa-solid fa-lightbulb mr-2"></i>
                    <span class="lang-en">Tips</span><span class="lang-zh">提示</span>
                </h2>
                <ul class="space-y-3 text-slate-700">
{tips_html}
                </ul>
            </div>

            <div class="glass-card location-{location} rounded-2xl p-6">
                <h2 class="font-header text-2xl font-bold location-heading-{location} mb-4 flex items-center">
                    <i class="fa-solid fa-map-location-dot mr-2"></i>
                    <span class="lang-en">Location & Access</span><span class="lang-zh">位置与交通</span>
                </h2>
                <p class="text-slate-700 leading-relaxed mb-4">
                    <span class="lang-en"><strong>Address:</strong> {address}</span>
                    <span class="lang-zh"><strong>地址:</strong> {address}</span>
                </p>
                <p class="text-slate-700 leading-relaxed mb-4">
                    <span class="lang-en"><strong>Nearest Station:</strong> {station}</span>
                    <span class="lang-zh"><strong>最近车站:</strong> {station}</span>
                </p>
                <p class="text-slate-700 leading-relaxed mb-4">
                    <span class="lang-en"><strong>Access:</strong> {access}</span>
                    <span class="lang-zh"><strong>交通:</strong> {access}</span>
                </p>
                <a href="{map_url}" target="_blank" class="btn-primary inline-flex items-center">
                    <i class="fa-solid fa-map-location-dot mr-2"></i>
                    <span class="lang-en">Open in Google Maps</span><span class="lang-zh">在Google地图中打开</span>
                </a>
            </div>
        </article>
    </main>

    <!-- Scripts -->
    <script src="../script.js"></script>
</body>
</html>"""

for restaurant in restaurants:
    # Generate highlights HTML
    highlights_html = ""
    for highlight_en, highlight_zh in restaurant["highlights"]:
        highlights_html += f"""                    <li class="flex items-start">
                        <i class="fa-solid fa-check-circle text-pink-500 mr-3 mt-1"></i>
                        <span><span class="lang-en">{highlight_en}</span><span class="lang-zh">{highlight_zh}</span></span>
                    </li>
"""
    
    # Generate tips HTML
    tips_html = ""
    for tip_en, tip_zh in restaurant["tips"]:
        tips_html += f"""                    <li class="flex items-start">
                        <i class="fa-solid fa-circle-info text-blue-500 mr-3 mt-1"></i>
                        <span><span class="lang-en">{tip_en}</span><span class="lang-zh">{tip_zh}</span></span>
                    </li>
"""
    
    # Fill template
    content = template.format(
        name_en=restaurant["name_en"],
        name_zh=restaurant["name_zh"],
        location=restaurant["location"],
        location_name_en=restaurant["location_name_en"],
        location_name_zh=restaurant["location_name_zh"],
        price=restaurant["price"],
        hours=restaurant["hours"],
        about_en=restaurant["about_en"],
        about_zh=restaurant["about_zh"],
        highlights_html=highlights_html,
        tips_html=tips_html,
        address=restaurant["address"],
        station=restaurant["station"],
        access=restaurant["access"],
        map_url=restaurant["map_url"]
    )
    
    # Write file
    with open(f"restaurants/{restaurant['filename']}", "w", encoding="utf-8") as f:
        f.write(content)
    
    print(f"Generated: {restaurant['filename']}")

print(f"\nGenerated {len(restaurants)} restaurant pages!")
