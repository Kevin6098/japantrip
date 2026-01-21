import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const Budget = () => {
  const { t } = useLanguage()

  const dailyBudget = [
    {
      day: 1,
      focus: { en: 'Arrival', zh: '抵达', ja: '到着' },
      breakdown: { en: 'Airport Train (~¥700), Snack', zh: '机场电车 (~¥700), 零食', ja: '空港アクセス（電車・約¥700）、軽食' },
      cost: 2000,
      color: 'slate',
    },
    {
      day: 2,
      focus: { en: 'Tokyo Foodie', zh: '东京美食', ja: '東京グルメ' },
      breakdown: {
        en: 'Metro (~¥1000), Pain Maison (~¥200), Ginza Kanimitsu Lunch (~¥7000), Nakamura Tokichi (~¥1500), Monja Dinner (~¥2500), Street Food',
        zh: '地铁 (~¥1000), Pain Maison (~¥200), 银座蟹みつ午餐 (~¥7000), 中村藤吉 (~¥1500), 文字烧晚餐 (~¥2500), 街头美食',
        ja: '地下鉄（約¥1000）、パン・メゾン（約¥200）、銀座かにみつ（昼・約¥7000）、中村藤吉（約¥1500）、もんじゃ（夜・約¥2500）、食べ歩き',
      },
      cost: 12000,
      color: 'indigo',
    },
    {
      day: 3,
      focus: { en: 'Graduation & High Dinner', zh: '毕业典礼 & 高级晚餐', ja: '卒業式＆ごちそうディナー' },
      breakdown: {
        en: 'Train to Saitama (~¥1200 round), Ichiran Lunch (~¥1200), Tsukada Shabu Dinner (~¥7000)',
        zh: '往返埼玉电车 (~¥1200), 一兰午餐 (~¥1200), 塚田しゃぶしゃぶ晚餐 (~¥7000)',
        ja: '埼玉 往復（電車・約¥1200）、一蘭（昼・約¥1200）、塚田しゃぶしゃぶ（夜・約¥7000）',
      },
      cost: 9400,
      color: 'purple',
      highlight: true,
    },
    {
      day: 4,
      focus: { en: 'Shinkansen to Osaka', zh: '新干线往大阪', ja: '新幹線で大阪へ' },
      breakdown: {
        en: 'Afuri Lunch (~¥1200), Shinkansen (~¥13870), Dotonbori Dinner (~¥3000)',
        zh: '阿夫利午餐 (~¥1200), 新干线 (~¥13870), 道顿堀晚餐 (~¥3000)',
        ja: 'AFURI（昼・約¥1200）、新幹線（約¥13,870）、道頓堀ディナー（約¥3000）',
      },
      cost: 18070,
      color: 'orange',
      highlight: true,
    },
    {
      day: 5,
      focus: { en: 'Kobe Trip (Beef+Cruise)', zh: '神户游 (和牛+游船)', ja: '神戸（神戸牛＋クルーズ）' },
      breakdown: {
        en: 'Trains (~¥1500), Harborland Free, Kobe Steak Nick (~¥6500), Rokko Cable (~¥1200), Rokkosan Pasture (~¥500), Gashoken Dinner (~¥1500), Kobe Port Tower (~¥700)',
        zh: '电车 (~¥1500), 港湾乐园免费, Kobe Steak Nick (~¥6500), 六甲山缆车 (~¥1200), 六甲山牧场 (~¥500), 賀正軒晚餐 (~¥1500), 神户塔 (~¥700)',
        ja: '電車（約¥1500）、ハーバーランド（無料）、Kobe Steak Nick（約¥6500）、六甲ケーブル（約¥1200）、六甲山牧場（約¥500）、賀正軒（夜・約¥1500）、神戸ポートタワー（約¥700）',
      },
      cost: 12400,
      color: 'red',
    },
    {
      day: 6,
      focus: { en: 'USJ (VIP Express)', zh: '环球影城 (VIP快速)', ja: 'USJ（VIPエクスプレス）' },
      breakdown: {
        en: 'Trains (~¥800), USJ Ticket (~¥9500), Express Pass (~¥18000+), Food (~¥3000)',
        zh: '电车 (~¥800), USJ门票 (~¥9500), 快速通行证 (~¥18000+), 餐饮 (~¥3000)',
        ja: '電車（約¥800）、USJチケット（約¥9500）、エクスプレス・パス（約¥18,000〜）、食事（約¥3000）',
      },
      cost: 31000,
      color: 'sky',
      highlight: true,
    },
    {
      day: 7,
      focus: { en: 'Osaka City Highlights', zh: '大阪城市精华', ja: '大阪市内ハイライト' },
      breakdown: {
        en: 'Metro (~¥800), Umeda Sky Building (~¥1500), Osaka Aquarium (~¥2700), Shinsaibashi Free, Dotonbori Free, Dotonbori Dinner (~¥3000)',
        zh: '地铁 (~¥800), 梅田蓝天大厦 (~¥1500), 大阪海游馆 (~¥2700), 心斋桥免费, 道顿堀免费, 道顿堀晚餐 (~¥3000)',
        ja: '地下鉄（約¥800）、梅田スカイビル（約¥1500）、大阪海遊館（約¥2700）、心斎橋（無料）、道頓堀（無料）、道頓堀ディナー（約¥3000）',
      },
      cost: 9000,
      color: 'orange',
    },
    {
      day: 8,
      focus: { en: 'Kyoto Trip', zh: '京都游', ja: '京都' },
      breakdown: {
        en: 'Keihan Train (~¥900), Fushimi Inari Free, Kiyomizu-dera (~¥400), Ninenzaka Lunch (~¥2000), Yasaka Free, Gion, Kamogawa Free',
        zh: '京阪电车 (~¥900), 伏见稻荷免费, 清水寺 (~¥400), 二三年坂午餐 (~¥2000), 八坂神社免费, 祇园, 鸭川免费',
        ja: '京阪（約¥900）、伏見稲荷（無料）、清水寺（約¥400）、二年坂ランチ（約¥2000）、八坂神社（無料）、祇園、鴨川（無料）',
      },
      cost: 3300,
      color: 'green',
    },
    {
      day: 9,
      focus: { en: 'Uji & Nara', zh: '宇治 & 奈良', ja: '宇治＆奈良' },
      breakdown: {
        en: 'Keihan/JR Train (~¥1400), Nakamura Tokichi Uji (~¥2500), Ujigami Free, Nara Park Free, Todaiji (~¥600), Kasuga Free, Mt Wakakusa (~¥150)',
        zh: '京阪/JR电车 (~¥1400), 中村藤吉宇治 (~¥2500), 宇治上神社免费, 奈良公园免费, 东大寺 (~¥600), 春日大社免费, 若草山 (~¥150)',
        ja: '京阪/JR（約¥1400）、中村藤吉（宇治・約¥2500）、宇治上神社（無料）、奈良公園（無料）、東大寺（約¥600）、春日大社（無料）、若草山（約¥150）',
      },
      cost: 5050,
      color: 'teal',
    },
    {
      day: 10,
      focus: { en: 'Osaka Highlights & Dinner', zh: '大阪精华 & 晚餐', ja: '大阪ハイライト＆ディナー' },
      breakdown: {
        en: 'Trains/Bus (~¥2000), Katsuoji (~¥500), Osaka Castle (~¥600), Kuromon Market Lunch (~¥2000), Namba Yasaka Free, Harukas Abeno (~¥1500), Tsurikichi Shinsekai Dinner (~¥3500)',
        zh: '电车/巴士 (~¥2000), 勝尾寺 (~¥500), 大阪城 (~¥600), 黑门市场午餐 (~¥2000), 难波八阪免费, 阿倍野HARUKAS (~¥1500), つり吉新世界晚餐 (~¥3500)',
        ja: '電車/バス（約¥2000）、勝尾寺（約¥500）、大阪城（約¥600）、黒門市場ランチ（約¥2000）、難波八阪（無料）、あべのハルカス（約¥1500）、つり吉（新世界・夜・約¥3500）',
      },
      cost: 10100,
      color: 'orange',
    },
    {
      day: 11,
      focus: { en: 'Fly Home', zh: '返程', ja: '帰国' },
      breakdown: { en: 'Breakfast', zh: '早餐', ja: '朝食' },
      cost: 1500,
      color: 'slate',
    },
  ]

  const totalCost = dailyBudget.reduce((sum, day) => sum + day.cost, 0)
  const totalRM = Math.round(totalCost * 0.032)

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 max-w-5xl mx-auto pb-24">
      {/* Header */}
      <div className="mb-8 animate-fade-in">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6">
          <div className="p-2 bg-emerald-100 rounded-xl shadow-inner">
            <i className="fa-solid fa-wallet text-emerald-600 text-xl sm:text-2xl"></i>
          </div>
          <div className="flex-1">
            <h1 className="font-header text-xl sm:text-2xl font-bold text-slate-800 mb-1">
              {t('Daily Pocket Money', '每日零花钱预算', '1日あたりの予算')}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              💰 {t('Plan smart, enjoy more!', '精打细算，享受更多！', '賢く計画して、もっと楽しもう！')}
            </p>
          </div>
        </div>
      </div>

      {/* Budget Table */}
      <div className="glass-card border-l-emerald-500 mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
        <p className="text-sm text-slate-500 mb-4 italic">
          *{t(
            'Estimates per person. Excludes flights, hotels & personal shopping.',
            '每人估算。不含机票、酒店及个人购物。',
            '1人あたりの目安。航空券・ホテル・個人の買い物は除きます。'
          )}
        </p>

        <div className="overflow-x-auto rounded-lg border border-slate-200 mb-4">
          <table className="w-full text-xs sm:text-sm text-left min-w-[600px]">
            <thead className="bg-slate-50 text-slate-500 font-semibold">
              <tr>
                <th className="p-2 w-16">{t('Day', '日期')}</th>
                <th className="p-2">{t('Focus & Breakdown', '重点与明细', '内容')}</th>
                <th className="p-2 text-right">{t('Est. Cost', '预估花费', '目安')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {dailyBudget.map((day) => {
                const bgColor = day.highlight
                  ? day.color === 'purple'
                    ? 'bg-purple-50 hover:bg-purple-100'
                    : day.color === 'orange'
                    ? 'bg-orange-50 hover:bg-orange-100'
                    : 'bg-sky-50 hover:bg-sky-100'
                  : 'hover:bg-slate-50'
                const textColor = day.highlight
                  ? `text-${day.color}-700`
                  : day.color === 'indigo' || day.color === 'teal' || day.color === 'green' || day.color === 'red'
                  ? `text-${day.color}-700`
                  : 'text-slate-700'

                return (
                  <tr key={day.day} className={`${bgColor} transition-colors`}>
                    <td className={`p-2 font-mono text-xs ${day.highlight ? 'font-bold' : ''} ${textColor}`}>
                      {t('Day', '日期', '日')} {day.day}
                    </td>
                    <td className={`p-2 ${day.highlight ? 'font-bold' : ''} ${textColor}`}>
                      <div className="font-bold">{t(day.focus.en, day.focus.zh, day.focus.ja)}</div>
                      <div className={`text-xs ${day.highlight ? day.color === 'purple' ? 'text-purple-600' : day.color === 'orange' ? 'text-orange-600' : 'text-emerald-600' : 'text-slate-500'} font-normal`}>
                        {t(day.breakdown.en, day.breakdown.zh, day.breakdown.ja)}
                      </div>
                    </td>
                    <td className={`p-2 text-right font-mono ${day.highlight ? 'font-bold' : ''} ${textColor}`}>
                      <div>¥{day.cost.toLocaleString()}</div>
                      <div className={`text-xs ${day.highlight ? day.color === 'purple' ? 'text-purple-600' : day.color === 'orange' ? 'text-orange-600' : 'text-emerald-600' : 'text-emerald-600'}`}>
                        RM {Math.round(day.cost * 0.032).toLocaleString()}
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        {/* Total Summary */}
        <div className="flex justify-between items-center pt-3 bg-emerald-50 p-4 rounded-xl border border-emerald-100 animate-pulse-subtle">
          <div>
            <span className="block text-sm text-emerald-800 font-bold">
              {t('Total Prep', '准备总额', '合計')}
            </span>
            <span className="text-xs text-emerald-600">
              ({t('Est. Rate: 1000 JPY ≈ 32 MYR', '汇率估算: 1000日元 ≈ 32马币', 'レート目安：1000円 ≈ 32リンギット')})
            </span>
          </div>
          <div className="text-right">
            <div className="font-bold text-emerald-700 text-2xl font-mono">~¥{totalCost.toLocaleString()}</div>
            <div className="font-bold text-emerald-600 text-lg font-mono">~RM {totalRM.toLocaleString()}</div>
          </div>
        </div>
      </div>

      {/* (Removed) Transportation Budget Link */}
    </div>
  )
}

export default Budget
