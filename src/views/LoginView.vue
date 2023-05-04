<template>
  <div class="login-page">
    <h1>This is a login page</h1>
    <form>
      <ul>
        <li>
          <label for="code">用户账号：</label>
          <input type="text" v-model="userId" required>
        </li>
        <li>
          <label for="pwd">密码：</label>
          <input type="password" v-model="currentPassword" required>
        </li>
        <button type="button" @click="login">登录</button>
      </ul>
    </form>
  </div>
</template>

<style>
form {
  margin: 10px;
  padding: 20px;
}
li {
  margin: 15px;
  font-size: 18px;
}
label {
  display: inline-block;
  width: 90px;
  text-align: right;
}
input {
  padding: 3px;
}
</style>

<script>
  import { userStore } from '@/store/userStore.js';
  import axios from 'axios';
  export default {
    data() {
        return {
          userStore,
          userId: null,
          currentPassword: null
        };
    },
    methods: {
      login() {
        let that = this;
        axios.post('userinfo/login', {
          userId: that.userId,
          password: that.currentPassword
        })
        .then(function (response) {
          console.log(response.data);
          if(response.data.result === true) {
            that.userStore.login(that.userId, response.data.requestData.userRole);
            that.$router.go(-1);
            window.alert(response.data.requestResult);
          } else {
            window.alert(response.data.requestResult);
          }
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {
          // 总是会执行
        });
      }
    },
    mounted() {
    }
}
</script>