export function PostsShow(props) {
  return (
   <div>
      <h2>Title: {props.post.title}</h2>
      <p>Description: {props.post.body}</p>
      <img src={props.post.image} alt="error"/>
   </div>
  );
}
