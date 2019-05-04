<template>
  <div>
    <home-banner />
    <div class="gridmark_main info">
      <div class="info__title">公/司/介/绍</div>
      <div class="info__eg clearfix">
        <div class="info__eg__cont l">
          格睿码克科技（深圳）有限公司（简称格睿码克）于2014年创建于深圳市南山区。是一家具备整体系统方案及软硬件研发能力的中外合资创新型高科技公司。一直以来，公司始终致力于智能领域的教育、书写及显示的相关科技进行研发与推进。经过多年经验积累与专业技术沉淀，因对科技领域的研究与探索而获得十一项自主知识产权的发明专利。在公司不断研发新型高科技产品的推动下，现已将国内外顶级技术专家及大量自主知识产权凝聚在一起，为全球十余家教育龙头企业提供专业服务。
        </div>
        <div class="info__eg__img r">
          <img
            class="info__eg__img"
            src="../../assets/images/company_info/info.png"
            alt=""
          >
        </div>
      </div>
    </div>
    <div class="leader">
      <div class="gridmark_main">
        <div class="leader__title">优/秀/团/队</div>
        <div class="leader__eg clearfix">
          <div class="leader__eg__img l">
            <img
              class="leader__eg__img"
              src="../../assets/images/company_info/leader.png"
              alt=""
            >
          </div>
          <div class="leader__eg__cont l">
            <div>ｙo shi da kenn ji简介</div>
            <div>日本大学 海洋建築专业　博士</div>
            <div>日本电气通讯大学 兼职教授</div>
            <div>数码景观株式会社（上市） 创始人</div>
            <div>IMJ株式会社（上市） 创始人</div>
            <div>拥有全球发明专利363项</div>
            <div>获得日本96博览会重赏展览映像部门 最高奖</div>
            <div>获得第4届日本制作大奖 优秀奖</div>
            <div>2012年度文部科学大臣发明奖</div>
            <div>2017年度日本全国发明表彰发明奖</div>
          </div>
        </div>
        <div>
        </div>
        <div class="leader__eg clearfix">
          <div class="leader__eg__img l">
            <img
              class="leader__eg__img"
              src="../../assets/images/company_info/leader.png"
              alt=""
            >
          </div>
          <div class="leader__eg__cont l">
            <div>戴伟简介</div>
            <div>日本早稻田大学 微电子专业 硕士</div>
            <div>索尼公司 图像传感器 高级工程师兼项目负责人</div>
            <div>北京思比科微电子 市场总监</div>
            <div>拥有15年以上从业经验的光电影像领域专家</div>
            <div>为索尼，宾得，迈瑞等各行业知名企业搭建光电系统</div>
            <div>担任国内外多家光电影像相关企业的技术顾问</div>
          </div>
        </div>
      </div>
    </div>
    <div class="map">
      <div class="gridmark_main">
        <div class="info__title">股/东/及/技/术/顾/问/团/队</div>
        <div class="info__cont">
          国家千人计划专家 国家特聘专家两名清华大学影像压缩处理专家教授一名日本早稻田大学 九州大学 电气通讯大学等技术专家团队五名
        </div>
        <div class="info__title">技/术/合/作/单/位</div>
        <div class="map__img">
          <el-row>
            <el-col :span="8">
              <div class="grid-content bg-purple">
                <img
                  class="info__img"
                  src="../../assets/images/company_info/1.png"
                  alt=""
                >
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple-light">
                <img
                  class="info__img"
                  src="../../assets/images/company_info/2.png"
                  alt=""
                >
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple">
                <img
                  class="info__img"
                  src="../../assets/images/company_info/3.png"
                  alt=""
                >
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <div class="grid-content bg-purple">
                <img
                  class="info__img"
                  src="../../assets/images/company_info/4.png"
                  alt=""
                >
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple-light">
                <img
                  class="info__img"
                  src="../../assets/images/company_info/5.png"
                  alt=""
                >
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple">
                <img
                  class="info__img"
                  src="../../assets/images/company_info/6.png"
                  alt=""
                >
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <div class="grid-content bg-purple">
                <img
                  class="info__img"
                  src="../../assets/images/company_info/7.png"
                  alt=""
                >
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import homeBanner from 'components/banner'
export default {
  name: 'info',
  components: {
    homeBanner
  }
}
</script>
<style lang="stylus" scoped>
.gridmark_banner
  background url('../../assets/images/company_info/banner.png') no-repeat center center
  background-color #F4F4FF
  background-size cover
.leader
  background color-bg-default
  height 682px
  &__box
    padding-top 0
  &__title
    font-size 15px
    color color-hover
    height 45px
    line-height 45px
  &__eg
    height 270px
    margin-bottom 60px
    &__img
      width 270px
      height 250px
      margin-right 158px
    &__cont
      width 295px
      height 212px
      margin-top 10px
      color color-hover
      font-size 13px
      line-height 22px
      text-align left 
.map
  height 500px
  // background color-bg-default
  &__img
    width 707px
    height 210px
    margin-top 40px
    // margin-left 32px
  &__title
    font-size 15px
    color color-hover
    height 45px
    line-height 45px
.info
  padding-top 0
  height 345px
  &__title
    font-size 15px
    color color-hover
    height 45px
    line-height 45px
  &__eg
    &__img
      width 343px
      height 257px
    &__cont
      width 295px
      height 212px
      margin-top 25px
      color color-hover
      font-size 13px
      line-height 22px
  &__img
    width 119px
    height 44px
  &__cont
    font-size 13px
    color color-hover
    line-height 22px
    font-family PingFangSC-Regular
</style>
