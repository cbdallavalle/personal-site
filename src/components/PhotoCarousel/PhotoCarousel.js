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
    this.onResize = this.onResize.bind(this)
  }

  componentDidMount() {
    this.createSlides()
    window.addEventListener("resize", this.onResize)
  }

  onResize() {
    this.setState({ containerWidth: window.innerWidth * this.props.slides.length})
  }

  createSlides() {
    const slides = this.props.slides.map((photo, index) => {
      return (
        <div 
          key={index} 
          className='slide'
          style={{ width: (100 / this.props.slides.length) + '%' }}
        >
          { photo }
        </div>
      )
    })
    this.setState({ slides })
  }

  goToNextSlide() {
    const {
      currentIndex,
      slides
    } = this.state

    if (currentIndex === slides.length - 1) {
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
    const {
      currentIndex,
      slides,
      containerWidth,
      translateValue
    } = this.state

    if (currentIndex === 0) {
      return this.setState({
        currentIndex:slides.length - 1,
        translateValue: -(containerWidth - (containerWidth / slides.length))
      })
    }

    this.setState({ 
      currentIndex: currentIndex - 1,
      translateValue: translateValue + (window.innerWidth)
    })
  }

  goToSlide(direction) {
    const {
      slides,
      containerWidth,
      currentIndex,
      translateValue
    } = this.state

    const anchor = direction === 'forward' ? (slides.length - 1) : 0
    const anchorCurrentIndex = direction === 'forward' ? 0 : slides.length - 1
    const anchorTranslateValue = direction === 'forward' ? 0 : -(containerWidth - (containerWidth / slides.length))

    if (currentIndex === anchor) {
      return this.setState({
        currentIndex: anchorCurrentIndex,
        translateValue: anchorTranslateValue
      })
    }

    const newCurrentIndex = direction === 'forward' ? currentIndex + 1 : currentIndex - 1
    const newTranslateValue = direction === 'forward' ? translateValue + -(window.innerWidth) : translateValue + (window.innerWidth)

    this.setState({ 
      currentIndex: newCurrentIndex,
      translateValue: newTranslateValue
    })
  }

  render() {
    const { 
      containerWidth,
      translateValue,
      slides
    } = this.state

    const style = {
      width: containerWidth,
      transform: `translateX(${translateValue}px)`,
      transition: 'transform ease-out 0.45s'
    }

    return (
      <div className='PhotoCarousel'>
        <div 
          className='slide-container' 
          style={style}
        >
          { slides }
        </div>
        <button 
          className='slide-button slide-button__forward' 
          onClick={() => this.goToSlide('forward')} 
        />
        <button 
          className='slide-button slide-button__backward' 
          onClick={() => this.goToSlide('backward')} 
        />
        <div>
          
        </div>
      </div>
    )
  }
}

export default PhotoCarousel