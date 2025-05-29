/**
 * Programs page - Comprehensive yet organized program overview
 * Features: Detailed program tracks, curriculum breakdown, and application info
 */

import { Box, Container, Heading, Text, VStack, HStack, Grid, Badge, Button, Flex, SimpleGrid, Separator } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaCalendarAlt, FaClock, FaUsers, FaChartLine, FaFilePdf, FaTrophy, FaCheckCircle, FaArrowRight, FaBookOpen, FaLightbulb, FaStar, FaCode, FaBrain, FaRocket, FaAward, FaHandshake } from 'react-icons/fa'
import NextLink from 'next/link'

const MotionBox = motion(Box)

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/1j3Jg-B8XFA7peZXTW7FEtlw7N2Huub7s9R9Z9ueig1Y/viewform?pli=1&pli=1&edit_requested=true#responses'

const programTracks = [
  {
    id: 'group-cohort',
    name: 'Group Research Cohort',
    subtitle: 'Collaborative Learning Experience',
    duration: '8 weeks',
    price: '$980',
    spots: '50 students per cohort',
    icon: FaUsers,
    color: 'blue.600',
    badgeText: 'Most Popular',
    badgeColor: 'blue',
    description: 'Join a collaborative research environment where you\'ll work alongside peers to tackle cutting-edge ML problems under expert guidance from top university researchers.',
    highlights: [
      'Weekly live seminars with Stanford, MIT, and Harvard researchers',
      'Small group workshops (4-6 students) with dedicated mentors',
      'Joint paper submission with mentor co-authorship opportunities',
      'Peer collaboration on real-world AI projects',
      'Professional recommendation letters from elite university faculty'
    ],
    schedule: {
      commitment: '12-15 hours/week',
      sessions: 'Tuesdays & Thursdays 4-7 PM PT',
      workshops: 'Saturdays 10 AM-12 PM PT',
      mentorship: '1 hour/week group check-ins'
    },
    outcomes: [
      'Published research paper in Harvard-affiliated journal',
      'Complete research portfolio with GitHub repository',
      'Certificate of completion from ML Institute',
      'Network of peer researchers and industry connections'
    ]
  },
  {
    id: 'intensive-mentorship',
    name: '1-on-1 Intensive Mentorship',
    subtitle: 'Accelerated Research Track',
    duration: '6 weeks',
    price: '$1,480',
    spots: '20 students per cohort',
    icon: FaRocket,
    color: 'purple.600',
    badgeText: 'Premium',
    badgeColor: 'purple',
    description: 'Experience intensive, personalized mentorship with direct access to top-tier researchers for accelerated learning and breakthrough research output.',
    highlights: [
      'Daily 1-on-1 check-ins with dedicated Princeton/UC Berkeley mentors',
      'Bespoke project design tailored to your specific interests',
      'Direct mentor feedback and iterative research improvement',
      'Flexible scheduling accommodating your commitments',
      'Fast-tracked publication process with priority review'
    ],
    schedule: {
      commitment: '15-20 hours/week',
      sessions: 'Flexible scheduling based on availability',
      mentorship: '3-4 hours/week individual sessions',
      deadlines: 'Accelerated 6-week research timeline'
    },
    outcomes: [
      'Solo-authored research paper with mentor guidance',
      'Direct mentorship from elite university researchers',
      'Customized research methodology and project',
      'Priority publication and conference submission opportunities'
    ]
  }
]

const curriculumModules = [
  {
    module: 1,
    title: 'Data Science Foundations',
    weeks: 'Weeks 1-2',
    icon: FaChartLine,
    color: 'blue.500',
    description: 'Master the fundamentals of data science and establish ethical frameworks for responsible AI research.',
    topics: [
      'Data collection, cleaning, and preprocessing techniques',
      'Statistical analysis and hypothesis testing',
      'Data visualization and storytelling with Python',
      'AI ethics, bias detection, and fairness metrics',
      'Feature engineering and selection strategies'
    ],
    projects: [
      'Analyze real-world dataset from UN Global Goals initiative',
      'Build bias detection algorithms for hiring datasets',
      'Create interactive dashboards for climate change data'
    ],
    tools: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly']
  },
  {
    module: 2,
    title: 'Machine Learning & AI',
    weeks: 'Weeks 3-5',
    icon: FaBrain,
    color: 'green.500',
    description: 'Dive deep into neural networks, deep learning frameworks, and cutting-edge AI architectures.',
    topics: [
      'Neural network fundamentals and backpropagation',
      'Convolutional Neural Networks for computer vision',
      'Recurrent networks and attention mechanisms for NLP',
      'Transfer learning and pre-trained model fine-tuning',
      'Model optimization, regularization, and hyperparameter tuning'
    ],
    projects: [
      'Build medical image classification system for disease detection',
      'Develop sentiment analysis tool for social media monitoring',
      'Create time-series forecasting model for financial markets'
    ],
    tools: ['TensorFlow', 'PyTorch', 'Keras', 'Hugging Face', 'OpenCV']
  },
  {
    module: 3,
    title: 'Research & Publication',
    weeks: 'Weeks 6-8',
    icon: FaFilePdf,
    color: 'purple.500',
    description: 'Learn to conduct rigorous research, write academic papers, and navigate the publication process.',
    topics: [
      'Research methodology and experimental design',
      'Literature review and citation management',
      'Academic writing structure and scientific communication',
      'Peer review process and handling feedback',
      'Conference presentations and poster design'
    ],
    projects: [
      'Conduct comprehensive literature review in chosen field',
      'Design and execute controlled experiments',
      'Write and submit research paper to academic journal'
    ],
    tools: ['LaTeX', 'Overleaf', 'Zotero', 'Git', 'Jupyter Notebooks']
  }
]

const prerequisites = [
  {
    category: 'Academic Background',
    icon: FaBookOpen,
    requirements: [
      'High school student (grades 9-12) or recent graduate',
      'Strong performance in mathematics (Algebra II minimum)',
      'GPA of 3.0+ (3.5+ recommended for intensive track)',
      'Demonstrated interest in STEM fields'
    ]
  },
  {
    category: 'Technical Skills',
    icon: FaCode,
    requirements: [
      'Basic programming experience (any language)',
      'Familiarity with mathematical concepts',
      'Comfort with computer-based learning',
      'No prior AI/ML experience required'
    ]
  },
  {
    category: 'Personal Qualities',
    icon: FaStar,
    requirements: [
      'Strong motivation and self-discipline',
      'Curiosity about AI and its applications',
      'Commitment to program duration',
      'Interest in making positive global impact'
    ]
  }
]

export default function Programs() {
  return (
    <>
      {/* Hero Section with Fixed Gradient Background */}
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
                AI Research Programs
              </Heading>
              <Text fontSize="xl" maxW="4xl" lineHeight="tall" opacity={0.9}>
                Transform your passion for AI into published research. Join our intensive programs 
                designed to accelerate your journey from curious student to published researcher.
              </Text>
            </MotionBox>
            
            {/* Enhanced Stats */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <SimpleGrid columns={{ base: 2, md: 4 }} gap={8} mt={8}>
                <VStack>
                  <Box p={3} bg="rgba(255, 255, 255, 0.2)" borderRadius="full">
                    <Box as={FaCalendarAlt} w={6} h={6} />
                  </Box>
                  <Text fontWeight="bold" fontSize="2xl">6-8</Text>
                  <Text fontSize="sm" opacity={0.8}>Weeks Duration</Text>
                </VStack>
                <VStack>
                  <Box p={3} bg="rgba(255, 255, 255, 0.2)" borderRadius="full">
                    <Box as={FaUsers} w={6} h={6} />
                  </Box>
                  <Text fontWeight="bold" fontSize="2xl">500+</Text>
                  <Text fontSize="sm" opacity={0.8}>Alumni Network</Text>
                </VStack>
                <VStack>
                  <Box p={3} bg="rgba(255, 255, 255, 0.2)" borderRadius="full">
                    <Box as={FaFilePdf} w={6} h={6} />
                  </Box>
                  <Text fontWeight="bold" fontSize="2xl">100%</Text>
                  <Text fontSize="sm" opacity={0.8}>Publication Rate</Text>
                </VStack>
                <VStack>
                  <Box p={3} bg="rgba(255, 255, 255, 0.2)" borderRadius="full">
                    <Box as={FaAward} w={6} h={6} />
                  </Box>
                  <Text fontWeight="bold" fontSize="2xl">15+</Text>
                  <Text fontSize="sm" opacity={0.8}>Research Awards</Text>
                </VStack>
              </SimpleGrid>
            </MotionBox>
          </VStack>
        </Container>
      </Box>

      {/* Program Tracks - Fixed Layout */}
      <Box py={{ base: 16, md: 20 }} bg="gray.50">
        <Container maxW="7xl">
          <VStack gap={12}>
            <VStack gap={4} textAlign="center">
              <Heading size="2xl" color="gray.800">
                Choose Your Research Track
              </Heading>
              <Text fontSize="lg" color="gray.600" maxW="3xl">
                Two distinct pathways designed to match your learning style, schedule, and research ambitions. 
                Both tracks guarantee publication and provide world-class mentorship.
              </Text>
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
                    minH="600px"
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

                      <SimpleGrid columns={3} gap={4} w="full">
                        <VStack align="start" gap={2}>
                          <Text fontSize="xs" fontWeight="bold" color="gray.500" textTransform="uppercase">Duration</Text>
                          <Text fontSize="md" fontWeight="semibold" color="gray.800">{track.duration}</Text>
                        </VStack>
                        <VStack align="start" gap={2}>
                          <Text fontSize="xs" fontWeight="bold" color="gray.500" textTransform="uppercase">Investment</Text>
                          <Text fontSize="md" fontWeight="bold" color={track.color}>{track.price}</Text>
                        </VStack>
                        <VStack align="start" gap={2}>
                          <Text fontSize="xs" fontWeight="bold" color="gray.500" textTransform="uppercase">Capacity</Text>
                          <Text fontSize="md" fontWeight="semibold" color="gray.800">{track.spots}</Text>
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

                      <Box w="full">
                        <Text fontWeight="bold" mb={3} color="gray.800">Schedule & Commitment:</Text>
                        <VStack align="start" gap={2}>
                          <HStack>
                            <Box as={FaClock} w={4} h={4} color="blue.500" />
                            <Text fontSize="sm" color="gray.600">{track.schedule.commitment}</Text>
                          </HStack>
                          <HStack>
                            <Box as={FaCalendarAlt} w={4} h={4} color="blue.500" />
                            <Text fontSize="sm" color="gray.600">{track.schedule.sessions}</Text>
                          </HStack>
                          <HStack>
                            <Box as={FaHandshake} w={4} h={4} color="blue.500" />
                            <Text fontSize="sm" color="gray.600">{track.schedule.mentorship}</Text>
                          </HStack>
                        </VStack>
                      </Box>

                      <Box w="full">
                        <Text fontWeight="bold" mb={3} color="gray.800">What You'll Achieve:</Text>
                        <VStack align="start" gap={2}>
                          {track.outcomes.map((outcome, idx) => (
                            <HStack key={idx} align="start">
                              <Box as={FaTrophy} w={4} h={4} color="yellow.500" mt={1} />
                              <Text fontSize="sm" color="gray.600" lineHeight="relaxed">{outcome}</Text>
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

      {/* Detailed Curriculum */}
      <Box py={{ base: 16, md: 20 }} bg="white">
        <Container maxW="7xl">
          <VStack gap={12}>
            <VStack gap={4} textAlign="center">
              <Heading size="2xl" color="gray.800">
                Comprehensive Research Curriculum
              </Heading>
              <Text fontSize="lg" color="gray.600" maxW="3xl">
                Our curriculum is designed by leading researchers from Stanford, MIT, and Harvard to provide 
                hands-on experience with cutting-edge AI techniques and research methodologies.
              </Text>
            </VStack>

            <VStack gap={8} w="full">
              {curriculumModules.map((module, index) => (
                <MotionBox
                  key={module.module}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  w="full"
                >
                  <Box p={8} border="1px solid" borderColor="gray.200" borderRadius="2xl" bg="gray.50" boxShadow="lg">
                    <Grid templateColumns={{ base: '1fr', lg: '1fr 2fr' }} gap={8}>
                      <VStack align="start" gap={4}>
                        <HStack>
                          <Box p={3} bg={`${module.color.split('.')[0]}.100`} borderRadius="xl">
                            <Box as={module.icon} w={8} h={8} color={module.color} />
                          </Box>
                          <VStack align="start" gap={1}>
                            <Badge colorScheme={module.color.split('.')[0]} variant="solid" fontSize="sm">
                              Module {module.module}
                            </Badge>
                            <Text fontSize="sm" color="gray.600" fontWeight="semibold">{module.weeks}</Text>
                          </VStack>
                        </HStack>
                        
                        <VStack align="start" gap={3}>
                          <Heading size="lg" color="gray.800">{module.title}</Heading>
                          <Text color="gray.600" lineHeight="relaxed">
                            {module.description}
                          </Text>
                        </VStack>

                        <Box>
                          <Text fontWeight="bold" fontSize="sm" color="gray.800" mb={2}>
                            Tools & Technologies:
                          </Text>
                          <Flex wrap="wrap" gap={2}>
                            {module.tools.map((tool) => (
                              <Badge key={tool} variant="outline" colorScheme={module.color.split('.')[0]}>
                                {tool}
                              </Badge>
                            ))}
                          </Flex>
                        </Box>
                      </VStack>

                      <VStack align="start" gap={6}>
                        <Box>
                          <Text fontWeight="bold" color="gray.800" mb={3}>Learning Objectives:</Text>
                          <VStack align="start" gap={2}>
                            {module.topics.map((topic, idx) => (
                              <HStack key={idx} align="start">
                                <Box as={FaCheckCircle} w={4} h={4} color="blue.500" mt={1} />
                                <Text fontSize="sm" color="gray.600">{topic}</Text>
                              </HStack>
                            ))}
                          </VStack>
                        </Box>

                        <Box>
                          <Text fontWeight="bold" color="gray.800" mb={3}>Hands-on Projects:</Text>
                          <VStack align="start" gap={2}>
                            {module.projects.map((project, idx) => (
                              <HStack key={idx} align="start">
                                <Box as={FaLightbulb} w={4} h={4} color="yellow.500" mt={1} />
                                <Text fontSize="sm" color="gray.600">{project}</Text>
                              </HStack>
                            ))}
                          </VStack>
                        </Box>
                      </VStack>
                    </Grid>
                  </Box>
                </MotionBox>
              ))}
            </VStack>
          </VStack>
        </Container>
      </Box>

      {/* Prerequisites Section */}
      <Box py={{ base: 16, md: 20 }} bg="gray.50">
        <Container maxW="7xl">
          <VStack gap={12}>
            <VStack gap={4} textAlign="center">
              <Heading size="2xl" color="gray.800">
                Prerequisites & Requirements
              </Heading>
              <Text fontSize="lg" color="gray.600" maxW="3xl">
                Our programs are designed to be accessible to motivated students with diverse backgrounds. 
                No prior AI experience required!
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
              {prerequisites.map((category, index) => (
                <MotionBox
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Box p={6} borderRadius="xl" bg="white" border="1px solid" borderColor="gray.200" h="full">
                    <VStack align="start" gap={4}>
                      <HStack>
                        <Box p={3} bg="primary.100" borderRadius="lg">
                          <Box as={category.icon} w={6} h={6} color="primary.600" />
                        </Box>
                        <Heading size="md" color="gray.800">{category.category}</Heading>
                      </HStack>
                      
                      <VStack align="start" gap={2}>
                        {category.requirements.map((req, idx) => (
                          <HStack key={idx} align="start">
                            <Box as={FaCheckCircle} w={4} h={4} color="blue.500" mt={1} />
                            <Text fontSize="sm" color="gray.600">{req}</Text>
                          </HStack>
                        ))}
                      </VStack>
                    </VStack>
                  </Box>
                </MotionBox>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box py={{ base: 16, md: 20 }} bg="linear-gradient(135deg, #1e40af 0%, #7c3aed 50%, #059669 100%)">
        <Container maxW="6xl">
          <VStack gap={8} textAlign="center" color="white">
            <Heading size="2xl">
              Ready to Start Your Research Journey?
            </Heading>
            <Text fontSize="xl" maxW="3xl" opacity={0.9}>
              Applications are open for Summer 2025. Join the next generation of AI researchers 
              and make your mark on the future of technology.
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
              <Button
                asChild
                variant="outline"
                borderColor="white"
                color="white"
                size="lg"
                px={8}
                py={6}
                fontSize="lg"
                _hover={{ bg: 'white', color: 'primary.600', transform: 'translateY(-2px)' }}
              >
                <NextLink href="/mentors">
                  Learn More
                </NextLink>
              </Button>
            </HStack>
          </VStack>
        </Container>
      </Box>
    </>
  )
} 