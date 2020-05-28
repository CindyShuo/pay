<template>
  <div class="pay-page">
    <common-header>
      <a slot="left"
         @click="back"
         class="header-left">
        <img src="~@/assets/images/arrow-back.png"
             class="header-back" />
        <span class="header-text">生活缴费</span>
      </a>
      <router-link slot="right"
                   :to="{ name: 'PayRecord' }"
                   class="header-text header-text--button">缴费记录</router-link>
    </common-header>
    <div class="pay-page__header">
      <div class="title">
        <img src="~@/assets/images/electric.png"
             class="title-img" />
        <span class="title-text">电费</span>
      </div>
    </div>
    <div class="pay-page__content">
      <input placeholder="请输入购电金额"
             class="content-input" />
      <ul class="content-list">
        <li class="list-item">
          <p class="item-text">缴费单位</p>
          <p class="item-text">国网北京市电力公司（智能电表）</p>
        </li>
        <li class="list-item">
          <p class="item-text">客户编号</p>
          <p class="item-text">1206563369</p>
        </li>
        <li class="list-item">
          <p class="item-text">户名</p>
          <p class="item-text">*大帅</p>
        </li>
        <li class="list-item">
          <p class="item-text">用户地址</p>
          <p class="item-text">北京市大兴区清源街道办事处枣园东里北区兴化大街中建国际港22-02-1602</p>
        </li>
        <li class="list-item">
          <p class="item-text">补加金额</p>
          <p class="item-text">0.00元</p>
        </li>
        <li class="list-item">
          <p class="item-text">扣减金额</p>
          <p class="item-text">0.00元</p>
        </li>
        <li class="list-item">
          <p class="item-text">补交阶梯差价金额</p>
          <p class="item-text">0.00元</p>
        </li>
        <li class="list-item">
          <p class="item-text">购电次数</p>
          <p class="item-text">00000056次</p>
        </li>
      </ul>
    </div>
    <a class="pay-page__button">立即缴费</a>
  </div>
</template>

<script>
import CommonHeader from '@/components/common/CommonHeader'

export default {
  name: 'PayPage',
  components: { CommonHeader },
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/css/global.styl'
.pay-page
  &__content
    margin 0 0.2rem
    padding 0.4rem 0.3rem 0.48rem
    border-radius 0.24rem
    background-color #fff
    .content-input
      display block
      margin-bottom 0.45rem
      width 100%
      height 0.98rem
      padding-left 0.48rem
      border 1px solid #EAEAEC
      border-radius 0.98rem
      font-size 0.36rem
      &::-webkit-input-placeholder /* WebKit browsers */
        color #A8A8A8
      &::-moz-placeholder /* Mozilla Firefox 19+ */
        color #A8A8A8
      &:-ms-input-placeholder /* Internet Explorer 10+ */
        color #A8A8A8
    .content-list
      .list-item
        display flex
        justify-content space-between
        margin-bottom 0.28rem
        &:last-child
          margin-bottom 0
        .item-text
          max-width 4.5rem
          line-height 0.32rem
          font-size 0.24rem
          color #1C1C1C
          text-align right
  &__button
    display block
    margin 0.8rem 0.2rem 0
    height 0.98rem
    border-radius 0.98rem
    background-color $button-color
    line-height 0.98rem
    font-size 0.32rem
    color #fff
    text-align center
</style>
