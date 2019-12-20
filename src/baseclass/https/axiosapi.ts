///<reference types="axios" />
import WebApi from "./webapi";
axios.defaults.timeout = 10000; // 超时时间
axios.defaults.baseURL = WebApi.backstagePath; // 默认地址
axios.defaults.withCredentials = true;
export default axios;
