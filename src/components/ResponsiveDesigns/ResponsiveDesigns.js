import React, { Component } from 'react'
import { Parallax } from 'react-scroll-parallax'
import Pokecard from './Pokecard/Pokecard';

import './ResponsiveDesigns.scss'

class ResponsiveDesigns extends Component {

  constructor() {
    super()
    this.state = {
      disabledOne: false,
      disabledTwo: false,
      containerClass: "full"
    }
    
    this.onScroll = this.onScroll.bind(this)
    this.onResize = this.onResize.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll)
    window.addEventListener("resize", this.onResize)
    this.onResize()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
    window.removeEventListener("resize", this.onResize)
  }

  onScroll(ref, direction) {
    const windowMid = window.innerWidth / 2
    const rectOne = this.responsiveHeaderOne.getBoundingClientRect()
    const rectTwo = this.responsiveHeaderTwo.getBoundingClientRect()

    if (rectOne.right && rectOne.right >= windowMid && !this.state.disabledOne) {
      this.setState({ disabledOne: rectOne.width })
    }

    if (rectTwo.left && rectTwo.left <= windowMid && !this.state.disabledTwo) {
      this.setState({ disabledTwo: true })
    }
  }

  onResize() {
    // full if greater than 1280px
    if (window.innerWidth > 1280) {
      this.setState({ containerClass: "full" })
    }
    // midsize
    else if (window.innerWidth < 1280 && window.innerWidth > 600) {
      this.setState({ containerClass: "midsize" })
    }
    // small
    else {
      this.setState({ containerClass: "small" })
    }
  }

  render() {
    const halfWindowWidth = window.innerWidth / 2
    const twoMargin = this.state.disabledTwo ? 'auto' : 0
    const headerOneStyle = { 'maxWidth': halfWindowWidth }
    const headerTwoStyle = { 'marginLeft': twoMargin, 'maxWidth': halfWindowWidth }
    
    return (
      <div className='ResponsiveDesigns'>
        <Parallax 
          offsetXMax={ 30 }
          offsetXMin={ -50 }
          disabled={ this.state.disabledTwo}
        >
          <div 
            className='responsive-header-one-cont'
            ref={el => this.responsiveHeaderOne = el}
            style={headerOneStyle}
          >
            <h1 className='responsive-header-one' >
              Responsive
            </h1>
          </div>
        </Parallax>
        <Parallax
          offsetXMax={ -10 }
          offsetXMin={ 100 }
          disabled={ this.state.disabledTwo }
        >
          <div
            className='responsive-header-two-cont'
            ref={el => this.responsiveHeaderTwo = el}
            style={headerTwoStyle}
          >
            <h1 className='responsive-header-two'>
              Design
            </h1>
          </div>
        </Parallax>
        
        <Pokecard 
          containerClass={this.state.containerClass} 
        />

      </div>
    )
  }
}

export default ResponsiveDesigns

