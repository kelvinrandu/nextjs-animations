import { useRouter } from 'next/router';


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
  console.log(store)
  
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

        <h1>items</h1>

        {props.store.items.map(e =>(
          <div>{e.name}. ksh{e.price}</div>

        ))}
              
      </div>
    )
  }
  
