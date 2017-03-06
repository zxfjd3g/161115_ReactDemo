import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'

export default class App extends Component {

  render () {
    return (
      <div>
        <img src={logo} alt="" className="app-logo"/>
      </div>
    )
  }
}