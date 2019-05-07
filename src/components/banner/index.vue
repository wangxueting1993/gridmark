<template lang="html">
  <!-- <div class="gridmark_banner" id="gridmark_banner">
  </div> -->
  <el-carousel :interval="2000" arrow="always" class="gridmark_banners">
    <el-carousel-item>
      <img
        class="info__jiaotong"
        src="../../assets/images/banner/1.png"
        alt=""
      >
    </el-carousel-item>
    <el-carousel-item>
      <img
        class="info__jiaotong"
        src="../../assets/images/banner/2.png"
        alt=""
      >
    </el-carousel-item>
    <el-carousel-item>
      <img
        class="info__jiaotong"
        src="../../assets/images/banner/3.png"
        alt=""
      >
    </el-carousel-item>
    <el-carousel-item>
      <img
        class="info__jiaotong"
        src="../../assets/images/banner/4.png"
        alt=""
      >
    </el-carousel-item>
    <el-carousel-item>
      <img
        class="info__jiaotong"
        src="../../assets/images/banner/5.png"
        alt=""
      >
    </el-carousel-item>
    <el-carousel-item>
      <img
        class="info__jiaotong"
        src="../../assets/images/banner/6.png"
        alt=""
      >
    </el-carousel-item>
    <el-carousel-item>
      <img
        class="info__jiaotong"
        src="../../assets/images/banner/7.png"
        alt=""
      >
    </el-carousel-item>
    <el-carousel-item>
      <img
        class="info__jiaotong"
        src="../../assets/images/banner/8.png"
        alt=""
      >
    </el-carousel-item>
    <el-carousel-item>
      <img
        class="info__jiaotong"
        src="../../assets/images/banner/9.jpg"
        alt=""
      >
    </el-carousel-item>
    <el-carousel-item>
      <img
        class="info__jiaotong"
        src="../../assets/images/banner/10.jpg"
        alt=""
      >
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: 'gridmarkBanner'
}
</script>

<style lang="stylus">
.gridmark_banners
  width 100%
  height 456px
  // background-size cover
  background-color color-bg-default
.el-carousel__container
  height 456px
</style>
