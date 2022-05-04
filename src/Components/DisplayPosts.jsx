import React, {useState, useEffect}  from 'react';
import Posts from './Posts'

export default function DisplayPosts (props){

    return(
        <ul>
            {props.parentPosts.map( (el) => <Posts name={el.name} postInfo = {el.postInfo}/>   )}
        </ul>
    )
    }



//     const [displayposts, setDisplayPosts] = useState([]) 

//         const [postInfo, setPostInfo] = useState([]);

//         useEffect(() => {
//             let tempPostInfo = props.parentPosts.map(post =>{
//                 return [post.name, post.postMessage];
//             });
//             setPostInfo(tempPostInfo);
//         }, [props.parentPosts])
//     return (
//         <div>
//             <h2>DisplayPosts</h2>
//             <Posts postInfo={postInfo} />
//             <Posts />
//             <Posts />
//         </div> 
//     )
// }