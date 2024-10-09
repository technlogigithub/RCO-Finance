/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
	
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
			black:{
				dark:'hsl(var(--black-dark))',
				light:"hsl(var(--black-light))"
			},
			green:{
				DEFAULT:"hsl(var(--green))"
			},
  			gray:{
				light:"hsl(var(--gray-light))"
			}
  		
  		},
		  backgroundImage: {
			'hero-pattern': "url('/bg_img.png')",
			'hero-pattern-three': "url('/hero_thrid_bg.png')",
			'token-bg': "url('/token_bg.png')",
			'map-bg': "url('/map.png')",
		  },
		  screens:{
			lgg:"1365px",
			lg:"1199px",
			lgg:"1024px",
			xmd:"980px",
			'min-1100': '1100px', 
		  }
  	}
  },
  plugins: [require("tailwindcss-animate")],
}