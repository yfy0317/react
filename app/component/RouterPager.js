import React from 'react'
import store from '../redux/store'
import actions from '../redux/actions'

export default class RouterPager extends React.Component {
    constructor (props) {
        super(props)
        if(store.getState().vars.titleHeader !== document.title){
            store.dispatch(actions.setVars('titleHeader', document.title))
        }
        if(props.protected && !$.cookie('token')){
            store.dispatch(actions.setVars('backUrl', props.location.pathname))
            store.dispatch(actions.setVars('protectedCb', props.protected))
            this.props.history.replace('/protected')
        }
    }
}




