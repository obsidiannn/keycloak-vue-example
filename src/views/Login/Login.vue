<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left" @submit.native.prevent>
      <div class="title-container">
        <h3 class="title">登录demo</h3>
      </div>
      <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'loginIndex',
  data() {
    return {
      loginForm: {
        username: 'admin',
        password: 'admin'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur' }],
        password: [{ required: true, trigger: 'blur' }]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      let redirect = 'https://localhost:3000/callback'

      let redirectEncode = encodeURIComponent(redirect)
      console.log(redirectEncode);
       let url = 'https://${host}/auth/realms/app/protocol/openid-connect/auth?client_id=croptest&redirect_uri='+redirectEncode+'&response_type=code&scope=openid&state=&nonce=' + new Date().getTime() * Math.random()
       window.location.href = url;

    }
  }
}
</script>

<style scoped>

</style>
