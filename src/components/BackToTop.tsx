/**
 * Back to Top floating button component
 * Features: appears after 600px scroll, smooth scroll to top, accessible (light mode only)
 */

'use client'

import { IconButton } from '@chakra-ui/react'
import { FaArrowUp } from 'react-icons/fa'
import { useState, useEffect } from 'react'

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

  if (!isVisible) return null

  return (
    <IconButton
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
    >
      <FaArrowUp />
    </IconButton>
  )
} 