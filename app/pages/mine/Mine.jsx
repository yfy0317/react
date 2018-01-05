import React from 'react'
import { connect } from 'react-redux'
@connect(
    state =>{ return{} },
    dispatch =>{return{}}
)

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
