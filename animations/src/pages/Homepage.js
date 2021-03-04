import Navbar from '../components/Navbar';
import StoreList from '../components/StoreList';
import { Box, Flex, Stack, Grid, Wrap, AspectRatio } from "@chakra-ui/layout";
import { Center, Square, Circle } from "@chakra-ui/react"


export default function Homepage() {
  return (
    <div>
    <Navbar />
    <Center h="100vh" w="100vw">
    <StoreList/>
    </Center>
    
 
    </div>

  )
}
