import React from 'react'
import { connect } from 'react-redux'
import {setTitle} from "../../comps/SetTitle";
@connect(
    state =>{ return{} },
    dispatch =>{return{}}
)
@setTitle('我的')
export default class Mine extends React.Component {
    constructor (props) {
        super(props)
    }
    componentWillMount(){
    }
    render () {
        return (
            <div>Mine</div>
        )
    }
}
