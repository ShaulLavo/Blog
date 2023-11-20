<script lang="ts">
	import { browser } from '$app/environment'

	export let lqipUrl: string
	export let highQualityUrl: string
	let hqImage: HTMLImageElement
	let baseSize = 800
	if (browser) {
		baseSize = (window.innerWidth - 64) / 2
	}
</script>

<div class="image-container">
	<img
		width={hqImage?.width || baseSize}
		height={hqImage?.height || baseSize}
		class="liqp"
		alt="img"
		src={lqipUrl}
	/>
	<img alt="img" bind:this={hqImage} loading="lazy" src={highQualityUrl} />
</div>

<style>
	.image-container {
		position: relative;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
	}
	img {
		position: absolute;
		top: 0;
		left: 0;
		flex: 1;
		object-fit: contain;
	}
	.liqp {
		/* position: relative; */
		/* object-fit: fill; */
	}
</style>
