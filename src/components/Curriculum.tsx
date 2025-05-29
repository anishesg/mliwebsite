/**
 * Curriculum component with clean timeline design
 * Features: embedded stats, clear hierarchy, proper visual flow (light mode only)
 */

'use client'

import { Box, Container, VStack, Flex, Heading, Text, Badge, HStack } from '@chakra-ui/react'
import { motion, useReducedMotion } from 'framer-motion'
import { FaDatabase, FaBrain, FaFlask, FaFileAlt, FaRocket } from 'react-icons/fa'

const MotionBox = motion(Box)

const modules = [
  {
    icon: FaDatabase,
    title: 'Data Foundations',
    week: 'Weeks 1–2',
    description: 'Master data cleaning, visualization & statistical analysis.',
    skills: ['Feature engineering', 'Exploratory data analysis', 'Data visualization', 'Statistical inference'],
    statValue: '50+',
    statLabel: 'Students',
    statColor: 'blue',
  },
  {
    icon: FaBrain,
    title: 'ML Architectures',
    week: 'Weeks 3–4',
    description: 'Dive deep into neural networks, deep learning & model optimization.',
    skills: ['Network design', 'Framework mastery', 'Hyperparameter tuning', 'Transfer learning'],
    statValue: '160+',
    statLabel: 'Hours',
    statColor: 'purple',
  },
  {
    icon: FaFlask,
    title: 'Research Methods',
    week: 'Weeks 5–6',
    description: 'Formulate hypotheses, design experiments & ensure ethical rigor.',
    skills: ['Experimental design', 'Hypothesis testing', 'Research ethics', 'Reproducibility'],
    statValue: '25+',
    statLabel: 'Awards',
    statColor: 'blue',
  },
  {
    icon: FaFileAlt,
    title: 'Paper Writing',
    week: 'Week 7',
    description: 'Learn to draft, revise & visualize your findings for journal submission.',
    skills: ['Academic writing', 'Data storytelling', 'Visualization best practices', 'Citation standards'],
    statValue: '100%',
    statLabel: 'Success Rate',
    statColor: 'purple',
  },
  {
    icon: FaRocket,
    title: 'Innovation Workshop',
    week: 'Week 8',
    description: 'Present your work to experts, refine through peer review & prepare for publication.',
    skills: ['Presentation skills', 'Peer feedback', 'Innovation thinking', 'Portfolio building'],
    statValue: '15+',
    statLabel: 'Projects',
    statColor: 'blue',
  },
]

export default function Curriculum() {
  // Respect user's motion preferences
  const shouldReduceMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: shouldReduceMotion ? 0 : 0.2,
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
      },
    },
  }

  const moduleVariants = {
    hidden: { 
      y: shouldReduceMotion ? 0 : 30, 
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 0.95,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.5,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  }

  const dotVariants = {
    hidden: { 
      scale: shouldReduceMotion ? 1 : 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.4,
        ease: [0.23, 1, 0.32, 1],
        delay: shouldReduceMotion ? 0 : 0.1,
      },
    },
  }

  return (
    <Box 
      py={{ base: 10, md: 12 }} 
      bg="gray.50" 
      position="relative"
    >
      <Container maxW="7xl">
        <MotionBox
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Header */}
          <VStack gap={3} textAlign="center" maxW="3xl" mx="auto" mb={12}>
            <MotionBox variants={moduleVariants}>
              <Heading 
                size={{ base: "lg", md: "xl" }}
                color="gray.800"
                bgGradient="linear(to-r, primary.600, primary.400)"
                bgClip="text"
              >
                Curriculum Overview
              </Heading>
            </MotionBox>
            <MotionBox variants={moduleVariants}>
              <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" lineHeight="tall">
                Our 5‑module journey takes you from ML fundamentals to a peer‑reviewed publication over 8 intensive weeks:
              </Text>
            </MotionBox>
          </VStack>

          {/* Clean Timeline */}
          <Box maxW="6xl" mx="auto" position="relative">
            {/* Central timeline line */}
            <Box
              position="absolute"
              left="50%"
              transform="translateX(-50%)"
              top="0"
              bottom="0"
              w="2px"
              bg="primary.400"
              zIndex={1}
            />

            {/* Timeline Items */}
            <VStack gap={-8} position="relative">
              {modules.map((module, index) => (
                <Box
                  key={module.title}
                  w="full"
                  position="relative"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  py={8}
                >
                  {/* Timeline Dot - positioned absolutely to align with card center */}
                  <MotionBox
                    position="absolute"
                    left="calc(50% - 6px)"
                    top="50%"
                    transform="translate(-50%, -50%)"
                    w="12px"
                    h="12px"
                    bg="primary.600"
                    borderRadius="full"
                    border="3px solid white"
                    boxShadow="0 0 0 1px rgba(30, 64, 175, 0.3)"
                    zIndex={4}
                    variants={dotVariants}
                    _hover={{
                      scale: shouldReduceMotion ? 1 : 1.2,
                      boxShadow: "0 0 0 2px rgba(30, 64, 175, 0.5)",
                    }}
                  />

                  {/* Content Container */}
                  <Flex
                    w="full"
                    direction={{ base: 'column', md: 'row' }}
                    align="center"
                    justify="center"
                    gap={4}
                  >
                    {/* Left side content for even indices, empty for odd */}
                    <Box
                      flex="1"
                      display="flex"
                      justifyContent="flex-end"
                      pr={{ base: 0, md: 6 }}
                    >
                      {index % 2 === 0 && (
                        <MotionBox
                          variants={moduleVariants}
                          bg="white"
                          p={6}
                          borderRadius="xl"
                          border="1px solid"
                          borderColor="gray.200"
                          boxShadow="lg"
                          maxW="500px"
                          w="full"
                          position="relative"
                          zIndex={2}
                          _hover={{
                            transform: shouldReduceMotion ? 'none' : 'translateY(-4px)',
                            boxShadow: shouldReduceMotion ? 'lg' : 'xl',
                            borderColor: 'primary.300',
                            zIndex: 3,
                          }}
                          _after={{
                            content: '""',
                            position: 'absolute',
                            top: '50%',
                            right: '-8px',
                            transform: 'translateY(-50%)',
                            w: 0,
                            h: 0,
                            border: '8px solid transparent',
                            borderLeftColor: 'white',
                            display: { base: 'none', md: 'block' },
                          }}
                        >
                          <VStack align="start" gap={4}>
                            <HStack gap={3}>
                              <Box
                                as={module.icon}
                                w={6}
                                h={6}
                                color="primary.500"
                              />
                              <VStack align="start" gap={1}>
                                <Heading size="md" color="gray.800">
                                  {module.title}
                                </Heading>
                                <Badge
                                  colorScheme="primary"
                                  variant="solid"
                                  fontSize="xs"
                                  px={3}
                                  py={1}
                                  borderRadius="full"
                                >
                                  {module.week}
                                </Badge>
                              </VStack>
                            </HStack>

                            <Text color="gray.600" fontSize="sm" lineHeight="relaxed">
                              {module.description}
                            </Text>

                            <Box>
                              <Text fontSize="sm" fontWeight="semibold" color="gray.800" mb={2}>
                                Key Skills:
                              </Text>
                              <HStack wrap="wrap" gap={2}>
                                {module.skills.map((skill) => (
                                  <Badge
                                    key={skill}
                                    variant="outline"
                                    colorScheme="primary"
                                    fontSize="xs"
                                    px={2}
                                    py={1}
                                    borderRadius="full"
                                  >
                                    {skill}
                                  </Badge>
                                ))}
                              </HStack>
                            </Box>

                            <Badge
                              colorScheme={module.statColor}
                              variant="solid"
                              fontSize="sm"
                              px={4}
                              py={2}
                              borderRadius="full"
                              fontWeight="bold"
                            >
                              {module.statValue} {module.statLabel}
                            </Badge>
                          </VStack>
                        </MotionBox>
                      )}
                    </Box>

                    {/* Right side content for odd indices, empty for even */}
                    <Box
                      flex="1"
                      display="flex"
                      justifyContent="flex-start"
                      pl={{ base: 0, md: 6 }}
                    >
                      {index % 2 === 1 && (
                        <MotionBox
                          variants={moduleVariants}
                          bg="white"
                          p={6}
                          borderRadius="xl"
                          border="1px solid"
                          borderColor="gray.200"
                          boxShadow="lg"
                          maxW="500px"
                          w="full"
                          position="relative"
                          zIndex={2}
                          _hover={{
                            transform: shouldReduceMotion ? 'none' : 'translateY(-4px)',
                            boxShadow: shouldReduceMotion ? 'lg' : 'xl',
                            borderColor: 'primary.300',
                            zIndex: 3,
                          }}
                          _after={{
                            content: '""',
                            position: 'absolute',
                            top: '50%',
                            left: '-8px',
                            transform: 'translateY(-50%)',
                            w: 0,
                            h: 0,
                            border: '8px solid transparent',
                            borderRightColor: 'white',
                            display: { base: 'none', md: 'block' },
                          }}
                        >
                          <VStack align="start" gap={4}>
                            <HStack gap={3}>
                              <Box
                                as={module.icon}
                                w={6}
                                h={6}
                                color="primary.500"
                              />
                              <VStack align="start" gap={1}>
                                <Heading size="md" color="gray.800">
                                  {module.title}
                                </Heading>
                                <Badge
                                  colorScheme="primary"
                                  variant="solid"
                                  fontSize="xs"
                                  px={3}
                                  py={1}
                                  borderRadius="full"
                                >
                                  {module.week}
                                </Badge>
                              </VStack>
                            </HStack>

                            <Text color="gray.600" fontSize="sm" lineHeight="relaxed">
                              {module.description}
                            </Text>

                            <Box>
                              <Text fontSize="sm" fontWeight="semibold" color="gray.800" mb={2}>
                                Key Skills:
                              </Text>
                              <HStack wrap="wrap" gap={2}>
                                {module.skills.map((skill) => (
                                  <Badge
                                    key={skill}
                                    variant="outline"
                                    colorScheme="primary"
                                    fontSize="xs"
                                    px={2}
                                    py={1}
                                    borderRadius="full"
                                  >
                                    {skill}
                                  </Badge>
                                ))}
                              </HStack>
                            </Box>

                            <Badge
                              colorScheme={module.statColor}
                              variant="solid"
                              fontSize="sm"
                              px={4}
                              py={2}
                              borderRadius="full"
                              fontWeight="bold"
                            >
                              {module.statValue} {module.statLabel}
                            </Badge>
                          </VStack>
                        </MotionBox>
                      )}
                    </Box>
                  </Flex>
                </Box>
              ))}
            </VStack>
          </Box>
        </MotionBox>
      </Container>
    </Box>
  )
} 