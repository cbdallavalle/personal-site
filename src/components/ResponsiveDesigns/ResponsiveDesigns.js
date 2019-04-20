import React, { Component } from 'react'
import { Parallax } from 'react-scroll-parallax'
import PhotoCarousel from '../PhotoCarousel/PhotoCarousel'
import pokemonPhone from '../../assets/pokemon_phone.png'
import pokemonIpad from '../../assets/pokemon_ipad.png'
import pokemonWeb from '../../assets/pokemon_web.png'
import websiteBar from '../../assets/website_bar.png'

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

  createFormat() {
    const { containerClass } = this.state
    if (containerClass === "full") {
      return (
        <section className={`app-display app-display__${containerClass}`}>
          <div className="website-container">
            <img id='website-bar' src={websiteBar} />
            <img
              id='pokemon-web'
              src={pokemonWeb}
              alt="pokemon web"
              />
          </div>
          <img
            id='pokemon-ipad'
            src={pokemonIpad}
            alt="pokemon ipad"
          />
          <img
            id='pokemon-phone'
            src={pokemonPhone}
            alt="pokemon phone"
          />
        </section>
      )
    } 
    else if (containerClass === "midsize") {
      return (
        <section className={`app-display app-display__${containerClass}`}>
          <div className="website-container">
            <img id='website-bar' src={websiteBar} />
            <img
              id='pokemon-web'
              src={pokemonWeb}
              alt="pokemon web"
            />
          </div>
          <div className="device-container">
            <img
              id='pokemon-ipad'
              src={pokemonIpad}
              alt="pokemon ipad"
              />
            <img
              id='pokemon-phone'
              src={pokemonPhone}
              alt="pokemon phone"
            />
          </div>
        </section>
      )
    } else {
      const slides = [
        <div className="website-container" style={{ width: 'auto', height: 'auto'}}>
          <img id='website-bar' src={websiteBar} style={{ width: '100%' }}/>
          <img
            id='pokemon-web'
            src={pokemonWeb}
            alt="pokemon web"
            style={{ height: 'auto' }}
          />
        </div>,
        <img
          id='pokemon-ipad'
          src={pokemonIpad}
          alt="pokemon ipad"
          style={{ height: '369px', width: 'auto' }}

        />,
        <img
          id='pokemon-phone'
          src={pokemonPhone}
          alt="pokemon phone"
          style={{ height: '369px', width: 'auto' }}

        />
      ]
      return (
        <section className={`app-display app-display__${containerClass}`}>
          <PhotoCarousel slides={slides} />
        </section>
      )
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
        
          { this.createFormat() }

      </div>
    )
  }
}

export default ResponsiveDesigns

