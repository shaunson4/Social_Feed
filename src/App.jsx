import React, { useState } from "react";
import DisplayPosts from "./Components/DisplayPosts";
import CreatePosts from "./Components/CreatePosts";
import Navbar from "react-bootstrap/Navbar";
import "./app.css";

function App() {

  const [posts, setPosts] = useState([{name:'' , postInfo: '' }])

  function addNewPost( post) {

    let tempPosts = [ post, ...posts];
    setPosts(tempPosts);
  }

  return (
    <div>
      <Navbar expand="lg" variant="light" className="color-nav">
        <Navbar.Brand>Social Media Feed</Navbar.Brand>
      </Navbar>
      <div className="container">
        <CreatePosts addNewPostProperty = {addNewPost} />
        
      </div>
      <DisplayPosts parentPosts={posts} />
    </div>
  );
}

export default App;
