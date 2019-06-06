import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) return <div>Loading...</div>;
  console.log(video);
  return (
    <div>
      <div className="ui embed">
        <iframe
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          title='Video Player'
          allowFullScreen
        />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;