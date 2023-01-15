import React from 'react';
import { useNavigate } from 'react-router-dom';

import cn from 'classnames';

import Button from 'components/Button';

import styles from './Error.module.css';

import errorImg from 'assets/img/sushi_hero.svg';

const Error = ({ 
    text, 
    isBtn = true, 
    isImg = true 
}) => {
    const navigate = useNavigate();

    return (
        <div className={styles.error}>
            <div className={cn("offset-y", styles.error__wrap)}>
                {isImg && (
                    <img src={errorImg} alt="Брутальное суши в солнечных очках" />
                )}
                <h1 className={styles.error__heading}>
                    {text}
                </h1>
                {isBtn && (
                    <Button 
                        classes={styles.error__btn} 
                        onClick={() => navigate('/')}
                    >
                        ❮ Вернуться на главную
                    </Button>
                )}
            </div>
        </div>
    );
};

export default Error;