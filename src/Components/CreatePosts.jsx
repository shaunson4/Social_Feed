import React, { useState } from "react";
import "./create.css";

const CreatePosts = (props) => {
    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    function handleSubmit (event) {
        event.preventDefault();
        let newPost ={
            name: name,
            postInfo: post
        };
        console.log(newPost);
        props.addNewPostProperty(newPost)
    }

    return (  
        <form onSubmit={handleSubmit}>
            <div> 
                <label for= "name">Name</label>
                <input 
                    type = "text" 
                    value={name} 
                    onChange={(event) => setName (event.target.value)}
                />
                <label for="post"> Post</label>
                <input 
                    type = "text" 
                    value={post} 
                    onChange={(event) => setPost (event.target.value)}
                />
                </div>
                <div>
                    <button type = "submit"> Create </button>
            </div>
        </form>
    );
}
 
export default CreatePosts;