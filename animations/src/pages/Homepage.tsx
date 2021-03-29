import StoreList from '../components/StoreList'
// import { PrismaClient } from '@prisma/client'
import prisma from '../../lib/prisma'


export async function getStaticProps() {

  // Returns an object or null
  const stores: object | null = await prisma.store.findMany({
 
    select: {
      id:true,
      name:true,
 
    },
  })
  

  return {
    props : { stores}
  }
  
}

export default function Homepage(props) {


 

  return (
    <div className="container">
      <h1>My stores</h1>
      {props.stores.map((store) => (
    <div key={store.id} className="post">
      {store.name}
    </div>
  ))}
  
 
    </div>

  )
}
