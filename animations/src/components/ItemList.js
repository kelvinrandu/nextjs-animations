import Link from 'next/link';

const items =[
  {name: 'bamburi cement', quantity: 15 , buying_price: 5000, selling_price: 'diani'  },
  {name: 'wheelbarrow', quantity: 25 , buying_price: 5000 , selling_price: 'diani'  },
  {name: 'gumboots', quantity: 50 , buying_price: 5000 , selling_price: 'diani'  },
  {name: 'bamburi cement', quantity: 15 , buying_price: 5000 , selling_price: 'diani'  }

]
export default function ItemList() {
 
    
    return (
      <div>
        {items.map(e =>(

        <Link as={`/items/${e.name}`} href="/items/[id]">
          <ul>
          <a>
          {e.name} {e.quantity}
          </a>
          </ul>
        </Link>

        ))}
   
      </div>
    )
  }
  
