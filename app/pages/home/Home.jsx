import React from 'react'
import { connect } from 'react-redux'
import {setTitle} from "../../util/SetTitle";
@connect(
    state =>{ return{} },
    dispatch =>{return{}}
)
export default class Home extends React.Component {
    constructor (props) {
        super(props)
    }
    componentWillMount(){
        setTitle('首页')
    }
    render () {
        return (
            <div>Welcome Home</div>
        )
    }
}

