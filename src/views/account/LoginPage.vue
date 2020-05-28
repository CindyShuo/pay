<template>
  <div class="account-page">
    <common-header>
      <p slot="left"
         class="header-text">登录</p>
      <router-link slot="right"
                   :to="{ name: 'RegisterPage' }"
                   class="header-text header-text--button">注册</router-link>
    </common-header>
    <div class="account-page__content">
      <h2 class="content-title">{{ isValidate ? '短信验证码登陆' : '密码登录' }}</h2>
      <div class="content-form">
        <div class="form-input-box">
          <common-nation class="form-nation" />
          <input v-model="mobile"
                 placeholder="请输入您的手机号"
                 class="form-input is-mobile" />
        </div>
        <!-- 手机验证码登录 -->
        <template v-if="isValidate">
          <div class="form-input-box last">
            <common-sms type="login"
                        :before="smsValidate"
                        :method="smsMethod"
                        :params="{}"
                        :callback="smsCallback"
                        text="获取验证码"
                        :timeout="60"
                        class="form-sms"
                        :class="{ 'is-abled': isSms }" />
            <input v-model="validate"
                   placeholder="请输入验证码"
                   autocomplete="new-password"
                   class="form-input" />
          </div>
        </template>
        <!-- 密码登录 -->
        <template v-else>
          <div class="form-input-box last">
            <input type="password"
                   v-model="password"
                   placeholder="请输入密码"
                   autocomplete="new-password"
                   class="form-input" />
          </div>
        </template>
        <router-link :to="{ name: 'HomePage' }"
                     class="form-button"
                     :class="{ 'is-abled': isInput }">登录</router-link>
      </div>
      <a @click="changeMethod"
         class="content-link">
        <span class="link-text">{{ isValidate ? '密码登录' : '手机验证码登录' }}</span>
        <span class="link-arrow"></span>
      </a>
    </div>
  </div>
</template>

<script>
import CommonHeader from '@/components/common/CommonHeader'
import CommonNation from '@/components/common/CommonNation'
import CommonSms from '@/components/common/CommonSms'

export default {
  name: 'LoginPage',
  components: { CommonHeader, CommonNation, CommonSms },
  data () {
    return {
      mobile: '',
      validate: '',
      password: '',
      isValidate: true
    }
  },
  computed: {
    isSms () {
      return Boolean(this.mobile)
    },
    isInput () {
      return this.mobile && (this.validate || this.password)
    }
  },
  methods: {
    changeMethod () {
      this.mobile = ''
      this.validate = ''
      this.password = ''
      this.isValidate = !this.isValidate
    },
    smsValidate () {
      return this.isSms
    },
    smsMethod () { },
    smsCallback () { }
  }
}
</script>

<style lang="stylus" scoped></style>
