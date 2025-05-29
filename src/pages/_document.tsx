/**
 * Custom Document component for Next.js
 * Includes Google Fonts, comprehensive SEO meta tags, and social media optimization
 */

import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preconnect for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Google Fonts with improved loading */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        
        {/* Preload critical CSS for faster LCP */}
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@400;500;600;700;800&display=swap" />
        
        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Basic SEO Meta Tags */}
        <meta name="description" content="Machine Learning Institute Summer 2025 - Elite AI research program for high school students. Get mentored by Princeton, UC Berkeley & Stanford researchers. Guaranteed publication and college-ready credentials." />
        <meta name="keywords" content="machine learning, AI research, summer program, high school, college prep, Princeton, UC Berkeley, Stanford, mentorship, publication, artificial intelligence" />
        <meta name="author" content="Machine Learning Institute" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* Theme colors for mobile browsers */}
        <meta name="theme-color" content="#1e40af" />
        <meta name="msapplication-TileColor" content="#1e40af" />
        <meta name="msapplication-navbutton-color" content="#1e40af" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Favicon and App Icons */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Open Graph Meta Tags for Social Media */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Machine Learning Institute - Summer 2025 AI Research Program" />
        <meta property="og:description" content="Elite AI research program for high school students. Get mentored by Princeton, UC Berkeley & Stanford researchers. Guaranteed publication and college-ready credentials." />
        <meta property="og:image" content="/og-image.svg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Machine Learning Institute - Summer 2025 AI Research Program" />
        <meta property="og:url" content="https://mlsummer.com" />
        <meta property="og:site_name" content="Machine Learning Institute" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Machine Learning Institute - Summer 2025 AI Research Program" />
        <meta name="twitter:description" content="Elite AI research program for high school students. Get mentored by Princeton, UC Berkeley & Stanford researchers. Guaranteed publication and college-ready credentials." />
        <meta name="twitter:image" content="/og-image.svg" />
        <meta name="twitter:image:alt" content="Machine Learning Institute - Summer 2025 AI Research Program" />
        
        {/* Additional Social Meta Tags */}
        <meta property="article:author" content="Machine Learning Institute" />
        <meta property="article:publisher" content="Machine Learning Institute" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Machine Learning Institute",
              "description": "Elite AI research program for high school students with guaranteed publication and college-ready credentials.",
              "url": "https://mlsummer.com",
              "logo": "https://mlsummer.com/favicon.svg",
              "sameAs": [],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "(925) 577-7916",
                "contactType": "customer service",
                "email": "mlsummerprogram@gmail.com"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "offers": {
                "@type": "Offer",
                "name": "Summer 2025 AI Research Program",
                "description": "8-week intensive machine learning research program",
                "price": "980",
                "priceCurrency": "USD"
              }
            })
          }}
        />
        
        {/* Performance optimizations */}
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://mlsummer.com" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 