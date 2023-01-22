import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToLS } from 'store/cartSlice';

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

    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.getItem('cart_items')) {
            const items = JSON.parse(localStorage.getItem('cart_items'));

            dispatch(addToLS(items));
        }
    }, []);

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