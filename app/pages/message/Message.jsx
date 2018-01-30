import React from 'react'
import RouterPager from '../../component/RouterPager'

export default class Message extends RouterPager {
    constructor (props) {
        super(props)
    }
    componentWillMount() {

    }
    render () {
        return (
            <div>Message
                <button onClick={()=>this.props.history.push('/home')}>点击跳转</button>
            </div>
        )
    }
}
