import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
Vue.use(Router)

const router = new Router({
  routes: [
    { 
      path: '/', 
      component: ()=> import('@/pages/Index/template.vue')
    },
    { // 创建博客页面
      path: '/create',
      component: ()=> import('@/pages/Create/template.vue'),
      meta: { requiresAuth: true }
    },
    { // 用户详情页面
      path: '/detail/:blogId', 
      component: ()=> import('@/pages/Detail/template.vue')
    },
    { // 编辑博客页面
      path: '/edit/:blogId', 
      component: ()=> import('@/pages/Edit/template.vue'),
      meta: { requiresAuth: true }
    },
    { // 登录
      path: '/login', 
      component: ()=> import('@/pages/Login/template.vue')
    },
    { // 我的个人主页
      path: '/my', 
      component: ()=> import('@/pages/My/template.vue'),
      meta: { requiresAuth: true }
    },
    { // 注册
      path: '/register', 
      component: ()=> import('@/pages/Register/template.vue')
    },
    { // 其他用户主页
      path: '/user/:blogId', 
      component: ()=> import('@/pages/User/template.vue')
    }
  ]
})
/* 此处遍历上面的每一项路由，然后获取路由信息
 * to.matched.some(record=> record.meta.requiresAuth)获取路由中的 meta.requiresAuth 信息
 * 如果匹配到存在 meta.requiresAuth 的路由，则执行里面的 if 否则继续下一步(next())
 */
router.beforeEach((to, from, next)=>{
  if(to.matched.some(record=> record.meta.requiresAuth)){
    // 此处if判断，获取到 store > modules > auth.js 中的用户登录状态 (actions checkLogin)
    store.dispatch('checkLogin').then(isLogin=>{
      // 如果用户未登录则跳转到登录页面，如果用户登录就继续执行下一步
      if(!isLogin){
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }
    })
  } else {
    next()
  }
})

export default router