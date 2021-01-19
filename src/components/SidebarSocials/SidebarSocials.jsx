import style from './sidebarSocials.module.css';
import telegram from '../../assets/telegram.svg';
import instagram from '../../assets/instagram.svg';
import whatsapp from '../../assets/whatsapp.svg';
import linkedin from '../../assets/linkedin.svg';
import facebook from '../../assets/facebook.svg';

const SidebarSocials = (props) => {
  return (
    <div className={style.right_fixed}>
      <div><a href="https://www.facebook.com/atekds" target="_blank"><img src={facebook}/></a></div>
      <div><a href="https://www.instagram.com/atek_ds" target="_blank"><img src={instagram}/></a></div>
      <div><a href="https://wa.me/996221123456" target="_blank"><img src={whatsapp}/></a></div>
      <div><a href="https://t.me/atekds" target="_blank"><img src={telegram}/></a></div>
      <div><a href="https://www.linkedin.com/company/a-tek-digital-studio" target="_blank"><img src={linkedin}/></a>
      </div>
    </div>
  );
}


export default SidebarSocials;
