<template>
  <div class="homepage-title">
    <span class="title-line"></span>
    <h2 class="title-text">{{ title }}</h2>
  </div>
</template>

<script>
export default {
  name: 'HomepageTitle',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>
.homepage-title
  display flex
  align-items center
  padding-left 0.2rem
  .title-line
    display block
    margin-right 0.22rem
    width 0.08rem
    height 0.3rem
    border-radius 0.04rem
    background-color #055FE6
  .title-text
    line-height 0.4rem
    font-size 0.28rem
    font-weight 700
    color #1A1A1A
</style>
