import React from 'react';
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Stack,
} from '@chakra-ui/react';
import { useColorModeValue } from '@/components/ui/color-mode';

const Home = () => {
  const cardBg = useColorModeValue(
    'rgba(255, 255, 255, 0.95)',
    'rgba(26, 32, 44, 0.95)'
  );
  const sectionBg = useColorModeValue('whiteAlpha.800', 'whiteAlpha.100');

  return (
    <Container maxW="1200px" py={8}>
      {/* Hero Section */}
      <VStack spacing={8} textAlign="center" mb={16}>
        <Heading
          as="h1"
          size="3xl"
          color="white"
          textShadow="0 2px 10px rgba(0, 0, 0, 0.3)"
          fontWeight="bold"
        >
          Welcome to Contact!
        </Heading>
        <Text fontSize="xl" color="rgba(255, 255, 255, 0.9)" maxW="600px">
          The ultimate word-guessing game for 3+ players
        </Text>

        <HStack spacing={4} flexWrap="wrap" justify="center">
          <Button
            size="lg"
            bgGradient="linear(to-r, #667eea, #764ba2)"
            color="white"
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: '0 6px 20px rgba(102, 126, 234, 0.6)',
            }}
            boxShadow="0 4px 15px rgba(102, 126, 234, 0.4)"
            px={8}
          >
            Create Game
          </Button>
          <Button
            size="lg"
            bg="rgba(255, 255, 255, 0.9)"
            color="#667eea"
            border="2px solid #667eea"
            _hover={{
              bg: '#667eea',
              color: 'white',
            }}
            px={8}
          >
            Join Game
          </Button>
        </HStack>
      </VStack>

      {/* Game Info Section */}
      <Box
        bg={cardBg}
        backdropFilter="blur(10px)"
        borderRadius="3xl"
        boxShadow="0 10px 40px rgba(0, 0, 0, 0.1)"
        border="1px solid rgba(255, 255, 255, 0.2)"
        p={12}
      >
        <VStack spacing={8}>
          <Heading as="h2" size="xl" textAlign="center" color="gray.700">
            How to Play
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6} w="full">
            {[
              {
                title: '1. Choose a Word',
                text: 'The defender thinks of a secret word and reveals the first letter.',
              },
              {
                title: '2. Give Clues',
                text: 'Players give clues for words starting with the revealed letters.',
              },
              {
                title: '3. Make Contact',
                text: 'When you know someone\'s clue, declare "Contact" to challenge the defender.',
              },
              {
                title: '4. Win the Game',
                text: 'Successfully guess the secret word through strategic clues and contacts!',
              },
            ].map((step, idx) => (
              <Box
                key={idx}
                bgGradient="linear(to-br, #f8f9ff, #e8eeff)"
                borderRadius="xl"
                p={6}
                textAlign="left"
                h="100%"
              >
                <Stack spacing={3}>
                  <Heading as="h3" size="md" color="#667eea">
                    {step.title}
                  </Heading>
                  <Text color="gray.600">{step.text}</Text>
                </Stack>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Box>
    </Container>
  );
};

export default Home;
