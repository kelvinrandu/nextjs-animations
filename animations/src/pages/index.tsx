import {
  useSession, signIn, signOut
} from 'next-auth/client'
import StoreList from '../components/StoreList';

export default function Component() {
  const [ session, loading ] = useSession()
  if(session) {
    return <>
      Signed in as {session.user.email} <br/>
      <div className="container">
      <h1>My stores</h1>
    <StoreList/>
 
    </div>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  }
  return <>
    Not signed in <br/>
    <button onClick={() => signIn()}>Sign in</button>
  </>
}