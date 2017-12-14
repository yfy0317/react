import fetch from 'sx-fetch'
import {Toast} from 'antd-mobile'


const fetchinit =()=>{
    fetch.axiosInstance.interceptors.request.use(cfg => {
        return cfg;
    }, error => {
        return Promise.reject(error);
    });
    fetch.axiosInstance.interceptors.response.use(response => {
        return response;
    }, error => {
        return Promise.reject(error);
    });
    fetch.init({
        baseURL: '/api',
        onShowErrorTip: (err, errorTip) => {
            if(errorTip) Toast.fail(errorTip);
        },
        onShowSuccessTip: (response, successTip) => {
            if(successTip) Toast.info(successTip, 2);
        },
        isMock: (url) => {
            return url.startsWith('/mock');
        }
    });
}
export default fetchinit