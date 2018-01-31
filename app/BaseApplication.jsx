import React from 'react'
import styles from './BaseApplication.scss'
import { connect } from 'react-redux'
import ReactLoading from './component/Loading';
import fetchinit from '../app/util/FetchInit'
import actions from './redux/actions'
import Header from "./component/Header";
@connect(
    state =>{ return{showLoading: state.vars.showLoading,titleHeader:state.vars.titleHeader}},
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
                <Header title={this.props.titleHeader}/>
                { this.props.children }
                { showLoading && <ReactLoading /> }
            </div>
        )
    }
}
export default Application
