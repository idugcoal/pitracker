import React, { Component } from 'react'
import './App.css'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      btc: 'Loading...',
      eth: 'Loading...',
      ltc: 'Loading...',
      bch: 'Loading...',
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => this.getPrices(), 3000)
  }

  async getPrices() {
    fetch('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC,BCH&tsyms=USD')
      .then(response => response.json())
      .then(data => {
        this.setState({
          btc: data['BTC']['USD'],
          eth: data['ETH']['USD'],
          ltc: data['LTC']['USD'],
          bch: data['BCH']['USD'],
        })
      })
  }

  render() {
      return (
        <div className='container'>
          <span className='btc'>
            <div className='currency'>BTC</div>
            <div className='price'>{this.state.btc}</div>
          </span>
          <span className='eth'>
            <div className='currency'>ETH</div>
            <div className='price'>{this.state.eth}</div>
          </span>
          <span className='ltc'>
            <div className='currency'>LTC</div>
            <div className='price'>{this.state.ltc}</div>
          </span>
          <span className='bch'>
            <div className='currency'>BCH</div>
            <div className='price'>{this.state.bch}</div>
          </span>
        </div>
      );
  }
}

export default App;
