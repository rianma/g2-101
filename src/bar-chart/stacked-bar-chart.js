import { Chart } from '@antv/g2'

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

const C_MAP = {
  CN: '中国',
  JP: '日本',
  US: '美国'
}

chart2.source(c2data.map(item => {
  return {
    ...item,
    country: C_MAP[item.country]
  }
}))

// 设置纵轴字段
chart2.scale('boxOffice', { nice: true })

// 设置为直方图格式，并且以 genre 为x轴
chart2.interval()
  .position('genre*boxOffice')
  .color('country')
  .adjust('stack')

/**
 * 对于复杂场景，需要变更数据的，就用监听事件的方式，获取 items 再修改
 * @see https://g2-v3.antv.vision/zh/docs/manual/tutorial/tooltip#%E6%A0%BC%E5%BC%8F%E5%8C%96-tooltip-%E7%9A%84%E6%98%BE%E7%A4%BA%E5%86%85%E5%AE%B9
 **/ 
chart2.on('tooltip:change', (event) => {
  const { items } = event
  const sum = items.reduce((s, item) => s + (item.value * 1), 0)
  const totalItem = {
    title: '总数',
    name: '总数',
    value: sum,
    index: items.length
  }
  items.push(totalItem)
})

// 使用 .tooltip() API 以显示 total 总数的值

chart2.render()
