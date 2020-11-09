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

chart1.source(data)

chart1.interval().position('genre*sold')

chart1.render()
