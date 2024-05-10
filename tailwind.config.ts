import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        'text-primary': '#161717',
        'background-accent': '#ffa568',
        'background-primary': '#f5f3ec',
      },
      fontFamily: {
        sans: ['PPNeueMontreal', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        xs: '375px',
        short: { raw: '(max-height: 540px)' },
        'extra-short': { raw: '(max-height: 320px)' },
        tall: { raw: '(min-height: 800px)' },
        ...defaultTheme.screens
      },
      animation: {
        'pop': 'pop 0.5s ease-out',
      },
      keyframes: {
        'pop': {
          '0%': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(1.07)',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
      }
    }
  }
}
