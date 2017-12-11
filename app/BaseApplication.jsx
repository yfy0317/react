import React from 'react'
import { connect } from 'react-redux'
import actions from '../app/redux/actions'
import { dispatch} from '../app/redux/store'
import styles from './BaseApplication.scss'

class Application extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <div className={styles.content}>
                {this.props.children}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}

export default connect(mapStateToProps)(Application)
