#!/usr/bin/env python3
import re
import os

# Day configurations
days_config = [
    {"num": 1, "title_en": "Arrival", "title_zh": "抵达", "date": "Wed, Mar 18", "color": "indigo", "location": "tokyo"},
    {"num": 2, "title_en": "Tokyo City Tour", "title_zh": "东京城市游", "date": "Thu, Mar 19", "color": "indigo", "location": "tokyo"},
    {"num": 3, "title_en": "Graduation Day", "title_zh": "毕业典礼日", "date": "Fri, Mar 20 (Holiday)", "color": "indigo", "location": "tokyo"},
    {"num": 4, "title_en": "Move to Osaka", "title_zh": "前往大阪", "date": "Sat, Mar 21", "color": "orange", "location": "osaka"},
    {"num": 5, "title_en": "Kobe Day Trip", "title_zh": "神户一日游", "date": "Sun, Mar 22", "color": "red", "location": "kobe"},
    {"num": 6, "title_en": "USJ", "title_zh": "环球影城", "date": "Mon, Mar 23", "color": "sky", "location": "osaka"},
    {"num": 7, "title_en": "Osaka City Highlights", "title_zh": "大阪城市精华", "date": "Tue, Mar 24", "color": "orange", "location": "osaka"},
    {"num": 8, "title_en": "Kyoto (Efficient Route)", "title_zh": "京都 (高效路线)", "date": "Wed, Mar 25", "color": "emerald", "location": "kyoto"},
    {"num": 9, "title_en": "Uji & Nara (Healing Route)", "title_zh": "宇治 & 奈良 (治愈路线)", "date": "Thu, Mar 26", "color": "teal", "location": "nara"},
    {"num": 10, "title_en": "Last Shopping", "title_zh": "最后购物", "date": "Fri, Mar 27", "color": "orange", "location": "osaka"},
    {"num": 11, "title_en": "Fly Home", "title_zh": "回家", "date": "Sat, Mar 28", "color": "orange", "location": "osaka"},
]

color_map = {
    "indigo": {"bg": "indigo-500", "text": "indigo-700", "border": "indigo-500", "dot": "#4f46e5"},
    "orange": {"bg": "orange-500", "text": "orange-600", "border": "orange-500", "dot": "#f97316"},
    "red": {"bg": "red-500", "text": "red-600", "border": "red-500", "dot": "#dc2626"},
    "sky": {"bg": "sky-500", "text": "sky-600", "border": "sky-500", "dot": "#0ea5e9"},
    "emerald": {"bg": "emerald-500", "text": "emerald-700", "border": "emerald-600", "dot": "#059669"},
    "teal": {"bg": "teal-500", "text": "teal-700", "border": "teal-600", "dot": "#0d9488"},
}

# Read schedule.html
with open('schedule.html', 'r', encoding='utf-8') as f:
    schedule_content = f.read()

# Extract day details
for day in days_config:
    day_num = day["num"]
    pattern = rf'<div id="day{day_num}-details".*?>(.*?)</div>\s*</div>\s*<!-- Day {day_num + 1}'
    match = re.search(pattern, schedule_content, re.DOTALL)
    
    if not match and day_num == 11:
        # Last day
        pattern = rf'<div id="day{day_num}-details".*?>(.*?)</div>\s*</div>\s*</div>\s*</div>'
        match = re.search(pattern, schedule_content, re.DOTALL)
    
    if match:
        day_content = match.group(1)
        # Fix paths in links
        day_content = day_content.replace('attractions/', '../attractions/')
        
        colors = color_map[day["color"]]
        
        # Generate HTML
        html = f'''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Day {day_num}: {day["title_en"]} - Japan Trip 2026</title>
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&family=Zen+Maru+Gothic:wght@500;700;900&family=Noto+Sans+SC:wght@400;500;700&display=swap" rel="stylesheet">
    
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <!-- Custom Styles -->
    <link rel="stylesheet" href="../styles.css">
</head>
<body class="text-slate-700 location-{day["location"]}" id="main-body">

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
                    <a href="../schedule.html" class="nav-link">
                        <span class="lang-en">← Back to Itinerary</span><span class="lang-zh">← 返回行程</span>
                    </a>
                    <button onclick="toggleLanguage()" class="ml-4 bg-slate-100 hover:bg-slate-200 text-slate-600 px-3 py-1 rounded-full border border-slate-300 font-bold text-xs transition">
                        🌐 EN / 中
                    </button>
                </div>
                <div class="flex items-center md:hidden">
                    <button onclick="toggleLanguage()" class="mr-3 bg-slate-100 text-slate-600 px-2 py-1 rounded border border-slate-300 text-xs">
                        🌐
                    </button>
                    <a href="../schedule.html" class="text-slate-600 hover:text-pink-600 p-2">
                        <i class="fa-solid fa-arrow-left text-xl"></i>
                    </a>
                </div>
            </div>
        </div>
    </nav>

    <!-- Back Button -->
    <a href="../schedule.html" class="back-button no-print" aria-label="Back to Itinerary">
        <i class="fa-solid fa-arrow-left"></i>
    </a>

    <main class="max-w-5xl mx-auto px-4 sm:px-6 py-8 md:py-12 space-y-8 pb-20 md:pb-24">
        <!-- Day Header -->
        <section class="text-center mb-8">
            <div class="inline-block bg-{colors["bg"]} text-white px-6 py-2 rounded-full mb-4">
                <span class="font-bold text-sm"><span class="lang-en">Day {day_num}</span><span class="lang-zh">第{day_num}天</span></span>
            </div>
            <h1 class="text-4xl md:text-5xl font-header font-bold location-heading-{day["location"]} mb-2">
                <span class="lang-en">{day["title_en"]}</span><span class="lang-zh">{day["title_zh"]}</span>
            </h1>
            <p class="text-pink-500 font-bold text-lg uppercase tracking-widest">{day["date"]}, 2026</p>
        </section>

        <!-- Detailed Schedule -->
        <section class="glass-card p-6 md:p-8">
            <div class="relative pl-2 md:pl-0 pb-8">
                <div class="timeline-line"></div>
                
                <div class="relative pl-8 sm:pl-10 md:pl-16 mb-8 timeline-item">
                    <div class="timeline-dot" style="border-color: {colors["dot"]};"></div>
                    
                    <div class="schedule-card border-l-{colors["border"]}">
{day_content}
                    </div>
                </div>
            </div>
        </section>

        <!-- Navigation to Other Days -->
        <section class="mt-8">
            <div class="flex justify-between items-center">
                {"<a href=\"day" + str(day_num - 1) + ".html\" class=\"btn-primary\"><span class=\"lang-en\">← Previous: Day " + str(day_num - 1) + "</span><span class=\"lang-zh\">← 上一天: 第" + str(day_num - 1) + "天</span></a>" if day_num > 1 else "<div></div>"}
                {"<a href=\"day" + str(day_num + 1) + ".html\" class=\"btn-primary\"><span class=\"lang-en\">Next: Day " + str(day_num + 1) + " →</span><span class=\"lang-zh\">下一天: 第" + str(day_num + 1) + "天 →</span></a>" if day_num < 11 else "<div></div>"}
            </div>
        </section>
    </main>

    <!-- Scripts -->
    <script src="../script.js"></script>
</body>
</html>'''
        
        # Write file
        os.makedirs('schedule', exist_ok=True)
        with open(f'schedule/day{day_num}.html', 'w', encoding='utf-8') as f:
            f.write(html)
        
        print(f'Created schedule/day{day_num}.html')
    else:
        print(f'Warning: Could not extract content for Day {day_num}')

print('Done!')
