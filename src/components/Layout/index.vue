<template>
  <el-container>
    <el-header>
      <top-nav/>
    </el-header>
    <el-main>
      <router-view class="main_bg" />
    </el-main>
    <!-- <el-footer>Footer</el-footer> -->
  </el-container>
</template>
<script>
import TopNav from './TopNav'
export default {
  name: 'topnav',
  components: {
    TopNav
  }
}
</script>
<style lang="stylus">
.el-header
  padding 0
</style>