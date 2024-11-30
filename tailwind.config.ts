import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			"work-sans": ['var(--font-work-sans)']
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
			primary: {
  				yc_teal: 'rgb(19 78 74)',
				"100": "#FFE8F0",
				DEFAULT: "#EE2B69",
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
				
  				DEFAULT: "#FBE843",
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			black: {
  				'100': '#333333',
  				'200': '#141413',
  				'300': '#7D8087',
  				DEFAULT: '#000000'
  			},
  			white: {
  				'100': '#F7F7F7',
  				DEFAULT: '#FFFFFF'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
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
  		inset: {
  			'18': '4.5rem',
  			'19': '4.75rem'
  		},
  		animation: {
  			'spin-fast': 'spin 10ms linear infinite',
  			'fade': 'fadeOut 5s ease-in-out'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		  boxShadow: {
			100: "2px 2px 0px 0px rgb(0, 0, 0)",
			200: "2px 2px 0px 2px rgb(0, 0, 0)",
			300: "2px 2px 0px 2px rgb(238, 43, 105)",
		},
  	}
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
