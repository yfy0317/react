import  React from 'react';
import styles from  './Footer.scss';
import {withRouter} from 'react-router-dom'
@withRouter
export  default class Footer extends React.Component{
    state=({
        flag:false
    })
  componentWillMount(){

  }
  ChangeFlag(v){
    this.props.history.push(v.url)
  }
  render(){
    let {FooterConfig=[], type} = this.props
    return (
      <div className={styles.allContainer}>
        {
          FooterConfig&&FooterConfig.tab.map((v,k)=>{
            return(<div className={styles.item} key={k} onClick={()=>{this.ChangeFlag(v)}}><div ><img className={styles.imgitem} src={window.location.pathname===v.url?v.icon2:v.icon1}/></div><div className={window.location.pathname===v.url?styles.titleitemAct:styles.titleitem}>{v.title}</div></div>)
          })
        }
      </div>)
  }
}
