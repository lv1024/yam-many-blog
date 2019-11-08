import axios from 'axios'
/* 引入 element-ui 的一个提示窗口 */
import { Message } from 'element-ui'

/* 请求的数据类型约定 */
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
/* 后端接口域名地址(设置后请求时就可以不用写这部分 URL) */
axios.defaults.baseURL = 'https://blog-server.hunger-valley.com'
/* 前后端分离的项目，前端后端是在不同的服务器上，会涉及到跨域(默认情况跨域请求是不带 Cookie 数据的)
 * 此处设置异步请求(跨域)带 Cookie 数据 -- */
axios.defaults.withCredentials = true

export default function request(url, type = 'GET', data = {}) {
    return new Promise((resolve, reject) => {
        /* 声明一个变量，存储 url 和 type */
        let option = {
            url,
            method: type
        }
    /*  判断请求类型，如果是 get 请求，就将 data 放到 option.params 中
     *  如果是其他类型，就将 data 直接放入 option.data 中 */
        if (type.toLowerCase() === 'get') {
            option.params = data
        } else {
            option.data = data
        }
        axios(option).then(res => {
            /* 如果返回的数据 data.status = 'ok'
             * - 如果成功返回数据格式：{ "status": "ok", "msg": "注册成功", "data": { xxx } }
             * - 之后就可以.then()处理这个数据 */
            if (res.data.status === 'ok') {
                /* 将数据传入 resolve() 函数中 */
                resolve(res.data)
            /* 如果请求数据未成功
             * - 如果错误返回数据格式：{"status": "fail", "msg": "错误原因"}
             * - 其中 res.data.msg 表示返回错误的原因 */
            } else {  
                /* 使用 element-ui 的提示方法(Message)报错 */
                Message.error(res.data.msg)
                /* 把错误传入 reject() */
                reject(res.data)
            }
        // 当发生网络异常的错误时，返回一个函数，执行以下内容    
        }).catch(err => {
            /* element-ui 报错提示网络异常 */
            Message.error('网络异常')
            /* 返回的数据中的msg属性为 '网络异常' */
            reject({ msg: '网络异常' })
        })
    })
}

/* 其他页面使用时需要引入此函数：
 * import request from '@/helpers/request.js' 
 */