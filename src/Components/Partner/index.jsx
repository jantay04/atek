import React from 'react';
import style from './Partner.module.css';
import logo1 from './assets/logo1.svg';
import logo2 from './assets/logo2.svg';
import logo3 from './assets/logo3.svg';
import logo4 from './assets/logo4.svg';
import Heading from '../UI/Heading'

const Marketing = (props) => {
    return (
        <>
            <div className={style.container}>
                <div className={style.block}>
                    <Heading>наши партнеры</Heading>
                    <p>Наша команда состоит из высококлассных специалистов с международным опытом работы в сфере Web-разработки, мобильной разработки, Product менеджмента и дизайна. Мы предоставляем премиум сервис по доступным ценам и всегда нацелены на успех наших клиентов.</p>
                    <div className={style.block_icons}>
                        <div>
                            <img src={logo1} alt="Image"/>
                        </div>
                        <div>
                            <img src={logo2} alt="Image"/>
                        </div>
                        <div>
                            <img src={logo3} alt="Image"/>
                        </div>
                        <div>
                            <img src={logo4} alt="Image"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Marketing;
