<template>
  <ul
    class="nav"
  >
    <li
      :class="activeClass === 0?'actives': ''"
      @click="tab(0)"
    >报告文件上传</li>
    <li
      :class="activeClass === 1?'actives': ''"
      @click="tab(1)"
    >资料上传</li>
    <li
      :class="activeClass === 2?'actives': ''"
      @click="tab(2)"
    >在线报告数据上传</li>
  </ul>
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
        if (router === '/reportUp/reportUpload') {
          this.activeClass = 0
        } else if (router === '/reportUp/recordUpload') {
          this.activeClass = 1
        } else if (router === '/reportUp/onlineDataUpload') {
          this.activeClass = 2
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
            this.$router.push({ path: '/reportUp/reportUpload' })
            break
          case 1:
            this.$router.push({ path: '/reportUp/recordUpload' })
            break
          case 2:
            this.$router.push({ path: '/reportUp/onlineDataUpload' })
            break
        }
      }
    },
    mounted () {
      this.jumpRouter(this.$route.path)
      this.tabActive(this.$route.path)
    }
  };
</script>
<style lang="stylus" scoped>
.nav
  margin-left 20px
  .actives
    border-bottom 6px solid color-primary
  li
    display inline-block
    color color-primary
    font-size 16px
    height 52px
    line-height 52px
    padding 0 4px
    cursor pointer
    margin-right 20px
</style>