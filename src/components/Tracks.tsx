/**
 * Tracks component showing two program options: Group Cohort and 1-on-1 Intensive
 * Features pricing, duration, and key benefits for each track (light mode only)
 */

'use client'

import { Box, Container, Grid, VStack, HStack, Heading, Text, Button, Badge } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaCheck, FaUsers, FaUser } from 'react-icons/fa'

const MotionBox = motion(Box)
const MotionVStack = motion(VStack)
const MotionGrid = motion(Grid)

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/1j3Jg-B8XFA7peZXTW7FEtlw7N2Huub7s9R9Z9ueig1Y/viewform?pli=1&pli=1&edit_requested=true#responses'

const tracks = [
  {
    name: 'Group Research Cohort',
    icon: FaUsers,
    duration: '8 weeks in pods of 4–6 students',
    price: '$980',
    description: 'Weekly live seminars, peer workshops & collaborative writing',
    features: [
      'Joint paper submission under mentor co‑authorship',
      'Networking with fellow researchers',
      'Certificate of completion',
      'Weekly group sessions with expert mentors',
      'Peer collaboration on research projects',
    ],
    highlight: 'Most Popular',
    color: 'primary.600',
  },
  {
    name: '1 on 1 Intensive Mentorship',
    icon: FaUser,
    duration: '6 weeks of personalized guidance',
    price: '$1,480',
    description: 'Daily check‑ins, bespoke project design & direct mentor feedback',
    features: [
      'Solo paper submission fast‑tracked to journal review',
      'Flexible scheduling around your school year',
      'Publication opportunities',
      'Private sessions with top-tier researchers',
      'Customized research project',
    ],
    highlight: 'Premium',
    color: 'accent.500',
  },
]

export default function Tracks() {
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
    <Box py={{ base: 12, md: 16 }} pt={{ base: 8, md: 12 }} bg="gray.100" position="relative">
      <Container maxW="8xl" position="relative" zIndex={2}>
        <MotionVStack
          gap={10}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <VStack gap={4} textAlign="center">
            <motion.div variants={cardVariants}>
              <Heading 
                size="xl" 
                color="gray.800"
                bgGradient="linear(to-r, primary.600, primary.400)"
                bgClip="text"
              >
                Choose Your Learning Path
              </Heading>
            </motion.div>
            <motion.div variants={cardVariants}>
              <Text fontSize="lg" color="gray.600" maxW="3xl" lineHeight="tall">
                Whether you prefer collaborative learning or intensive one-on-one mentorship, 
                we have the perfect track to accelerate your ML journey.
              </Text>
            </motion.div>
          </VStack>

          <MotionGrid
            templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }}
            gap={8}
            w="full"
            variants={containerVariants}
          >
            {tracks.map((track) => (
              <MotionBox
                variants={cardVariants}
                whileHover={{ 
                  y: -4,
                }}
                key={track.name}
                bg="white"
                borderRadius="xl"
                p={6}
                shadow="lg"
                position="relative"
                border="1px solid"
                borderColor={track.name === 'Group Research Cohort' ? 'primary.300' : 'gray.200'}
                _hover={{ transform: 'translateY(-4px)', shadow: 'xl', borderColor: 'primary.300' }}
              >
                {track.highlight && (
                  <Badge
                    position="absolute"
                    top={-3}
                    left="50%"
                    transform="translateX(-50%)"
                    bg={track.name === 'Group Research Cohort' ? 'primary.600' : 'purple.400'}
                    color="white"
                    px={4}
                    py={1}
                    borderRadius="full"
                    fontSize="xs"
                    fontWeight="medium"
                  >
                    {track.highlight}
                  </Badge>
                )}

                <VStack gap={4} align="start">
                  <HStack>
                    <Box p={3} bg="primary.100" borderRadius="lg">
                      <Box as={track.icon} w={5} h={5} color="primary.600" />
                    </Box>
                    <VStack align="start" gap={0}>
                      <Heading size="md" color="gray.800">
                        {track.name}
                      </Heading>
                      <Text color="gray.600" fontSize="sm">
                        {track.duration}
                      </Text>
                    </VStack>
                  </HStack>

                  <Text color="gray.600" fontSize="sm">{track.description}</Text>

                  <HStack>
                    <Text fontSize="2xl" fontWeight="bold" color="gray.800">
                      {track.price}
                    </Text>
                    <Text color="gray.500" fontSize="sm">per student</Text>
                  </HStack>

                  <VStack gap={2} w="full" align="start">
                    {track.features.map((feature, index) => (
                      <HStack key={index} align="start">
                        <Box as={FaCheck} color="primary.500" mt={1} fontSize="xs" />
                        <Text fontSize="xs" color="gray.600">
                          {feature}
                        </Text>
                      </HStack>
                    ))}
                  </VStack>

                  <Button
                    asChild
                    bg={track.name === 'Group Research Cohort' ? 'primary.600' : 'purple.400'}
                    color="white"
                    size="md"
                    w="full"
                    mt={3}
                    _hover={{
                      bg: track.name === 'Group Research Cohort' ? 'primary.500' : 'purple.500',
                      transform: 'translateY(-1px)',
                    }}
                  >
                    <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">Choose {track.name}</a>
                  </Button>
                </VStack>
              </MotionBox>
            ))}
          </MotionGrid>
        </MotionVStack>
      </Container>
      
      {/* Aesthetic separation border */}
      <Box
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        h="1px"
        bgGradient="linear(to-r, transparent, primary.300, transparent)"
        opacity={0.6}
      />
      <Box
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        h="4px"
        bgGradient="linear(to-b, transparent, rgba(30, 64, 175, 0.1))"
      />
    </Box>
  )
} 