import React from 'react'
import { connect } from 'react-redux'
import {setTitle} from "../../comps/SetTitle";
@connect(
    state =>{ return{} },
    dispatch =>{return{}}
)
@setTitle('首页')
export default class Home extends React.Component {
    constructor (props) {
        super(props)
    }
    componentWillMount(){

    }
    render () {
        return (
            <div>
                Home
            </div>
        )
    }
}

