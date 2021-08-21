import { API } from "../config";
import axios from "axios";

const request = axios.create({})

request.interceptors.request.use(function (config) {
    config.baseURL = API
    return config
})

export default request
