<template>
  <div>这是首页

    <div>当前用户：
      {{ userInfo }}
    </div>

  </div>

</template>

<script>
import permission from "@/directive/permission/permission.js";
import axios from "axios";
export default {
  name: "homeIndex",
  created: function () {
    this.checkLogin()
    this.getUserInfo()
  },
  methods: {
    checkLogin() {
      let token = permission.get('token')
      if (!token) {
        window.location.href = '/Login'
      }

    },
    getUserInfo(){
      axios.get('/api/auth/realms/app/master/userinfo?access_token=' + permission.get('token'))
          .catch(r=>{
            console.log('error' + r)
            console.dir(r)
            if(r.response.status === 401){
              permission.clear('token')
              window.location.href = '/Login'
            }
          })
          .then(
          resp=>{
            this.userInfo = resp
          }
      )
    }


  },
  data(){
    return {
      userInfo: {}
    }
  }
}
</script>

<style scoped>

</style>
