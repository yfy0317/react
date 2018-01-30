import RouterPager from '../../component/RouterPager'
import { connect } from 'react-redux'
import React from 'react'
import styles from './Home.scss'
@connect(
    state =>{ return{} },
    dispatch =>{return{}}
)
export default class Home extends RouterPager {
    constructor (props) {
        super(props)
    }
    componentWillMount(){
    }
    render () {
        return (
            <div>Home</div>
        )
    }
}

