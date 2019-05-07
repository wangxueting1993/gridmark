<template>
  <div>
    <home-banner />
    <div class="gridmark_main patent">
      <div class="patent__title">发明专利</div>
      <div class="patent__cont">
        做为一家拥有自主知识产权的高科技公司，“创新致远 勇往直前”是格睿码克永恒不变的信念。格睿码克现已获得国际专利363件，其中11项为自主知识产权发明专利，涵盖到智能点阵系统基本原理、点码阵列、实现方案、软件识别及编解码算法、硬件实现等方面。
      </div>
      <div class="patent__carousel">
        <el-carousel indicator-position="outside">
          <el-carousel-item>
            <el-row>
              <el-col :span="8">
                <div class="grid-content bg-purple">
                  <img
                    class="patent__img"
                    src="../../assets/images/patent/1.png"
                    alt=""
                  >
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple-light">
                  <img
                    class="patent__img"
                    src="../../assets/images/patent/2.png"
                    alt=""
                  >
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple">
                  <img
                    class="patent__img"
                    src="../../assets/images/patent/3.png"
                    alt=""
                  >
                </div>
              </el-col>
            </el-row>
          </el-carousel-item>
          <el-carousel-item>
            <el-row>
              <el-col :span="8">
                <div class="grid-content bg-purple">
                  <img
                    class="patent__img"
                    src="../../assets/images/patent/4.png"
                    alt=""
                  >
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple-light">
                  <img
                    class="patent__img"
                    src="../../assets/images/patent/5.png"
                    alt=""
                  >
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple">
                  <img
                    class="patent__img"
                    src="../../assets/images/patent/6.png"
                    alt=""
                  >
                </div>
              </el-col>
            </el-row>
          </el-carousel-item>
          <el-carousel-item>
            <el-row>
              <el-col :span="8">
                <div class="grid-content bg-purple">
                  <img
                    class="patent__img"
                    src="../../assets/images/patent/7.png"
                    alt=""
                  >
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple-light">
                  <img
                    class="patent__img"
                    src="../../assets/images/patent/8.png"
                    alt=""
                  >
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple">
                  <img
                    class="patent__img"
                    src="../../assets/images/patent/9.png"
                    alt=""
                  >
                </div>
              </el-col>
            </el-row>
          </el-carousel-item>
          <el-carousel-item>
            <el-row>
              <el-col :span="8">
                <div class="grid-content bg-purple">
                  <img
                    class="patent__img"
                    src="../../assets/images/patent/10.png"
                    alt=""
                  >
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple-light">
                  <img
                    class="patent__img"
                    src="../../assets/images/patent/11.png"
                    alt=""
                  >
                </div>
              </el-col>
            </el-row>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="map">
      <div class="gridmark_main map__top">
        <div class="patent__title">发明专利</div>
        <div class="patent__cont">
          做为一家拥有自主知识产权的高科技公司，“创新致远 勇往直前”是格睿码克永恒不变的信念。格睿码克现已获得国际专利363件，其中11项为自主知识产权发明专利，涵盖到智能点阵系统基本原理、点码阵列、实现方案、软件识别及编解码算法、硬件实现等方面。
        </div>
        <div class="map__img">
          等UI图
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import homeBanner from 'components/banner'
export default {
  name: 'patent',
  components: {
    homeBanner
  }
}
</script>
<style lang="stylus" scoped>
.gridmark_banner
  background url('../../assets/images/patent/banner.png') no-repeat center center
  background-color #F4F4FF
  background-size cover
.map
  height 750px
  background color-bg-default
  &__top
    padding-top 0px
  &__img
    width 1200px
    height 420px
    background pink
    margin-top 40px
    margin-left 32px
  &__title
    font-size 30px
    color color-hover
    height 90px
    line-height 90px
  &__cont
    width 1108px
    font-size 30px
    color color-hover
    margin-left 125px
    line-height 44px
    font-family PingFangSC-Regular
.patent
  padding-top 0
  height 850px
  &__title
    font-size 30px
    color color-hover
    height 90px
    line-height 90px
  &__carousel
    margin-top 20px
    height 240px
    /deep/
      .el-carousel__container
        height 560px
  &__img
    width 381px
    height 557px
  &__cont
    width 1108px
    font-size 26px
    color color-hover
    margin-left 125px
    line-height 44px
    font-family PingFangSC-Regular
</style>
