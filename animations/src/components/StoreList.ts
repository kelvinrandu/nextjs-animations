
import { GetStaticProps } from 'next';
import { InferGetStaticPropsType } from 'next';

type Post = {
  name: string
  location: string
}

// const stores = [
//   {id:1,name:'ukunda',location:'diani',owner:'Musa',type:'cafe'},
//   {id:2,name:'konahamsa',location:'diani',owner:'Musaka',type:'cafe'},
//   {id:3,name:'ukunda and sons',location:'diani',owner:'Maria',type:'shop'},
//   {id:4,name:'ukunda',location:'diani',owner:'Husein',type:'hotel'}
// ];

 export default function StoreList({stores}) {
  

    return (
    
    <div>
        {stores.map(({id, name, location, email}) => (
          
          <li> {name} </li>
        
        ))}
    </div>
    )}
        
  export async function getStaticProps() {
    const res = await fetch('http://localhost:5000/stores')
    const stores = await res.json()
    return {
      props: {
        stores,
      },
    }
  }
  
  export const getStaticProps = async () => {
    const res = await fetch('https://localhost:5000/stores')
    const stores: stores[] = await res.json()
  
    return {
      props: {
        stores,
      },
    }
  }
  