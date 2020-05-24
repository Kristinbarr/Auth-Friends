import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Login from './components/Login'
import FriendList from './components/FriendList'
import PrivateRoute from './components/PrivateRoute'

import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <div className="nav">
          <Link to="/login">Login</Link>
          <Link to="/friends">Friends List</Link>
        </div>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/friends" component={FriendList} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
