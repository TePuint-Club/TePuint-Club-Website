import axios from 'axios'
import config from '.././main/config.js'
import status from '.././main/status.js'

// 创建axios 实例
const service = axios.create({
    baseURL: config.baseURL, // api的base_url
    timeout: 10000 // 请求超时时间
})

// request 拦截器
service.interceptors.request.use(
    config => {
        // 这里可以自定义一些config 配置
        status.isLoading = true;
        return config
    },
    error => {
        //  这里处理一些请求出错的情况
        status.isLoading = false;
        Promise.reject(error)
    }
)

// response 拦截器
service.interceptors.response.use(
    response => {
        const res = response.data
        status.isLoading = false;
        // 这里处理一些response 正常放回时的逻辑
        if (res.code == 200) {
            return res.data
        }
        return res
    },
    error => {
        mdui.snackbar({
            message: error,
            position: 'right-bottom'
        });
        // 这里处理一些response 出错时的逻辑
        status.isLoading = false;
        return Promise.reject(error)
    }
)

export default service