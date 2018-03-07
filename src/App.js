import React, { Component } from 'react'
import './App.css'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      data: {}
    }
  }


  componentDidMount() {
    fetch('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC,BCH&tsyms=USD')
      .then(response => response.json())
      // .then(data => {this.setState({ data: data }))
      .then(data => {
        this.setState({
          btc: data['BTC']['USD'],
          eth: data['ETH']['USD'],
          ltc: data['LTC']['USD'],
          bch: data['BCH']['USD']
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
            <div className='price'>{this.state.btc}</div>
          </span>
          <span className='ltc'>
            <div className='cash'>LTC</div>
            <div className='price'>{this.state.btc}</div>
          </span>
          <span className='bch'>
            <div className='cash'>BCH</div>
            <div className='price'>{this.state.btc}</div>
          </span>
        </div>
      );
  }
}

export default App;
