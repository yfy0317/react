import RouterPager from '../../comps/RouterPager'
import { connect } from 'react-redux'
import React from 'react'
import LenderTypeItem from './lenderhomecomps/LenderTypeItem'
import LenderFineItem from './lenderhomecomps/LenderFineItem'
import Footer from './lenderhomecomps/Footer'
import Prodcast from './lenderhomecomps/Prodcast'
import {setBackGround} from "../../decorators/Background";
import NewLenderIcon from './lenderhomeimg/新品贷款@2x.png'
import TuiLenderIcon from './lenderhomeimg/推荐贷款@2x.png'
import LenderActionIcon from './lenderhomeimg/贷款活动@2x.png'
import LenderHomeConfig from './config/LenderHomeConfig'
import styles from './Home.scss'
@connect(
    state =>{ return{} },
    dispatch =>{return{}}
)
@setBackGround('#EFEFF4')
export default class Home extends RouterPager {
    constructor (props) {
        super(props)
    }
    componentWillMount(){

    }
    render () {
        return (
            <div>
                <LenderTypeItem/>
                <div className={styles.lenderTui}>
                    <div className={styles.leftItem}>
                        <img src={NewLenderIcon}/>
                        <div className={styles.name}>新品贷款</div>
                        <div className={styles.desc}><span>测一测</span>贷款快</div>
                    </div>
                    <div className={styles.line}/>
                    <div className={styles.rightItem}>
                        <div className={styles.rightBottomItem} style={{borderBottom:'1PX solid #DADADF'}}>
                            <img src={TuiLenderIcon}/>
                            <div className={styles.rightFont}>
                                <div className={styles.name}>推荐贷款</div>
                                <div className={styles.desc}><span>测一测</span>贷款快</div>
                            </div>
                        </div>
                        <div className={styles.rightBottomItem}>
                            <img src={LenderActionIcon}/>
                            <div className={styles.rightFont}>
                                <div className={styles.name}>贷款活动</div>
                                <div className={styles.desc}><span>测一测</span>贷款快</div>
                            </div>
                        </div>
                    </div>
                    <Prodcast {...this.props} />
                </div>
                <div>
                    <div className={styles.fine}/>
                    <div className={styles.fineFont}>精品</div>
                </div>
                <LenderFineItem/>
                <Footer FooterConfig={LenderHomeConfig}/>
            </div>
        )
    }
}

