import React from 'react'
import {Route, Switch} from "react-router-dom"
import Twilio from '../page/Twillio'
import AddressBook from '../page/AddressBook'
import Home from '../page/Home'

export default function Router() {
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/text" component={Twilio} />
            <Route path="/AddressBook" component={AddressBook} />
        </Switch>
    )
}