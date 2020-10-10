import G2, { Chart } from '@antv/g2'

// c1: 柱状图
const data = [
  { genre: 'Sports', sold: 275 },
  { genre: 'Strategy', sold: 125 },
  { genre: 'Action', sold: 120 },
  { genre: 'Shooter', sold: 350 },
  { genre: 'Other', sold: 150 },
]

const chart1 = new Chart({
  container: 'c1',
  width: 600,
  height:300
})

chart1.data(data)

chart1.interval().position('genre*sold')

chart1.render()

// c2: 堆积柱状图
const c2data = [
  { genre: 'Sports', country: 'CN', boxOffice: 120 },
  { genre: 'Sports', country: 'US', boxOffice: 1000 },
  { genre: 'Sports', country: 'JP', boxOffice: 30 },
  { genre: 'Strategy', country: 'CN', boxOffice: 130 },
  { genre: 'Strategy', country: 'US', boxOffice: 463 },
  { genre: 'Strategy', country: 'JP', boxOffice: 2200 },
  { genre: 'Action', country: 'CN', boxOffice: 150 },
  { genre: 'Action', country: 'US', boxOffice: 800 },
  { genre: 'Action', country: 'JP', boxOffice: 37 },
  { genre: 'Shooter', country: 'CN', boxOffice: 178 },
  { genre: 'Shooter', country: 'US', boxOffice: 600 },
  { genre: 'Shooter', country: 'JP', boxOffice: 30 },
  { genre: 'Other', country: 'CN', boxOffice: 234 },
  { genre: 'Other', country: 'US', boxOffice: 220 },
  { genre: 'Other', country: 'JP', boxOffice: 3000 },
]

const chart2 = new Chart({
  container: 'c2',
  width: 600,
  height: 300
})

chart2.data(c2data)

// 设置纵轴字段
chart2.scale('boxOffice', { nice: true })

// 设置为直方图格式，并且以 genre 为x轴
chart2.interval()
  .position('genre*boxOffice')
  .color('country')
  .adjust('stack')

// 使用 .tooltip() API 以显示 total 总数的值

chart2.render()
