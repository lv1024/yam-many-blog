import { mapActions } from "vuex";
import { Message } from 'element-ui'

export default {
    data() {
      return {
        username: '',
        password1: '',
        password2: '',
      }
    },
    methods: {
      ...mapActions(['register']),
      onRegister(){
        if(this.password1 === this.password2){
          this.register({username: this.username, password: this.password1})
          .then(()=>{
            this.$router.push({path:'/'})
          })
        }else {
          Message.error('两次输入的密码不一致，请重新输入！')
        }
      }
    }
  }
