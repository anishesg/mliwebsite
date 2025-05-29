/**
 * Enhanced Call-to-Action section with neon glow effects and animations
 * Features: dark-mode-aware styling, glassmorphism, Framer Motion interactions
 */

'use client'

import { Box, Container, VStack, Heading, Text, Button, HStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import NextLink from 'next/link'
import { useColorModeValue } from './ui/color-mode'

const MotionBox = motion(Box)
const MotionVStack = motion(VStack)
const MotionButton = motion(Button)

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/1j3Jg-B8XFA7peZXTW7FEtlw7N2Huub7s9R9Z9ueig1Y/viewform?pli=1&pli=1&edit_requested=true#responses'

export default function CTASection() {
  const sectionBg = useColorModeValue(
    'linear-gradient(135deg, #1e40af 0%, #7c3aed 50%, #059669 100%)'
  )
  const glowColor = useColorModeValue('accent.500')

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1],
        delayChildren: 0.2,
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  }

  const buttonVariants = {
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        duration: 0.2,
        ease: 'easeOut',
      },
    },
    tap: {
      scale: 0.98,
    },
  }

  const glowVariants = {
    animate: {
      boxShadow: [
        `0 0 20px ${glowColor}`,
        `0 0 30px ${glowColor}`,
        `0 0 20px ${glowColor}`,
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <MotionBox
      background={sectionBg}
      color="white"
      py={{ base: 20, md: 24 }}
      position="relative"
      overflow="hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Animated background elements */}
      <MotionBox
        position="absolute"
        top="20%"
        right="10%"
        w="200px"
        h="200px"
        bg="rgba(255, 255, 255, 0.05)"
        borderRadius="50%"
        filter="blur(40px)"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <MotionBox
        position="absolute"
        bottom="30%"
        left="5%"
        w="150px"
        h="150px"
        bg="rgba(255, 138, 91, 0.1)"
        borderRadius="50%"
        filter="blur(30px)"
        animate={{
          x: [0, 30, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      <Container maxW="6xl" position="relative" zIndex={2}>
        <MotionVStack gap={8} textAlign="center" variants={containerVariants}>
          <motion.div variants={itemVariants}>
            <Heading 
              size="xl"
              bgGradient="linear(to-r, white, rgba(255,255,255,0.8))"
              bgClip="text"
              maxW="4xl"
              lineHeight="shorter"
            >
              Ready to Launch Your AI Research Career?
            </Heading>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Text 
              fontSize={{ base: 'md', md: 'lg' }} 
              opacity={0.9} 
              maxW="3xl"
              lineHeight="tall"
              fontWeight="medium"
            >
              Join the next generation of AI researchers. Our Summer 2025 program fills up quickly,
              so don&apos;t wait to secure your spot in this transformative experience that will
              accelerate your path to top universities.
            </Text>
          </motion.div>

          <motion.div variants={itemVariants}>
            <HStack 
              gap={6} 
              flexDirection={{ base: 'column', sm: 'row' }}
              justify="center"
            >
              <MotionBox variants={glowVariants} animate="animate">
                <MotionButton
                  asChild
                  size="lg"
                  bg="white"
                  color="brand.primary"
                  fontSize="lg"
                  px={10}
                  py={6}
                  h="auto"
                  borderRadius="lg"
                  fontWeight="bold"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  _hover={{
                    bg: 'neutral.100',
                    color: 'primary.600',
                    transform: 'translateY(-2px)',
                  }}
                  _dark={{
                    bg: 'primary.300',
                    color: 'secondary.700',
                    _hover: {
                      bg: 'accent.500',
                      color: 'neutral.100',
                    },
                  }}
                >
                  <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">Apply Now</a>
                </MotionButton>
              </MotionBox>

              <MotionButton
                asChild
                size="lg"
                variant="outline"
                borderColor="white"
                color="white"
                fontSize="lg"
                px={10}
                py={6}
                h="auto"
                borderRadius="lg"
                fontWeight="medium"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                _hover={{
                  bg: 'rgba(255, 255, 255, 0.1)',
                  borderColor: 'white',
                  transform: 'translateY(-2px)',
                }}
                _dark={{
                  borderColor: 'primary.300',
                  color: 'primary.300',
                  _hover: {
                    bg: 'rgba(79, 209, 197, 0.1)',
                    borderColor: 'primary.300',
                  },
                }}
              >
                <NextLink href="/contact">Contact Us</NextLink>
              </MotionButton>
            </HStack>
          </motion.div>

          <motion.div variants={itemVariants}>
            <MotionBox
              bg="rgba(255, 255, 255, 0.1)"
              backdropFilter="blur(10px)"
              borderRadius="lg"
              p={4}
              border="1px solid"
              borderColor="rgba(255, 255, 255, 0.2)"
              maxW="2xl"
              mx="auto"
            >
              <Text fontSize="sm" opacity={0.9} fontWeight="medium">
                🚀 Applications open for Summer 2025 • 🎯 Batch 1: June 8 | Batch 2: July 8 • ⭐ Limited spots available
              </Text>
            </MotionBox>
          </motion.div>
        </MotionVStack>
      </Container>
    </MotionBox>
  )
} 