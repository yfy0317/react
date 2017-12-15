import React from 'react'
import { connect } from 'react-redux'
import {setTitle} from "../../util/SetTitle";
import actions from "../../redux/actions";

@setTitle('信息')
//redux 用法
@connect(
    state =>{return{}},
    dispatch =>{return{setTempValue:(key, value) => {dispatch(actions.setVars(key, value))}}}
)
export default class Message extends React.Component {
    constructor (props) {
        super(props)
    }
    componentWillMount(){
    }
    render () {
        return (
            <div>Message</div>
        )
    }
}
