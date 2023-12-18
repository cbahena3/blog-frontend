import { PostsIndex } from './PostsIndex';
import { PostsNew } from './PostsNew';
import axios from "axios";

export function Content() {
  let posts = [];

  const handleIndexPosts = () =>{
    axios.get("http://localhost:3000/posts.json").then(response => console.log(response.data))
  };

  return (
    <div>
      <PostsNew />
      <button onClick={handleIndexPosts}> PRESS ME FOR DATA </button>
      <PostsIndex posts={posts} />
    </div>
  );
}
