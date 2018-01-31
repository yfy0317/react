
import { dispatch } from '../redux/store'
import actions from '../redux/actions'
import React from 'react'
export const setWindowScroll = () => (WrappedComponent) => {
    return class extends React.Component {
        componentWillMount () {
            let clentHeight = $(window).height()
            let scrollState = {scrollTop: 0, clientHeight: clentHeight}
            dispatch(actions.setVars('mixinsScrollState', scrollState))
        }
        componentDidMount () {
            let clentHeight = $(window).height()
            $(window).bind('scroll', function () {
                let scrollState = {scrollTop: $(window).scrollTop(), clientHeight: clentHeight}
                dispatch(actions.setVars('mixinsScrollState', scrollState))
            })
        }
        componentWillUnmount () {
            $(window).unbind('scroll')
        }
        render() {
            return <WrappedComponent {...this.props} />
        }
    }
}
