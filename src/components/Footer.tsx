/**
 * Footer component with navigation links, social icons, and copyright
 * Responsive design with organized sections and contact information (light mode only)
 */

import { Box, Container, Grid, VStack, HStack, Text, Link, Separator } from '@chakra-ui/react'
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import NextLink from 'next/link'

const footerLinks = {
  Programs: [
    { href: '/programs', label: 'Program Overview' },
    { href: '/programs#group', label: 'Group Cohort' },
    { href: '/programs#intensive', label: '1-on-1 Intensive' },
  ],
  About: [
    { href: '/mentors', label: 'Mentors' },
    { href: '/contact', label: 'Contact Us' },
  ],
  Support: [
    { href: '/contact', label: 'Contact Us' },
    { href: '/faq', label: 'FAQ' },
  ],
}

const socialLinks = [
  { href: 'https://twitter.com', icon: FaTwitter, label: 'Twitter' },
  { href: 'https://linkedin.com', icon: FaLinkedin, label: 'LinkedIn' },
  { href: 'https://github.com', icon: FaGithub, label: 'GitHub' },
  { href: 'mailto:info@mlinstitute.org', icon: FaEnvelope, label: 'Email' },
]

export default function Footer() {
  return (
    <Box 
      bg="gray.800" 
      color="white" 
      py={{ base: 12, md: 16 }}
      position="relative"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        h: "20px",
        bgGradient: "linear(to-b, rgba(30, 64, 175, 0.05), transparent)",
      }}
    >
      <Container maxW="7xl" position="relative" zIndex={2}>
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
          gap={8}
          mb={8}
        >
          {/* Brand Section */}
          <VStack align="start" gap={4}>
            <Text fontSize="xl" fontWeight="bold" color="primary.300">
              ML Institute
            </Text>
            <Text fontSize="sm" color="gray.300" maxW="sm">
              Empowering the next generation of AI researchers and innovators through world-class mentorship and hands-on experience.
            </Text>
            <HStack gap={4}>
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="gray.300"
                  _hover={{ color: 'primary.300' }}
                  fontSize="lg"
                  aria-label={social.label}
                >
                  <social.icon />
                </Link>
              ))}
            </HStack>
          </VStack>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <VStack key={category} align="start" gap={3}>
              <Text fontSize="sm" fontWeight="semibold" color="gray.200">
                {category}
              </Text>
              {links.map((link) => (
                <Link
                  key={link.href}
                  asChild
                  fontSize="sm"
                  color="gray.300"
                  _hover={{ color: 'white' }}
                >
                  <NextLink href={link.href}>{link.label}</NextLink>
                </Link>
              ))}
            </VStack>
          ))}
        </Grid>

        <Separator borderColor="gray.600" />

        <HStack
          justify="space-between"
          align="center"
          pt={6}
          direction={{ base: 'column', md: 'row' }}
        >
          <Text fontSize="sm" color="gray.300">
            © 2024 Machine Learning Institute. All rights reserved.
          </Text>
          <HStack gap={6} fontSize="sm" color="gray.300">
            <Link _hover={{ color: 'white' }}>Privacy Policy</Link>
            <Link _hover={{ color: 'white' }}>Terms of Service</Link>
          </HStack>
        </HStack>
        </Container>
    </Box>
  )
} 