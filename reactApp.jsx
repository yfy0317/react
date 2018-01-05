import React from 'react'
import { Provider } from 'react-redux'
import ReactDom from 'react-dom'
import {Toast} from 'antd-mobile'
import Fetch from 'sx-fetch'
import {
    BrowserRouter ,
    Route,
} from 'react-router-dom'
import store from './app/redux/store'
import FadeIn from './app/BaseApplication.jsx'
import {setTitle} from "./app/util/SetTitle";
require('jquery.cookie')
const routes = require('./app/index')
ReactDom.render((
    <Provider store={store}>
        <FadeIn><BrowserRouter>
            <div>{routes.map((route, i) => (
                <Route key={i} exact path={route.path}  render={(props) => {
                    setTitle(route.title)
                    return(
                    <route.component {...props} toast={Toast} fetch={Fetch} />
                )}}/>
            ))}</div>
        </BrowserRouter></FadeIn>
    </Provider>
), document.getElementById('root'))