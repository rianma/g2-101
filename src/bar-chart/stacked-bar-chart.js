import { Chart } from '@antv/g2'

// c2: 堆积柱状图
const c2data = [
  { genre: 'Sports', country: 'CN', sold: 120 },
  { genre: 'Sports', country: 'US', sold: 1000 },
  { genre: 'Sports', country: 'JP', sold: 30 },

  { genre: 'Strategy', country: 'CN', sold: 130 },
  { genre: 'Strategy', country: 'US', sold: 463 },
  { genre: 'Strategy', country: 'JP', sold: 2200 },

  { genre: 'Action', country: 'CN', sold: 150 },
  { genre: 'Action', country: 'US', sold: 800 },
  { genre: 'Action', country: 'JP', sold: 37 },

  { genre: 'Shooter', country: 'CN', sold: 178 },
  { genre: 'Shooter', country: 'US', sold: 600 },
  { genre: 'Shooter', country: 'JP', sold: 30 },

  { genre: 'Table', country: 'CN', sold: 334 },
  { genre: 'Table', country: 'US', sold: 2394 },
  { genre: 'Table', country: 'JP', sold: 123 },

  { genre: 'Adventure', country: 'CN', sold: 656 },
  { genre: 'Adventure', country: 'US', sold: 432 },
  { genre: 'Adventure', country: 'JP', sold: 1904 },

  { genre: 'Role Playing', country: 'CN', sold: 656 },
  { genre: 'Role Playing', country: 'US', sold: 432 },
  { genre: 'Role Playing', country: 'JP', sold: 1904 },

  { genre: 'Race', country: 'CN', sold: 234 },
  { genre: 'Race', country: 'US', sold: 220 },
  { genre: 'Race', country: 'JP', sold: 3000 },
]

const chart2 = new Chart({
  container: 'c2',
  forceFit: true,
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
chart2.scale('sold', { nice: true })

// 设置为直方图格式，并且以 genre 为x轴
chart2.interval()
  .position('genre*sold')
  .color('country')
  .adjust('stack')

/**
 * 自定义 tooltip，对于复杂场景，需要变更数据的，就用监听事件的方式，获取 items 再修改
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

chart2.render()
