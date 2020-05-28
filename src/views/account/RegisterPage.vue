<template>
  <div class="account-page">
    <common-header>
      <p slot="left"
         class="header-text">注册</p>
      <router-link slot="right"
                   :to="{ name: 'LoginPage' }"
                   class="header-text header-text--button">登录</router-link>
    </common-header>
    <div class="account-page__content is-register">
      <div class="content-form is-register">
        <div class="form-input-box">
          <common-nation class="form-nation" />
          <input v-model="mobile"
                 placeholder="请输入您的手机号"
                 class="form-input is-mobile" />
        </div>
        <div class="form-input-box">
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
        <div class="form-input-box last">
          <input type="password"
                 v-model="password"
                 placeholder="请输入密码"
                 autocomplete="new-password"
                 class="form-input" />
        </div>
        <router-link :to="{ name: 'LoginPage' }"
                     class="form-button"
                     :class="{ 'is-abled': isInput }">确认注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import CommonHeader from '@/components/common/CommonHeader'
import CommonNation from '@/components/common/CommonNation'
import CommonSms from '@/components/common/CommonSms'

export default {
  name: 'RegisterPage',
  components: { CommonHeader, CommonNation, CommonSms },
  data () {
    return {
      mobile: '',
      validate: '',
      password: ''
    }
  },
  computed: {
    isSms () {
      return Boolean(this.mobile)
    },
    isInput () {
      return this.mobile && this.validate && this.password
    }
  },
  methods: {
    smsValidate () {
      return this.isSms
    },
    smsMethod () { },
    smsCallback () { }
  }
}
</script>

<style lang="stylus" scoped></style>
