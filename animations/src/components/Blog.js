import Link from 'next/link';
import { useGetPosts } from "../../useRequest";

export default function Blog() {
 
  const { posts, error } = useGetPosts("/posts")
  console.log(posts)

    return (
      <div>

   
      </div>
    )
  }
  
