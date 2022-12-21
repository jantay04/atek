import style from "./work.module.css";
import work_item1 from "./assets/work-item1.svg";
import work_item2 from "./assets/work-item2.svg";
import work_item3 from "./assets/work-item3.svg";
import work_item4 from "./assets/work-item4.png";
import arrow_right from "./assets/arro2-right.png";
import Heading from "../UI/Heading"

const Work = (props) => {
  return (
    <div className={style.block_work} id="block-work">
      <div className={style.container}>
        <div className={style.work}>
          <Heading>Преимущество работы с нами</Heading>
          <div className={style.work_column}>
            <div className={style.work_item}>
              <div className={style.work_item_img}>
                <img src={work_item1} alt="Image" />
              </div>
              <div className={style.work_item_txt}>
                <h3>Адаптивная верстка</h3>
                <p>
                  Мобильный интернет-трафик растёт с каждым годом и чтобы
                  эффективно обрабатывать этот трафик, нужно предлагать
                  пользователям адаптивные сайты с удобным интерфейсом.
                </p>
              </div>
            </div>
            <div className={style.work_item}>
              <div className={style.work_item_img}>
                <img src={work_item2} alt="Image" />
              </div>
              <div className={style.work_item_txt}>
                <h3>Реклама в поисковых системах</h3>
                <p>
                  Мы знаем, как проводить вашу кампанию наиболее привлекательно
                  для целевой аудитории и результативно для вас.
                </p>
              </div>
            </div>
            <div className={style.work_item}>
              <div className={style.work_item_img}>
                <img src={work_item3} alt="Image" />
              </div>
              <div className={style.work_item_txt}>
                <h3>Оформление профиля в социальных сетях</h3>
                <p>
                  Грамотно оформив свой профиль, вы можете опередить
                  конкурентов, выделиться среди остальных магазинов и вызвать
                  симпатию покупателей.
                </p>
              </div>
            </div>
            <div className={style.work_item}>
              <div className={style.work_item_img}>
                <img
                  src={work_item4}
                  className={style.work_item4}
                  alt="Image"
                />
              </div>
              <div className={style.work_item_txt}>
                <h3>Лайтбоксы</h3>
                <p>
                  Лайтбоксы широко признаны как один из наиболее эффективных и
                  доступных рекламных носителей. Рекламные плакаты и вывески,
                  которые используют комбинацию освещения и цвета, имеют гораздо
                  больше шансов привлечь внимание потенциального клиента, чем
                  несветовые плакаты или знаки без подсветки.
                </p>
              </div>
            </div>
          </div>
          <div className={style.work_foot}>
            <h3>Посмотреть все работы</h3>
            <div>
              <img src={arrow_right} alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
