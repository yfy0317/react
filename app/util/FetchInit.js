import fetch from 'sx-fetch'
import {message} from 'antd'

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
            if(errorTip) message.error(errorTip);
        },
        onShowSuccessTip: (response, successTip) => {
            if(successTip) message.info(successTip, 2);
        },
        isMock: (url) => {
            return url.startsWith('/mock');
        }
    });
}
export default fetchinit