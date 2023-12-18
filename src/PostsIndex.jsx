/* eslint-disable react/prop-types */
export function PostsIndex(props) {
  console.log(props);

  return (
    <div id="posts-index">
      <h1>All Posts</h1>
      {props.posts.map(post => <div key={post.id}>
        <h2>Vehicle: {post.title}</h2>
        <img src={post.image_url} />
        <p>Description: {post.body}</p>
      </div>
      )}
    </div>
  );
}
