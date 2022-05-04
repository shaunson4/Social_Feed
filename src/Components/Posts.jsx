import React from "react";
import CreatePosts from "./CreatePosts";

export default function Posts(props) {
    

  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Post: {props.postInfo}</p>
      <button>LIKE</button>
      <button>DISLIKE</button>
    </div>
  );
}
