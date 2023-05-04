<template>
	<div class="book-table">
		<table>
			<tr>
				<th>序号</th>
				<th>isbn</th>
				<th>书名</th>
				<th>作者</th>
				<th>出版社</th>
			</tr>
			<tr v-for="bookInfo in bookInfoList" :key="bookInfo.bookId">
				<td>{{ bookId }}</td>
				<td>{{ isbn }}</td>
				<td>{{ bookName }}</td>
				<td>{{ publishing }}</td>
			</tr>
		</table>
	</div>
</template>

<style>

</style>

<script>
	export default {
		props: {
			bookInfoList: {type: Array}
		},
		methods: {
		}
	}
</script>