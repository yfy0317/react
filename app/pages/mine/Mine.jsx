import React from 'react'
import RouterPager from '../../component/RouterPager'
import Footer from '../../component/Footer'
import FooterConfig from '../../component/config/footerConfig';
export default class Mine extends RouterPager {
    constructor (props) {
        super(props)
    }
    componentWillMount() {

    }
    render () {
        return (
            <div>
                我的
                <Footer FooterConfig={FooterConfig}/>
            </div>
        )
    }
}
