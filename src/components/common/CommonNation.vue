<template>
  <div class="common-nation">
    <p @click="openPicker"
       class="nation-code">{{ code }}</p>
    <span class="nation-arrow"></span>
    <van-popup v-model="show"
               position="bottom"
               get-container="body"
               :safe-area-inset-bottom="true">
      <van-picker :columns="columns"
                  @confirm="onConfirm"
                  @cancel="onCancel" />
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'CommonNation',
  data () {
    return {
      code: '+86',
      columns: ['+86', '+1-264'],
      show: false
    }
  },
  methods: {
    openPicker () {
      this.show = true
    },
    onCancel () {
      this.show = false
    },
    onConfirm (value, index) {
      this.show = false
      console.log(value)
      this.code = value
    }
  }
}
</script>

<style lang="stylus" scoped>
.common-nation
  display flex
  align-items center
  .nation-code
    margin-right 0.12rem
    line-height 0.45rem
    font-size 0.32rem
    color #1C1C1C
  .nation-arrow
    display block
    width 0.08rem
    height 0.14rem
    background-image url('~@/assets/images/arrow-gray.png')
    background-size 100% 100%
    transform rotate(90deg)
</style>
