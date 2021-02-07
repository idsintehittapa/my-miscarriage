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

const Wrapper = styled.section`
  margin-bottom: 20px;
`

export const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrow: true, // this is not working
    responsive: [
      {
        breakpoint: 408,
        settings: {
          slidesToShow: 3,
          arrow: true
        }
      },
      {
        breakpoint: 915,
        settings: {
          slidesToShow: 4
        }
      },
      // {
      //   breakpoint: 1024,
      //   settings: {
      //     slidesToShow: 5
      //   }
      // }
    ]
  }
  return (
    <>
      {/* <Wrapper> */}
      <StyledSlider {...settings}>
        {cardInfo.map((weeks, key) => (
          <Link key={key} to={`/testimonies/week/${weeks.Week}`}>
            <Card key={key} carouselTitle={weeks.Week === 99 ? 'Unknown' : weeks.Week} />
          </Link>
        ))}
      </StyledSlider>
      {/* </Wrapper> */}
    </>
  )
}

const StyledSlider = styled(Slider)`
.slick-prev:before {
  color: rgba(25, 25, 25, 0.9);
}
.slick-next:before {
  color: rgba(25, 25, 25, 0.9);
}
  .slick-arrow {
    margin: 50px 118px;
    z-index: 1;
}
  .slick-dots li button:before {
    color: rgba(25, 25, 25, 0.9);
    font-size: 10px;
    margin: 50px 0;
  }
`