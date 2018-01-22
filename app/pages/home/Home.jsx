import RouterPager from '../../comps/RouterPager'
import { connect } from 'react-redux'
import React from 'react'
import {setBackGround} from "../../decorators/Background";
import styles from './Home.scss'
import fetch from  'sx-fetch'
import {setWindowScroll} from "../../decorators/WindowScroll";
@connect(
    state =>{ return{mixinsScrollState: state.vars.mixinsScrollState} },
    dispatch =>{return{}}
)
@setBackGround('#EFEFF4')
@setWindowScroll()
export default class Home extends RouterPager {
    constructor (props) {
        super(props)
    }
    componentWillMount(){
        fetch.get('/users').then(res=>{
            console.log(res)
        },err =>{
            console.log(err)
        })
    }
    render () {
        return (
            <div>
                HOMe
            </div>
        )
    }
}

