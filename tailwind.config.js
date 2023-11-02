module.exports = {
  content: ['./src/*.html'],
  theme: {
    extend: {
      gridTemplateColumns: {
        // added new 4 column grid as new4
        'new4': 'repeat(4, minmax(100px,100px))',
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}