import React from 'react'
import RouterPager from '../../component/RouterPager'
import { connect } from 'react-redux'
@connect(
    state =>{ return{backUrl: state.vars.backUrl, protectedCb: state.vars.protectedCb}},
)
export default class Home extends RouterPager {
    constructor (props) {
        super(props)
    }
    componentWillMount(){
    }
    go(){
        $.cookie('token','用户token',{ expires: 0.08, path: '/' })
        if(!this.props.backUrl || this.props.backUrl === '/home'){
            this.props.history.replace('/home')
        }else{
            this.props.protectedCb.cb ? this.cbNext() : this.props.history.replace(`${this.props.backUrl}`)
        }
    }
    cbNext() {
        //做一些登陆之后的处理
        this.props.history.replace(`${this.props.backUrl}`)
    }
    render () {
        return (
            <div>
                <div>这个页面被保护了</div>
                <button onClick={()=>this.go()} style={{background: '#F00'}}>点击登录</button>
            </div>
        )
    }
}

