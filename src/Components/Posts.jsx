import React from "react";
import CreatePosts from "./CreatePosts";
import "../public/posts.css";

export default function Posts(props) {
  if (props.name == '') return;
    

  return (
    <div class='container'>
      <p>Name: {props.name}</p>
      <p>Post: {props.postInfo}</p>
      <button>LIKE</button>
      <button>DISLIKE</button>
    </div>
  );
}
