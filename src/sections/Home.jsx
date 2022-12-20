import {
  Box,
  Container,
  Flex,
  HStack,
  Spacer,
  Text,
  Button,
} from '@chakra-ui/react';
import React from 'react';

export default function Home() {
    return (
        <Box>
        <Container maxW="7xl" pt="4rem">
            <Box maxW="700px" lineHeight="5em">
            <Text
                fontSize="4.7rem"
                fontWeight="bold"
                backgroundImage="linear-gradient(108deg, #b16cea 8%, #ff5e69 40%, #ff8a56 77%, #ffa84b 91%)"
                display="inline"
                backgroundClip="text"
            >
                I design products
            </Text>
            <Text fontSize="4.7rem" fontWeight="bold" mt="-22px">
                that delight and inspire people.
            </Text>
            </Box>
            <Text maxW="700px" mt="2rem" fontSize="xl" color="#666666">
            Hi! I’m Dheeraj, A Full Stack Developer based in India. I create
            user-friendly real world projects.
            </Text>

            <Box mt="2rem">
            <HStack gap={2}>
                <Button colorScheme='blackAlpha' background="black" color="white" borderRadius={0} fontSize="1.3rem" padding={7}>Book a Call</Button>
                <Button color="black" variant="ghost" borderRadius={0} fontSize="1.3rem" padding={7}>Download CV</Button>
            </HStack>
            </Box>
        </Container>
        </Box>
    );
}
