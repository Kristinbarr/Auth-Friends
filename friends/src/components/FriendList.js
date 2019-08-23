import React from 'react'
// import moment from 'moment'
import Loader from 'react-loader-spinner'
import { axiosWithAuth } from '../utils/axiosWithAuth'

import FriendForm from './FriendForm'

class FriendList extends React.Component {
  state = {
    friends: [],
    fetchingData: false
  }

  componentDidMount() {
    this.getData()
  }

  getData = () => {
    axiosWithAuth()
      .get('http://localhost:5000/api/friends')
      .then((res) => {
        this.setState({
          friends: res.data
        })
      })
      .catch((err) => console.log(err.response))
  }
  deleteFriend = (id) => {
    axiosWithAuth()
      .delete(`http://localhost:5000/api/friends/${id}`)
      .then((res) => {
        this.setState({friends: res.data})
      })
      .catch((err) => console.log(err.response))
  }

  // formatData = () => {
  //   const formattedData = []
  // console.log('formatting', this.state.friends)
  // this.state.friends.forEach((id, index, arr) => {
  //   if (price.location === 'US') {
  //     formattedData.push({
  //       date: moment(price.date).format('MMM'),
  //       USPrice: price.price,
  //       HawaiiPrice: arr[index + 1].price
  //     })
  //   }
  // })
  //   return formattedData
  // }

  render() {
    // const friends = this.formatData()
    return (
      <div className='gas-prices'>
        <div className='title-wrapper'>
          <h2 className='top-title'>~*` FRIENDS `*~</h2>
          <h3 className='bottom-title'>Add new friends here:</h3>
          <FriendForm />
        </div>
        <div className=''>
          <h3>TOP 8 FRIENDS AND MORE</h3>
        </div>
        {/* {this.state.friends ? (
          <div className='key spinner'>
            <Loader type='Puff' color='#204963' height='60' width='60' />
            <p>Loading Data...</p>
          </div>
        ) :  */}
        {
          <div className='friend-wrapper'>
            {this.state.friends.map((friend) => (
              <div className='friend' key={friend.email}>
                <h4>{friend.name}</h4>
                <p>age: {friend.age}</p>
                <h6>email:</h6> <p>{friend.email}</p>
                <button onClick={() => this.deleteFriend(friend.id)}>
                  Delete
                </button>
              </div>
            ))}
          </div>
        }
      </div>
    )
  }
}

export default FriendList
