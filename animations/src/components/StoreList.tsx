import { Box, Stack,Heading,Text } from "@chakra-ui/layout"
import Link from 'next/link'

function Feature({ name, location, ...rest }) {
  return (
    <Box 
      p={5} 
      shadow="md" 
      borderWidth="1px" 
      margin-left="20px"
      w="50%"  
      {...rest}>
      <Heading
       fontSize="xl"
      >
      {name}
      </Heading>
      <Text mt={4}>{location} </Text>
    </Box>
  )
}

export default function StoreList({stores}) {
  return (
    <Stack 
      spacing={8}
      >

        {stores.map(e =>(

          <Link as={`/stores/${e.id}`} href="/stores/[id]">
            
            <a>

            <Feature
              name={e.name}
              location={e.location}
            />
          
            </a>
            
          </Link>

        ))}
    </Stack>
  )
}

