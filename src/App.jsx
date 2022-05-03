import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts'
import CreatePosts from './Components/CreatePosts';

function App() {

  const [post, setPosts] = useState([{Name:'name'}, {Post: 'postMessage' }])

  function addNewPost( post) {

    let tempPosts = [ post, ...post];
    setPosts(tempPosts);
  }

  return (
    <div>
      <CreatePosts addNewPostProperty = {addNewPost} />
     <DisplayPosts parentPosts={post} />
     <h3>Hello World! </h3> 
    </div>
  );
}

export default App;
