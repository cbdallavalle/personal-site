import React, { Component } from 'react'
import { Parallax } from 'react-scroll-parallax'
import PhotoCarousel from '../PhotoCarousel/PhotoCarousel'
import goCode1 from '../../assets/goCode1.jpg'
import goCode2 from '../../assets/goCode2.png'
import tradeUp from '../../assets/tradeup.png'
import turingAward from '../../assets/turing-award.jpeg'

import './Achievements.scss'

export default class Achievements extends Component {

  constructor() {
    super()
    this.state = {
      disabledOne: false
    }

    this.onScroll = this.onScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  }

  onScroll(ref, direction) {
    const rectOne = this.responsiveHeaderOne.getBoundingClientRect()

    if (rectOne.right && rectOne.right >= (window.innerWidth + 0.5) && !this.state.disabledOne) {
      this.setState({ disabledOne: true})
    }
  }

  render() {
    let slides = [
      <img 
        className='achievements-icon'
        src={ goCode2 } 
        alt='The 2018 goCode Colorado hackathon where my team won the Fort Collins competition' 
      />,
      <img 
        src={ goCode1 } 
        alt='My team and I presenting at the 2018 GoCode Colorado final competition' 
      />,
      <img
        src={ tradeUp }
        alt='The TradeUp app we created for the competition'
      />
    ]

    return (
      <section className='Achievements'>
        <Parallax
          offsetXMax={ 30 }
          offsetXMin={ -50 }
          disabled={ this.state.disabledOne }
        >
          <div
            className='responsive-header-one-cont'
            ref={ el => this.responsiveHeaderOne = el }
          >
            <h1 className='responsive-header-one' >
              Achievements
            </h1>
          </div>
        </Parallax>

        <PhotoCarousel slides={ slides } />
        <p className='figure-captions'>
          The Mostly Lady Coders won the Fort Collins 2018 GoCode Colorado Hackathon. We created an application called Trade Up to help connect trade school graduates with industry.
        </p>

        <hr />

        <img 
          className='turing-award'
          src={ turingAward } 
          alt={'I was awarded the Mentor Impact Award for the Turing\'s school of software and design'}
        />

        <p className='figure-captions'>
          "She celebrated every win I got and consoled me whenever I felt like I'd lost. She was always there for me."
          <br />
          - Kristen Hallstrom, my mentee in her nomination of me for the Mentor Impact Award
        </p>


      </section>
    )
  }
}