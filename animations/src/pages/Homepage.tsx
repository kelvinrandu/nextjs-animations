import StoreList from '../components/StoreList';


export default function Homepage() {
  
  // const { posts, error } = useGetPosts("/stores")

  // if (error) return <h1>Something went wrong!</h1>
  // if (!posts) return <h1>Loading...</h1>
  // console.log(posts[0].name)
 

  return (
    <div className="container">
      <h1>My stores</h1>
    <StoreList/>
 
    </div>

  )
}
