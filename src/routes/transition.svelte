<script lang="ts">
	import { blur, fade } from 'svelte/transition'
	import { bounceIn } from 'svelte/easing'
	export let url: string
</script>

{#key url}
	<div class="transition" transition:fade={{ duration: 250 }}>
		<slot />
	</div>
{/key}

<style>
	.transition {
		height: 100%;
	}
</style>
