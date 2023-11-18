export const prerender = 'auto'
export async function load({ url }) {
	return {
		url: url.pathname
	}
}
