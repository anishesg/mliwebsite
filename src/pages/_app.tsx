/**
 * Main App component with ChakraProvider and custom theme
 * Wraps all pages with Chakra UI context and global styles
 */

import type { AppProps } from 'next/app'
import { Provider } from '@/components/ui/provider'
import Layout from '@/components/Layout'

// Global CSS for accessibility
const globalStyles = `
  html {
    scroll-behavior: smooth;
  }
  
  /* Reduced motion support */
  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
    
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
  
  /* Skip to content accessibility styles */
  .sr-only {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    white-space: nowrap !important;
    border: 0 !important;
  }
  
  .sr-only-focusable:focus {
    position: static !important;
    width: auto !important;
    height: auto !important;
    padding: 0.5rem 1rem !important;
    margin: 0 !important;
    overflow: visible !important;
    clip: auto !important;
    white-space: normal !important;
    background-color: #008B8B !important;
    color: white !important;
    text-decoration: none !important;
    border-radius: 0.375rem !important;
    z-index: 9999 !important;
  }
`

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <style jsx global>{globalStyles}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
} 