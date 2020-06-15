<template>
  <canvas ref="canvas"></canvas>
</template>
<script>
  import { Line } from 'vue-chartjs'

  export default {
    extends: Line,
    props: {
      values: {
        type: [Array, Object],
        default: null
      },
    },
    data() {
      return {
        gradients: [
          {offset: 1, color: '#f2f5f8'},
          {offset: 0, color: 'rgba(242, 245, 248, 0)'},
        ],
        chartData: {
          labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
          datasets: [
            {
              pointHitRadius: 15,
              pointBorderColor: 'transparent',
              pointBackgroundColor: 'transparent',
              borderWidth: 2,
              pointBorderWidth: 1,
              fill: true,
              data: [],
            },
            {
              pointHitRadius: 15,
              pointBorderColor: 'transparent',
              pointBackgroundColor: 'transparent',
              borderColor: '#faac15',
              borderWidth: 2,
              pointHoverBorderColor: '#faac15',
              pointHoverBackgroundColor: '#fff',
              fill: false,
              data: [],
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false,
          },
          scales: {
            yAxes: [{
              gridLines: false,
            }],
            xAxes: [{
              gridLines: false,
            }]
          },
          tooltips: {
            mode: 'index',
            fontSize: 300,
            xPadding: 20,
            yPadding: 10
          },
        }
      }
    },
    mounted() {
      this.onSetup()
    },
    computed: {
      peakHeight() {
        let dataValues = this.chartData.datasets[0].data;
        return Math.max(...dataValues);
      }
    },
    methods: {
      onSetup() {
       return this.createGradient(this.peakHeight)
          .then(canvas => {
            this.addGradientSettings(canvas);
            return canvas
          })
          .then(gradient => {
            this.setGradientColor(gradient);
            this.concatData();
          })
          .then(() => this.renderChart(this.chartData, this.options))
          .catch(e => console.log(e))
      },
      concatData() {
        this.chartData.datasets[0].data = this.values.previous;
        this.chartData.datasets[1].data = this.values.current;
      },
      createGradient(peakHeight = 300) {
        return new Promise(resolve => {
          let canvas = this.$refs.canvas;
          let ctx = canvas.getContext('2d');
          let gradient = ctx.createLinearGradient(0,500,0,0)
          resolve(gradient);
        })
      },
      addGradientSettings(canvas) {
        this.gradients.forEach(grad => {
          canvas.addColorStop(grad.offset, grad.color);
        })
        return canvas;
      },
      setGradientColor(gradient) {
        this.chartData.datasets[0].backgroundColor = gradient
      },
    }
  }
</script>

