webpackJsonp([4],{R6sS:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("ZYmg"),s={data:function(){return{blogId:null,title:"",description:"",content:"",atIndex:!1}},created:function(){var t=this;this.blogId=this.$route.params.blogId,n.a.getDetail({blogId:this.blogId}).then(function(e){t.title=e.data.title,t.description=e.data.description,t.content=e.data.content,t.atIndex=e.data.atIndex})},methods:{onEdit:function(){var t=this;n.a.updateBlog({blogId:this.blogId},{title:this.title,content:this.content,description:this.description,atIndex:this.atIndex}).then(function(e){t.$message.success(e.msg),t.$router.push({path:"/detail/"+e.data.id})})}}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"edit"}},[i("div",{staticClass:"edit-main"},[i("h2",[t._v("编辑文章")]),t._v(" "),t._m(0),t._v(" "),i("el-input",{attrs:{placeholder:"请输入文章标题"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._v(" "),t._m(1),t._v(" "),i("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:10},placeholder:"请输入文章简介"},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}),t._v(" "),t._m(2),t._v(" "),i("el-input",{attrs:{type:"textarea",autosize:{minRows:6,maxRows:10},placeholder:"请输入文章内容"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),t._v(" "),i("div",[i("el-switch",{attrs:{"active-color":"#409EFF","active-text":"在首页展示"},model:{value:t.atIndex,callback:function(e){t.atIndex=e},expression:"atIndex"}})],1),t._v(" "),i("el-button",{attrs:{size:"medium",type:"primary",plain:""},on:{click:t.onEdit}},[t._v("确定")])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h3",[this._v("文章标题"),e("span",{staticClass:"msg"},[this._v("( 限30个字 )")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",[this._v("内容简介"),e("span",{staticClass:"msg"},[this._v("( 限30个字 )")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",[this._v("文章内容"),e("span",{staticClass:"msg"},[this._v("( 限30个字 )")])])}]};var o=i("VU/8")(s,a,!1,function(t){i("xWsD")},null,null);e.default=o.exports},xWsD:function(t,e){}});
//# sourceMappingURL=4.71a5700262776ac01c4e.js.map