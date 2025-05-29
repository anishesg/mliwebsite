/**
 * Back to Top floating button component
 * Features: appears after 600px scroll, smooth scroll to top, accessible (light mode only)
 */

'use client'

import { Box, IconButton } from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowUp } from 'react-icons/fa'
import { useState, useEffect } from 'react'

const MotionIconButton = motion(IconButton)

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 600) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <MotionIconButton
          position="fixed"
          bottom={8}
          right={8}
          size="lg"
          bg="primary.600"
          color="white"
          borderRadius="full"
          shadow="lg"
          zIndex={1000}
          onClick={scrollToTop}
          aria-label="Back to top"
          _hover={{
            bg: 'primary.500',
            transform: 'translateY(-2px)',
            shadow: 'xl',
          }}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaArrowUp />
        </MotionIconButton>
      )}
    </AnimatePresence>
  )
} 