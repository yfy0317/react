import React from 'react'
import Header from '../component/Header'
export const setTitle = () => (WrappedComponent) => {
    return class extends React.Component {
        state={
            title: document.title && document.title
        }
        constructor (props) {
            super(props)
        }
        componentWillMount(){
        }
        render() {
            const ua = window.navigator.userAgent;
            return (<div>{(/MicroMessenger/i.test(ua) || /SuiXingPay-Mpos/i.test(ua)||/SuiXingPay-Cashier/i.test(ua) ) ? '':<div><Header title={this.state.title}/><WrappedComponent {...this.props} /></div>}</div>)
        }
    }
}
