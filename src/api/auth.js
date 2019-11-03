/* 引入之前使用 axios 封装的接口 API */
import request from '@/helpers/request'
/* 将我们和后端约定的 URL 接口的路径分别存入，并且命名
 */
const URL = {
    REGISTER: '/auth/register',
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    GET_INFO: '/auth'
}
/* 导出一个对象 */
export default {
    /* 传入的参数需要是一个对象 */
    /* 注册 */
    register({ username, password }) {
        /* 执行这个方法时返回的是一个 Promise对象，将这个对象再次 return 出去 */
        return request(URL.REGISTER, 'POST', { username, password })
    },
    /* 登录 */
    login({ username, password }) {
        return request(URL.LOGIN, 'POST', { username, password })
    },
    /* 注销 */
    logout() {
        return request(URL.LOGOUT)
    },
    /* 获取用户信息 */
    getInfo() {
        return request(URL.GET_INFO)
    }
}