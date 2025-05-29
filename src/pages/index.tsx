/**
 * Home page - Main landing page for ML Institute website
 * Combines Hero, Features, Tracks, and CTA sections
 */

import Hero from '../components/Hero'
import Features from '../components/Features'
import Curriculum from '../components/Curriculum'
import Tracks from '../components/Tracks'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Curriculum />
      <Tracks />
    </>
  )
} 