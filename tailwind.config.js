/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        yolk: {
          DEFAULT: '#FACC15',
          dark: '#EAB308',
          light: '#FDE68A',
        },
        ink: {
          DEFAULT: '#0F0F0F',
          card: '#18181B',
          raised: '#202024',
          border: '#2A2A2E',
        },
        smoke: '#A1A1AA',
        chili: {
          DEFAULT: '#DC2626',
          dark: '#B91C1C',
        },
      },
      fontFamily: {
        display: ['"Outfit"', 'sans-serif'],
        body: ['"Poppins"', 'sans-serif'],
      },
      borderRadius: {
        card: '16px',
      },
      boxShadow: {
        soft: '0 8px 30px rgba(0,0,0,0.45)',
        glow: '0 0 40px rgba(250,204,21,0.25)',
        'glow-sm': '0 0 20px rgba(250,204,21,0.18)',
      },
      backgroundImage: {
        grain: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        steam: {
          '0%': { transform: 'translateY(0) scaleX(1)', opacity: '0' },
          '15%': { opacity: '0.5' },
          '100%': { transform: 'translateY(-60px) scaleX(1.4)', opacity: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        steam: 'steam 2.8s ease-in infinite',
        marquee: 'marquee 22s linear infinite',
        'spin-slow': 'spin-slow 14s linear infinite',
      },
    },
  },
  plugins: [],
}
