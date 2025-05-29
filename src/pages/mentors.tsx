/**
 * Mentors page - Showcase of program mentors with detailed profiles
 * Features mentor profiles, expertise areas, and mentorship approach
 */

import { Box, Container, Grid, VStack, HStack, Heading, Text, Image, Badge, SimpleGrid } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaUsers, FaComments, FaLightbulb, FaCheckCircle, FaPhone, FaEnvelope, FaFilePdf } from 'react-icons/fa'

const MotionBox = motion(Box)

const mentors = [
  {
    name: 'Anish Kataria',
    university: 'Princeton University',
    image: '/images/anish.jpg',
    expertise: 'Data-Driven Biology Models',
    description: 'Anish brings complex biological data to life with machine learning—and he\'s eager to help you do the same.',
    highlights: [
      'Published undergrad research in peer-reviewed journals',
      'Developed ML pipelines for genomics and proteomics',
      'Passionate about ethical AI and clear scientific communication'
    ],
    color: 'purple.500'
  },
  {
    name: 'Shrey Raj',
    university: 'University of California, Berkeley',
    image: '/images/shrey.jpg',
    expertise: 'Financial Time-Series Modeling',
    description: 'Shrey\'s real-world finance projects teach you not just theory, but how to build models that win.',
    highlights: [
      'Co-authored multiple conference papers on algorithmic trading',
      'Led campus-wide ML hackathons and study groups',
      'Specializes in Python, R, and scalable ML frameworks'
    ],
    color: 'blue.500'
  },
  {
    name: 'Ishaan Gupta',
    university: 'Stanford University',
    image: '/images/ishaan.jpeg',
    expertise: 'Deep Learning for Environmental Science',
    description: 'Ishaan will push you to ask the big questions and apply ML to solve them.',
    highlights: [
      'Recipient of Stanford Undergraduate Research Fellowship',
      'Published work on satellite imagery analysis for climate modeling',
      'Advocate for sustainability and open-source research'
    ],
    color: 'purple.500'
  }
]

const mentorshipBenefits = [
  {
    icon: FaFilePdf,
    title: 'Active Researchers',
    description: 'All mentors have current publications, so you learn the exact process for crafting journal-ready papers.'
  },
  {
    icon: FaUsers,
    title: 'Small-Group & 1:1 Support',
    description: 'Whether you choose the cohort or intensive track, you get direct access—no teaching assistants, no generic videos.'
  },
  {
    icon: FaComments,
    title: 'Personalized Feedback',
    description: 'Detailed code reviews, experiment critiques, and writing edits that transform your drafts into polished manuscripts.'
  },
  {
    icon: FaLightbulb,
    title: 'Career & College Guidance',
    description: 'Insider tips on framing your research in college essays, résumé bullet points, and interviews.'
  }
]

export default function Mentors() {
  return (
    <>
      {/* Hero Section */}
      <Box 
        py={{ base: 16, md: 20 }} 
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
          backgroundImage="radial-gradient(circle at 20% 80%, white 2px, transparent 2px)"
          backgroundSize="40px 40px"
        />
        
        <Container maxW="6xl" position="relative">
          <VStack gap={6} textAlign="center" color="white">
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Heading size="3xl" fontWeight="bold" mb={4}>
                Meet Your Mentors
              </Heading>
              <Text fontSize="xl" maxW="4xl" lineHeight="tall" opacity={0.9}>
                Our mentors aren't just teachers—they're active researchers from Princeton, UC Berkeley, 
                and Stanford who've published cutting-edge work and know exactly what top universities look for. 
                They'll guide you step-by-step through real ML research, helping you develop confidence, 
                creativity, and a publication-ready paper.
              </Text>
            </MotionBox>
          </VStack>
        </Container>
      </Box>

      {/* Mentor Team Section */}
      <Box py={{ base: 16, md: 20 }} bg="white">
        <Container maxW="7xl">
          <VStack gap={12}>
            <VStack gap={4} textAlign="center">
              <Heading size="2xl" color="gray.800">
                Our Mentor Team
              </Heading>
            </VStack>

            <Grid templateColumns={{ base: '1fr', lg: 'repeat(3, 1fr)' }} gap={8} w="full">
              {mentors.map((mentor, index) => (
                <MotionBox
                  key={mentor.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Box 
                    p={6} 
                    borderRadius="2xl" 
                    bg="white" 
                    border="1px solid" 
                    borderColor="gray.200" 
                    boxShadow="xl" 
                    _hover={{ 
                      transform: 'translateY(-4px)', 
                      boxShadow: '2xl',
                      borderColor: mentor.color
                    }} 
                    transition="all 0.3s"
                    h="full"
                  >
                    <VStack gap={6} align="start">
                      {/* Profile Header */}
                      <VStack gap={3} align="start" w="full">
                        <HStack justify="space-between" w="full">
                          <VStack align="start" gap={1}>
                            <Heading size="lg" color="gray.800">{mentor.name}</Heading>
                            <Text color={mentor.color} fontWeight="semibold" fontSize="md">
                              {mentor.university}
                            </Text>
                          </VStack>
                          <Badge 
                            colorScheme={mentor.color.split('.')[0]} 
                            variant="subtle" 
                            px={3} 
                            py={1} 
                            borderRadius="full"
                            fontSize="xs"
                          >
                            Expert
                          </Badge>
                        </HStack>
                        
                        {/* Profile Image */}
                        <Box 
                          w="full" 
                          h="0"
                          paddingBottom="100%"
                          borderRadius="xl" 
                          overflow="hidden"
                          bg="gray.100"
                          position="relative"
                        >
                          <Image
                            src={mentor.image}
                            alt={`Photo of ${mentor.name}`}
                            position="absolute"
                            top="0"
                            left="0"
                            w="full"
                            h="full"
                            objectFit="cover"
                            objectPosition="center"
                            loading="lazy"
                          />
                        </Box>
                      </VStack>

                      {/* Expertise */}
                      <VStack gap={2} align="start" w="full">
                        <Text fontSize="sm" fontWeight="bold" color="gray.500" textTransform="uppercase">
                          Expertise
                        </Text>
                        <Text fontSize="md" fontWeight="semibold" color="gray.800">
                          {mentor.expertise}
                        </Text>
                      </VStack>

                      {/* Highlights */}
                      <Box w="full">
                        <Text fontSize="sm" fontWeight="bold" color="gray.500" textTransform="uppercase" mb={3}>
                          Highlights
                        </Text>
                        <VStack align="start" gap={2}>
                          {mentor.highlights.map((highlight, idx) => (
                            <HStack key={idx} align="start">
                              <Box as={FaCheckCircle} w={4} h={4} color="blue.500" mt={1} />
                              <Text fontSize="sm" color="gray.600" lineHeight="relaxed">
                                {highlight}
                              </Text>
                            </HStack>
                          ))}
                        </VStack>
                      </Box>

                      {/* Quote */}
                      <Box 
                        w="full" 
                        p={4} 
                        bg={`${mentor.color.split('.')[0]}.50`} 
                        borderRadius="lg" 
                        borderLeft="4px solid" 
                        borderLeftColor={mentor.color}
                      >
                        <Text 
                          fontSize="sm" 
                          fontStyle="italic" 
                          color="gray.700" 
                          lineHeight="relaxed"
                        >
                          "{mentor.description}"
                        </Text>
                      </Box>
                    </VStack>
                  </Box>
                </MotionBox>
              ))}
            </Grid>
          </VStack>
        </Container>
      </Box>

      {/* Why Our Mentors Stand Out */}
      <Box py={{ base: 16, md: 20 }} bg="gray.50">
        <Container maxW="7xl">
          <VStack gap={12}>
            <VStack gap={4} textAlign="center">
              <Heading size="2xl" color="gray.800">
                Why Our Mentors Stand Out
              </Heading>
              <Text fontSize="lg" color="gray.600" maxW="3xl">
                Experience personalized guidance from researchers who understand both cutting-edge ML 
                and what it takes to succeed in top universities.
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
              {mentorshipBenefits.map((benefit, index) => (
                <MotionBox
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Box 
                    p={8} 
                    borderRadius="2xl" 
                    bg="white" 
                    border="1px solid" 
                    borderColor="gray.200" 
                    boxShadow="lg" 
                    h="full"
                    _hover={{ transform: 'translateY(-2px)', boxShadow: 'xl' }}
                    transition="all 0.3s"
                  >
                    <HStack align="start" gap={4}>
                      <Box p={3} bg="primary.100" borderRadius="xl">
                        <Box as={benefit.icon} w={6} h={6} color="primary.600" />
                      </Box>
                      <VStack align="start" gap={3}>
                        <Heading size="md" color="gray.800">
                          {benefit.title}
                        </Heading>
                        <Text color="gray.600" lineHeight="relaxed">
                          {benefit.description}
                        </Text>
                      </VStack>
                    </HStack>
                  </Box>
                </MotionBox>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box py={{ base: 16, md: 20 }} bg="linear-gradient(135deg, #1e40af 0%, #7c3aed 100%)">
        <Container maxW="6xl">
          <VStack gap={8} textAlign="center" color="white">
            <Heading size="2xl">
              Ready to Learn from the Best?
            </Heading>
            <Text fontSize="xl" maxW="3xl" opacity={0.9}>
              Our mentors are standing by to help you take your first steps toward becoming a published 
              ML researcher—and to give your college application the standout credential it needs.
            </Text>
            
            {/* Contact Information */}
            <VStack gap={4} mt={6}>
              <HStack gap={8} flexWrap="wrap" justify="center">
                <HStack>
                  <Box as={FaPhone} w={5} h={5} />
                  <Text fontSize="lg" fontWeight="medium">(925) 577-7916</Text>
                </HStack>
                <HStack>
                  <Box as={FaEnvelope} w={5} h={5} />
                  <Text fontSize="lg" fontWeight="medium">mlsummerprogram@gmail.com</Text>
                </HStack>
              </HStack>
            </VStack>
          </VStack>
        </Container>
      </Box>
    </>
  )
} 