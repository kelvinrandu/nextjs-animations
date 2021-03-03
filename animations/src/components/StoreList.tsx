import { getDomainLocale } from 'next/dist/next-server/lib/router/router';
import Link from 'next/link';



export default function Stores() {
  const stores =[
    {name: 'cyberplus', email:'cyberplusdiani@gmail.com' , location: 'diani', created: 'diani'  },
    {name: 'cyberplus', email:'cyberpluslikoni@gmail.com' , location: 'likoni', created: 'diani'  },
    {name: 'cyberplus', email:'cyberplusmsambweni@gmail.com' , location: 'msambweni', created: 'diani'  }
 
  ]

    return (
      <div>
        {stores.map(e =>(

          <Link as={`/stores/${e.name}`} href="/stores/[id]">
            <ul>
            <a>
            {e.name} {e.location}
            </a>
            </ul>
          </Link>

        ))}

      
   
      </div>
    )
  }
  export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
  }
  
