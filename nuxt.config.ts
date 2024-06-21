// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
