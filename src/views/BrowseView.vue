<template>
  <body>
    <div class="bookList">
      <BookInfoListItem v-bind="bookInfo" v-for="bookInfo in bookInfoList" :key="bookInfo.bookId" @on-click="toDetailView"/>
    </div>
  </body>
</template>

<style>
.bookList {
  display: flex;
  flex-wrap: wrap;
}
</style>

<script>
  import BookInfoListItem from '@/components/BookInfoListItem.vue';
  import BookInfoTableItem from '@/components/BookInfoTableItem.vue';
  import axios from 'axios';
  export default {
    components: {
      BookInfoListItem,
      BookInfoTableItem,
      
    },
    data() {
      return {
        bookInfoList: []
      }
    },
    methods: {
      toDetailView(bookId) {
        this.$router.push('/detail?id=' + bookId);
      }
    },
    mounted() {
      let that = this;
      axios.get('bookinfo/list', {
      })
      .then(function (response) {
        console.log(response);
        that.bookInfoList = response.data;
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