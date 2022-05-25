import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faThumbsDown} from "@fortawesome/free-solid-svg-icons";
class Like extends Component {
    state = { liked: false};
    toggle = () => {
        let localLiked = this.state.liked;

        localLiked = !localLiked;
        this.setState( { liked: localLiked});

    };
    render (){
        return (
            <div className="container-1" onClick={() => this.toggle()}>
                {this.state.liked === false ? (
                    <FontAwesomeIcon icon={faThumbsDown} />
                )  :  (
                    <FontAwesomeIcon icon ={faThumbsDown} color="red"/>
                 ) }
               </div>
        );
    }
}

export default Like;