module.exports = {
  theme: {
    textShadow: {
      glow: '0 0 5px hsla(210, 36%, 96%, 0.5)'
    },

    extend: {
      colors: {
        gray: {
          '900': 'hsl(209, 61%, 16%)',
          '800': 'hsl(211, 39%, 23%)',
          '700': 'hsl(209, 34%, 30%)',
          '600': 'hsl(209, 28%, 39%)',
          '500': 'hsl(210, 22%, 49%)',
          '400': 'hsl(209, 23%, 60%)',
          '300': 'hsl(211, 27%, 70%)',
          '200': 'hsl(210, 31%, 80%)',
          '100': 'hsl(212, 33%, 89%)',
          '050': 'hsl(210, 36%, 96%)',
        },

        cyan: {
          '900': 'hsl(184, 91%, 17%)',
          '800': 'hsl(185, 84%, 25%)',
          '700': 'hsl(185, 81%, 29%)',
          '600': 'hsl(184, 77%, 34%)',
          '500': 'hsl(185, 62%, 45%)',
          '400': 'hsl(185, 57%, 50%)',
          '300': 'hsl(184, 65%, 59%)',
          '200': 'hsl(184, 80%, 74%)',
          '100': 'hsl(185, 94%, 87%)',
          '050': 'hsl(186, 100%, 94%)',
        },

        shade: {
          '10': 'rgba(0, 0, 0, .10)',
          '20': 'rgba(0, 0, 0, .20)',
          '30': 'rgba(0, 0, 0, .30)',
          '40': 'rgba(0, 0, 0, .40)',
          '50': 'rgba(0, 0, 0, .50)',
          '60': 'rgba(0, 0, 0, .60)',
          '70': 'rgba(0, 0, 0, .70)',
          '80': 'rgba(0, 0, 0, .80)',
          '90': 'rgba(0, 0, 0, .90)',
        },

        tint: {
          '10': 'rgba(255, 255, 255, .10)',
          '20': 'rgba(255, 255, 255, .20)',
          '30': 'rgba(255, 255, 255, .30)',
          '40': 'rgba(255, 255, 255, .40)',
          '50': 'rgba(255, 255, 255, .50)',
          '60': 'rgba(255, 255, 255, .60)',
          '70': 'rgba(255, 255, 255, .70)',
          '80': 'rgba(255, 255, 255, .80)',
          '90': 'rgba(255, 255, 255, .90)',
        }
      },

      fontFamily: {
        'display': ['"Inria Sans"', 'sans-serif'],
        'body': ['Roboto', 'Helvetica', 'Arial', 'sans-serif']
      },

      zIndex: {
        '-50': '-50',
        '-10': '-10'
      },

      spacing: {
        '76': '20rem'
      }
    },
  },
  variants: {
    textShadow: ['responsive', 'hover', 'focus']
  },
  plugins: [
    require('tailwindcss-typography')()
  ],
}
