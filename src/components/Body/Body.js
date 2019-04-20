import React, { Component } from 'react'
import { Parallax } from 'react-scroll-parallax'
import ResponsiveDesigns from '../ResponsiveDesigns/ResponsiveDesigns'
import './Body.scss'


export class Body extends Component {

  constructor() {
    super()
    this.state = {
      disabledOne: false
    }


  }



  render() {
    const disabledOne = this.state.disabledOne ? true : false
    return (
      <div className="Body"
      >
        <ResponsiveDesigns />
      </div>
    );
  }
}


