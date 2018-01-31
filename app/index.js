import Message from './pages/message/index'
import Home from './pages/home/index'
import Mine from './pages/mine/index'
import Protected from './pages/protected/index'
import Loadable from 'react-loadable'
import React from 'react'
const routes= [
    ...Message,
    ...Home,
    ...Protected,
    ...Mine
]
const Loading =({ isLoading, error }) => {
    if (isLoading) {
        return null;
    }
    else if (error) {
        window.location.reload();
    }
    else {
        return null;
    }
};
routes.forEach((value) => {
    value.component  =  Loadable({
        loader: value.component,
        loading: Loading,
    });
})
export default routes
