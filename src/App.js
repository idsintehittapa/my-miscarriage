import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Header } from './components/Header'
import { StartPage } from './pages/StartPage'
import { About } from './pages/About'
import { Share } from './pages/Share'
import { Testimonies } from './pages/Testimonies'
import { SignLogIn } from './pages/SignLogIn'
import { TestimonyWeek } from './pages/TestimonyWeek'
import { Footer } from './components/Footer'

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route component={About} path="/about" exact />
        <Route component={Testimonies} path="/testimonies" exact />
        <Route component={TestimonyWeek} path="/testimonies/:week" exact />
        <Route component={Share} path="/share" exact />
        <Route component={SignLogIn} path="/sign" exact />
        <Route component={StartPage} path="/" exact />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}
