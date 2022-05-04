import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts'
import CreatePosts from './Components/CreatePosts';

function App() {

  const [posts, setPosts] = useState([{name:'' , postInfo: '' }])

  function addNewPost( post) {

    let tempPosts = [ post, ...posts];
    setPosts(tempPosts);
  }

  return (
    <div>
      <CreatePosts addNewPostProperty = {addNewPost} />
     <DisplayPosts parentPosts={posts} />
     <h3>Hello World! </h3> 
    </div>
  );
}

export default App;
