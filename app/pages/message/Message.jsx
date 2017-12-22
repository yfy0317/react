import React from 'react'
import { connect } from 'react-redux'
import actions from "../../redux/actions";
import {setTitle} from "../../comps/SetTitle";


//redux 用法
@connect(
    state =>{return{}},
    dispatch =>{return{setTempValue:(key, value) => {dispatch(actions.setVars(key, value))}}}
)
@setTitle('信息')
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
