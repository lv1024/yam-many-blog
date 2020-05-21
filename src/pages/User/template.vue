<template>
  <div id="my">
    <section class="user-info">
      <div class="info-main">
        <div class="photo">
          <img :src="user.avatar" :alt="user.username" class="avatar">
        </div>
        <div class="text">
          <h3>{{user.username}}</h3>
        </div>
      </div>
    </section>
    <section class="user-content">
      <router-link class="item" v-for="blog in blogs" :key="blog.id" :to="`/detail/${blog.id}`">
          <h3>{{blog.title}}</h3>
          <p>{{blog.description}}<p>
          <div class="operate">
            <div class="date">
              <span class="year">{{splitDate(blog.createdAt).year}} 年</span>
              <span class="month">{{splitDate(blog.createdAt).month}} 月</span>
              <span class="day">{{splitDate(blog.createdAt).date}} 日</span>
            </div>
          </div>
      </router-link>
    </section>
    <section class="blog-pages" v-show="total>10">
      <el-pagination
        background
        :current-page.sync="page"
        layout="prev, pager, next"
        :total="total"
        @current-change="onPagesChange">
      </el-pagination>
    </section>
  </div>
</template>

<script src="./template.js"></script>
<style scoped lang="less" src="./template.less"></style>
