<template>
  <div id="edit">
    <h2>编辑文章</h2>
    <h3>文章标题<span class="msg">( 限30个字 )</span></h3>
    <el-input></el-input>
    <h3>内容简介<span class="msg">( 限30个字 )</span></h3>
    <el-input type="textarea" rows=3></el-input>
    <h3>文章内容<span class="msg">( 限30个字 )</span></h3>
    <el-input type="textarea" rows=10></el-input>
    <el-button size="medium" type="primary" plain>确定</el-button>
  </div>
</template>


<script src="./template.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" src="./template.less"></style>
