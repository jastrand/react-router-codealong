import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { DrinkList } from './pages/DrinkList'
import { DrinkDetails } from './pages/DrinkDetails'

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <DrinkList />
          </Route>
          <Route path="/drinks/:idDrink" exact>
            <DrinkDetails />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}
