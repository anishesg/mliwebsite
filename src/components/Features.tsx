/**
 * Features section component showcasing key program benefits
 * 4-column grid on desktop, stacked on mobile with icons and descriptions
 */

import { Box, Container, Grid, VStack, Heading, Text } from '@chakra-ui/react'
import { FaGraduationCap, FaMicroscope, FaLightbulb, FaTrophy } from 'react-icons/fa'
import { motion } from 'framer-motion'

const features = [
  {
    icon: FaGraduationCap,
    title: 'Elite Student Mentors',
    description: 'Learn directly from Anish Kataria (Princeton), Shrey Raj (UC Berkeley) & Ishaan Gupta (Stanford)—published researchers who\'ve been in your shoes.',
  },
  {
    icon: FaMicroscope,
    title: 'Real‑World Partnerships',
    description: 'Work on cutting‑edge ML projects with the United Nations & WHO in Biology, Finance & Environmental Science.',
  },
  {
    icon: FaTrophy,
    title: 'College‑Ready Credentials',
    description: 'Publish in a Harvard‑affiliated journal, earn glowing mentor recommendations, and build a standout research portfolio.',
  },
  {
    icon: FaLightbulb,
    title: 'Personal Growth & Confidence',
    description: 'Develop critical thinking, teamwork, and academic writing skills that last a lifetime.',
  },
]

export default function Features() {
  const cardVariants = {
    hidden: { 
      y: 20, 
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  }

  return (
    <Box py={{ base: 16, md: 20 }} bg="white">
      <Container maxW="7xl">
        <VStack gap={12}>
          <VStack gap={4} textAlign="center">
            <motion.div variants={cardVariants}>
              <Heading 
                size="xl" 
                color="gray.800"
                bgGradient="linear(to-r, primary.600, primary.400)"
                bgClip="text"
              >
                Why Choose Our Program?
              </Heading>
            </motion.div>
            <motion.div variants={cardVariants}>
              <Text fontSize="lg" color="gray.600" maxW="3xl" lineHeight="tall">
                Our Summer 2025 cohort blends academic rigor with practical experience and college‑application power:
              </Text>
            </motion.div>
          </VStack>

          <Grid
            templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
            gap={{ base: 8, md: 8 }}
            w="full"
          >
            {features.map((feature, index) => (
              <VStack
                key={index}
                gap={4}
                textAlign="center"
                p={6}
                borderRadius="lg"
                bg="gray.50"
                _hover={{ transform: 'translateY(-4px)', shadow: 'lg' }}
                transition="all 0.3s"
              >
                <Box
                  as={feature.icon}
                  w={12}
                  h={12}
                  color="primary.600"
                />
                <Heading size="md" color="gray.800">
                  {feature.title}
                </Heading>
                <Text color="gray.600" fontSize="sm">
                  {feature.description}
                </Text>
              </VStack>
            ))}
          </Grid>
        </VStack>
      </Container>
    </Box>
  )
} 