<template>
  <div class="homepage">
    <div class="homepage__header">
      <div class="header-row">
        <div class="row-img-box">
          <img src="~@/assets/images/avatar.png"
               class="row-img" />
        </div>
        <p class="row-name">18688517797</p>
        <div class="blank"></div>
        <router-link :to="{ name: 'PayRecord' }"
                     class="row-link">缴费记录</router-link>
      </div>
      <router-link :to="{ name: 'PayAdd' }"
                   class="header-swipe">
        <img src="~@/assets/images/swipe.png"
             class="swipe-img" />
      </router-link>
    </div>
    <div class="homepage__mine">
      <img src="~@/assets/images/bg1.png"
           class="mine-bg" />
    </div>
    <div class="homepage__pay">
      <homepage-title title="生活缴费" />
      <ul class="pay-list">
        <li v-for="(item, i) in payList"
            :key="i"
            class="list-item">
          <a class="item-link">
            <div class="item-img-box">
              <img :src="item.url"
                   class="item-img"
                   :style="{ width: item.width }" />
            </div>
            <p class="item-text">{{ item.name }}</p>
          </a>
        </li>
      </ul>
    </div>
    <div class="homepage__increment">
      <homepage-title title="增值服务" />
      <div class="increment-list">
        <img src="~@/assets/images/increment-1.png"
             class="increment-img" />
        <img src="~@/assets/images/increment-2.png"
             class="increment-img" />
      </div>
    </div>
    <div class="homepage__discover">
      <homepage-title title="发现" />
      <div class="discover-content">
        <div class="content-item">
          <img src="~@/assets/images/c1.png"
               class="item-img" />
          <div class="text">
            <p class="text-name">本月缴费抽现金红包</p>
            <p class="text-tip">月缴月有礼，每人限1次</p>
          </div>
          <div class="blank"></div>
          <a class="item-button">了解详情</a>
        </div>
        <div class="content-item">
          <img src="~@/assets/images/c2.png"
               class="item-img" />
          <div class="text">
            <p class="text-name">200GB不限速</p>
            <p class="text-tip">享热门VIP，多款APP免流</p>
          </div>
          <div class="blank"></div>
          <a class="item-button">了解详情</a>
        </div>
        <div class="content-item last">
          <img src="~@/assets/images/c3.png"
               class="item-img" />
          <div class="text">
            <p class="text-name">特惠流量月包</p>
            <p class="text-tip">30元5GB，加量不加价</p>
          </div>
          <div class="blank"></div>
          <a class="item-button">了解详情</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomepageTitle from '@/components/homepage/HomepageTitle'

export default {
  name: 'HomePage',
  components: { HomepageTitle },
  data () {
    return {
      payList: [
        { name: '房租', url: require('@/assets/images/house.png'), width: '0.475rem' },
        { name: '水费', url: require('@/assets/images/water.png'), width: '0.37rem' },
        { name: '电费', url: require('@/assets/images/electric.png'), width: '0.435rem' },
        { name: '燃气费', url: require('@/assets/images/fire.png'), width: '0.355rem' },
        { name: '有线电视', url: require('@/assets/images/tv.png'), width: '0.48rem' },
        { name: '固话', url: require('@/assets/images/tel.png'), width: '0.435rem' },
        { name: '宽带', url: require('@/assets/images/wifi.png'), width: '0.49rem' },
        { name: '物业费', url: require('@/assets/images/property.png'), width: '0.425rem' },
        { name: '暖气费', url: require('@/assets/images/heating.png'), width: '0.44rem' }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.homepage
  &__header
    position relative
    width 100%
    height 5.3rem
    background linear-gradient(180deg, rgba(0, 92, 230, 1) 0%, rgba(42, 127, 255, 1) 100%)
    .header-row
      display flex
      align-items center
      height 1.28rem
      padding 0 0.2rem
      .row-img-box
        display flex
        justify-content center
        align-items center
        width 0.64rem
        height 0.64rem
        background-image url('~@/assets/images/avatar-border.png')
        background-size 100% 100%
      .row-img
        width 0.6rem
        height 0.6rem
      .row-name
        margin-left 0.08rem
        line-height 0.42rem
        font-size 0.3rem
        color #fff
      .row-link
        line-height 0.4rem
        font-size 0.28rem
        color #fff
    .header-swipe
      display block
      padding 0 0.5rem
      .swipe-img
        width 100%
  &__mine
    position relative
    margin-top -1.82rem
    .mine-bg
      width 100%
      height 3.8rem
  &__pay
    margin-top 0.46rem
    .pay-list
      margin-top 0.32rem
      &:after
        content ''
        display block
        width 0
        height 0
        zoom 1
        clear both
      .list-item
        float left
        margin-bottom 0.3rem
        width 20%
        padding 0 0.2rem
        .item-link
          display block
          margin 0 auto
          width 1rem
        .item-img-box
          margin 0 auto 0.1rem
          display flex
          justify-content center
          align-items center
          width 0.48rem
          height 0.5rem
        .item-img
          height auto
        .item-text
          line-height 0.32rem
          font-size 0.24rem
          color #1C1C1C
          text-align center
  &__increment
    margin-top 0.16rem
    .increment-list
      margin-top 0.15rem
      display flex
      justify-content space-between
      padding 0 0.2rem
      .increment-img
        width 3.45rem
        height auto
  &__discover
    margin-top 0.46rem
    .discover-content
      margin 0.15rem 0.2rem 0.56rem
      padding 0.5rem 0 0.56rem
      border-radius 0.24rem
      box-shadow 0px 5px 15px rgba(0, 49, 123, 0.15)
      .content-item
        display flex
        align-items center
        margin-bottom 0.5rem
        padding 0 0.3rem
        &.last
          margin-bottom 0
        .item-img
          width 0.98rem
          height 0.98rem
        .text
          margin-left 0.18rem
          .text-name
            line-height 0.45rem
            font-size 0.32rem
            font-weight 700
            color #242424
          .text-tip
            margin-top 0.08rem
            line-height 0.32rem
            font-size 0.24rem
            color #A8A8A8
        .item-button
          width 1.2rem
          border-radius 0.24rem
          background-color #0762EA
          line-height 0.4rem
          font-size 0.22rem
          color #fff
          text-align center
</style>
