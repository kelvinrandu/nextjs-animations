import { useRouter } from 'next/router'
import ItemList from '../../components/ItemList'
import { Grid, GridItem } from "@chakra-ui/react"


export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/api/stores/')
  const stores = await res.json()

  const paths = stores.map((store) => ({
    params: { id: store.id.toString() },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({params}) {

  const res = await fetch(`http://localhost:3000/api/store/${params.id}`) 
  const store = await res.json()
  
  return {
    props : { store}
  }
  
}

export default function Store(props) {
    const router = useRouter()
    
    return (
      <div>
        <h1>store details</h1>
        {props.store.name} since {props.store.createdAt}



     <Grid templateColumns="repeat(5, 1fr)" gap={4}>
    <GridItem colSpan={2} h="10" bg="tomato" >
    <h1>items</h1>
           <ItemList items={props.store.items} />
    </GridItem  >
    <GridItem colStart={4} colEnd={6} h="10" bg="papayawhip" />
    </Grid>
             
      </div>
    )
  }
  
