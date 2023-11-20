<script lang="ts">
	import { getHighQualityUrl } from '$lib/cloudinary'
	import { constants } from '$lib/constants'
	import type { Post } from '$lib/types'
	import { blur } from 'svelte/transition'
	import BentoPost from './bentoPost.svelte'
	import BentoSmallPost from './bentoSmallPost.svelte'
	export let posts: Post[]
</script>

<div class="main-container">
	<div class="top-container">
		<img src={getHighQualityUrl(constants.randomImageName)} alt="" />
		<div class="post-container">
			<BentoPost post={posts[0]} />
		</div>
		<!-- <img in:blur={{ duration: 500 }} src={getHighQualityUrl(constants.randomImageName)} alt="" /> -->
	</div>
	<div class="bottom-container">
		<div class="sub-bottom-container">
			<div class="sub-post-container">
				<BentoSmallPost post={posts[1]} />
			</div>
			<div class="sub-post-container">
				<BentoSmallPost post={posts[1]} />
			</div>
		</div>
		<div class="post-container">
			<img src={getHighQualityUrl(constants.randomImageName)} alt="" />
		</div>
	</div>
</div>

<style>
	.main-container {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--size-2);
	}

	.top-container {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: var(--size-content-2);
		gap: var(--size-2);
		text-align: center;
		/* justify-items: center; */
		justify-content: space-between;
		align-items: center;
		padding: var(--size-3);
	}

	.bottom-container {
		display: grid;
		grid-template-columns: 0.7fr 1.3fr;
		grid-template-rows: var(--size-content-2);
		gap: var(--size-2);
		/* align-items: center; */
		align-items: stretch;
		justify-items: flex-end;
		text-align: center;
		padding: var(--size-3);
	}
	.post-container {
		display: grid;
		max-inline-size: var(--size-content-3);
		height: var(--size-content-2);
	}
	.sub-post-container {
		height: calc(var(--size-content-2) * 0.5);
	}
	.sub-bottom-container {
		display: grid;
		grid-template-columns: 1fr;
		grid-auto-rows: 1fr;
		max-height: var(--size-content-2);
		gap: var(--size-2);
		padding: var(--size-2);
	}

	img {
		/* width: 100%; */
		height: var(--size-content-2);
		object-fit: cover;
		object-position: center;
	}
</style>
