import { Box, Container, Flex, HStack, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

export default function Navbar() {
    return (
        <Box>
            <Container maxW='7xl' py='6'>
                <HStack gap={10} verticalAlign='center'>
                    <Text fontSize='1.8rem' fontWeight='bold'>Dheeraj Gogoi</Text>
                    <Spacer />
                    <Text fontSize='16px' fontWeight='700'>About</Text>
                    <Text fontSize='16px' fontWeight='700'>Services</Text>
                    <Text fontSize='16px' fontWeight='700'>Projects</Text>
                    <Text fontSize='16px' fontWeight='700'>Contact</Text>
                </HStack>
            </Container>
        </Box>
    )
}
