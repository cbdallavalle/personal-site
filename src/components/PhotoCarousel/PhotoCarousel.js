import React, { Component } from 'react'

import './PhotoCarousel.scss'

class PhotoCarousel extends Component {

  constructor(props) {
    super()
    this.state = {
      currentIndex: 0,
      slides: [],
      containerWidth: window.innerWidth * props.slides.length,
      translateValue: 0
    }

    this.goToNextSlide = this.goToNextSlide.bind(this)
    this.goToPreviousSlide = this.goToPreviousSlide.bind(this)
  }

  componentDidMount() {
    this.createSlides()
  }

  createSlides() {
    const slides = this.props.slides.map((photo, index) => {
      const slideRef = `slide${index}`
      return (
        <div 
          key={index} 
          className='slide'
        >
          { photo }
        </div>
      )
    })
    this.setState({ slides })
  }

  goToNextSlide() {
    if (this.state.currentIndex === this.state.slides.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(window.innerWidth)
    }))
  }

  goToPreviousSlide() {
    if (this.state.currentIndex === 0) {
      return this.setState({
        currentIndex: this.state.slides.length - 1,
        translateValue: -(this.state.containerWidth - (this.state.containerWidth / 3))
      })
    }

    // this.setState(prevState => ({
    //   currentIndex: prevState.currentIndex - 1,
    //   translateValue: prevState.translateValue + (window.innerWidth)
    // }))

    this.setState({ 
      currentIndex: this.state.currentIndex - 1,
      translateValue: this.state.translateValue + (window.innerWidth)
    })
  }

  goToSlide(direction) {
    const anchor = direction === 'forward' ? (this.state.slides.length - 1) : 0
    const anchorCurrentIndex = direction === 'forward' ? 0 : this.state.slides.length - 1
    const anchorTranslateValue = direction === 'forward' ? 0 : -(this.state.containerWidth - (this.state.containerWidth / 3))

    if (this.state.currentIndex === anchor) {
      return this.setState({
        currentIndex: anchorCurrentIndex,
        translateValue: anchorTranslateValue
      })
    }

    const currentIndex = direction === 'forward' ? this.state.currentIndex + 1 : this.state.currentIndex - 1
    const translateValue = direction === 'forward' ? this.state.translateValue + -(window.innerWidth) : this.state.translateValue + (window.innerWidth)

    this.setState({ currentIndex, translateValue })
  }

  render() {
    const style = {
      width: this.state.containerWidth,
      transform: `translateX(${this.state.translateValue}px)`,
      transition: 'transform ease-out 0.45s'
    }

    return (
      <div className='PhotoCarousel'>
        <div className='slide-container' style={style}>
          { this.state.slides }
        </div>
        <button className='slide-button slide-button__forward' onClick={() => this.goToSlide('forward')} />
        <button className='slide-button slide-button__backward' onClick={() => this.goToSlide('backward')} />
      </div>
    )
  }
}

export default PhotoCarousel