import React from 'react'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'

// do these do anything?
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

import styled from 'styled-components/macro'
import { cardInfo } from '../data/TestimonyCardData'
import { Card } from '../lib/Card'
// import { StyledSlider } from '../styles/Styles'

const StyledSlider = styled(Slider)`
  .slick-list {
    padding: 0 !important;
  }
  .slick-track {
    padding: 0 !important;
    // top: 35px;
  }
  .slick-dots {
    // bottom: 5px;
    margin: 10px;
  }
`;

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
      <StyledSlider {...settings}>
        {cardInfo.map((weeks, key) => (
          <Link key={key} to={`/testimonies/week/${weeks.Week}`}>
            <Card key={key} carouselTitle={weeks.Week === 99 ? 'Unknown' : weeks.Week} />
          </Link>
        ))}

      </StyledSlider>
    </>
  )
}