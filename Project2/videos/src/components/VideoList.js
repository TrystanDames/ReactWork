import React, {Component} from 'react';
import VideoItem from './VideoItem';

// class VideoList extends Component {

//     render() {
//         const renderedList = videos.map((video) => {
//             return <VideoItem video={video} />
//         });

//         return(
//             <div>
//                 {renderedList}
//             </div>
//         )
//     };
// }

const VideoList = ({videos, onVideoSelect}) => {
    const renderedList = videos.map(video => {
        return(
            <VideoItem 
                key={video.id.videoId} 
                onVideoSelect={onVideoSelect} 
                video={video}
            />
        );
    });

    return <div className="ui relaxed divided list"> {renderedList} </div>
};

const VideoList = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map(video => {
      return (
        <VideoItem
          key={video.id.videoId}
          onVideoSelect={onVideoSelect}
          video={video}
        />
      );
    });
  
    return <div className="ui relaxed divided list">{renderedList}</div>;
  };

export default VideoList;