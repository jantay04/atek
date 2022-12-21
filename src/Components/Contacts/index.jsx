import style from './contacts.module.css';

const Contacts = (props) => {
  return (
    <div className={style.block_contact}>
      <div className={style.container}>
        <div className={style.contact}>
          <div className={style.contact_txt}>
            <h1>Готовы начать проект?</h1>
            <p>Свяжитесь с нами, чтобы обсудить ваши конкретные цели и лучшую индивидуальную стратегию для их
              достижения.</p>
          </div>
          <a href="#footer">Связаться</a>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
