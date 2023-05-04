<template>
  <div class="personal">
    <h1>This is a personal page</h1>
    <div v-if="userStore.ifLogin">
      <ul>
        <div>头像：{{ userInfo.avatarImg }}</div>
        <div>用户名：{{ userInfo.userName }}</div>
        <div>个人简介：{{ userInfo.bio }}</div>
      </ul>
      <div v-if="userStore.userRole ===1" class="buyer-functions">
        您是买家。功能：修改信息；管理地址；查看订单
      </div>
      <div v-else class="seller-functions">
        您是卖家。功能：修改个人信息：管理书店；管理书籍；查看订单
      </div>
      <button @click="logout">登出</button>
    </div>
    <div class="login-register" v-else>
      您尚未登录！
      <RouterLink to="/login" class="login-button">登录</RouterLink>
      <RouterLink to="/login" class="register-button">注册</RouterLink>
    </div>
  </div>
</template>

<style>
.login-register {
  display: flex;
}
.login-button, .register-button {
  background-color: lightblue;
  width: 80px;
  margin: 20px;
  padding: 10px;
  border-radius: 5px;
  text-decoration: none;
}
button {
  margin: 20px;
}
</style>

<script>
  import { userStore } from '@/store/userStore.js';
  import axios from 'axios';
  export default {
    data() {
      return {
        userStore,
        userInfo: {}
      }
    },
    methods: {
      logout() {
        if (window.confirm('确定退出登录？')) {
          userStore.logout();
        }
      }
    },
    mounted() {
      let that = this;
      if (userStore.ifLogin) {
        axios.get('userinfo/' + userStore.userId, {
        })
        .then(function (response) {
          console.log(response);
          that.userInfo = response.data;
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {
          // 总是会执行
        });
      }
    }
  }
</script>