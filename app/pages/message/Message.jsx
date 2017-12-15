import React from 'react'
import { connect } from 'react-redux'
import {setTitle} from "../../util/SetTitle";
import actions from "../../redux/actions";


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
        setTitle('信息')
    }
    render () {
        return (
            <div>Message</div>
        )
    }
}
