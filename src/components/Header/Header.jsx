import style from './header.module.css';
import logo from '../../assets/logo.svg';

const Header = (props) => {
  return (
    <div>
      <div className={style.header_block}>
        <div className={style.container}>
          <div className={style.header}>
            <div className={style.logo}>
              <a className={style.logo_link} href="#main-block"><img src={logo} alt="erg"/></a>
            </div>
            <ul className={style.header_link} id="menu">
              <li><a href="#block-marketing">Услуги</a></li>
              <li><a href="#block-work">Кейсы</a></li>
              <li><a href="#footer">Контакты</a></li>
            </ul>
            <div className={style.dropdown}>
              <a className={style.phone_number} href="#">+996 554 828888</a>
              <ul>
                <li><a className={style.phone_number} href="#">+996 221 123456</a></li>
                <li><a className={style.phone_number} href="#">+996 702 884788</a></li>
              </ul>
            </div>
            <a className={style.btn_application} href="#block-form">Оставить заявку</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
