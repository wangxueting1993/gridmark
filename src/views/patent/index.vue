<template>
  <div>
    <home-banner/>
    <div class="white_bg contact_us">
      <div class="gridmark_main clearfix">
        666
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
.contact_us
  height 350px
.gridmark_banner
  background url("../../assets/images/patent/banner.png") no-repeat center center
  background-color #F4F4FF
  background-size cover

</style>
