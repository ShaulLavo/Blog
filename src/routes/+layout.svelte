<script lang="ts">
	import { lenisStore } from '$lib/lenis'
	import 'open-props/buttons'
	import 'open-props/normalize'
	import 'open-props/style'
	import { onMount } from 'svelte'
	import '../app.css'
	import Footer from './footer.svelte'
	import Header from './header.svelte'
	import PageTransition from './transition.svelte'

	export let data
</script>

<div class="layout">
	<Header />

	<main>
		<PageTransition url={data.url}>
			<slot />
		</PageTransition>
	</main>

	<Footer />
</div>

<style>
	.layout {
		/* height: 100%; */
		max-inline-size: 1600px;
		display: grid;
		grid-template-rows: auto 1fr auto;
		margin-inline: auto;
		padding-inline: var(--size-7);
	}

	main {
		padding-block: var(--size-7);
	}

	@media (min-width: 1600px) {
		.layout {
			padding-inline: 0;
		}
	}
</style>
