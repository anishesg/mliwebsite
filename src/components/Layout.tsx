/**
 * Enhanced Layout component with modern design system
 * Features: glassmorphism navbar, responsive structure (light mode only)
 */

import { ReactNode } from 'react'
import { Box, Flex, HStack, Link, Button, Container } from '@chakra-ui/react'
import NextLink from 'next/link'
import Footer from './Footer'
import BackToTop from './BackToTop'

interface LayoutProps {
  children: ReactNode
}

const NavLinks = [
  { href: '/', label: 'Home' },
  { href: '/programs', label: 'Programs' },
  { href: '/mentors', label: 'Mentors' },
]

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/1j3Jg-B8XFA7peZXTW7FEtlw7N2Huub7s9R9Z9ueig1Y/viewform?pli=1&pli=1&edit_requested=true#responses'

export default function Layout({ children }: LayoutProps) {
  return (
    <Box minH="100vh" bg="white">
      {/* Skip to Content Link for Accessibility */}
      <Link
        href="#main-content"
        position="absolute"
        top="-100px"
        left="20px"
        bg="primary.600"
        color="white"
        px={4}
        py={2}
        borderRadius="md"
        zIndex={9999}
        textDecoration="none"
        fontWeight="semibold"
        className="sr-only sr-only-focusable"
      >
        Skip to main content
      </Link>

      {/* Modern Glassmorphism Navbar */}
      <Box
        position="sticky"
        top={0}
        zIndex={100}
        bg="rgba(255, 255, 255, 0.9)"
        backdropFilter="blur(12px)"
        borderBottom="1px solid"
        borderColor="rgba(0, 0, 0, 0.1)"
        px={4}
        py={2}
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bg: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
          pointerEvents: 'none',
        }}
      >
        <Container maxW="8xl">
          <Flex h={16} alignItems="center" justifyContent="space-between">
            {/* Enhanced Logo */}
            <Box 
              fontWeight="bold" 
              fontSize="xl" 
              color="primary.600"
              transition="all 0.2s"
              _hover={{ 
                transform: 'scale(1.05)',
                filter: 'brightness(1.1)',
              }}
            >
              <NextLink href="/">ML Institute</NextLink>
            </Box>

            {/* Desktop Navigation */}
            <HStack as="nav" gap={8} display={{ base: 'none', md: 'flex' }}>
              {NavLinks.map((link) => (
                <Link asChild key={link.href}>
                  <NextLink href={link.href}>
                    <Box
                      px={3}
                      py={2}
                      rounded="md"
                      position="relative"
                      color="gray.700"
                      fontWeight="medium"
                      transition="all 0.2s"
                      _hover={{
                        color: 'primary.600',
                        _after: {
                          width: '100%',
                        },
                      }}
                      _after={{
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: 0,
                        height: '2px',
                        bg: 'primary.600',
                        transition: 'width 0.3s ease',
                      }}
                    >
                      {link.label}
                    </Box>
                  </NextLink>
                </Link>
              ))}
            </HStack>

            {/* Desktop Actions */}
            <HStack gap={3} display={{ base: 'none', md: 'flex' }}>
              <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                <Button 
                  size="sm"
                  bg="primary.600"
                  color="white"
                  _hover={{
                    bg: 'primary.500',
                    transform: 'translateY(-1px)',
                  }}
                  transition="all 0.2s"
                >
                  Apply Now
                </Button>
              </a>
            </HStack>

            {/* Mobile Actions */}
            <HStack gap={2} display={{ base: 'flex', md: 'none' }}>
              <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                <Button 
                  size="sm"
                  bg="primary.600"
                  color="white"
                  _hover={{
                    bg: 'primary.500',
                  }}
                >
                  Apply
                </Button>
              </a>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Main Content */}
      <Box as="main" id="main-content">
        {children}
      </Box>

      {/* Footer */}
      <Footer />

      {/* Back to Top Button */}
      <BackToTop />
    </Box>
  )
} 