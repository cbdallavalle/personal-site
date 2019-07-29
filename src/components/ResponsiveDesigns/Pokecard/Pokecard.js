import React from 'react'
import PhotoCarousel from '../../PhotoCarousel/PhotoCarousel'
import pokemonPhone from '../../../assets/pokemon_phone.png'
import pokemonIpad from '../../../assets/pokemon_ipad.png'
import pokemonWeb from '../../../assets/pokemon_web.png'
import websiteBar from '../../../assets/website_bar.png'

import './Pokecard.scss'

const Pokecard = (props) => {
    const { containerClass } = props
    let pokecardDisplay
    if (containerClass === "full") {
      pokecardDisplay = (
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
      pokecardDisplay = (
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
        <div className="website-container" style={{ width: 'auto', height: 'auto' }}>
          <img id='website-bar' src={websiteBar} style={{ width: '100%' }} />
          <img
            id='pokemon-web'
            src={pokemonWeb}
            alt="pokecard web format"
            style={{ height: 'auto' }}
          />
        </div>,
        <img
          id='pokemon-ipad'
          src={pokemonIpad}
          alt="pokemon ipad format"
          style={{ height: '369px', width: 'auto' }}

        />,
        <img
          id='pokemon-phone'
          src={pokemonPhone}
          alt="pokemon phone format"
          style={{ height: '369px', width: 'auto' }}

        />
      ]
      pokecardDisplay = (
        <section className={`app-display app-display__${containerClass}`}>
          <PhotoCarousel slides={slides} />
        </section>
      )
    }
  return (
    <div className='Pokecard'>
      { pokecardDisplay }
      <p>
        One of my first static css designs and one of my favorites. I had a great time picking up my old Pokémon cards and recreating them digitally!
      </p>
    </div>
  )
}

export default Pokecard
