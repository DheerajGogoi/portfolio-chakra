import React from 'react';
import {
  Box,
  Text
} from '@chakra-ui/react';
import "./index.css";
import Home from './sections/Home';
import Navbar from './components/Navbar';
import Services from './sections/Services';

function App() {
  return (
    <Box>
      <Navbar />
      <Home />
      <Services />
    </Box>
  );
}

export default App;
