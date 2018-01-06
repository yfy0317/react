import RouterPager from '../RouterPager.jsx'
import { connect } from 'react-redux'
import React from 'react'
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

