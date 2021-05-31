import React, {Component} from 'react';

// class VideoItem extends Component {
    
//     constructor(props){
//         super(props)
//     };

//     render() {
//         return(
//             <div>
//                 Video Item
//             </div>
//         )
//     };
// }

const VideoItem = ({video}) => {
    return (
        <div>
            <img src={video.snippet.thumbnails.medium.url} />
            {video.snippet.title} 
        </div>
    );
}

export default VideoItem;