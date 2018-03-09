import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Route} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './app/redux/store'
import {Toast} from 'antd-mobile'
import FadeIn from './app/BaseApplication.jsx'
import {setTitle} from "./app/util/SetTitle";
import Fastclick from 'fastclick'
Fastclick.attach(document.body)
require('jquery.cookie')
const routes = require('./app/index')
ReactDom.render((
    <Provider store={store}>
        <FadeIn><BrowserRouter >
            <div style={{height: '100%'}}>
                {routes.map((route, i) => (
                    <Route key={i} exact path={route.path} render={(props) => {
                        return(
                            <route.component {...props} toast={Toast} >
                                { setTitle(route.title)}
                            </route.component>)
                    }}/>
                ))}</div>
        </BrowserRouter></FadeIn>
    </Provider>
), document.getElementById('root'))