import Vue from 'vue'
import axios from 'axios'

export default Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios;
    }
})

axios.defaults.baseURL = 'http://127.0.0.1:3000';
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    console.log('请求拦截器');
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    console.log('响应拦截器');
    // 返回数据 
    console.log(response);
    return response.data;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});


