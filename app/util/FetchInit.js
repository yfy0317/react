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
            if(successTip) Toast.success(successTip);
        },
        isMock: (url) => {
            return url.startsWith('/mock');
        }
    });
}

export default fetchinit