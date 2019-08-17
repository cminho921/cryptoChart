import React from 'react';
import Chart from 'chart.js';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }

  componentDidMount() {
    // var chartRef = document.getElementById('bitcoinChart').getContext('2d');
    const ctx = this.chartRef.current.getContext("2d");
    const coinData = this.props.coinData;
    const chartDataInput = Object.values(coinData);
    const chartLabelInput = Object.keys(coinData);
    new Chart(ctx, {
      type: "line",
      data: {
        labels: chartLabelInput,
        datasets: [{
          label: 'Bitcoin currency',
          data: chartDataInput,
          type: 'line',
          pointRadius: 0,
          fill: false,
          borderColor: 'pink'
        }]
      },
      options: {
        scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Bitcoin Price ($)'
            }
          }]
        },
        title: {
          display: true,
          text: 'Bitcoin price change graph',
          fontSize: 18,
          fontFamily: 'Helvetica Neue',
          fontColor: 'black',
          padding: 10
        },
        
      }
    })
  }

  render() {
    return (
      <div>
        <canvas
          id="bitcoinChart"
          ref={this.chartRef}
        />
      </div>
    )
  }
}

export default Layout;