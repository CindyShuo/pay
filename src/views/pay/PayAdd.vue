<template>
  <div class="pay-page pay-add">
    <common-header>
      <a slot="left"
         @click="back"
         class="header-left">
        <img src="~@/assets/images/arrow-back.png"
             class="header-back" />
        <span class="header-text">新增缴费账户</span>
      </a>
    </common-header>
    <div class="pay-page__header">
      <div class="title">
        <img src="~@/assets/images/electric.png"
             class="title-img" />
        <span class="title-text">电费</span>
      </div>
      <div class="city">
        <span class="city-text">北京市</span>
        <span class="city-arrow"></span>
      </div>
    </div>
    <div class="pay-add__content">
      <div class="content-form">
        <p class="form-title">缴费单位</p>
        <div class="form-input-box">
          <input v-model="company"
                 disabled
                 class="form-input is-mobile" />
        </div>
      </div>
      <div class="content-form">
        <p class="form-title">缴费单位</p>
        <div class="form-input-box">
          <a class="form-scan">查询用户编号</a>
          <input v-model="code"
                 placeholder="请输入用户编号"
                 class="form-input is-mobile" />
        </div>
      </div>
    </div>
    <div @click="changeCheck"
         class="pay-add__agree">
      <img v-if="isCheck"
           src="~@/assets/images/check-true.png"
           class="agree-icon" />
      <img v-else
           src="~@/assets/images/check.png"
           class="agree-icon" />
      <p class="agree-text">我已阅读并同意<a class="text-link">《生活缴费协议》</a></p>
    </div>
    <router-link :to="{ name: 'PayPage' }"
                 class="pay-add__button"
                 :class="{ 'is-abled': isInput }">下一步</router-link>
  </div>
</template>

<script>
import CommonHeader from '@/components/common/CommonHeader'

export default {
  name: 'PayAdd',
  components: { CommonHeader },
  data () {
    return {
      company: '国网北京市电力公司',
      code: '',
      isCheck: false
    }
  },
  computed: {
    isInput () {
      return this.code && this.isCheck
    }
  },
  methods: {
    changeCheck () {
      this.isCheck = !this.isCheck
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/css/global.styl'
.pay-add
  &__content
    margin 0 0.2rem
    height 4.9rem
    padding 0 0.3rem
    border-radius 0.24rem
    background-color #fff
    .content-form
      padding-top 0.64rem
      .form-title
        margin-bottom 0.12rem
        line-height 0.4rem
        font-size 0.28rem
        color #1C1C1C
      .form-input-box
        position relative
      .form-input
        display block
        width 100%
        padding 0.2rem 0
        border-bottom 1px solid #EAEAEC
        background-color transparent !important
        line-height 0.45rem
        font-size 0.32rem
        color #212121
      .form-scan
        position absolute
        top 50%
        right 0
        transform translateY(-50%)
        line-height 0.4rem
        font-size 0.28rem
        color #055FE6
  &__agree
    display flex
    justify-content center
    align-items center
    margin-top 0.4rem
    .agree-icon
      margin-right 0.08rem
      width 0.36rem
      height 0.36rem
    .agree-text
      line-height 0.4rem
      font-size 0.28rem
      color #202020
      .text-link
        color #055FE6
  &__button
    display block
    margin 0.4rem 0.2rem 0
    height 0.98rem
    border-radius 0.98rem
    background-color #D1D9E5
    line-height 0.98rem
    font-size 0.32rem
    color #fff
    text-align center
    &.is-abled
      background-color $button-color
</style>
