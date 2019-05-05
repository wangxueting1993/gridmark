<template>
  <div
    class="nav-top clearfix"
  >
    <ul class="nav r">
      <li
        class="home"
        :class="activeClass === 0?'actives': ''"
        @click="tab(0)"
      >首页</li>
      <li
        :class="activeClass === 6?'actives': ''"
        @click="tab(6)"
      >公司介绍</li>
      <li
        :class="activeClass === 1?'actives': ''"
        @click="tab(1)"
      >产品</li>
      <li
        :class="activeClass === 2?'actives': ''"
        @click="tab(2)"
      >技术</li>
      <li
        :class="activeClass === 4?'actives': ''"
        @click="tab(4)"
      >发明专利</li>
      <li
        :class="activeClass === 3?'actives': ''"
        @click="tab(3)"
      >客户中心</li>
      <li
        :class="activeClass === 5?'actives': ''"
        @click="tab(5)"
      >新闻</li>
      <li
        :class="activeClass === 7?'actives': ''"
        @click="tab(7)"
      >加入我们</li>
      <li
        :class="activeClass === 8?'actives': ''"
        @click="tab(8)"
      >联系我们</li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'topnav',
    data() {
      return {
        activeName: 'second',
        styles: {},
        activeClass: 0,
        isUpload: false
      };
    },
    watch: {
      active: {
        handler: 'setUnderlineStyle',
        immediate: true
      },
      $route () {
        let router = this.$route.path
        this.jumpRouter(router)
        this.tabActive(router)
      }
    },
    methods: {
      jumpRouter (router) {
        if (
          router === '/reportUp/reportUpload' ||
          router === '/reportUp/recordUpload' ||
          router === '/reportUp/onlineDataUpload'
        ) {
          this.isUpload = true
        } else {
          this.isUpload = false
        }
      },
      tabActive (router) {
        if (router === '/home') {
          this.activeClass = 0
        } else if (router === '/product') {
          this.activeClass = 1
        } else if (router === '/technology') {
          this.activeClass = 2
        } else if (router === '/import_customer') {
          this.activeClass = 3
        } else if (router === '/patent') {
          this.activeClass = 4
        } else if (router === '/news') {
          this.activeClass = 5
        } else if (router === '/company_info') {
          this.activeClass = 6
        } else if (router === '/join_us') {
          this.activeClass = 7
        } else if (router === '/contact_us') {
          this.activeClass = 8
        }
      },
      setUnderlineStyle () {
        this.$nextTick(() => {
          const target = this.$refs[this.active]
          if (target) {
            const wrap = this.$refs.wrap.getBoundingClientRect()
            const { width, left } = target.$el.getBoundingClientRect()
            this.styles = {
              width: width + 'px',
              transform: `translate3d(${left - wrap.left}px, 0, 0)`
            }
          }
        })
      },
      tab (index) {
        this.activeClass = index
        switch (index) {
          case 0:
            this.$router.push({ path: '/home' })
            break
          case 1:
            this.$router.push({ path: '/product' })
            break
          case 2:
            this.$router.push({ path: '/technology' })
            break
          case 3:
            this.$router.push({ path: '/import_customer' })
            break
          case 4:
            this.$router.push({ path: '/patent' })
            break
          case 5:
            this.$router.push({ path: '/news' })
            break
          case 6:
            this.$router.push({ path: '/company_info' })
            break
          case 7:
            this.$router.push({ path: '/join_us' })
            break
          case 8:
            this.$router.push({ path: '/contact_us' })
            break
        }
      }
    },
    mounted () {
      // this.jumpRouter(this.$route.path)
      this.tabActive(this.$route.path)
    }
  };
</script>
<style lang="stylus" scoped>
.nav-top
  width 1200px
  margin 0 auto
.nav
  // margin-right 97px
  .actives
    color color-hover
    border-bottom 4px solid color-hover
  .home
    font-weight bold
  li
    display inline-block
    color color-primary
    font-size 16px
    padding 20px 16px 20px 16px
    cursor pointer
    margin-right 30px
</style>