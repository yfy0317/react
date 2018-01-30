import React from 'react'
import styles from './BaseApplication.scss'
import { connect } from 'react-redux'
import ReactLoading from '../app/comps/Loading';
import fetchinit from '../app/util/FetchInit'
import actions from './redux/actions'
@connect(
    state =>{ return{showLoading: state.vars.showLoading}},
    dispatch =>{return{init:(key, value)=>{dispatch(actions.setVars(key, value))}}}
)
class Application extends React.Component {
    constructor (props) {
        super(props)
    }
    componentWillMount(){
        fetchinit(this.props.init)
    }
    render () {
        let { showLoading } = this.props
        return (
            <div>
                { this.props.children }
                { showLoading && <ReactLoading /> }
            </div>
        )
    }
}
export default Application
