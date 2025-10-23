const myCustomColors = {
  primary: '#ffdd95',
  background: '#242428',
  lightbg: '#2f2f33',
  card: '#2f2f33',
  btnbg: '#3a3a3e',
  yellow: '#F9ED69',
  purple: '#B1B2FF',
  pink: '#F2BED1',
  lighttext: '#ccc',
}
export default {
  theme: {
    extend: {
      colors: myCustomColors,
    },
    fontFamily: {
      sans: ['poppins', 'sans-serif'],
    },
    fontWeight: {
      normal: 500,
    },
  },
}
