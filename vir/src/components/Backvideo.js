import React from 'react';
import '../css/BackVideo.css';
import backgroundVideo from '../resources/back.mp4'; 
const BackVideo = () => {
  return (
    <video
      className="back-video"
      autoPlay
      loop
      muted
    >
      <source src={require('../resources/back.mp4')} type="video/mp4" />
    </video>
  );
}

export default BackVideo;
