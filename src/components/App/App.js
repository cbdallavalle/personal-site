import React, { Component } from 'react'
import { Header } from '../Header/Header'
import { Body } from '../Body/Body'

import './reset.css'
import './App.scss'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
