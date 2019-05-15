<template lang="html">
  <!-- <div class="gridmark_banner" id="gridmark_banner">
  </div> -->
  <el-carousel :interval="2000" arrow="always" class="gridmark_banners"  :height="bannerHeight + 'px'">
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
  name: 'gridmarkBanner',
  data (){
    return {
      bannerHeight: ''
    }
  },
  methods: {
    setSize: function () {
      this.bannerHeight = 740 / 2560 * this.screenWidth
      if (this.bannerHeight > 740) this.bannerHeight = 740
      if (this.bannerHeight < 360) this.bannerHeight = 360
    }
  },
  mounted() {
    this.setSize();
    const that = this;
    window.addEventListener('resize', function () {
      that.screenWidth = $(window).width();
      that.setSize();
    }, false);
  }
}
</script>

<style lang="stylus">
.gridmark_banners {
  width: 100%;
  height: 456px;
  background-color: color-bg-default;
}

.el-carousel__container {
  height: 456px;
}

.info__jiaotong {
  width: 100%;
  height: inherit;
  min-height: 456px;
  min-width: 1400px;
}
</style>
