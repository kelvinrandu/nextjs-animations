import Search from "./Search";
import UserName from "./user/UserName";
import Link from 'next/link';

export default function Navbar() {

    
    return (
      <div>
      <ul className="navbar"> 
      <li>
      <Link href="/">
        <a>
          <UserName /> 
        </a>
         </Link>
      </li>   
      <li><Search /></li>
      <li><h6>colormode</h6></li>
      </ul>
      </div>
    )
  }
  
