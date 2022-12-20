import { Box, Container, Text } from '@chakra-ui/react';
import React from 'react';

export default function Services(){
    return (
        <Box>
            <Container maxW="7xl" pt="8rem" pb="4rem">
                <Box textAlign='center'>
                    <Text
                        fontSize="1.3rem"
                        fontWeight="bold"
                        backgroundImage="linear-gradient(108deg, #b16cea 8%, #ff5e69 40%, #ff8a56 77%, #ffa84b 91%)"
                        display="inline"
                        backgroundClip="text"
                        letterSpacing="4px"
                    >
                        SERVICES
                    </Text>

                    <br />
                    <br />

                    <Text maxW="810px" margin="auto" lineHeight="110%" letterSpacing="1px" fontWeight="700" fontSize="3.4rem">Design that solves problems, one product at a time.</Text>
                </Box>
            </Container>
        </Box>
    );
}
