import React from 'react';
import style from './BgVideo.module.css';
// import bg_video from './assets/bg_video.mp4';
import bg_photo from './assets/bg.png';

const BgVideo = (props) => {

  return (
    <div className={style.block}>
        {/*<video className={style.video_media} src={bg_video} autoPlay muted loop ></video>*/}
        <img className={style.bg_photo} src={bg_photo} alt="bg"/>
    </div>
  );
}

export default BgVideo;
