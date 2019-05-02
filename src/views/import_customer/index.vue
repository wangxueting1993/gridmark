<template>
  <div>
    <home-banner />
    <div class="gridmark_main import">
      <div class="import__title">
        客/户/品/牌
      </div>
      <div class="import__main">
        <el-row :gutter="24" class="row-space">
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <div class="import__product">
                <div>
                  <img
                    class="import__img"
                    src="../../assets/images/import_customer/1.png"
                    alt=""
                  >
                </div>
                <div>
                  <span class="import__tip">
                    E-Pencil
                  </span>
                  <span class="import__tip">
                    日本公文式教育集团（Kumon）
                  </span>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <div class="import__product">
                <div class="import__product">
                  <div>
                    <img
                      class="import__img"
                      src="../../assets/images/import_customer/2.png"
                      alt=""
                    >
                  </div>
                  <div>
                    <span class="import__tip">
                      kumiita
                    </span>
                    <span class="import__tip">
                      日本公文式教育集团（Kumon）
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <div class="import__product">
                <div class="import__product">
                  <div>
                    <img
                      class="import__img"
                      src="../../assets/images/import_customer/3.png"
                      alt=""
                    >
                  </div>
                  <div>
                    <span class="import__tip">
                      Ting笔
                    </span>
                    <span class="import__tip">
                      德国ting
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <div class="import__product">
                <div>
                  <img
                    class="import__img"
                    src="../../assets/images/import_customer/4.png"
                    alt=""
                  >
                </div>
                <div>
                  <span class="import__tip">
                    E-Pencil
                  </span>
                  <span class="import__tip">
                    日本公文式教育集团（Kumon）
                  </span>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <div class="import__product">
                <div class="import__product">
                  <div>
                    <img
                      class="import__img"
                      src="../../assets/images/import_customer/5.png"
                      alt=""
                    >
                  </div>
                  <div>
                    <span class="import__tip">
                      kumiita
                    </span>
                    <span class="import__tip">
                      日本公文式教育集团（Kumon）
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
import homeBanner from 'components/banner'
export default {
  name: 'news',
  components: {
    homeBanner
  }
}
</script>
<style lang="stylus" scoped>
.gridmark_banner
  background url('../../assets/images/import_customer/banner.png') no-repeat center center
  background-color #F4F4FF
  background-size cover
.import
  padding-top 0
  line-height 45px
  color color-hover
  font-size 10px
  height 550px
  &__title
    height 45px
  &__product
    border-radius 3px
    width 220px
    height 200px
    background color-bg-gray
    span
      display inline-block
      font-size 8px
      color color-hover
  &__img
    width 210px
    height 155px
    margin-top 5px
  &__main
    display block
    height 450px
  &__tip
    // margin-right 25px
    transform scale(0.9, 0.9)
    transform-origin left
.row-space
  margin-bottom 40px
</style>

