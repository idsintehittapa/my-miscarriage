
import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'

import { importTestimonies } from '../paths/Api-paths'
import { Card } from '../lib/Card'
import { GridLayout } from '../styles/Styles'

// useEffect()
// so here it should be a fetch connected to week..
// can this also be props then somehow?

// for specific week related to week {/* <Link to={`/movies/${id}`}> */}
// but how do I make it so it first only filters out weeks and then id related to that
// week?

export const TestimonyWeek = () => {

  fetch(importTestimonies)
    .then((response) => response.json())
    .then((json) => console.log(json.allTestimonies))

  return (
    <div>
      test
    </div>
  )
}
