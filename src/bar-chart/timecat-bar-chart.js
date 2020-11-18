import { Chart } from '@antv/g2'

const c3data = [
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
  { genre: 'Other', country: 'CN', sold: 234 },
  { genre: 'Other', country: 'US', sold: 220 },
  { genre: 'Other', country: 'JP', sold: 3000 },
]

const chart3 = new Chart({
  container: 'c3',
  width: 600,
  height: 300
})

// see: https://github.com/antvis/g2/issues/702
chart3.source(c3data, {
    ptime: { type: 'timeCat' }
})
