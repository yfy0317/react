import React from 'react'
import { Provider } from 'react-redux'
import ReactDom from 'react-dom'
import fetch from 'sx-fetch'
import {Toast} from 'antd-mobile'
import {
    BrowserRouter ,
    Route,
} from 'react-router-dom'
import store from './app/redux/store'
import FadeIn from './app/BaseApplication.jsx'

const routes = require('./app/index')
fetch.init({
    baseURL: '/api',
    onShowErrorTip: (err, errorTip) => {
        if(errorTip) Toast.fail(errorTip);
    },
    onShowSuccessTip: (response, successTip) => {
        if(successTip) Toast.info(successTip, 2);
    },
    isMock: (url) => {
        return url.startsWith('/mock');
    }
});
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