<script lang="ts">
	import { blur, fade } from 'svelte/transition'
	import { bounceIn } from 'svelte/easing'
	import { browser } from '$app/environment'
	import { gsap } from 'gsap'
	import Lenis from '@studio-freight/lenis'
	import { onMount } from 'svelte'

	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

	if (browser) {
		gsap.registerPlugin(ScrollTrigger)
	}

	onMount(() => {
		/* setup lenis */
		const lenis = new Lenis({
			duration: 1.4,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
		})
		lenis.on('scroll', () => ScrollTrigger.update)
		gsap.ticker.add((time) => {
			lenis.raf(time * 1000)
		})
		gsap.ticker.lagSmoothing(0)
	})

	export let url: string
</script>

{#key url}
	<div class="transition" out:fade={{ duration: 250 }}>
		<slot />
	</div>
{/key}

<style>
	.transition {
		/* height: 100%; */
	}
</style>
