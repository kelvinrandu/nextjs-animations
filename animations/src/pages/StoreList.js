import Link from 'next/link';

const stores =[
  {name: 'cyberplus', email: 'cyberplus@diani' , location: 'diani'  },
  {name: 'cyberplus', email: 'cyberplus@likoni' , location: 'likoni'  },
  {name: 'cyberplus', email: 'cyberplus@msambweni' , location: 'msambweni'  },
  {name: 'cyberplus', email: 'cyberplus@tiwi' , location: 'tiwi'  }
]
export default function Stores() {

    
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
  
