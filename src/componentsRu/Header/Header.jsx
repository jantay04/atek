import React, {useEffect, useState} from "react";
import style from './header.module.css';
import logo from './assets/logo.svg';
import Eng_Ru from "../../Eng_Ru/Eng_Ru";

const Header = (props) => {
  const [bg, setBg] = useState('rgba(255, 255, 255, 0.3)')
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      // console.log(window.scrollY)
      if (window.scrollY > 150 ){
        setBg('rgba(255, 255, 255, 1)')
      }else{
        setBg('rgba(255, 255, 255, 0.3)')
      }
    })
  }, [])
  console.log("ewgwe")
  return (
    <div>
      <div style={{backgroundColor: bg}} className={style.header_block}>
        <div className={style.container}>
          <div className={style.header}>
            <div className={style.logo}>
              <a className={style.logo_link} href="#main-block"><img src={logo} alt="erg"/></a>
            </div>
            <ul className={style.header_link} id="menu">
              <li><a href="#block-marketing">Услуги</a></li>
              <li><a href="#block-work">Преимущество</a></li>
              <li><a href="#footer">Контакты</a></li>
            </ul>

            <div className={style.dropdown}>
              <a className={style.phone_number} href="#">+996 554 828888</a>
              <ul>
                <li><a className={style.phone_number} href="#">+996 221 123456</a></li>
                <li><a className={style.phone_number} href="#">+996 702 884788</a></li>
              </ul>
              <div></div>
            </div>
            <a className={style.btn_application} href="#block-form">Оставить заявку</a>
            <Eng_Ru/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
