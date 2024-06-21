// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
			title: "Swensen's",
		},
	},

	devtools: { enabled: true },

	css: ['~/assets/css/main.css', '~/assets/css/en.css'],

	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},

	modules: [
		'@ant-design-vue/nuxt',
		// '@nuxtjs/axios',
		'@pinia/nuxt',
		[
			'@nuxtjs/google-fonts',
			{
				families: {
					Kanit: [100, 900],
					Inter: [400, 700],
				},
			},
		],
	],
});
