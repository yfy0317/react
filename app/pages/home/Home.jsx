import React from 'react'
import { connect } from 'react-redux'
import {setTitle} from "../../util/SetTitle";

@setTitle('首页')
@connect(
    state =>{ return{} },
    dispatch =>{return{}}
)
export default class Home extends React.Component {
    constructor (props) {
        super(props)
    }
    componentWillMount(){
    }
    render () {
        return (
            <div>Welcome Home</div>
        )
    }
}

