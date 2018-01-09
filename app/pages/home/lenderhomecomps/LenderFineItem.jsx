import RouterPager from '../../../comps/RouterPager'
import { connect } from 'react-redux'
import React from 'react'
import LenderHomeConfig from '../config/LenderHomeConfig'
import styles from './LenderFineItem.scss'
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
            <div className={styles.fineItem}>
                {
                    LenderHomeConfig.LenderFine.map((value, key)=> {
                        return(
                            <div key={key} className={styles.item}>
                                <img src={value.imgIcon}/>
                                <div className={styles.title}>{value.title}</div>
                                <div className={styles.fineDesc1}>{value.fineDesc1}</div>
                                <div className={styles.fineDesc2}>{value.fineDesc2}</div>
                                <div className={styles.fineDesc3}>{value.fineDesc3}</div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

