import React from 'react';

import cn from 'classnames';

import styles from './Aside.module.css';

import img from 'assets/img/sushi.png';

const AsideInfo = () => {
    return (
        <aside className={styles.aside}>
            <img 
                src={img} 
                alt="Аппетитные суши с красной рыбой"
                width="675"
                height="437" 
            />
            <div className={cn("offset-y", styles.aside__content)}>
                <p>
                    Мы занимаемся доставкой традиционных блюд японской кухни в Москве. Служба доставки нежных суши и роллов по привлекательным ценам.
                </p>
                <p>
                    Мы стремимся к тому, чтобы доставка суши оставила только позитивное впечатление у каждого нашего гостя.
                </p>
                <p>
                    Блюда японской кухни готовятся командой профессиональных поваров, исключительно из качественных и свежих продуктов.
                </p>
            </div>
        </aside>
    );
};

export default AsideInfo;