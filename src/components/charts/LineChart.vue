<template>
  <div>
    <canvas ref="canvas"></canvas>
  </div>
</template>
<script>
  import {Line} from 'vue-chartjs'
  export default {
    extends: Line,
    props: {
      apiData: Object,
    },
    data() {
      return {
        component: null,
        gradients: [
          {offset: 1, color: '#f2f5f8'},
          {offset: 0, color: 'rgba(242, 245, 248, 0)'},
        ],
        labelsLength: 0,
        chartLabels: [],
        chartData: {
          labels: this.chartLabels,
          datasets: [
            {
              pointHitRadius: 15,
              pointBorderColor: 'transparent',
              pointBackgroundColor: 'transparent',
              borderColor: '#faac15',
              borderWidth: 2,
              pointHoverBorderColor: '#faac15',
              pointHoverBackgroundColor: '#fff',
              fill: false,
              order: 1,
              data: this.apiData,
            },
            {
              pointHitRadius: 0,
              pointBorderColor: 'transparent',
              pointBackgroundColor: 'transparent',
              pointStyle: 'line',
              borderWidth: 2,
              borderColor: "#ebeff5",
              pointBorderWidth: 0,
              fill: true,
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
            enable: false,
            mode: 'nearest',
            position: 'nearest',
            custom: function(tooltipModel) {
              // Tooltip Element
              let tooltipEl = document.getElementById('chartjs-tooltip');

              // Create element on first render
              if (!tooltipEl) {
                tooltipEl = document.createElement('div');
                tooltipEl.id = 'chartjs-tooltip';
                tooltipEl.innerHTML = '<table></table>';
                document.body.appendChild(tooltipEl);
              }

              // Hide if no tooltip
              if (tooltipModel.opacity === 0) {
                tooltipEl.style.opacity = '0';
                return;
              }

              // Set caret Position
              tooltipEl.classList.remove('above', 'below', 'no-transform');
              if (tooltipModel.yAlign) {
                tooltipEl.classList.add(tooltipModel.yAlign);
              } else {
                tooltipEl.classList.add('no-transform');
              }

              function getBody(bodyItem) {
                return bodyItem.lines;
              }

              // Set Text
              if (tooltipModel.body) {
                let titleLines = tooltipModel.title || [];
                let bodyLines = tooltipModel.body.map(getBody);

                let innerHtml = '<thead>';

                titleLines.forEach(function(title) {
                  innerHtml += '<tr><th>' + title + '</th></tr>';
                });
                innerHtml += '</thead><tbody>';

                bodyLines.forEach(function(body, i) {
                  let colors = tooltipModel.labelColors[i];
                  let style = 'background:' + colors.backgroundColor;
                  style += '; border-color:' + colors.borderColor;
                  style += '; border-width: 2px';
                  let span = '<span style="' + style + '"></span>';
                  innerHtml += '<tr><td>' + span + body + '</td></tr>';
                });
                innerHtml += '</tbody>';

                let tableRoot = tooltipEl.querySelector('table');
                tableRoot.innerHTML = innerHtml;
              }

              // `this` will be the overall tooltip
              let position = this._chart.canvas.getBoundingClientRect();

              // Display, position, and set styles for font
              tooltipEl.style.opacity = '1';
              tooltipEl.style.position = 'absolute';
              tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
              tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
              tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
              tooltipEl.style.fontSize = tooltipModel.bodyFontSize + 'px';
              tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
              tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
              tooltipEl.style.pointerEvents = 'none';
            },
            bodyAlign: 'center',
            titleAlign: 'center',
            titleFontSize: 0,
            backgroundColor: '#fff',
            bodyFontColor: '#ffc107',
            //titleFontSize
            //titleFontStyle
            // titleMarginBottom: 20,
            //bodyFontFamily
            //bodyFontSize
            //bodyAlign
            //bodySpacing
            //footerMarginTop
            //xPadding
            //yPadding
            caretSize: 5
            //caretPadding
            //cornerRadius
            //caretSize
            //multiKeyBackground
            //rtl
            //textDirection

            /*       fontSize: 300,
                   xPadding: 20,
                   yPadding: 10*/
          },
        }
      }
    },
    async mounted() {
      this.setDataset();
      this.onSetup()
    },
    computed: {
      peakHeight() {
        let dataValues = this.chartData.datasets[1].data;
        return Math.max(...dataValues);
      },
    },
    methods: {

      setDataset() {
        const {
          current,
          previous,
          gain_loss
        } = this.apiData;
        let labelLength = this.maxLength(current, previous);
        this.chartData.datasets[0].data = current.map(item => item.total);
        this.chartData.datasets[1].data = previous.map(item => item.total);
        this.createLabels(labelLength);
      },
      maxLength(curr, prev) {
        return Math.max(curr.length, prev.length);
      },
      createLabels(amount) {
        let arr = [];
        for (amount; amount >= 0; amount--) {
          arr.unshift(amount--);
        }
        this.chartData.labels = [...arr];
        console.log(this.chartData.labels);

      },
      onSetup() {
        return this.createGradient(this.peakHeight)
          .then(canvas => {
            this.addGradientSettings(canvas);
            return canvas
          })
          .then(gradient => {
            this.setGradientColor(gradient);
          })
          .then(() => this.renderChart(this.chartData, this.options))
          .catch(e => console.log(e))
      },
      createGradient(peakHeight = 300) {
        return new Promise(resolve => {
          let canvas = this.$refs.canvas;
          let ctx = canvas.getContext('2d');
          let gradient = ctx.createLinearGradient(0, 500, 0, 0)
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
        this.chartData.datasets[1].backgroundColor = gradient
      },
    }
  }
</script>
<style lang="scss" scoped>
</style>

