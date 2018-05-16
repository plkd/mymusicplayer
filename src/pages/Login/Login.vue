<template>
  <div class="login">
    <m-header title="登录"></m-header>
    <div class="input-item">
      <span class="tip">账号：</span>
      <input type="text" class="account" v-model="account">
    </div>
    <div class="input-item">
      <span class="tip">密码：</span>
      <input type="password" class="password" v-model="password">
    </div>
    <input type="button" value="登录" @click="_loginPhone">
    <input type="button" value="刷新" @click="_refresh">
    <input type="button" value="签到" @click="_signin">
    <input type="button" value="个人中心" @click="_userInfo">
  </div>
</template>
<script>
import MHeader from '@/components/header/header'
import { loginPhone, refresh, signin, getUserInfo } from '@/api'

export default {
  name: 'LogIn',
  data() {
    return {
      account: '',
      password: ''
    }
  },
  components: {
    MHeader
  },
  methods: {
    init() {},
    _loginPhone() {
      loginPhone(this.account, this.password)
        .then(result => {
          let uid = result.account.id
          window.localStorage.setItem('uid', uid)
          this.$router.push({path: `/playlist`})
        })
        .catch(err => {
          console.log(err)
        })
    },
    _refresh() {
      refresh().then(res => {
        console.log(res)
        if (res.code === 200) {
          alert('refresh successfully!')
        }
      })
    },
    _signin() {
      signin().then(res => {
        console.log(res)
      })
    },
    _userInfo() {
      getUserInfo()
        .then(result => {})
        .catch(err => {
          console.log(err);
        })
    }
  }
}
</script>
<style lang="stylus" scoped>
.login
  input[type='button']
    border 1px solid #000000
</style>
