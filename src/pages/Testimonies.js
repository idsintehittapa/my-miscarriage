import React from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

import { cardInfo } from '../data/TestimonyCardData'
import { Card } from '../lib/Card'
import { TestimoniesWrapper, BlackBackground } from '../styles/Styles'

export const Testimonies = () => {
  const TITLE = 'Testimonies'
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <TestimoniesWrapper>
        <BlackBackground>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 450: 2, 750: 2, 900: 3 }}>
            <Masonry>
              {cardInfo.map((weeks, key) => (
                <Link key={key} to={`/testimonies/week/${weeks.Week}`}>
                  <Card key={key} coverImg={weeks.Img} alt={weeks.alt} title={weeks.Week} />
                </Link>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </BlackBackground>
      </TestimoniesWrapper>
    </>
  )
}