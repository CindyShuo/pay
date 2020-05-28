<template>
  <div class="pay-page pay-record">
    <common-header>
      <a slot="left"
         @click="back"
         class="header-left">
        <img src="~@/assets/images/arrow-back.png"
             class="header-back" />
        <span class="header-text">缴费记录</span>
      </a>
    </common-header>
    <ul class="pay-record__list">
      <li class="list-item">
        <p class="item-title">
          <span class="title-text">本月</span>
          <span class="title-arrow"></span>
        </p>
        <div class="item-content">
          <ul>
            <li class="content-item">
              <img src="~@/assets/images/electric.png"
                   class="item-img" />
              <p class="item-price">300.00</p>
              <div class="item-main">
                <p class="item-name">电费 - *大帅</p>
                <p class="item-time">昨天 16:30</p>
              </div>
            </li>
            <li class="content-item">
              <img src="~@/assets/images/water.png"
                   class="item-img" />
              <p class="item-price">68.00</p>
              <div class="item-main">
                <p class="item-name">水费 - *大帅</p>
                <p class="item-time">05-20 16:30</p>
              </div>
            </li>
            <li class="content-item last">
              <img src="~@/assets/images/property.png"
                   class="item-img" />
              <p class="item-price">1280.00</p>
              <div class="item-main">
                <p class="item-name">物业费 - *大帅</p>
                <p class="item-time">05-08 16:30</p>
              </div>
            </li>
          </ul>
        </div>
      </li>
      <li class="list-item">
        <p class="item-title">
          <span class="title-text">4月</span>
          <span class="title-arrow"></span>
        </p>
        <div class="item-content">
          <ul>
            <li class="content-item">
              <img src="~@/assets/images/fire.png"
                   class="item-img" />
              <p class="item-price">20.00</p>
              <div class="item-main">
                <p class="item-name">燃气费 - *大帅</p>
                <p class="item-time">04-30 16:30</p>
              </div>
            </li>
            <li class="content-item last">
              <img src="~@/assets/images/water.png"
                   class="item-img" />
              <p class="item-price">168.00</p>
              <div class="item-main">
                <p class="item-name">水费 - *大帅</p>
                <p class="item-time">04-20 16:30</p>
              </div>
            </li>
          </ul>
        </div>
      </li>
      <li class="list-item">
        <p class="item-title">
          <span class="title-text">3月</span>
          <span class="title-arrow"></span>
        </p>
        <div class="item-content">
          <ul>
            <li class="content-item">
              <img src="~@/assets/images/house.png"
                   class="item-img" />
              <p class="item-price">8960.00</p>
              <div class="item-main">
                <p class="item-name">房租 - *大帅</p>
                <p class="item-time">03-30 16:30</p>
              </div>
            </li>
            <li class="content-item last">
              <img src="~@/assets/images/tv.png"
                   class="item-img" />
              <p class="item-price">280.00</p>
              <div class="item-main">
                <p class="item-name">有线电视 - *大帅</p>
                <p class="item-time">03-20 16:30</p>
              </div>
            </li>
          </ul>
        </div>
      </li>
    </ul>
    <p class="more">没有更多了</p>
  </div>
</template>

<script>
import CommonHeader from '@/components/common/CommonHeader'

export default {
  name: 'PayRecord',
  components: { CommonHeader },
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>
.pay-record
  padding-bottom 0.24rem
  &__list
    .list-item
      .item-title
        display flex
        align-items center
        height 0.98rem
        padding-left 0.5rem
        .title-text
          width 0.7rem
          line-height 0.4rem
          font-size 0.28rem
          font-weight 700
          color #1C1C1C
        .title-arrow
          display block
          width 0.16rem
          height 0.28rem
          background-image url('~@/assets/images/arrow-gray.png')
          background-size 100% 100%
          transform rotate(90deg)
      .item-content
        margin 0 0.2rem
        padding 0 0.3rem
        border-radius 0.24rem
        background-color #fff
        .content-item
          position relative
          height 1.6rem
          border-bottom 1px solid #EAEAEC
          &.last
            border-bottom none
          .item-img
            position absolute
            top 0.4rem
            left 0
            width 0.4rem
            height auto
          .item-price
            position absolute
            top 0.35rem
            right 0
            line-height 0.64rem
            font-size 0.45rem
            color #1C1C1C
          .item-main
            position absolute
            top 0.42rem
            left 0.68rem
            .item-name
              line-height 0.45rem
              font-size 0.32rem
              color #1C1C1C
            .item-time
              margin-top 0.06rem
              line-height 0.32rem
              font-size 0.24rem
              color #A8A8A8
  .more
    margin-top 0.4rem
    line-height 0.32rem
    font-size 0.24rem
    color #A8A8A8
    text-align center
</style>
