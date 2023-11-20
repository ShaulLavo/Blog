<script lang="ts">
	import * as config from '$lib/config'
	import Toggle from './toggleTheme.svelte'
</script>

<nav>
	<!-- Title -->
	<a href="/" class="title">
		<b>{config.title}</b>
	</a>

	<!-- Navigation -->
	<ul class="links">
		<li>
			<a href="/about">About</a>
		</li>
		<li>
			<a href="/contact">Contact</a>
		</li>
		<!-- <li>
			<a href="/rss.xml" target="_blank">RSS</a>
		</li> -->
	</ul>

	<!-- Theme -->
	<Toggle />
</nav>

<style>
	nav {
		padding: var(--size-7);
	}

	.links {
		margin-block: var(--size-7);
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	@media (min-width: 768px) {
		nav {
			display: flex;
			justify-content: space-between;
		}

		.links {
			display: flex;
			gap: var(--size-7);
			margin-block: 0;
		}
		b {
			font-size: var(--font-size-fluid-2);
			font-weight: var(--font-weight-4);
			/* font-family: var(--font-sans); */
		}
	}
</style>
