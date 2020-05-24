import React from 'react'
import Loader from 'react-loader-spinner'
import axiosWithAuth from '../utils/axiosWithAuth'

import FriendForm from './FriendForm'

class FriendList extends React.Component {
  state = {
    friends: []
  }

  componentDidMount() {
    this.getFriends()
  }

  getFriends = () => {
    axiosWithAuth()
      .get('/friends')
      .then(res => {
        console.log('get friends:', res)
        this.setState({ ...this.state, friends: res.data })
      })
      .catch(err => console.log('Error getting data:', err.response))
  }

  deleteFriend = id => {
    axiosWithAuth()
      .delete(`/friends/${id}`)
      .then(res => {
        console.log('friend deleted:', res)
        this.setState({ ...this.state, friends: res.data })
      })
      .catch(err => console.log('Error deleting friend', err.response))
  }

  render() {
    return (
      <div className="content">
        <div className="title-wrapper">
          <h2 className="top-title">~*` FRIENDS `*~</h2>
          <h3 className="bottom-title">Add new friends here:</h3>
          <FriendForm />
        </div>
        <h3>TOP 8 FRIENDS AND MORE</h3>
        {this.state.friends.length === 0 ? (
          <div className="key spinner">
            <Loader type="Puff" color="#204963" height="60" width="60" />
            <p>Loading Data...</p>
          </div>
        ) : (
          <div className="friend-wrapper">
            {this.state.friends.map(friend => (
              <div className="friend" key={friend.email}>
                <h4>{friend.name}</h4>
                <p>age: {friend.age}</p>
                <h6>email:</h6> <p>{friend.email}</p>
                <button onClick={() => this.deleteFriend(friend.id)}>
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }
}

export default FriendList
