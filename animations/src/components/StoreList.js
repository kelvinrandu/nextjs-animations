import Link from 'next/link';


export default function Stores({stores}) {

    
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
  
