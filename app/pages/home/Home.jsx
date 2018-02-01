import RouterPager from '../../component/RouterPager'
import { connect } from 'react-redux'
import React from 'react'
import fetch from 'sx-fetch'
import Footer from '../../component/Footer'
import FooterConfig from '../../component/config/footerConfig';
import Carousel from '../../component/Carousels'
import styles from './Home.scss'
@connect(
    state =>{ return{} },
    dispatch =>{return{}}
)
@fetch.inject()
export default class Home extends RouterPager {
    constructor (props) {
        super(props)
    }
    componentWillMount(){
    }
    render () {
        return (
            <div>
                <div>Home</div>
                <Carousel/>
            <Footer FooterConfig={FooterConfig}/>
            </div>
        )
    }
}

