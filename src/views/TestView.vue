<template>
  <h1>Test Page</h1>
  <div>data:<br>{{ resultData }}</div>
</template>

<style>

</style>

<script>
  export default {
    data() {
      return {
        resultData: {},
        testParam: 'cart/list'
      }
    },
    mounted() {
      let that = this;
      const axios = require('axios').default;
      const instance = axios.create({
        baseURL: 'http://localhost:8443/',
        timeout: 1000,
      });
      instance.get(that.testParam, {
      })
      .then(function (response) {
        console.log(response);
        that.resultData = response.data;
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // 总是会执行
      });
    }
  }
</script>