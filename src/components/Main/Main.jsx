import React, {useState, useEffect} from 'react';
import style from './main.module.css';
import arrow_right from '../../assets/arrow-right.svg';

const Main = (props) => {

  return (
    <div>
      <div class={style.main_block} id="main-block">
        <div className={style.container}>
          <div className={style.main}>
            <h1 className={style.main_caption}>Цифровой маркетинг, <br/> который ведет <br/> к <span
              className={style.main_caption_span}>результатам</span></h1>
            <div className={style.main_text}>
              <p>Сделайте следующий шаг в развитии своего бизнеса с помощью цифрового маркетинга. <br/> Свяжитесь с
                одним из наших опытных цифровых стратегов, чтобы узнать, как мы можем помочь вам в достижении ваших
                бизнес-целей.</p>
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
      </div>
    </div>
  );
}

export default Main;
