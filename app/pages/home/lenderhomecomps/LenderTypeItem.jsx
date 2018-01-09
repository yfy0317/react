import RouterPager from '../../../comps/RouterPager'
import { connect } from 'react-redux'
import React from 'react'
import TypeItem from '../config/LenderHomeConfig'
import styles from './LenderTypeItem.scss'
@connect(
    state =>{ return{} },
    dispatch =>{return{}}
)
export default class LenderTypeItem extends RouterPager {
    constructor (props) {
        super(props)
    }
    componentWillMount(){

    }
    render () {
        return (
            <div className={styles.top}>
                {
                    TypeItem.LenderType.map((value, key)=> {
                        return(
                            <div key={key} className={styles.item}>
                                <img src={value.imgIcon}/>
                                <div>{value.textDesc}</div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

