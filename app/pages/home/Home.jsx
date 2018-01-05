import React from 'react'
import { connect } from 'react-redux'

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
            <div>Home</div>
        )
    }
}

