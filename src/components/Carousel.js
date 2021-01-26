import React from 'react'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'

// do these do anything?
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

import { cardInfo } from '../data/TestimonyCardData'
import { Card } from '../lib/Card'

export const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrow: true, // this is not working
    afterChange(index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      ) // remove this later
    }
  }
  return (
    <>
      <Slider {...settings}>
        {cardInfo.map((weeks, key) => (
          <Link key={key} to={`/testimonies/${weeks.Week}`}>
            <Card key={key} title={weeks.Week} />
          </Link>
        ))}

      </Slider>
    </>
  )
}