import React from "react";
import CreatePosts from "./CreatePosts";
import Likes from "./Likes";
import DisLikes from "./Dislikes";
import "./posts.css";
export default function Posts(props) {
  if (props.name == '') return;
    

  return (
    <div class='container'>
      <p>Name: {props.name}</p>
      <p>Post: {props.postInfo}</p>
      <div class="grid-container">
        <Likes class= "grid-child"></Likes>
        <DisLikes class="grid-child-1"></DisLikes>
      </div>
    </div>
  );
}
