/**
 * Blue-Purple Chakra UI theme configuration for Machine Learning Institute
 * Features: Professional blue-purple palette, modern gradients, clean styling
 */

import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

const config = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: { value: `'Montserrat', sans-serif` },
        body: { value: `'Inter', sans-serif` },
      },
      fontSizes: {
        // Fluid typography with clamp()
        xs: { value: 'clamp(0.7rem, 0.9vw, 0.75rem)' },
        sm: { value: 'clamp(0.8rem, 1vw, 0.875rem)' },
        md: { value: 'clamp(0.9rem, 1.1vw, 1rem)' },
        lg: { value: 'clamp(1rem, 1.2vw, 1.125rem)' },
        xl: { value: 'clamp(1.1rem, 1.4vw, 1.25rem)' },
        '2xl': { value: 'clamp(1.4rem, 2vw, 1.5rem)' },
        '3xl': { value: 'clamp(1.7rem, 2.5vw, 1.875rem)' },
        '4xl': { value: 'clamp(2rem, 3vw, 2.25rem)' },
        '5xl': { value: 'clamp(2.5rem, 4vw, 3rem)' },
        '6xl': { value: 'clamp(3rem, 5vw, 3.75rem)' },
        '7xl': { value: 'clamp(3.5rem, 6vw, 4.5rem)' },
      },
      spacing: {
        4: { value: '12px' },
        8: { value: '24px' },
        12: { value: '36px' },
        16: { value: '48px' },
      },
      colors: {
        primary: {
          300: { value: '#93C5FD' },
          400: { value: '#60A5FA' },
          500: { value: '#3B82F6' },
          600: { value: '#1E40AF' },
        },
        secondary: {
          700: { value: '#1F2632' },
        },
        accent: {
          500: { value: '#7C3AED' },
        },
        neutral: {
          100: { value: '#F7FAFC' },
        },
        surface: { value: '#FFFFFF' },
        bg: { value: '#1A202C' },
        text: { value: '#2D3748' },
      },
    },
  },
})

export default createSystem(defaultConfig, config) 