/** @type {import('tailwindcss').Config} */

//BREAKPOINTS:
// xs: 26rem (416px)*
// sm: 40rem (640px)
// md: 48rem (768px)
// lg: 64rem (1024px)
// 2lg: 75rem (1200px)*
// xl: 80rem (1280px)
// 2xl: 96rem (1536px)*

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      maxWidth: {
        container: '85rem',
      },
      colors: {
        primary: '#00A3FF',
        hover: '#006CD8',
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
      },
      screens: {
        xs: '26rem',
        '2lg': '75rem',
        '2xl': '96rem',
      },
    },
  },
};
