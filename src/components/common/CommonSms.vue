<template>
  <div class="common-sms">
    <a @click="getSms"
       v-if="!count">{{ text }}</a>
    <span v-else
          class="text-time">{{ timeText }}</span>
  </div>
</template>

<script>
export default {
  name: 'CommonSms',
  props: {
    // 验证码标示，表示存入storage的键值，应保证项目内不重复
    type: {
      type: String,
      required: true
    },
    // 获取验证码前校验
    before: {
      type: Function
    },
    // 获取验证码方法
    method: {
      type: Function,
      required: true
    },
    // 获取验证码参数
    params: {
      type: Object,
      required: true
    },
    // 获取验证码回调
    callback: {
      type: Function,
      required: true
    },
    // 获取验证码文案
    text: {
      type: String,
      required: true
    },
    // 倒计时文案
    timeTextFormat: {
      type: Function
    },
    // 倒计时时间
    timeout: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      timer: null,
      count: 0,
      clickStatus: true
    }
  },
  computed: {
    timeText () {
      if (this.timeTextFormat) return this.timeTextFormat(this.count)
      else return `${this.count}秒`
    }
  },
  methods: {
    init () {
      clearInterval(this.timer)
      this.count = 0
      this.clickStatus = true
    },
    async getSms () {
      if (this.before && !this.before()) return
      if (!this.clickStatus) return
      this.clickStatus = false

      try {
        const res = await this.method(this.params)
        this.callback(res)
        const now = Date.now()

        this.timer = setInterval(() => {
          this.count = this.timeout - ~~((Date.now() - now) / 1000)
          if (this.count < 1) {
            clearInterval(this.timer)
            this.count = 0
            this.clickStatus = true
          }
        }, 1000)
      } catch (err) {
        this.clickStatus = true
        // 发送失败处理
        this.$accountMessage({
          message: err.data.desc,
          type: false,
          closed: false
        })
      }
    }
  },
  destroyed () {
    clearInterval(this.timer)
  }
}
</script>

<style lang='stylus' scoped></style>
