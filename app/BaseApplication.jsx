import React from 'react'
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
export default Application
