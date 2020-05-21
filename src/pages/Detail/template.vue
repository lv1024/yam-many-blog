<template>
  <div id="detail">
    <section class="user-info">
      <div class="info-main">
        <div class="photo">
          <img :src="user.avatar" :alt="user.username" :title="user.username" class="avatar">
        </div>
        <div class="text">
          <h3>{{title}}</h3>
          <p><router-link :to="`/user/${user.id}`">{{user.username}}</router-link>发布于{{friendlyDate(createdAt)}}</p>
        </div>
      </div>
    </section>
    <section class="article" v-html="markdown"></section>
  </div>
</template>
<script src="./template.js"></script>
<style scoped lang="less" src="./template.less"></style>
