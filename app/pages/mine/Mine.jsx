import React from 'react'
import { connect } from 'react-redux'
import actions from '../../redux/actions'
import { dispatch} from '../../redux/store'


class Application extends React.Component {
    constructor (props) {
        super(props)
    }
    componentWillMount(){
        console.log(this.props.aa)
    }
    render () {
        return (
            <div>
               Mine
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        aa: state.vars.yy
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Application)
