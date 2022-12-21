import style from './marketing.module.css';
import marketing_item1 from './assets/marketing-item1.svg';
import marketing_item2 from './assets/marketing-item2.svg';
import marketing_item3 from './assets/marketing-item3.svg';
import marketing_item4 from './assets/marketing-item4.svg';
import marketing_item5 from './assets/marketing-item5.svg';
import marketing_item6 from './assets/marketing-item6.svg';
import Heading from '../UI/Heading'

const Marketing = (props) => {
  return (
    <div className={style.block_marketing} id="block-marketing">
      <div className={style.container}>
        <div className={style.marketing_caption}>
          <Heading>Наши услуги</Heading>
          {/* <h4>Скажите <span>ДА</span> стремительному росту продаж</h4> */}
          <p>100% прозрачность, никаких оправданий и хитрых приемов. Просто серьезные цифровые <br/> результаты.</p>
        </div>
        <div className={style.marketing_block_colum}>
          <div className={style.marketing_item}>
            <div>
              <img src={marketing_item1} alt="Image"/>
            </div>
            <div className={style.marketing_item_txt}>
              <h4>SMM</h4>
              <p>SMM – совокупность инструментов для привлечения трафика на сайт и формирования репутации компании через
                социальные платформы.</p>
            </div>
          </div>
          <div className={style.marketing_item}>
            <div>
              <img src={marketing_item2}/>
            </div>
            <div className={style.marketing_item_txt}>
              <h4>Разработка сайтов</h4>
              <p>Хороший сайт – это инструмент повышения продаж, управления репутацией компании, рекламы и даже
                полноценный бизнес в сети интернет.
              </p>
            </div>
          </div>
          <div className={style.marketing_item}>
            <div>
              <img src={marketing_item3} alt="Image"/>
            </div>
            <div className={style.marketing_item_txt}>
              <h4>Разработка лендинга</h4>
              <p>Ключевое преимущество Landing Page – это возможность достигать максимальной конверсии и управлять
                поведением аудитории.
              </p>
            </div>
          </div>
          <div className={style.marketing_item}>
            <div>
              <img src={marketing_item4} alt="Image"/>
            </div>
            <div className={style.marketing_item_txt}>
              <h4>Разработка приложений</h4>
              <p>Разработка, продвижение и монетизация мобильного приложения. Анализируем результаты, помогаем развивать
                и монетизировать продукт</p>
            </div>
          </div>
          <div className={style.marketing_item}>
            <div>
              <img src={marketing_item5} alt="Image"/>
            </div>
            <div className={style.marketing_item_txt}>
              <h4>Увеличение продаж</h4>
              <p>Маркетинг в продажах – это переход от проблем, характерных для сегмента в целом, к проблемам и
                индивидуальным решениям для конкретного потребителя.</p>
            </div>
          </div>
          <div className={style.marketing_item}>
            <div>
              <img src={marketing_item6} alt="Image"/>
            </div>
            <div className={style.marketing_item_txt}>
              <h4>Контекстная реклама</h4>
              <p>Контекстная реклама – это размещение Ваших рекламных объявлений на страницах выдачи поисковых систем
                (по ключевым запросам) и тематических площадок.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marketing;
