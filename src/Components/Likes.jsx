import React, { Component} from "react";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faThumbsUp} from '@fortawesome/free-solid-svg-icons';
class Like extends Component {
    state = { liked:false};
    toggle = () => {
        let localLiked = this.state.liked;

        localLiked = !localLiked;
        this.setState({liked:localLiked});

    };
    render () {
        let button;
        if (this.state.liked === false)
            button = <FontAwesomeIcon icon={faThumbsUp}  />
        else
            button = <FontAwesomeIcon icon={faThumbsUp} color="green" />
            
        return (
            <div
                className="container-1"
                onClick={() => this.toggle ()}
                >
                    {button}
                </div>
        )
    }
}

export default Like;