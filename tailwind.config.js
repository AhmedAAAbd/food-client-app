/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  daisyui: {
    themes: ['light', 'dark', 'coffee']
  },
  theme: {
    extend: {}
  },
  plugins: [daisyui]
}
