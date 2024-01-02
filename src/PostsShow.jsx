import axios from "axios";

export function PostsShow(props) {
  const updatePost = (event) => {
    event.preventDefault()
    const params = new FormData(event.target)
    props.onUpdatePost(props.post.id, params);
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
