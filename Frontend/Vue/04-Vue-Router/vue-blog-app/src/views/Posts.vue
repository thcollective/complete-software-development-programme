<template>
	<h1>Posts</h1>

	<div
		v-for="post in posts"
		@click.prevent="goToPost(post.id)"
		:key="post.id"
		class="post"
	>
		<h1>{{ post.title }}</h1>
		<p>{{ post.description }}</p>
	</div>
</template>

<script>
export default {
	name: 'Posts',
	data() {
		return {
			posts: [
				{
					id: 1,
					title: 'Post 1',
					description: 'This is post 1.',
				},
				{
					id: 2,
					title: 'Post 2',
					description: 'This is post 2.',
				},
				{
					id: 3,
					title: 'Post 3',
					description: 'This is post 3.',
				},
				{
					id: 4,
					title: 'Post 4',
					description: 'This is post 4.',
				},
			],
		};
	},
	methods: {
		goToPost(postID) {
			this.$router.push(`/post/${postID}`);
		},
	},
};
</script>

<style>
.post {
	background-color: lightcoral;
	padding: 10px 30px;
	margin: 10px;
	width: 300px;
	cursor: pointer;
}

.post:hover {
	opacity: 70%;
	transition: all 0.2s;
}
</style>
