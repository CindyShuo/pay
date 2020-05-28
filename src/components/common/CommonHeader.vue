<template>
  <header class="common-header">
    <slot name="left"></slot>
    <div class="blank"></div>
    <slot name="right"></slot>
  </header>
</template>

<script>
export default {
  name: 'CommonHeader'
}
</script>

<style lang="stylus" scoped>
.common-header
  display flex
  align-items center
  width 100%
  height 1.28rem
  padding 0 0.2rem
  background-color #fff
</style>
