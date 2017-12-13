import React from 'react'
import { connect } from 'react-redux'
import actions from '../../redux/actions'
import { dispatch} from '../../redux/store'
import { setTitle} from '../../util/SetTitle'

class Message extends React.Component {
    constructor (props) {
        super(props)
    }
    componentWillMount(){
        setTitle('信息')
    }
    render () {
        return (
            <div>Message</div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Message)
