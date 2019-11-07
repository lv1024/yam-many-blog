<template>
  <div id="my">
    <section class="user-info">
      <div class="photo">
        <img :src="user.avatar" :alt="user.username" class="avatar">
      </div>
      <div class="text">
        <h3>{{user.username}}</h3>
        <p>鸡软骨xxx</p>
      </div>
    </section>
    <section>
      <router-link class="item" v-for="blog in blogs" :key="blog.id" :to="`/detail/${blog.id}`">
        <h3>{{blog.title}}</h3>
        <p>{{blog.description}}<p>
        <div class="operate">
          <div class="actions">
            <router-link :to="`/edit/${blog.id}`"><el-link type="primary" icon="el-icon-edit">编辑</el-link></router-link>
            <el-link @click.prevent="onDelete(blog.id)" type="primary" icon="el-icon-delete">删除</el-link>
          </div>
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