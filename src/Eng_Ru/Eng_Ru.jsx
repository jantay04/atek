import style from './Eng_Ru.module.css';
import ru from './assets/ru.svg'
import us from './assets/us.svg'
import {NavLink} from "react-router-dom";

const EngRu = () => {
    return (
      <>
          <div className={style.block}>
              <div>
                  <NavLink exact to="/" activeClassName={style.activeLink}>
                      <img src={ru} alt="Ru"/>
                  </NavLink>
              </div>
              <div>
                  <NavLink to="/eng" activeClassName={style.activeLink}>
                      <img src={us} alt="Eng"/>
                  </NavLink>
              </div>
          </div>
      </>
    );
}

export default EngRu;
