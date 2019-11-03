import request from '@/helpers/request.js' 
import auth from '@/api/auth.js'
import blog from '@/api/blog.js'

/* 便于测试，使用全局变量 */
window.request = request
window.auth = auth
window.blog = blog

export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      onClick1(){
        this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
      },
      onClick2(){
        this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message.success('已确认');
          }
        });
      }
    }
  }