<template>
  <div class="return-and-title">
    <a class="return" @click="returnPage" title="返回上一级">&lt; 返回</a>
    <h1>书籍详情</h1>
  </div>
  <main>
    <div class="book-info-box">
      <div class="detail-box">
        <img src="https://via.placeholder.com/200x300.png" alt="Book Cover">
        <div class="info">
          <div class="final-title">标题：<strong>{{ bookInfo.bookName }}</strong></div>
          <div class="isbn">标准书号：{{ bookInfo.isbn }}</div>
          <div class="author">作者：{{ bookInfo.author }}</div>
          <div class="initial-title" v-if="bookInfo.ifTranslation">原书书名：{{ bookInfo.initialTitle }}</div>
          <div class="translator" v-if="bookInfo.ifTranslation">译者：{{ bookInfo.translator }}</div>
          <div class="publishing">出版社：{{ bookInfo.publishing }}</div>
          <div class="publish-time">出版时间：{{ bookInfo.publishTime }}</div>
          <div class="language">语言：{{ languageToString(bookInfo.lang) }}</div>
          <button class="add-like">加入收藏夹</button>
        </div>
      </div>
      <div class="desc">
        <dt>作品简介：</dt>
        <dd>{{ bookInfo.bookDesc }}</dd>
      </div>
    </div>
    <div class="pd-box">
      <table class="pd-table">
        <caption>商品详情</caption>
        <tr>
          <th>书店id</th>
          <th>价格</th>
          <th>操作</th>
        </tr>
        <tr>
          <td class="pd-null" v-if="pdList.length === 0" colspan="3">抱歉，当前暂无商品!</td>
        </tr>
        <tr class="pd-item" v-for="pdInfo in pdList" .key="pdInfo.pdId">
          <td>{{ pdInfo.storeId }}</td>
          <td>{{ pdInfo.price }}</td>
          <td class="add-cart" @click="addIntoCart(pdInfo.pdId)">加入购物车</td>
        </tr>
      </table>
    </div>
  </main>
</template>

<style>
.return-and-title {
  margin: 20px;
}
.return {
  float: left;
  margin: 10px;
}
main {
  display: flex;
  margin: 20px;
  padding: 10px;
}
.bood-info-box {
  width: 55%;
}
.detail-box {
  display: flex;
}
.info {
  margin: 10px;
  padding: 10px;
  text-align: left;
}
.info > div {
  padding: 4px;
}
.book-info-box .desc {
  width: 80%;
  padding: 20px;
  text-align: left;
}

.pd-box {
  width: 40%;
  background-color: rgb(226, 242, 252);
  padding: 10px 20px 10px 20px;
  border-radius: 10px;
}
.pd-table {
  border-collapse: collapse;
  border: 1px solid rgb(100, 100, 100);
  width: 100%;
}
caption {
  font-weight: bold;
  padding: 5px;
}
td, th {
  border: 0.6px solid rgb(100, 100, 100);
}
</style>

<script>
  import { userStore } from '@/store/userStore';
  import axios from 'axios';
  export default {
    data() {
      return {
        id: 0,
        bookInfo: {},
        pdList: [],
        userStore
      }
    },
    methods: {
      languageToString(id) {
        switch (id) {
          case 0:
            return '未知';
            break;
          case 1:
            return '简体中文';
            break;
          case 2:
            return '繁体中文';
            break;
          case 3:
            return '英语';
            break;
          default:
            return '未知';
            break;
        }
      },
      addIntoCart(pdId) {
        axios.post('cart', {
          pdId: pdId,
          userId: userStore.userId,
          pdCartNum: 1
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {
          // 总是会执行
        });
      },
      returnPage() {
        this.$router.go(-1);
      }
    },
    mounted() {
      this.id = this.$route.query.id;
      let that = this;
      axios.get('bookinfo/' + that.id, {
      })
      .then(function (response) {
        console.log(response);
        that.bookInfo = response.data;
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // 总是会执行
      });
      axios.get('pdinfo/list?bookId=' + that.id, {
      })
      .then(function (response) {
        console.log(response);
        that.pdList = response.data;
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