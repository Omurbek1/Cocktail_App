import React from 'react'
import { Route, Switch } from 'react-router-dom'
import DetailScreen from '../Screens/DetailScreen'
import HomeScreen from '../Screens/HomeScreen'
import IngridientScreen from '../Screens/IngridientScreen'
import './Main.css'

export default function Main() {
    return (
        <div className='main'>
            <Switch>
                <Route exact path='/' exact component={HomeScreen} />
                <Route exact path='/detail/:id' exact component={DetailScreen} />
                <Route exact path='/ingridient/:name' exact component={IngridientScreen} />
            </Switch>
        </div>



    )
}
