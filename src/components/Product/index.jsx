import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from 'store/cartSlice';

import cn from 'classnames';

import Button from 'components/Button';

import styles from './Product.module.css';

const Product = (item) => {
    const dispatch = useDispatch();

    return (
        <article className={styles.product}>
            <img 
                className={styles.product__img} 
                src={item.imageUrl} 
                alt={item.title}
                width="300"
                height="300" 
            />
            <div className={cn("offset-y", styles.product__content)}>
                <h2 className={styles.product__title}>
                    <Link className={styles.product__link} to={`/product/${item.id}`}>
                        {item.title}
                    </Link>
                </h2>
                <p className={styles.product__description}>
                    {item.description}
                </p>
                <div className={styles.product__inner}>
                    <div className={styles.product__price}>
                        {item.price} руб.
                    </div>
                    <div className={styles.product__weight}>
                        {item.weight} г.
                    </div>
                </div>
                <Button 
                    classes={styles.product__btn}
                    onClick={() => dispatch(addToCart(item))}
                >
                    Добавить <span className="visually-hidden">{item.title}</span> в корзину
                </Button>
            </div>
        </article>
    );
};

export default Product;