<template>
  <div>
    <home-banner/>
    <div class="white_bg contact_us">
      <div class="gridmark_main clearfix">
        <div class="cont__main l animated bounceInLeft">
          <div class="cont__title">联系我们</div>
          <div class="cont__info">
            1.广告宣传资料·取样·商品导入·相关资料需求
          </div>
          <div class="cont__info">
            咨询处：格睿码克科技（深圳）有限公司 市场部
          </div>
          <div class="cont__info">
            Email：suixueqin@gridmark.cn
          </div>
          <div class="cont__info">
            TELL：0755-8693-6435
          </div>
          <div class="cont__info">
            Address：深圳市南山区桂庙路北向南瑞峰A区3楼3056号
          </div>
          <div class="cont__info">
            http://www.gridmark.cn
          </div>
        </div>
        <div class="cont__imgl r animated bounceInRight">
          <img class="cont__img" src="../../assets/images/contact_us/map.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import homeBanner from 'components/banner'
export default {
  name: 'home',
  components: {
    homeBanner
  }
}
</script>
<style lang="stylus" scoped>
.contact_us
  height 550px
.gridmark_banner
  background url("../../assets/images/contact_us/banner.png") no-repeat center center
  background-color #F4F4FF
  background-size cover
.cont
  &__img
    width 655px
    // height 451px
    border-radius 6px
    overflow hidden
  &__img:hover
    transform scale(1.5)
  &__main
    width 541px
    height 220px
    font-size 22px
    line-height 30px
    color color-hover
    text-align left
  &__info
    margin-top 10px
    line-height 30px
    letter-spacing 1px
    font-size 20px
    transform:scale(0.9, 0.9)
    transform-origin left
  &__main--info
    display inline-block
  &__yellow
    color color-yellowH
  &__red
    color color-redH
</style>
