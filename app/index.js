import Message from './pages/message/index'
import Home from './pages/home/index'
import Mine from './pages/mine/index'
import Protected from './pages/protected/index'
import Loadable from 'react-loadable'
import Loadings from './component/Loading.jsx'
import React from 'react'
const routes= [
    ...Message,
    ...Home,
    ...Protected,
    ...Mine
]
const Loading =({ error, pastDelay}) => {
    if (pastDelay) {
        return <Loadings/>;
    }
    else if (error) {
        return <div>页面加载失败。。。请刷新重试</div>
    }
    else {
        return null;
    }
};
routes.forEach((value) => {
    value.component  =  Loadable({
        loader: value.component,
        loading: Loading,
        delay: 300
    });
})
export default routes
