import axios from 'axios';

// 创建实例
const service = axios.create({
    baseURL: '/upTimeRobotApi',
    timeout: 10000
})

// 请求拦截器
service.interceptors.request.use(
    config => {
        const token = 'ur3076170-1b8b538bae0a8ce7549688cf'
        config.headers['Authorization'] = `Bearer ${token}`
        return config
    },
    error => {
        return Promise.reject(error);
    }
)

// 响应拦截器
service.interceptors.response.use(
    response => {
        if (response.status !== 200) {
            console.error('接口错误:', response.data.message)
            return Promise.reject(response.data.message);
        }
        return response.data;
    },
    error => {
        return Promise.reject(error);
    }
)

export default service
