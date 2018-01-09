import React from 'react'
import RouterPager from '../../comps/RouterPager'
import Footer from '../home/lenderhomecomps/Footer'
import LenderHomeConfig from '../home/config/LenderHomeConfig'

export default class Message extends RouterPager {
    constructor (props) {
        super(props)
    }
    componentWillMount() {

    }
    render () {
        return (
            <div>
                222222222
                <Footer FooterConfig={LenderHomeConfig}/>
            </div>
        )
    }
}
