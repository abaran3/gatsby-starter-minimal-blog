import React from 'react';

const Video = ({ videoSrcURL, videoTitle }) => (
  <div className="video">
    <iframe
      width={'100%'}
      height={'600vw'}
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      allowFullScreen
    />
  </div>
);
export default Video;
