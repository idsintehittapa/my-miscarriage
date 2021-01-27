import React, { useEffect, useState } from 'react'
// import { Helmet } from 'react-helmet'
import moment from 'moment'
import { useParams } from 'react-router-dom'

import { Card } from '../lib/Card'

import {
  GridLayout
} from '../styles/Styles'

export const TestimonyDetails = () => {
  const [testimony, setTestimony] = useState([])
  const { id } = useParams()
  console.log(id)

  // const { week } = request.match.params

  useEffect(() => {
    // fetch(`http://localhost:8080/testimonies/${week._id}`)
    fetch(`http://localhost:8080/testimonies/${id}`)
      .then((response) => response.json())
      .then((json) => setTestimony(json))
      console.log(testimony)
    // eslint-disable-next-line
  }, [])

  return (
    <>
      {/* <Helmet>
        <title>{TITLE}</title>
      </Helmet> */}
      <GridLayout>
        {/* <Card {...testimony} /> */}
          <Card
            detailTitle={`${testimony.name}'s testimony`}
            createdAt={moment(testimony.createdAt).format('ll')}
            story={testimony.story} />
      </GridLayout>
    </>
  )
}
