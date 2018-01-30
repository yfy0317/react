import React from 'react'
import store from '../redux/store'
import actions from '../redux/actions'
import fetch from 'sx-fetch'
@fetch.inject()
export default class RouterPager extends React.Component {
    constructor (props) {
        super(props)
        if(props.protected && !$.cookie('token')){
            store.dispatch(actions.setVars('backUrl', props.location.pathname))
            store.dispatch(actions.setVars('protectedCb', props.protected))
            this.props.history.replace('/protected')
        }
    }
}




