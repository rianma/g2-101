/**
 * @type {import('@antv/g2')}
 */
const G2 = window.G2

const chart = new G2.Chart({
  container: 'c1',
  width: 600,
  height:300
})

const c1data = [
  { genre: 'Sports', sold: 275 },
  { genre: 'Strategy', sold: 125 },
  { genre: 'Action', sold: 120 },
  { genre: 'Shooter', sold: 350 },
  { genre: 'Other', sold: 150 }
]

const sum = c1data.reduce((sum, item) => sum + item.sold, 0)

const avg = sum / 5

chart.source(c1data)

chart.line().position('genre*sold')

chart.guide().line({
  start: [ 'min', avg ],
  end: [ 'max', avg ],
  lineStyle: {
    stroke: '#595959',
    lineWidth: 1,
    lineDash: [ 3, 3 ]
  },
  text: {
    position: 'start',
    style: {
      fill: '#8c8c8c',
      fontSize: 15,
      fontWeight: 'normal'
    },
    content: `平均 ${avg}`,
    offsetY: -10
  }
});

chart.render()
