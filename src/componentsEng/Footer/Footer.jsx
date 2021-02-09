import style from './footer.module.css';
import facebook from './assets/facebook.svg';
import instagram from './assets/instagram.svg';
import whatsapp from './assets/whatsapp.svg';
import telegram from './assets/telegram.svg';
import linkedin from './assets/linkedin.svg';
import footer_logo from './assets/footer-logo.svg';

const Footer = (props) => {
  return (
    <div class={style.block_footer} id="footer">
      <div class={style.container}>
        <div class={style.footer}>
          <div>
            <div>
              <div class={style.footer_logo}>
                <div><img src={footer_logo}/></div>
                <p>Агенство цифрового маркетинга <br/> полного цикла</p>
              </div>
              <div class={style.footer_link}>
                <li><a href="#block-about">О нас</a></li>
                <li><a href="#block-marketing">Наши услуги</a></li>
              </div>
            </div>
            <div class={style.footer_social}>
              <div><a href="https://www.facebook.com/atekds" target="_blank"><img src={facebook}/></a></div>
              <div><a href="https://www.instagram.com/atek_ds/" target="_blank"><img src={instagram}/></a></div>
              <div><a href="https://wa.me/996221123456" target="_blank"><img src={whatsapp}/></a></div>
              <div><a href="https://t.me/atekds" target="_blank"><img src={telegram}/></a></div>
              <div><a href="https://www.linkedin.com/company/a-tek-digital-studio" target="_blank"><img src={linkedin}/></a>
              </div>
            </div>
          </div>
          <div class={style.footer_numbers}>
            <li><a href="#">Контакты</a></li>
            <a class={style.phone_number2} href="tel:+996554828888">+996 554 82-88-88</a>
            <a class={style.phone_number2} href="tel:+996221123456">+996 221 12-34-56</a>
            <a class={style.phone_number2} href="tel:+996702884788">+996 702 88-47-88</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
