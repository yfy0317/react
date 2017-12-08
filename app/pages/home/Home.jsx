import React from 'react'
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
                Welcome Home
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
        init:()=> {
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Application)
