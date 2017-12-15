import React from 'react'
import { connect } from 'react-redux'
import { setTitle} from '../../util/SetTitle'


@connect(
    state =>{ return{} },
    dispatch =>{return{}}
)
export default class Mine extends React.Component {
    constructor (props) {
        super(props)
    }
    componentWillMount(){
        setTitle('我的')
    }
    render () {
        return (
            <div>Mine</div>
        )
    }
}
