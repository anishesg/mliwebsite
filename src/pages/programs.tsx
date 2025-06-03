/**
 * Programs page - Research program overview aligned with flyer
 * Features: Program tracks, curriculum, and application info
 */

import React from 'react'
import { Box, Container, Heading, Text, VStack, HStack, Grid, Badge, Button, SimpleGrid, Separator } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaUsers, FaCheckCircle, FaArrowRight, FaRocket } from 'react-icons/fa'
import Head from 'next/head'

const MotionBox = motion(Box)

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/1j3Jg-B8XFA7peZXTW7FEtlw7N2Huub7s9R9Z9ueig1Y/viewform?pli=1&pli=1&edit_requested=true#responses'

const programTracks = [
  {
    id: 'group-cohort',
    name: 'Group',
    subtitle: 'Collaborative Research Experience',
    duration: '8 weeks',
    price: 'starting at $980',
    icon: FaUsers,
    color: 'blue.600',
    badgeText: 'Most Popular',
    badgeColor: 'blue',
    description: 'Work in pods to write paper on selected topic; 8 week session',
    highlights: [
      'Research mentored by Princeton, Stanford & Berkeley students',
      'Publish your paper in a Harvard-affiliated journal',
      'Work in collaborative pods on selected research topics',
      '8-week intensive research program'
    ]
  },
  {
    id: 'individual-mentorship',
    name: 'Individual',
    subtitle: '1-on-1 Dedicated Mentorship',
    duration: '6 weeks',
    price: 'starting at $1,480',
    icon: FaRocket,
    color: 'purple.600',
    badgeText: 'Premium',
    badgeColor: 'purple',
    description: '1-on-1, dedicated, mentorship to write research paper; 6 week session',
    highlights: [
      'Dedicated 1-on-1 mentorship from Princeton, Stanford & Berkeley students',
      'Publish your paper in a Harvard-affiliated journal',
      'Personalized research guidance and support',
      '6-week accelerated research program'
    ]
  }
]

export default function Programs() {
  return (
    <>
      <Head>
        <title>Summer 2025 Research Opportunity - Machine Learning Institute</title>
        <meta name="description" content="Research mentored by Princeton, Stanford & Berkeley students. Publish your paper in a Harvard-affiliated journal!" />
        <meta name="keywords" content="AI research programs, research tracks, curriculum, application process, AI, machine learning, research, publication" />
        <meta property="og:title" content="Summer 2025 Research Opportunity - Machine Learning Institute" />
        <meta property="og:description" content="Research mentored by Princeton, Stanford & Berkeley students. Publish your paper in a Harvard-affiliated journal!" />
        <meta property="og:url" content="https://mlsummer.com/programs" />
        <meta property="og:image" content="/og-image.svg" />
        <meta name="twitter:title" content="Summer 2025 Research Opportunity - Machine Learning Institute" />
        <meta name="twitter:description" content="Research mentored by Princeton, Stanford & Berkeley students. Publish your paper in a Harvard-affiliated journal!" />
        <meta name="twitter:image" content="/og-image.svg" />
        <link rel="canonical" href="https://mlsummer.com/programs" />
      </Head>
      {/* Hero Section */}
      <Box 
        py={{ base: 16, md: 24 }} 
        bg="linear-gradient(135deg, #1e40af 0%, #7c3aed 50%, #059669 100%)"
        position="relative"
        overflow="hidden"
      >
        {/* Background Pattern */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          opacity={0.1}
          backgroundImage="radial-gradient(circle at 25% 25%, white 2px, transparent 2px)"
          backgroundSize="60px 60px"
        />
        
        <Container maxW="7xl" position="relative">
          <VStack gap={8} textAlign="center" color="white">
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Heading size="3xl" fontWeight="bold" mb={4}>
                Summer 2025 Research Opportunity
              </Heading>
              <Text fontSize="xl" maxW="4xl" lineHeight="tall" opacity={0.9}>
                Research mentored by Princeton, Stanford & Berkeley students
              </Text>
              <Text fontSize="xl" maxW="4xl" lineHeight="tall" opacity={0.9} fontWeight="bold">
                Publish your paper in a Harvard-affiliated journal!
              </Text>
            </MotionBox>
          </VStack>
        </Container>
      </Box>

      {/* Program Tracks */}
      <Box py={{ base: 16, md: 20 }} bg="gray.50">
        <Container maxW="7xl">
          <VStack gap={12}>
            <VStack gap={4} textAlign="center">
              <Heading size="2xl" color="gray.800">
                Program Options
              </Heading>
            </VStack>

            <Grid templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }} gap={8} w="full">
              {programTracks.map((track, index) => (
                <MotionBox
                  key={track.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Box 
                    p={8} 
                    position="relative" 
                    border="2px solid" 
                    borderColor="gray.200" 
                    borderRadius="2xl" 
                    bg="white" 
                    boxShadow="xl" 
                    _hover={{ 
                      borderColor: track.color, 
                      transform: 'translateY(-4px)', 
                      boxShadow: '2xl' 
                    }} 
                    transition="all 0.3s"
                    minH="400px"
                  >
                    {track.badgeText && (
                      <Badge
                        position="absolute"
                        top={-3}
                        left="50%"
                        transform="translateX(-50%)"
                        colorScheme={track.badgeColor}
                        px={4}
                        py={2}
                        borderRadius="full"
                        fontSize="sm"
                        fontWeight="bold"
                      >
                        {track.badgeText}
                      </Badge>
                    )}
                    
                    <VStack align="start" gap={6} h="full">
                      <HStack>
                        <Box p={3} bg={`${track.color.split('.')[0]}.100`} borderRadius="xl">
                          <Box as={track.icon} w={8} h={8} color={track.color} />
                        </Box>
                        <VStack align="start" gap={1}>
                          <Heading size="lg" color="gray.800">{track.name}</Heading>
                          <Text color="gray.600" fontSize="md">{track.subtitle}</Text>
                        </VStack>
                      </HStack>

                      <Text color="gray.700" lineHeight="relaxed" fontSize="md">
                        {track.description}
                      </Text>

                      <SimpleGrid columns={2} gap={4} w="full">
                        <VStack align="start" gap={2}>
                          <Text fontSize="xs" fontWeight="bold" color="gray.500" textTransform="uppercase">Duration</Text>
                          <Text fontSize="md" fontWeight="semibold" color="gray.800">{track.duration}</Text>
                        </VStack>
                        <VStack align="start" gap={2}>
                          <Text fontSize="xs" fontWeight="bold" color="gray.500" textTransform="uppercase">Pricing</Text>
                          <Text fontSize="md" fontWeight="bold" color={track.color}>{track.price}</Text>
                        </VStack>
                      </SimpleGrid>

                      <Separator />

                      <Box w="full">
                        <Text fontWeight="bold" mb={3} color="gray.800">Program Highlights:</Text>
                        <VStack align="start" gap={2}>
                          {track.highlights.map((highlight, idx) => (
                            <HStack key={idx} align="start">
                              <Box as={FaCheckCircle} w={4} h={4} color="blue.500" mt={1} />
                              <Text fontSize="sm" color="gray.600" lineHeight="relaxed">{highlight}</Text>
                            </HStack>
                          ))}
                        </VStack>
                      </Box>

                      <Button
                        bg={track.color}
                        color="white"
                        size="lg"
                        w="full"
                        mt="auto"
                        _hover={{ bg: `${track.color.split('.')[0]}.${parseInt(track.color.split('.')[1]) + 100}` }}
                      >
                        <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                          Apply for {track.name} <Box as={FaArrowRight} ml={2} />
                        </a>
                      </Button>
                    </VStack>
                  </Box>
                </MotionBox>
              ))}
            </Grid>
          </VStack>
        </Container>
      </Box>

      {/* Partnership Section */}
      <Box py={{ base: 16, md: 20 }} bg="white">
        <Container maxW="7xl">
          <VStack gap={8} textAlign="center">
            <Heading size="2xl" color="gray.800">
              Global Impact Research
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="4xl" lineHeight="tall">
              MLI is working with non-profits, including the United Nations 
              and the World Health Organization to publish innovative 
              machine learning research projects in the fields of Biology, 
              Finance and Environmental Science.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box py={{ base: 16, md: 20 }} bg="linear-gradient(135deg, #1e40af 0%, #7c3aed 50%, #059669 100%)">
        <Container maxW="6xl">
          <VStack gap={8} textAlign="center" color="white">
            <Heading size="2xl">
              Apply now! www.mlsummer.com
            </Heading>
            <Text fontSize="xl" maxW="3xl" opacity={0.9}>
              Contact: (925) 577-7916, mlsummerprogram@gmail.com
            </Text>
            <HStack gap={4}>
              <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  bg="white"
                  color="primary.600"
                  size="lg"
                  px={8}
                  py={6}
                  fontSize="lg"
                  _hover={{ bg: 'gray.100', transform: 'translateY(-2px)' }}
                >
                  Apply Now
                </Button>
              </a>
            </HStack>
          </VStack>
        </Container>
      </Box>
    </>
  )
} 