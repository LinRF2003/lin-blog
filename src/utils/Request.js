import axios from 'axios';
import { BASEURL } from "../utils/config"
//创建axios的一个实例
let request = axios.create({
    baseURL: BASEURL,//接口统一域名
    timeout: 5000,//设置超时
    withCredentials: true,//关键
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
    },
})

//------------------- 一、请求拦截器 忽略
request.interceptors.request.use(function (config) {
    // 取出token
    const token = window.localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = token;
    }
    return config;
}, function (error) {
    // 对响应错误做点什么
    console.log('请求拦截器报错');
    console.log(error)
    // 对请求错误做些什么
    return Promise.reject(error);
});

//----------------- 二、响应拦截器 忽略
request.interceptors.response.use(function (response) {
    // console.log(response.data)
    if (response.data.code === 302) {
        window.location.href = '/login';
    }
    console.log(response.data)
    return response.data;
}, function (error) {
    // 对响应错误做点什么
    console.log('拦截器报错');
    console.log(error)
    return new Promise(error);
});

export default request.post;

