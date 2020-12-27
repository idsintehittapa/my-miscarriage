import React from 'react'

import { Navbar } from './components/Navbar'
import { StartPage } from './pages/StartPage'

import { Footer } from './components/Footer'

export const App = () => {
  return (
    <>
      <Navbar />
      <StartPage />
      <Footer />
    </>
  )
}
