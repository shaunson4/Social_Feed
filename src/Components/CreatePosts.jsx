import React, { useState } from 'react';


const CreatePosts = (props) => {
    const {Name, setName} = useState('');
    const {Post, setPost} = useState('');

    function handleSubmit (event) {
        event.preventDefault();
        let newPost ={
            Name: name,
            Post: postMessage
        };
        console.log(newPost);
        props.addNewPostProperty(newPost)
    }

    return (  
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type = 'string' value={Name} onChange={(event) => setName (event.target.value)} />
            <label> Post</label>
            <input type = 'string' value={Post} onChange={(event) => setPost (event.target.value)} />
            <button type = 'submit'> Create </button>
        </form>



    );
}
 
export default CreatePosts;