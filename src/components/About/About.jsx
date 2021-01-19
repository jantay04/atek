import style from './about.module.css';
import about_item1 from '../../assets/about-item1.svg';
import about_item2 from '../../assets/about-item2.svg';
import about_item3 from '../../assets/about-item3.svg';

const About = (props) => {
  return (
    <div className={style.block_about} id="block-about">
      <div className={style.container}>
        <h1 className={style.block_about_caption}>О нас</h1>
        <p className={style.block_about_text}>Digital студия полного цикла A-TEK. Наша команда, состоящая из специалистов с
          международным опытом работы, с радостью готовы погрузиться в ваш бизнес и вести его к цифровому
          превосходству!</p>
        <div className={style.about_colum}>
          <div className={style.colum_item}>
            <div>
              <img src={about_item1}/>
            </div>
            <h3>ТОЧНАЯ ОРИЕНТАЦИЯ НА ДОСТИЖЕНИЕ РЕЗУЛЬТАТА</h3>
            <p>На перенасыщенном рынке постоянное, почти безумное внимание к деталям - это то, что сдерживает жесткую
              конкуренцию.</p>
          </div>
          <div className={style.colum_item}>
            <div>
              <img src={about_item2}/>
            </div>
            <h3>ПРЕВОСХОДНОЕ ОБСЛУЖИВАНИЕ КЛИЕНТОВ</h3>
            <p>Все начинается и заканчивается искренней заботой о людях, которым вы служите. Это единственный способ
              достичь долгосрочных устойчивых результатов.
            </p>
          </div>
          <div className={style.colum_item}>
            <div>
              <img src={about_item3}/>
            </div>
            <h3>ПОСТОЯННЫЙ РОСТ НАШИХ СПЕЦИАЛИСТОВ - ЗАЛОГ УСПЕХА</h3>
            <p>Застой - это не вариант. Мы постоянно наращиваем наш опыт, чтобы становиться все лучше и лучше для нас и
              наших клиентов.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;