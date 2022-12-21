import React from "react";
import style from "./main.module.css";
import arrow_right from "./assets/arrow-right.svg";
import Parallax from "./Parallax/Parallax";
import BgVideo from "./Bg/BgVideo";

const Main = (props) => {
  return (
    <div>
      <div class={style.main_block} id="main-block">
        <div className={style.container}>
          <div className={style.main}>
            <h1 className="text-[64px] pt-[100px] font-extrabold">
              Простые решения <br /> сложных{" "} 
              <span className={style.main_caption_span}>проблем</span>
            </h1>
            <div className={style.main_text}>
              <p>
                Наша команда состоит из высококлассных специалистов с
                международным опытом работы в сфере Web-разработки, мобильной
                разработки, Product менеджмента и дизайна. Мы предоставляем
                премиум сервис по доступным ценам и всегда нацелены на успех{" "}
              </p>
              {/*<p>Сделайте следующий шаг в развитии своего бизнеса с помощью цифровых технологий <br/>*/}
              {/*  Свяжитесь с одним из наших опытных цифровых стратегов, чтобы узнать, как мы можем помочь вам в достижении ваших бизнес-целей.</p>*/}
            </div>
            <div className="flex z-50">
              <a className="flex mt-[55px] px-[20px] py-[10px]  bg-[#000F30] text-white text-base cursor-pointer hover:pr-[40px] z" href="#block-form">
                Получить бесплатную консультацию
                <div className="ml-3">
                  <img src={arrow_right} alt="photo" />
                </div>
              </a>
            </div>
          </div>
        </div>
        {/*<img src={main_bg} className={style.main_img}/>*/}
        <Parallax />
        <BgVideo />
      </div>
    </div>
  );
};

export default Main;
