/**
 * @type {import('@antv/g2')}
 */
const G2 = window.G2

const RAW_DATA = [
    { genre: 'Sports', sold: 275 },
    { genre: 'Strategy', sold: 125 },
    { genre: 'Action', sold: 120 },
    { genre: 'Shooter', sold: 350 },
    { genre: 'Other', sold: 150 }
  ]
  
  const CHANGED_DATA = [
    { genre: 'Sports', sold: 2750 },
    { genre: 'Strategy', sold: 1205 },
    { genre: 'Action', sold: 1200 },
    { genre: 'Shooter', sold: 3500 },
    { genre: 'Other', sold: 1500 }
  ]

const app = new Vue({
    el: '#c2',
    data: {
        c2data: RAW_DATA,
        chart: null
    },
    watch: {
        c2data (val, oldVal) {
            console.log(val, '\n', oldVal)
            if (this.chart) {
                this.chart.changeData(val)
                this.$nextTick(() => {
                    this.drawAvgGuide(this.chart, val)
                    this.chart.render()
                })
            }
        }
    },
    mounted: function () {
        this.initChart()
    },
    methods: {
        updateC2Data: function () {
            this.c2data = CHANGED_DATA
        },
        drawAvgGuide: function (chart, dataSource) {
            // 画出平均线
            const sum = dataSource.reduce((sum, item) => sum + item.sold, 0)
            const avg = sum / 5

            chart.guide().clear()

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
            })
        },
        initChart: function () {
            const chart = new G2.Chart({
                container: 'c2-chart',
                width: 600,
                height:300
            })
            
            this.drawAvgGuide(chart, this.c2data)
            
            chart.source(this.c2data)
            
            chart.line().position('genre*sold')
            
            chart.render()

            this.chart = chart
        }
    }
})
