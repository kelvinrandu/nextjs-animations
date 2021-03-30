import { getDomainLocale } from 'next/dist/next-server/lib/router/router';
import Link from 'next/link';



export default function Stores({stores}) {


    return (
      <div>
        stores 
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

  
