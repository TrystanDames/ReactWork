import React, {Component} from 'react';

// class VideoDetail extends Component {

//     constructor(props) {
//         super(props)
//     };

//     render() {

//         if (!video) {
//             return(
//                 <div>
//                     Loading..
//                 </div>
//             );
//         }

//         const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

//         return(
//             <div>
//                 <div className="ui embed">
//                     <iframe title="video player" src={videoSrc} />
//                 </div>
//                 <div className="ui segment">
//                     <h4 className="ui header">{video.snippet.title}</h4>
//                     <p>{video.snippet.description}</p>
//                 </div>
//             </div>
//         )
//     }
// }

const VideoDetail = ({video}) => {

    if (!video) {
        return(
            <div>
                Loading...
            </div>
        );
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return(
        <div>
            <div className="ui embed">
                <iframe title="video player" src={videoSrc} />
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
}

const VideoDetail = ({ video }) => {
    if (!video) {
      return <div>Loading...</div>;
    }
  
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  
    return (
      <div>
        <div className="ui embed">
          <iframe title="video player" src={videoSrc} />
        </div>
        <div className="ui segment">
          <h4 className="ui header">{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    );
  };

export default VideoDetail;