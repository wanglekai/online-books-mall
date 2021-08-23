import { API } from "../config";
import axios from "axios";
import { message } from "antd";
import store from '../store'

const request = axios.create({})

request.interceptors.request.use(function (config) {
    config.baseURL = API
    // let loading = useSelector(state => state.loading)
    store.dispatch({type: 'changed', payload: true})
    return config
})
request.interceptors.response.use(function (response) {
    store.dispatch({type: 'changed', payload: false})

    return response
    // const promise = new Promise()
    // console.log(response);

}, function (error) {
    // console.log(error.message);
    let msg = error.response ? error.response.data.error : error.message
    message.error('抱歉,发生错误 ' + msg)
    store.dispatch({type: 'changed', payload: false})
    
    return Promise.reject(error)
})

export default request
