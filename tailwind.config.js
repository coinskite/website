
/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				'900': '#22C954',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			digi: {
  				primary: '#00AC4F',
  				light: '#A5A5A5'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	},
  	screens: {
  		ts: '360px',
  		xs: '480px',
  		sm: '640px',
  		md: '768px',
  		mdb: '900px',
  		lg: '1024px',
  		xl: '1280px',
  		'2xl': '1920'
  	},
  	fontSize: {
  		xs: [
  			'12px',
  			'1.4'
  		],
  		sm: [
  			'14px',
  			'1.4'
  		],
  		base: [
  			'16px',
  			'1.4'
  		],
  		lg: [
  			'18px',
  			'1.4'
  		],
  		xl: [
  			'20px',
  			'1.4'
  		],
  		'2xl': [
  			'24px',
  			'1.4'
  		],
  		'3xl': [
  			'30px',
  			'1.4'
  		],
  		'4xl': [
  			'36px',
  			'1.4'
  		],
  		'5xl': [
  			'48px',
  			'1.4'
  		],
  		'6xl': [
  			'60px',
  			'1.4'
  		],
  		'7xl': [
  			'72px',
  			'1.4'
  		]
  	}
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.hide-scrollbar': {
          'scrollbar-width': 'none', /* For Firefox */
          '-ms-overflow-style': 'none', /* For Internet Explorer and Edge */
        },
        '.hide-scrollbar::-webkit-scrollbar': {
          display: 'none', /* For Chrome, Safari, and newer Edge */
        },
      });
    },
      require("tailwindcss-animate")
],
}
