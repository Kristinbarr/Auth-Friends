import React from 'react'
// import moment from 'moment'
// import Loader from 'react-loader-spinner'
import { axiosWithAuth } from '../utils/axiosWithAuth'

import FriendForm from './FriendForm'

class FriendList extends React.Component {
  state = {
    friends: []
  }

  componentDidMount() {
    this.getData()
  }

  getData = () => {
    axiosWithAuth()
      .get('http://localhost:5000/api/data')
      .then((res) => {
        console.log('friendlist res', res)
        // this.setState({
        //   friends: res.data.data.filter(
        //     (price) =>
        //       price.type === 'Gasoline - Regular' &&
        //       (price.location === 'US' || price.location === 'State of Hawaii')
        //   )
        // })
      })
      .catch((err) => console.log(err.response))
  }

  // formatData = () => {
  //   const formattedData = []
  //   console.log(this.state.gasPrices)
  //   this.state.gasPrices.forEach((price, index, arr) => {
  //     if (price.location === 'US') {
  //       formattedData.push({
  //         date: moment(price.date).format('MMM'),
  //         USPrice: price.price,
  //         HawaiiPrice: arr[index + 1].price
  //       })
  //     }
  //   })
  //   return formattedData
  // }

  render() {
    // const gasPrices = this.formatData()
    console.log('friends', this.state.friends)
    return (
      <div className='gas-prices'>
        <div className='title-wrapper'>
          <h2 className='top-title'>~*` FRIENDS `*~</h2>
          <h3 className='bottom-title'>Add new friends here:</h3>
          <FriendForm />
        </div>
        <div className='key'>
          <h3 className='US-key-text'>TOP 8 FRIENDS AND MORE</h3>
        </div>
        {/* {this.props.fetchingData && (
          <div className='key spinner'>
            <Loader type='Puff' color='#204963' height='60' width='60' />
            <p>Loading Data</p>
          </div>
        )} */}
        {/* {gasPrices.length > 0 && (
          <div className='gas-wrapper'>
            <div className='columns'>
              <div className='months'>
                <div className='year'>2006</div>
                <div className='year'>2007</div>
                <div className='year'>2008</div>
                <div className='year'>2009</div>
                <div className='year'>2010</div>
                <div className='year'>2011</div>
                <div className='year'>2012</div>
              </div>
              <div>
                {gasPrices.map((price) => (
                  <div className='price-graph'>
                    <div className='date'>
                      <p>{price.date}</p>
                    </div>
                    <div className='hawaii-graph'>
                      <div
                        className='hawaii-line'
                        style={{
                          width: `${(Number(price.HawaiiPrice) / 5) * 100}%`
                        }}
                      />
                      <p>${price.HawaiiPrice}</p>
                    </div>
                    <div className='us-graph'>
                      <div
                        className='us-line'
                        style={{
                          width: `${(Number(price.USPrice) / 5) * 100}%`
                        }}
                      >
                        <p>${price.USPrice}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )} */}
      </div>
    )
  }
}

export default FriendList
