export type categories =
	| 'blog'
	| 'projects'
	| 'tutorials'
	| 'snippets'
	| 'notes'
	| 'reviews'
	| 'other'

export type Post = {
	title: string
	slug: string
	date: string
	categories: categories[]
	published: boolean
	description: string
	image: string
}
