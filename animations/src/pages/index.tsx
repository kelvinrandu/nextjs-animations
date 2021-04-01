// import {
//   useSession, signIn, signOut
// } from 'next-auth/client'
import StoreList from '../components/StoreList'
import Search from '../components/Search'


export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/stores')
  const stores = await res.json()
  
  return {
    props : { stores}
  }
  
}

export default function Component(props) {
  
  return (
    <div className="container">
      <Search />


      <h1>My stores</h1>

      <StoreList stores={props.stores} />


    </div>

  )
}

