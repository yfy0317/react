import React from 'react'
import { Provider } from 'react-redux'
import ReactDom from 'react-dom'
import {
    BrowserRouter ,
    Route,
} from 'react-router-dom'
import store from './app/redux/store'
import FadeIn from './app/BaseApplication.jsx'
require('jquery.cookie')
const routes = require('./app/index')
ReactDom.render((
    <Provider store={store}><FadeIn>
        <BrowserRouter>
            <div>{routes.map((route, i) => (
                <Route key={i} exact path={route.path} render={props => (
                    <route.component {...props} routes={route.routes}/>
                )}/>
            ))}</div>
        </BrowserRouter></FadeIn>
    </Provider>
), document.getElementById('root'))