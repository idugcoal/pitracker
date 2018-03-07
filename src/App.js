import React, { Component } from 'react'
import './App.css'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      btc: 0,
      eth: 0,
      ltc: 0,
      bch: 0,
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => this.getPrices(), 10000)
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
            <div className='cash'>BTC</div>
            <div className='price'>{this.state.btc}</div>
          </span>
          <span className='eth'>
            <div className='cash'>ETH</div>
            <div className='price'>{this.state.eth}</div>
          </span>
          <span className='ltc'>
            <div className='cash'>LTC</div>
            <div className='price'>{this.state.ltc}</div>
          </span>
          <span className='bch'>
            <div className='cash'>BCH</div>
            <div className='price'>{this.state.bch}</div>
          </span>
        </div>
      );
  }
}

export default App;
