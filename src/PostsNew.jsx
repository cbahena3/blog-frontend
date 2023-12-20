import axios from "axios";


export function PostsNew(props) {

  const createPost = (event) => {
    event.preventDefault()
    const params = new FormData(event.target)
    props.onCreatePost(params);
    console.log("Creating post")
  }

  return (
    <div id="posts-new">
      <h1>Make new post</h1>
      <form onSubmit={createPost}>
        <p>Title: <input name = "title" type="text" /></p>
        <p>Body: <input name = "body" type="text" /></p>
        <p>Image: <input name = "image" type="text" /></p>
        <button>Submit</button>
      </form>
    </div>
  );
}



// Make a function to handle the form submit event that creates a new post