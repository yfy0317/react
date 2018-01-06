import React from 'react'
import { connect } from 'react-redux'
@connect(
    state =>{ return{backUrl: state.vars.backUrl}},
)
export default class Home extends React.Component {
    constructor (props) {
        super(props)
    }
    componentWillMount(){
    }
    go(){
        $.cookie('token','111',{ expires: 0.08, path: '/' })
        this.props.history.replace(`${this.props.backUrl}`)
    }
    render () {
        return (
            <div>
                <div>这个页面被保护了</div>
                <button onClick={()=>this.go()}>点击登录</button>
            </div>
        )
    }
}

