import Search from "./Search";
import UserName from "./user/UserName";
import Link from 'next/link';
import { Container } from "@chakra-ui/react";
import { Box, Flex, Stack, Grid, Wrap, AspectRatio, Spacer } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
export default function Navbar() {

    
    return (
      <div>
       <Container maxW="container.lg">
       <Flex alignItems="center">
         <Box p="2">
         <Link href="/">
          <UserName /> 
         </Link> 
         </Box>
         <Spacer/>
        <Box>
          <Search />
        </Box>
        <Spacer/>
        
      <Button colorScheme="teal" >colormode</Button>
     
       </Flex>
   
     </Container>
      
       </div>
    )
  }
  
