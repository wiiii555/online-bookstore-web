<template>
  <nav>
    <div class="web-title">网络二手书交易平台</div>
    <div class="routers">
      <router-link to="/">首页</router-link> |
      <router-link to="/browse">浏览</router-link> |
      <router-link to="/search">搜索</router-link> |
      <router-link to="/personal">账户</router-link>
    </div>
  </nav>
    <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  display: flex;
  margin: 20px;
  padding: 10px;
  background-color: rgb(201, 234, 255);
  border-radius: 10px;
}

.web-title {
  margin-left: 3%;
  width: 57%;
  font-size: 20px;
  text-align: left;
  padding: 10px;
  font-weight: bold;
}
.routers {
  width: 40%;
  font-size: 16px;
  padding: 12px;
  text-align: right;
}

nav a {
  padding-left: 10px;
  padding-right: 10px;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: rgb(53, 62, 230);
}

</style>
