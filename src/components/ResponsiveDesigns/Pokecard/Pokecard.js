import React from 'react'
import PhotoCarousel from '../../PhotoCarousel/PhotoCarousel'
import pokemonPhone from '../../../assets/pokemon_phone.png'
import pokemonIpad from '../../../assets/pokemon_ipad.png'
import pokemonWeb from '../../../assets/pokemon_web.png'
import websiteBar from '../../../assets/website_bar.png'

import './Pokecard.scss'

const Pokecard = (props) => {
  const { containerClass } = props

  /* Image Containers */
  let webContainer = (
    <div className="website-container">
      <img
        id='website-bar'
        src={websiteBar}
        alt='web-bar'
      />
      <img
        id='pokemon-web'
        src={pokemonWeb}
        alt="pokemon web"
      />
    </div>
  )

  let ipadImage = (
    <img
      id='pokemon-ipad'
      src={pokemonIpad}
      alt="pokemon ipad"
    />
  )

  let phoneImage = (
    <img
      id='pokemon-phone'
      src={pokemonPhone}
      alt="pokemon phone"
    />
  )

  /* Image Configuratiton */
  let pokecardDisplay

  if (containerClass === 'full') {
    pokecardDisplay = (
      <article className={`app-display app-display--${containerClass}`}>
        { webContainer }
        { ipadImage }
        { phoneImage }
      </article>
    )
  }
  else if (containerClass === "midsize") {
    pokecardDisplay = (
      <article className={`app-display app-display--${containerClass}`}>
        {webContainer}
        <div className="device-container">
          {ipadImage}
          {phoneImage}
        </div>
      </article>
    )
  }
  else {
    const slides = [
      webContainer,
      ipadImage,
      phoneImage
    ]
    pokecardDisplay = (
      <article className={`app-display app-display--${containerClass}`}>
        <PhotoCarousel slides={slides} />
      </article>
    )
  }

  return (
    <div className='Pokecard'>
      { pokecardDisplay }
      <p className='figure-captions'>
        One of my first static css designs and one of my favorites. I loved recreating my old Pokémon cards digitally!
      </p>
    </div>
  )
}

export default Pokecard
