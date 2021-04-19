import React, { useState } from 'react'
import { Box, Stack,Heading,Text } from "@chakra-ui/layout"
import { Button } from "@chakra-ui/react"

function Feature({ name, price, quantity }) {
  const [count, setCount] = useState(0);
  const total = count * price
  console.log(count)
  return (
    <Box p={5} shadow="md" borderWidth="1px" w="40%"  >
      <Heading fontSize="xl">{name}</Heading>
      <Text mt={4}>Ksh{price} </Text> <Text mt={4}>{quantity} in stock </Text>
      <Button colorScheme="teal" variant="outline" alignSelf="right" float="right"  onClick={() => setCount(count + 1)}>
         Add to cart
      </Button>
     {total}
     
    </Box>
  )
}

export default function ItemList({items}) {
    
    return (
      <Stack spacing={8}  >

        {items.map(e =>(
            <Feature
              name={e.name}
              price={e.price}
              quantity={e.quantity}
            />
     

        ))}
        
    </Stack>

    
  )
}

