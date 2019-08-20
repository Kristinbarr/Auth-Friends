import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Link from './components/Login'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Router>
        <Link to='/login'>Login</Link>
        <Route path='/login' component={Login} />
      </Router>
    </div>
  )
}

export default App
