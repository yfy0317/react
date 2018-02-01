import fetch from 'sx-fetch'
import {Toast} from 'antd-mobile'
const fetchinit =(init)=>{
    fetch.axiosInstance.interceptors.request.use(cfg => {
        init('showLoading',true)
        return cfg;
    }, error => {
        return Promise.reject(error);
    });
    fetch.axiosInstance.interceptors.response.use(response => {
        init('showLoading',false)
        return response;
    }, error => {
        init('showLoading',false)
        return Promise.reject(error);
    });
    fetch.init({
        baseURL: '/api',
        onShowErrorTip: (err, errorTip) => {
            if(errorTip) Toast.fail(errorTip);
        },
        onShowSuccessTip: (response, successTip) => {
            switch (response.data.code){
                case '0000':
                    return;
                case '2000':
                    //版本更新;
                    $.cookie('Version-Token', response.data.msg, { expires: 8, path: '/'});
                    setTimeout(()=>{
                        window.location.reload();
                    },1000)
                    throw new Error('请稍候，页面升级中');
                default:
                    return;
            }
        },
        isMock: (url) => {
            return url.startsWith('/mock');
        }
    });
}

export default fetchinit