import React from 'react'
import styles from './Footer.scss';
import {withRouter} from 'react-router-dom'

@withRouter
export default class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {

    }

    render() {
        let {FooterConfig=[], type} = this.props
        return (
            <div className={styles.allContainer}>
                {
                    FooterConfig&&FooterConfig.tab.map((v,k)=>{
                        return(
                            <div className={type?styles.item2:styles.item} key={k} onTouchStart={()=>{this.props.history.push(v.url)}}><div ><img className={styles.imgitem} src={window.location.pathname===v.url?v.iconAct:v.icon}/></div><div className={window.location.pathname===v.url?styles.titleitemAct:styles.titleitem}>{v.title}</div></div>
                        )})
                }
            </div>
        )
    }
}

