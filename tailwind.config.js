module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`
    ]
  },
  theme: {
    extend: {
      fontFamily: {
        spartan: ['Spartan', 'sans-serif']
      }
    }
  },
  variants: {
    animation: ['motion-safe']
  },
  plugins: [],
}
