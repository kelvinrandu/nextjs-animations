import { useRouter } from 'next/router';

export default function Store() {
    const router = useRouter();
    console.log(router.query);

 
    
    return (
      <div>
        <h1>store details</h1>
   
      </div>
    )
  }
  
