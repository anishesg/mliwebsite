/**
 * StatCard component for Hero section
 * Features: glassmorphism styling, fade-in animation, responsive positioning
 */

'use client'

import { Box, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

interface StatCardProps {
  label: string
  value: string
  position: Record<string, Record<string, string> | string> // Position object for responsive positioning
}

export function StatCard({ label, value, position }: StatCardProps) {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1],
      } 
    }
  }

  return (
    <MotionBox
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants}
      position="absolute"
      {...position}
      zIndex={3}
    >
      <Box
        bg="rgba(255, 255, 255, 0.15)"
        backdropFilter="blur(12px)"
        p={4}
        borderRadius="xl"
        border="1px solid"
        borderColor="rgba(255, 255, 255, 0.2)"
        boxShadow="0 8px 32px rgba(0, 0, 0, 0.1)"
        color="white"
        textAlign="center"
        minW="120px"
        transition="all 0.3s"
        _hover={{
          transform: 'translateY(-2px)',
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
          bg: 'rgba(255, 255, 255, 0.2)',
        }}
      >
        <Text fontSize="xs" fontWeight="medium" opacity={0.9} mb={1}>
          {label}
        </Text>
        <Text fontSize="2xl" fontWeight="bold" lineHeight="1">
          {value}
        </Text>
      </Box>
    </MotionBox>
  )
} 