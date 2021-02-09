// import React from 'react';
import style from './BgVideo.module.css';
import bg_video from './assets/bg_video.mp4'

const BgVideo = (props) => {

  return (
    <div>
        <video className={style.video_media} src={bg_video} autoPlay muted loop ></video>
    </div>
  );
}

export default BgVideo;
