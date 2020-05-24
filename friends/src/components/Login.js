import React from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: '',
    },
    isLoading: false,
  }
  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
    })
  }

  login = e => {
    e.preventDefault()
    this.setState({ isLoading: true })
    axiosWithAuth()
      .post('/login', this.state.credentials)
      .then(res => {
        console.log('res:', res)
        localStorage.setItem('token', res.data.payload)
        this.props.history.push('/friends')
      })
      .catch(err => console.log('Login error:',err.response))
      this.setState({ isLoading: false })
  }

  render() {
    return (
      <div>
        {this.state.isLoading ? (
          <p>...Loading</p>
        ) : (
          <form onSubmit={this.login}>
            <label>username:</label>
            <input
              type="text"
              name="username"
              placeholder="username"
              value={this.state.credentials.username}
              onChange={this.handleChange}
            />
            <label>password:</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
            />
            <button>Log in</button>
          </form>
        )}
      </div>
    )
  }
}

export default Login
