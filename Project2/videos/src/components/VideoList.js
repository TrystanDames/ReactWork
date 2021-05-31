import React, {Component} from 'react';
import VideoItem from './VideoItem';

// class VideoList extends Component {

//     render() {
//         const renderedList = videos.map((video) => {
//             return <VideoItem />
//         });

//         return(
//             <div>
//                 {renderedList}
//             </div>
//         )
//     };
// }

const VideoList = ({videos}) => {
    const renderedList = videos.map(video => {
        return <VideoItem />
    });

    return <div> {renderedList} </div>
};

export default VideoList;