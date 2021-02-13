import React from 'react';
import style from './main.module.css';
import arrow_right from './assets/arrow-right.svg';
import Parallax from "./Parallax/Parallax";
import BgVideo from "./Bg/BgVideo";

const Main = (props) => {

  return (
    <div>
      <div class={style.main_block} id="main-block">
        <div className={style.container}>
          <div className={style.main}>
            <h1 className={style.main_caption}>Простые решения <br/> сложных <span
              className={style.main_caption_span}>проблем</span></h1>
            <div className={style.main_text}>
              <p>Наша команда состоит из высококлассных специалистов с международным опытом работы в сфере Web-разработки, мобильной разработки, Product менеджмента и дизайна. Мы предоставляем премиум сервис по доступным ценам и всегда нацелены на успех </p>
              {/*<p>Сделайте следующий шаг в развитии своего бизнеса с помощью цифровых технологий <br/>*/}
              {/*  Свяжитесь с одним из наших опытных цифровых стратегов, чтобы узнать, как мы можем помочь вам в достижении ваших бизнес-целей.</p>*/}
            </div>
            <a className={style.btn_get_free} href="#block-form">
              Получить бесплатную консультацию
              <div>
                <img src={arrow_right}/>
              </div>
            </a>
          </div>
        </div>
        {/*<img src={main_bg} className={style.main_img}/>*/}
        {/*<Parallax/>*/}
        <BgVideo/>
      </div>
    </div>
  );
}

export default Main;
