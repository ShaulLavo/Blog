<script lang="ts">
	import type { Post } from '$lib/types'
	import * as config from '$lib/config'
	import { formatDate } from '$lib/utils'
	import { getImageData } from '$lib/cloudinary'
	import { constants } from '$lib/constants'
	import AutoLqipImage from './autoLqipImage.svelte'
	import Bento from './bentoContainer.svelte'
	export let data: { posts: Post[] }
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<Bento posts={data.posts} />

<style>
	section {
		display: grid;
		/* gap: var(--size-7); */
		grid-template-columns: 1fr 1fr;
	}
	.image-container {
		height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.posts {
		display: grid;
		gap: var(--size-7);
	}
</style>
