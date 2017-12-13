import React from 'react'
import { connect } from 'react-redux'
import { dispatch} from '../../redux/store'
import { setTitle} from '../../util/SetTitle'
class Application extends React.Component {
    constructor (props) {
        super(props)
    }
    componentWillMount(){
        setTitle('首页')
    }
    render () {
        return (
            <div>Welcome Home</div>
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
