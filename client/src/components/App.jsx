import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coinData : []
    }
  }

  componentDidMount() {
    fetch('https://api.coindesk.com/v1/bpi/historical/close.json')
      .then(res => {
        if (res.status !== 200) {
          console.log('Error, Status Code: ' + res.status);
          return;
        }
        res.json().then(data => {
          console.log(data);
          this.setState({coinData: data})
        });
      })
      .catch(err => {
        log('Request failed', error)
      });
  }

  render() {
    return (
      <div>
        <div>{this.state.coinData.disclaimer}</div>
      </div>
    )
  }
}

export default App