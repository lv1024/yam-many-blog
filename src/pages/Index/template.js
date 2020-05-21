import blog from '@/api/blog.js'

export default {
    data() {
        return {
            blogs: [],
            total: 0, //博客总页数
            page: 1
        }
    },
    created() {
        this.page = parseInt(this.$route.query.page) || 1
        blog.getIndexBlogs({ page: this.page }).then(res => {
            this.blogs = res.data
            this.total = res.total
            this.page = res.page
        })
    },
    methods: {
        onPagesChange(newPage) {
            blog.getIndexBlogs({ page: newPage }).then(res => {
                this.blogs = res.data
                this.total = res.total
                this.page = res.page
                this.$router.push({ path: '/', query: { page: newPage } })
            })
        }
    }
}
