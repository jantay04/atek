import React, {useState} from 'react';
import style from './sidebar.module.css';
import telegram from '../../assets/telegram.svg';
import instagram from '../../assets/instagram.svg';
import whatsapp from '../../assets/whatsapp.svg';
import linkedin from '../../assets/linkedin.svg';
import facebook from '../../assets/facebook.svg';

const Sidebar = (props) => {

  const [open, setOpen] = useState(false);

  const linksArr = [
    {id: 1, href: "#block-work", text: "Кейсы"},
    {id: 2, href: "#footer", text: "Контакты"},
    {id: 3, href: "#block-marketing", text: "Услуги"}
  ]

  return (
    <div>
      <div className={style.test_block} id="test">
      </div>
      <div className={style.bg_sidebar} id="bg_sidebar"
           style={{opacity: open ? "1" : "0", pointerEvents: open ? "all" : "none"}} onClick={() => {
        setOpen(!open)
      }}/>
      <div style={{right: open ? "0" : "-254px"}} className={style.sidebar} id="sidebar">
        <div className={style.tooggle_btn} onClick={() => {
          setOpen(!open)
        }}>
          <span className={style.line1}/>
          <span className={style.line2}/>
          <span className={style.line3}/>
        </div>
        <div className={style.sidebar_caption}>
          <h3>Меню сайта</h3>
        </div>
        <ul className={style.menu}>
          {linksArr.map(l => <li key={l.id} className={style.menu_btn}><a onClick={() => setOpen(false)}
                                                                 href={l.href}>{l.text}</a></li>)}
        </ul>
        <div>
          <li><a className={style.btn_application2 + " " + style.menu_btn} onClick={() => setOpen(false)} href="#block-form">Оставить
            заявку</a></li>
        </div>
        <div className={style.numbers2}>
          <a className={style.phone_number2} href="tel:+996554828888">+996 554 828888</a>
          <a className={style.phone_number2} href="tel:+996221123456">+996 221 123456</a>
          <a className={style.phone_number2} href="tel:+996702884788">+996 702 884788</a>
        </div>
        <div className={style.sidebar_soc}>
          <div><a href="https://www.facebook.com/atekds" target="_blank"><img src={facebook}/></a></div>
          <div><a href="https://www.instagram.com/atek_ds/" target="_blank"><img src={instagram}/></a></div>
          <div><a href="https://wa.me/996221123456" target="_blank"><img src={whatsapp}/></a></div>
          <div><a href="https://t.me/atekds" target="_blank"><img src={telegram}/></a></div>
          <div><a href="https://www.linkedin.com/company/a-tek-digital-studio" target="_blank"><img src={linkedin}/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
