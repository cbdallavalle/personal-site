import React, { Component } from 'react'
import { Header } from '../Header/Header'
import { Body } from '../Body/Body'

import './reset.css'
import './App.scss'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.handleWindowResize = this.handleWindowResize.bind(this)
    this.windowSize = window.innerWidth
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowResize);
  }

  handleWindowResize() {
    this.windowSize = window.innerWidth
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
