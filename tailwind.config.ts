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
      }
    }
  }
}
