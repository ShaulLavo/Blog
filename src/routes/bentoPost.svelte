<script lang="ts">
	import type { Post } from '$lib/types'
	import { formatDate } from '$lib/utils'
	export let post: Post
</script>

<div class="post">
	<a href={post.slug} class="title">{post.title}</a>
	<p class="date">{formatDate(post.date)}</p>
	<p class="description">{post.description}</p>
</div>

<style>
	.post {
		background-color: var(--surface-1);
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		border-radius: var(--radius-3);
	}

	.title {
		font-size: var(--font-size-fluid-3);
		text-transform: capitalize;
	}
	.date {
		color: var(--text-2);
	}
	.description {
		margin-top: var(--size-3);
	}
</style>
