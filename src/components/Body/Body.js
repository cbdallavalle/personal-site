import React, { Component } from 'react'
import ResponsiveDesigns from '../ResponsiveDesigns/ResponsiveDesigns'
import Achievements from '../Achievements/Achievements'

import './Body.scss'

export class Body extends Component {

  constructor(props) {
    super(props)

    this.handleWindowResize = this.handleWindowResize.bind(this)
    this.windowWidth = window.innerWidth
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowResize);
  }

  handleWindowResize() {
    this.windowWidth = window.innerWidth
  }

  render() {
    return (
      <div className="Body"
      >
        <ResponsiveDesigns 
          windowWidth={ this.windowWidth }
        />
        <Achievements
          windowWidth={ this.windowWidth }
        />
      </div>
    )
  }
}
