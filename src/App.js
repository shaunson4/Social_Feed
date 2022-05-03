import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts'
import CreatePosts from './Components/CreatePosts';

function App() {

  const [post, setPosts] = useState([{Name:'name'}, {Post: 'postMessage' }])

  function addNewPost( post)
    let tempPosts = [ post, ...posts];
    setPosts(tempPosts);

  return (
    <div>
      <DisplayPosts parentPosts={posts} />
      <CreatePosts addNewPostProperty = {addNewPost} />
     <h3>Hello World! </h3> 
    </div>
  );
}

export default App;
