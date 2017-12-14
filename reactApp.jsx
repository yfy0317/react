import React from 'react'
import { Provider } from 'react-redux'
import ReactDom from 'react-dom'
import fetchinit from './app/util/FetchInit'
import {
    BrowserRouter ,
    Route,
} from 'react-router-dom'
import store from './app/redux/store'
import FadeIn from './app/BaseApplication.jsx'
require('jquery.cookie')
const routes = require('./app/index')
fetchinit()
ReactDom.render((
    <Provider store={store}>
        <BrowserRouter><FadeIn>
        {routes.map((route, i) => (
            <Route key={i} exact path={route.path} render={props => (
                <route.component {...props} routes={route.routes}/>
            )}/>
        ))}</FadeIn>
        </BrowserRouter>
    </Provider>
), document.getElementById('app'))