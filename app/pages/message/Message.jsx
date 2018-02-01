import React from 'react'
import RouterPager from '../../component/RouterPager'
import FooterConfig from '../../component/config/footerConfig';
import Footer from '../../component/Footer'
export default class Message extends RouterPager {
    constructor (props) {
        super(props)
    }
    componentWillMount() {

    }
    render () {
        return (
            <div>Message22
                <button onClick={()=>this.props.history.push('/home')}>点击跳转</button>
                <Footer FooterConfig={FooterConfig}/>
            </div>
        )
    }
}
