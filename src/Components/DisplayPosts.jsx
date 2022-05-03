import React, {useState}  from 'react';
import Posts from './Posts'

export default function DisplayPosts (){

    const [displayposts, setDisplayPosts] = useState([]) 

    return (
        <div>
            <h2>DisplayPosts</h2>
            <Posts />
            <Posts />
            <Posts />
        </div> 
    )
}