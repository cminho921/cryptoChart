import React from 'react';
import Layout from './LineGraph.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coinData : null,
    }
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch('https://api.coindesk.com/v1/bpi/historical/close.json')
      .then(res => {
        if (res.status !== 200) {
          console.log('Error, Status Code: ' + res.status);
          return;
        }
        res.json().then(data => {
          this.setState({coinData: data})
        });
      })
      .catch(err => {
        log('Request failed', error)
      });
  }
  //apply memcache
  render() {
    const { coinData } = this.state;
    return (
      <div>
        {coinData && <Layout coinData={coinData.bpi}/>}
      </div>
    )
  }
}

export default App