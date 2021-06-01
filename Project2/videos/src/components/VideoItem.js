import './VideoItem.css';
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

const VideoItem = ({video, onVideoSelect}) => {
    return (
        <div onClick={() => onVideoSelect(video)} className="video-item item">
            <img 
                alt={video.snippet.title} 
                className="ui image" 
                src={video.snippet.thumbnails.medium.url} 
            />
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        </div>
    );
}

export default VideoItem;