/**
 * Home page - Main landing page for ML Institute website
 * Combines Hero, Features, Tracks, and CTA sections
 */

import Head from 'next/head'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Curriculum from '../components/Curriculum'
import Tracks from '../components/Tracks'

export default function Home() {
  return (
    <>
      <Head>
        <title>Machine Learning Institute - Summer 2025 AI Research Program</title>
        <meta name="description" content="Elite AI research program for high school students. Get mentored by Princeton, UC Berkeley & Stanford researchers. Guaranteed publication and college-ready credentials." />
        <meta property="og:title" content="Machine Learning Institute - Summer 2025 AI Research Program" />
        <meta property="og:description" content="Elite AI research program for high school students. Get mentored by Princeton, UC Berkeley & Stanford researchers. Guaranteed publication and college-ready credentials." />
        <meta property="og:url" content="https://mlsummer.com" />
        <meta property="og:image" content="/og-image.svg" />
        <meta name="twitter:title" content="Machine Learning Institute - Summer 2025 AI Research Program" />
        <meta name="twitter:description" content="Elite AI research program for high school students. Get mentored by Princeton, UC Berkeley & Stanford researchers. Guaranteed publication and college-ready credentials." />
        <meta name="twitter:image" content="/og-image.svg" />
        <link rel="canonical" href="https://mlsummer.com" />
      </Head>
      <Hero />
      <Features />
      <Curriculum />
      <Tracks />
    </>
  )
} 