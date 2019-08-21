import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Login from './components/Login'
import FriendList from './components/FriendList'
import PrivateRoute from './components/PrivateRoute'

import './App.css'

function App() {
  return (
    <div className='App'>
      <Router>
        <div className='nav'>
          <Link to='/login'>Login</Link>
          <Link to='/protected'>Protected Page</Link>
        </div>
        <div className='content'>
          <Route path='/login' component={Login} />
          <PrivateRoute exact path='/protected' component={FriendList} />
        </div>
      </Router>
    </div>
  )
}

export default App
