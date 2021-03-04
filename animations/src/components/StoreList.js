
import { Box, Flex, Stack, Grid, Wrap, AspectRatio } from "@chakra-ui/layout";



const stores = [
  {id:1,name:'ukunda',location:'diani',owner:'Musa',type:'cafe'},
  {id:2,name:'konahamsa',location:'diani',owner:'Musaka',type:'cafe'},
  {id:3,name:'ukunda and sons',location:'diani',owner:'Maria',type:'shop'},
  {id:4,name:'ukunda',location:'diani',owner:'Husein',type:'hotel'},
  {id:4,name:'ukunda',location:'diani',owner:'Husein',type:'hotel'},
  {id:4,name:'ukunda',location:'diani',owner:'Husein',type:'hotel'}
];

 export default function StoreList({e}) {
  

    return (
    
    <div>
        {stores.map(({id, name, location, email}) => (
          <div key={id}>
            <Box 
            d="flex"
            alignItems="center"
            justifyContent="center"
            w="25vw"
            h="6vh"
            borderWidth="2px"
            fontSize="xs"
            textTransform="uppercase"
            font-weight="semi-bold"
            borderRadius="md"
            mb="10px"
            overflow="hidden"
            letterSpacing="wide"

            >
            {name}
            </Box>
        
          </div>
        
        ))}
    </div>
    )}
        
  // export async function getStaticProps() {
  //   const res = await fetch('http://localhost:5000/stores')
  //   const stores = await res.json()
  //   return {
  //     props: {
  //       stores,
  //     },
  //   }
  // }
  
  // export const getStaticProps = async () => {
  //   const res = await fetch('https://localhost:5000/stores')
  //   const stores: stores[] = await res.json()
  
  //   return {
  //     props: {
  //       stores,
  //     },
  //   }
  // }
  