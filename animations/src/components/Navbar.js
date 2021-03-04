import Search from "./Search";
import UserName from "./user/UserName";
import Link from 'next/link';
import { Container } from "@chakra-ui/react";
import { Avatar, AvatarGroup } from "@chakra-ui/avatar";
import { Box, Flex, Stack, Grid, Wrap, AspectRatio, Spacer } from "@chakra-ui/layout";
import {
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
} from "@chakra-ui/react";
// import { 
//   PhoneIcon, 
//   AddIcon,
//   WarningIcon } from '@chakra-ui/icons';
export default function Navbar() {

    
    return (
      <div>
       <Container maxW="container.sm" mt=".5em">
       <Flex justify="space-between" alignItems="center" justifyContent="center" >
         <Tag size="lg" colorScheme="red" borderRadius=".3em">
         <Avatar
         src="https://avatars.githubusercontent.com/u/55136496?s=400&u=20d26b00fde078e5a357b05e08bc699dd6b26b32&v=4"
         size="xs"
         name="david mwangi"
         ml={-1}
         mr={2}
          />
        <TagLabel>  
        <Link href="/">
          <UserName /> 
         </Link> 
        </TagLabel>
       
         </Tag>
         <Spacer/>
        <Box>
          <Search />
        </Box>
        <Spacer/>
        
      <Tag size="lg" colorScheme="red" borderRadius=".3em">colormode</Tag>
      
     
       </Flex>
      
     </Container>
      
       </div>
    )
  }
  
