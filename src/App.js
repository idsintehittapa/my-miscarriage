import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Header } from './components/Header'
import { StartPage } from './pages/StartPage'
import { Contact } from './pages/Contact'
import { Share } from './pages/Share'
import { Testimonies } from './pages/Testimonies'
import { SignLogIn } from './pages/SignLogIn'
import { TestimoniesModerator } from './pages/TestimoniesModerator'
import { TestimonyWeek } from './pages/TestimonyWeek'

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route component={StartPage} path="/" exact />
        <Route component={Testimonies} path="/testimonies" exact />
        <Route component={TestimonyWeek} path="/testimonies/:week" exact />
        <Route component={Share} path="/share" exact />
        <Route component={SignLogIn} path="/moderator" exact />
        <Route component={TestimoniesModerator} path="/moderator/posts" exact />
        <Route component={Contact} path="/contact" exact />
      </Switch>
    </BrowserRouter>
  )
}
