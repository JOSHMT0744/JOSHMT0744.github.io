const config = {
  theme: {
    screens: {
      smallHeight: { raw: '(max-height: 550px)' },
      w800: { max: '800px' },
      w700: { max: '700px' },
      w600: { max: '600px' },
      w500: { max: '500px' },
      w450: { max: '450px' },
      w400: { max: '400px' },
    },
  },
  extend: {
    animation: {
      marquee: 'marquee 5s linear infinite',
      marquee2: 'marquee2 5s linear infinite',
      'marquee-single': 'marquee-single 16s linear infinite',
    },
    keyframes: {
      marquee: {
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(-100%)' },
      },
      marquee2: {
        '0%': { transform: 'translateX(100%)' },
        '100%': { transform: 'translateX(0%)' },
      },
      'marquee-single': {
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(-50%)' },
      },
    },
  }
}

export default config
