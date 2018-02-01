import {connect} from 'react-redux'
import React from 'react'
// import fetch from 'sx-fetch'
// import styles from './Carousel.scss';
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';
@connect(
    state => {
        return {}
    },
    dispatch => {
        return {}
    }
)

export default class Carousels extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
        slideIndex: 0,
    }
    render() {
        return (
            <div></div>

        )
    }
}

