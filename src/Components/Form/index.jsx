import style from './form.module.css';
import telegram from './telegram.php';

const Form = (props) => {

  return (
    <div className={style.block_form} id="block-form">
      <div className={style.container}>
        <div className={style.form}>
          <div className={style.form_txt}>
            <h1>Готовы расти?</h1>
            <p>Запишитесь на консультацию от нас <br/> Это бесплатно!</p>
            <ul className={style.form_txt_list}>
              <li>Сделайте следующий шаг в развитии своего бизнеса с помощью цифровых технологий</li>
              <li>Свяжитесь с одним из наших опытных цифровых стратегов, чтобы узнать, как мы можем помочь вам в достижении ваших бизнес-целей</li>
            </ul>
          </div>
          <div>
            <form action={telegram} method="POST">
              <input type="text" className={style.form_control} id="form_name" name="user_name" placeholder="Имя*"/>
              <input type="text" className={style.form_control} id="form_tel_num" name="user_phone" placeholder="Телефон*"/>
              <input type="text" className={style.form_control} name="user_email" placeholder="Email"/>
              <textarea name="user_about" className={style.form_control} placeholder="Расскажите вкратце о вашем проекте"/>
              <div>
                <button type="submit" className={style.btn_primary} id="btn_send">Отправить</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
