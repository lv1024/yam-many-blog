<template>
  <div id="app">
    <Header id="header"></Header>
    <main id="main">
      <div class="content">
        <router-view></router-view>
      </div>
    </main>
    <Footer id="footer"></Footer>
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang='less'>
@import "./assets/common.less";
@import "./assets/base.less";
@import "./assets/markdown.less";

#header{
  padding: 10px;
  box-shadow: @boxShadow;
  background-color: @bgColor;
}
#main{
  min-height: calc(100vh - 172px);
  padding: 10px;
  .content {
    margin: 0 auto;
    max-width: @layout;
  }
}
#footer{
  padding: 10px;
  box-shadow: @boxShadow;
  background-color: @bgColor;
}
</style>
