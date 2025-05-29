/**
 * Enhanced Hero section with typewriter effect and simplified stat cards
 * Features: ML keyword typewriter animation, clean glassmorphism stat cards (light mode only)
 */

'use client'

import { Box, Button, Container, Heading, Text, Stack, Grid } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import NextLink from 'next/link'

const MotionBox = motion(Box)
const MotionStack = motion(Stack)
const MotionHeading = motion(Heading)
const MotionText = motion(Text)
const MotionButton = motion(Button)

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/1j3Jg-B8XFA7peZXTW7FEtlw7N2Huub7s9R9Z9ueig1Y/viewform?pli=1&pli=1&edit_requested=true#responses'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
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

  return (
    <Box
      position="relative"
      minH={{ base: '96vh', md: '102vh' }}
      background="linear-gradient(135deg, #1e40af 0%, #7c3aed 50%, #059669 100%)"
      overflow="hidden"
      display="flex"
      alignItems="center"
      py={{ base: 8, md: 12 }}
    >
      {/* Simplified background elements */}
      <MotionBox
        position="absolute"
        top="10%"
        right="10%"
        w="300px"
        h="300px"
        bg="rgba(255, 255, 255, 0.1)"
        borderRadius="50%"
        filter="blur(40px)"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <MotionBox
        position="absolute"
        bottom="20%"
        left="5%"
        w="200px"
        h="200px"
        bg="rgba(255, 255, 255, 0.08)"
        borderRadius="50%"
        filter="blur(30px)"
        animate={{
          y: [0, 30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />



              <Container maxW="7xl" position="relative" zIndex={2}>
                <MotionStack
          gap={6}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          color="white"
          maxW="3xl"
          mx="auto"
          textAlign="center"
        >
          {/* Brand Identity */}
          <MotionBox variants={itemVariants}>
            <Text
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="medium"
              opacity={0.9}
              letterSpacing="wider"
              textTransform="uppercase"
            >
              Machine Learning Institute
            </Text>
          </MotionBox>

          <MotionHeading
            variants={itemVariants}
            fontSize={{ base: '2xl', md: '4xl', lg: '5xl', xl: '6xl' }}
            fontWeight="bold"
            lineHeight="shorter"
            letterSpacing="tight"
          >
            Shape the Future
            <br />
            with{' '}
            <Text
              as="span"
              color="white"
              position="relative"
              _after={{
                content: '""',
                position: 'absolute',
                bottom: '-4px',
                left: 0,
                width: '100%',
                height: '3px',
                bg: 'white',
                opacity: 0.6,
              }}
            >
              <Typewriter
                words={[
                  'AI Research',
                  'Neural Networks',
                  'Data Science',
                  'Deep Learning',
                  'Computer Vision'
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={90}
                deleteSpeed={45}
                delaySpeed={1800}
              />
            </Text>
          </MotionHeading>

          <MotionText
            variants={itemVariants}
            fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
            maxW="3xl"
            mx="auto"
            opacity={0.95}
            lineHeight="tall"
            fontWeight="medium"
          >
            Join elite high school students in an immersive machine learning research program. 
            Collaborate with world‑class mentors, tackle global challenges, publish in a Harvard‑affiliated journal, 
            and stand out on college applications.
          </MotionText>

          <MotionStack
            variants={itemVariants}
            direction={{ base: 'column', sm: 'row' }}
            gap={4}
            pt={4}
            justify="center"
          >
            <MotionButton
              asChild
              size="lg"
              bg="neutral.100"
              color="primary.600"
              fontSize="lg"
              px={8}
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
                boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
              }}
            >
              <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">Apply Now - Summer 2025</a>
            </MotionButton>

            <MotionButton
              asChild
              size="lg"
              variant="outline"
              borderColor="neutral.100"
              color="neutral.100"
              fontSize="lg"
              px={8}
              py={6}
              h="auto"
              borderRadius="lg"
              fontWeight="medium"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              _hover={{
                bg: 'rgba(247, 250, 252, 0.1)',
                borderColor: 'neutral.100',
              }}
            >
              <NextLink href="/programs">Learn More</NextLink>
            </MotionButton>
          </MotionStack>

          {/* Info Cards */}
          <MotionBox variants={itemVariants}>
            <Grid
              templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
              gap={4}
              maxW="2xl"
              mx="auto"
            >
              <Box
                bg="rgba(255, 255, 255, 0.15)"
                borderRadius="lg"
                p={4}
                backdropFilter="blur(10px)"
                border="1px solid"
                borderColor="rgba(255, 255, 255, 0.2)"
                textAlign="center"
                transition="all 0.3s"
                _hover={{
                  transform: 'translateY(-2px)',
                  bg: 'rgba(255, 255, 255, 0.15)',
                }}
              >
                <Text fontSize="2xl" mb={1}>🎓</Text>
                <Text fontSize="xs" fontWeight="semibold" opacity={0.9} mb={1}>
                  Applications Open
                </Text>
                <Text fontSize="sm" opacity={0.8}>
                  Batch 1: June 8 | Batch 2: July 8
                </Text>
              </Box>

              <Box
                bg="rgba(255, 255, 255, 0.15)"
                borderRadius="lg"
                p={4}
                backdropFilter="blur(10px)"
                border="1px solid"
                borderColor="rgba(255, 255, 255, 0.2)"
                textAlign="center"
                transition="all 0.3s"
                _hover={{
                  transform: 'translateY(-2px)',
                  bg: 'rgba(255, 255, 255, 0.15)',
                }}
              >
                <Text fontSize="2xl" mb={1}>💼</Text>
                <Text fontSize="xs" fontWeight="semibold" opacity={0.9} mb={1}>
                  Limited Spots
                </Text>
                <Text fontSize="sm" opacity={0.8}>
                  Only 50 Students per Session
                </Text>
              </Box>

              <Box
                bg="rgba(255, 255, 255, 0.15)"
                borderRadius="lg"
                p={4}
                backdropFilter="blur(10px)"
                border="1px solid"
                borderColor="rgba(255, 255, 255, 0.2)"
                textAlign="center"
                transition="all 0.3s"
                _hover={{
                  transform: 'translateY(-2px)',
                  bg: 'rgba(255, 255, 255, 0.15)',
                }}
              >
                <Text fontSize="2xl" mb={1}>🌟</Text>
                <Text fontSize="xs" fontWeight="semibold" opacity={0.9} mb={1}>
                  Publication Guarantee
                </Text>
                <Text fontSize="sm" opacity={0.8}>
                  Real Research, Real Impact
                </Text>
              </Box>
            </Grid>
          </MotionBox>
        </MotionStack>
      </Container>
    </Box>
  )
} 