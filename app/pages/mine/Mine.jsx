import React from 'react'
import { connect } from 'react-redux'
import { dispatch} from '../../redux/store'
import { setTitle} from '../../util/SetTitle'

class Mine extends React.Component {
    constructor (props) {
        super(props)
    }
    componentWillMount(){
        setTitle('我的')
    }
    render () {
        return (
            <div>Mine</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Mine)
