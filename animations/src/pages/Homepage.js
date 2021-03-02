import StoreList from '../components/StoreList';
import Blog from '../components/Blog';
import { useGetPosts } from "../../useRequest";


export default function Homepage() {
  
  const { posts, error } = useGetPosts("/posts")

  if (error) return <h1>Something went wrong!</h1>
  if (!posts) return <h1>Loading...</h1>
  console.log(posts);

  return (
    <div className="container">
      <h1>My stores</h1>
 


    <StoreList/>
    <Blog/>
 
    </div>

  )
}
