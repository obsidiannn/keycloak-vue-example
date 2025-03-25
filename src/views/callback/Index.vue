<template>
  <div>callback</div>
</template>

<script>
import axios from 'axios'
import permission from "@/directive/permission/permission.js";
import {param2Obj} from "@/utils/index";
import qs from 'qs'
export default {
  name: "callbackIndex",
  created: function () {
    console.log(this.$route.params)
    this.login()
  },
  methods: {
    login() {
      // 根据code换取token
      // 这一步通常放在server端，因为有secret
      const urlObj = param2Obj(location.href)
      let data = {
        code: urlObj.code.replace('#', ''),
        session_state: urlObj.session_state,
        // redirect_uri: decodeURI('http://localhost:8080/callback'),
        redirect_uri: decodeURI('https://325b-154-9-243-104.ngrok-free.app/callback'),
        grant_type: 'authorization_code',
        client_id: 'croptest',
        client_secret: 'f3c0a28d-54d5-4df8-8590-275c7a27e1bb'
      }
      console.log('调用login')
      console.log(data);
      axios({
        method: 'post',
        url: '/api/auth/realms/app/protocol/openid-connect/token',
        data: qs.stringify(data),
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(resp=>{
        console.log(resp)
        permission.put('token',resp.data.access_token)
        permission.put('refresh',resp.data.refresh_token)
        alert('登录成功')
        window.location.href = '/'
      })
    }
  }
}
</script>

<style scoped>

</style>
