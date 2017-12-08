import React from 'react'
import Home2 from './Message.jsx'
import { connect } from 'react-redux'
import actions from '../../redux/actions'
import { dispatch} from '../../redux/store'


class Application extends React.Component {
    constructor (props) {
        super(props)
    }
    componentWillMount(){
    }
    render () {
        return (
            <div>
                Message
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Application)
