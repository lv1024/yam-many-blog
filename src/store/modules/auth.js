/* 引入 api 路由 */
import auth from '@/api/auth'

/* 默认下的 state 数据 */
const state = {
  /* 用户账号信息，比如用户名，密码之类 */
  user: null,
  /* 用户登录状态 */
  isLogin: false
}

/* 同步的变更用户登录状态 */
const getters = {
  user: state => state.user,
  isLogin: state => state.isLogin
}
/* 操作用户的账户数据 */
const mutations = {
    /* state 修改前的数据，payload 需要传入的新数据 */
  setUser(state, payload) {
    state.user = payload.user
  },

  setLogin(state, payload) {
    state.isLogin = payload.isLogin
  }
}

/* 异步的操作 */
const actions = {
  /* 登录 */
  /* xxx({ commit }, { username, password })，ES6语法，表示第二个参数传入的是一个对象，该对象必须有 username 和 password 属性 */
  login({ commit }, { username, password }) {
    return auth.login({ username, password })
      .then(res => {
        commit('setUser', { user: res.data })
        commit('setLogin', { isLogin: true })
      })
  },
  /* 注册 */
  async register({ commit }, { username, password }) {
    let res = await auth.register({ username, password })
    /* 上面 mutations 中的 setUser(state, payload) 中传入的 payload 就代表 括号中的 { user: res.data } */
    commit('setUser', { user: res.data })
    commit('setLogin', { isLogin: true })
    return res.data
  },
  /* 注销 */
  async logout({ commit }) {
    await auth.logout()
    commit('setUser', { user: null })
    commit('setLogin', { isLogin: false })
  },
  /* 检测用户登录状态，如果未登录则设置用户数据为空，并返回 false ，如果登录则设置当前用户数据，并返回 true */
  async checkLogin({ commit, state}) {
    /* 此处的 state 是上面的 const state  */
    if(state.isLogin) return true
    /* api 文件 中的 auth.getInfo 用来判断用户是否登录 */
    let res = await auth.getInfo()
    commit('setLogin', { isLogin: res.isLogin })
    if(!res.isLogin) return false
    commit('setUser', { user: res.data })
    return true
  }

  /*
  then 的使用方法
    this.logout().then(isLogin=>{
    
    })

  */
}

export default {
  state,
  getters,
  mutations,
  actions
}