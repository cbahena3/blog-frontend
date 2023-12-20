import axios from "axios";

export function PostsShow(props) {
  const updatePost = (event) => {
    event.preventDefault()
    const params = new FormData(event.target)
    axios.patch(`http://localhost:3000/posts/${props.post.id}.json`, params).then(response => {
    console.log(response.data)
    })
  }


  return (
   <div>
      <h2>Title: {props.post.title}</h2>
      <p>Description: {props.post.body}</p>
      <img src={props.post.image} alt="error"/>
      <form onSubmit={updatePost}>
        <p>Title: <input type="text" name="title" defaultValue={props.post.title}/></p>
        <p>Description: <input type="text" name="body" defaultValue={props.post.body}/></p>
        <p>Image: <input type="text" name="image" defaultValue={props.post.image}/></p>
        <button>Update Post</button>
      </form>
   </div>
  );
}
