import { getDomainLocale } from 'next/dist/next-server/lib/router/router';
import Link from 'next/link';



export default function Stores() {
  const stores =[
    {name: 'cyberplus', email:'cyberplusdiani@gmail.com' , location: 'diani', created: 'diani'  },
    {name: 'wheelbarrow', quantity: 25 , buying_price: 5000 , selling_price: 'diani'  },
    {name: 'gumboots', quantity: 50 , buying_price: 5000 , selling_price: 'diani'  },
    {name: 'bamburi cement', quantity: 15 , buying_price: 5000 , selling_price: 'diani'  }
  
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
  
