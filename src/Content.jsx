import { PostsIndex } from './PostsIndex';
import { PostsNew } from './PostsNew';
import axios from "axios";
import { useState, useEffect } from 'react';
import { Modal } from './Modal';
import { PostsShow } from './PostsShow';
import { Signup } from './Signup';

export function Content() {
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState({});

  const handleIndexPosts = () =>{
    axios.get("http://localhost:3000/posts.json").then(response => {console.log(response.data)
    setPosts(response.data)
    })
  };

  const handleShowPost = (post) => {
    setIsPostsShowVisible(true);
    setCurrentPost(post);
  };

  const handleClose = () => {
    setIsPostsShowVisible(false);
  };

  const handleCreatePost = (params) => {
    console.log("Handling Create Post")
    axios.post("http://localhost:3000/posts.json", params).then(response => {
      setPosts([...posts, response.data]);
    })
  };

  const handleUpdatePost = (id, props) => {
    axios.patch(`http://localhost:3000/posts/${props.post.id}.json`, params).then(response => {
      console.log(response.data)
      setPosts(
        posts.map(post => {
          if (post.id === response.data.id){
            return response.data
          } else {
            return post
          }
        })
      )
    })
  }


  useEffect(handleIndexPosts, [])

  return (
    <div>
      <Signup />
      <PostsNew onCreatePost = {handleCreatePost}/>
      {/* <button onClick={handleIndexPosts}> PRESS FOR ALL POSTS </button> */}
      <PostsIndex posts={posts} onShowPost = {handleShowPost} />
      <Modal show={isPostsShowVisible} onClose= {handleClose}>
        <PostsShow post = {currentPost} onUpdatePost = {handleUpdatePost}/>
      </Modal>
    </div>
  );
}
