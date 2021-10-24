module.exports = {
	enabled: true,
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				gray: {
					900: '#202225',
					850: '#292B2F',
					800: '#2f3136',
					700: '#36393f',
					600: '#4f545c',
					400: '#d4d7dc',
					300: '#e3e5e8',
					200: '#ebedef',
					100: '#f2f3f5',
				},
				primary: '#5865F2',
				secondary: '#3BA55D',
			},
		},
	},
	variants: {
		extend: {
			borderRadius: ['hover'],
			scale: ['hover'],
		},
	},
	plugins: [],
}
