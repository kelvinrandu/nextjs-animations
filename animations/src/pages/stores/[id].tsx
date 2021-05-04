import { useRouter } from 'next/router';
import ItemList from '../../components/ItemList'


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

export default function Store({store}) {
    const router = useRouter()
    
    return (
      <div>
        <h1>store details</h1>
        {store.name} since {store.createdAt}

        <h1>items</h1>
           <ItemList items={store.items} />         
      </div>
    )
  }
  
