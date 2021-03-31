// import {
//   useSession, signIn, signOut
// } from 'next-auth/client'
import StoreList from '../components/StoreList';
import Search from '../components/Search';
import prisma from '../../lib/prisma'


export async function getStaticProps() {

  // Returns an object or null
  const stores: object | null = await prisma.store.findMany({
    where: {
      author: { email: 'randukelvin@gmail.com' },
    }, 
 
    select: {
      id:true,
      name:true,
 
    },
  })
  
  return {
    props : { stores}
  }
  
}
export default function Component(props) {
  
  return (
    <div className="container">
      <h1>My stores</h1>
      
      <StoreList stores={props.stores} />


    </div>

  )
}

