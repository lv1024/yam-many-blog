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
@import "./assets/main.less";

</style>
