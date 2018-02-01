import React from "react";
import styles from './Header.scss';
import icon from './image/headerImg/back-black.png'
export default class Header extends React.Component {
    goBack(){
        window.history.back()
    }
    render() {
        const {title} = this.props
        const ua = window.navigator.userAgent;
        return (
            <div>
            {(/MicroMessenger/i.test(ua) || /SuiXingPay-Mpos/i.test(ua)||/SuiXingPay-Cashier/i.test(ua) ) ? '':
            <div className={styles.title}>
                <div className={styles.center}>{title}</div>
                <img src={icon}  onClick={()=>this.goBack()}/>
            </div>}
            </div>
        );
    }

};