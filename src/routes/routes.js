import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import history from '../config/history'

// PAGEs
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Logout from '../pages/Logout'
import Main from '../pages/Main'

export default class Routes extends Component {
    render() {
        return (
            <Router history={ history }>
                <Switch>
                    <Route exact path="/signup" component={ Signup } />
                    <Route exact path="/login" component={ Login } />
                    <Route exact path="/logout" component={ Logout } />
                    <Route exact path="/" component={ Main } />
                </Switch>
            </Router>
        )
    }
}