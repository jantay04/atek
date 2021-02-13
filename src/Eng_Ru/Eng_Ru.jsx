import React, {useEffect} from 'react'
import style from './Eng_Ru.module.css';
import ru from './assets/ru.svg'
import us from './assets/us.svg'
import {NavLink, useHistory} from "react-router-dom";

const EngRu = () => {
    // const history = useHistory()
    // let defLang = navigator.language;
    // useEffect(() => {
    //     defLang === "ru" ?
    //         history.push("/ru") :
    //         history.push("/eng")
    // }, []);
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
