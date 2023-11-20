import { writable } from 'svelte/store'
import Lenis from '@studio-freight/lenis'

function createLenis() {
	const { subscribe, set } = writable<Lenis | null>(null)

	function initialize() {
		const lenis = new Lenis()

		set(lenis)

		function raf(time: number) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf)
	}

	function destroy() {
		subscribe((lenis) => {
			if (lenis) {
				lenis.destroy()
				set(null)
			}
		})
	}

	return {
		subscribe,
		initialize,
		destroy
	}
}

export const lenisStore = createLenis()
