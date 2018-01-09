import React from 'react';
import horn from '../lenderhomeimg/喇叭(2).png';
import styles from './Prodcast.scss'
import { Carousel} from 'antd-mobile';
import RouterPager from '../../../comps/RouterPager'
export default class Prodcast extends RouterPager{
    constructor (props) {
        super(props)
    }
    state = {
        deleteFlag: false,
        tip: ["王xx在随行付金融平台的小赢卡贷申请成功了！","222","333"],
    };
  componentWillMount() {

  }
  goUrl(){
      this.props.history.push('/message')
  }
  render(){
    const { text } = this.props;
    const {tip=[]} = this.state
    return (
      <div>
        {
          (!this.state.deleteFlag)?
          <div className={styles.allContainer} >
            <div style={{display:'inline-block',position:'absolute'}}><img className={styles.laba} src={horn}/></div>
            <div className={styles.lineItem}>
              <Carousel vertical
                        dots={false}
                        dragging={false}
                        swiping={false}
                        autoplay={tip.length>1?true:false}
                        infinite
                        speed={300}
                        autoplayInterval={5000}
                        resetAutoplay={false}
              >
                {tip.map((data, key) => (
                  <div key={key} className={styles.vitem} onClick={()=>{this.goUrl()}}>{data}</div>
                ))}
              </Carousel>
            </div>
          </div>:''
        }
      </div>
    )
  }
}
