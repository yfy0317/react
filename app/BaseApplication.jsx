import React from 'react'
import styles from './BaseApplication.scss'
import { connect } from 'react-redux'
import ReactLoading from 'react-loading';
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
        return (
            <div className={styles.content}>
                { this.props.children }
                {
                    this.props.showLoading ?
                    <div className={styles.loading}>
                        <ReactLoading type='spinningBubbles' color='#929292' width='2rem'/>
                    </div> :
                    <div/>
                }
            </div>
        )
    }
}
export default Application
