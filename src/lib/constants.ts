export const constants = {
	imageNamesDark: ['manga-samurai_cxxzj0'] as const,
	imageNamesLight: [
		'manga-tree-girl_uvto83',
		'manga-snow-girl_rsqiey',
		'manga-coffee-shop_bspkzw',
		'manga-river-2_tdgoe9',
		'manga-show_spq88z',
		'manga-vilage_qcipuc',
		'manga-multiple_qcyjji',
		'manga-river-1_we626p',
		'manga-luffy_adewqx',
		'manga-kpop_o3ksbj',
		'manga-owl_fldeao',
		'manga-teddy_sqjs0v',
		'manga-river_foykol',
		'manga-city_rn8ruo',
		'manga-study_djwwri'
	] as const,
	get imageNames() {
		return [...this.imageNamesDark, ...this.imageNamesLight]
	},
	get randomImageName() {
		return this.imageNames[Math.floor(Math.random() * this.imageNames.length)]
	}
}
