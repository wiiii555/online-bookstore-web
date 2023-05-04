<template>
	<div class="book" @click="$emit('onClick', this.bookId)">
		<img src="https://via.placeholder.com/100x150.png" alt="Book Cover">
		<div class="book-info">
			<div class="book-title">{{ bookName }}</div>
			<div class="book-isbn">{{ isbn }}</div>
			<div class="book-author">{{ author }}</div>
		</div>
	</div>
</template>

<style>
	.book {
		flex: 1 250px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		margin: 10px;
		border: 1.5px solid gray;
		padding: 10px;
		border-radius: 5px;
	}
	.book img {
		max-width: 100%;
		height: auto;
		margin-right: 20px;
		border-radius: 5px;
	}
	.book .book-info {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;
		flex: 1;
	}
	.book-info .book-title {
		font-size: 20px;
		font-weight: bold;
		text-align: left;
		/* text-transform: full-width; */
		margin-bottom: 10px;
	}
	.book-info .book-isbn {
		font-size: 12px;
		font-style: italic;
		/* margin-top: 10px; */
	}
	.book-info .book-author {
		font-size: 14px;
		text-align: left;
		margin-bottom: 10px;
	}
</style>

<script>
	export default {
		props: {
			bookId: {required: true, type: Number},
			bookName: {required: true, type: String},
			author: {type: String},
			lang: {type: Number},
			isbn: {type: String}
		},
		methods: {
		}
	}
</script>