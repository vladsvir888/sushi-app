import Button from 'components/Button';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from 'store/cartSlice';

import Quantity from 'components/Quantity';

import styles from './ProductCart.module.css';

const ProductCart = (product) => {
    const dispatch = useDispatch();

    return (
        <article className={styles.product}>
            <div className={styles.product__item}>
                <img 
                    src={product.imageUrl} 
                    alt={product.title}
                    className={styles.product__img}
                />
                <div className={styles.product__content}>
                    <h3 className={styles.product__title}>
                        {product.title} 
                    </h3>
                    <p className={styles.product__text}>
                        {product.description}
                    </p>
                    <p className={styles.product__price}>
                        {product.price} руб.
                    </p>
                    <Quantity product={product} />
                    <p className={styles.product__num}>
                        Количество: <span>{product.quantity}</span>
                    </p>
                </div>
            </div>
            <div className={styles.product__item}>
                <Button 
                        classes={styles.product__close}
                        onClick={() => dispatch(removeFromCart(product))}
                    >
                    Удалить
                    <svg className={styles.product__close_icon} width="13" height="14" viewBox="0 0 13 14" xmlns="http://www.w3.org/2000/svg">
                        <rect y="12" width="16" height="1" transform="rotate(-45 0 12)" />
                        <rect x="1" y="1" width="16" height="1" transform="rotate(45 1 1)" />
                    </svg>
                </Button>
            </div>
        </article>
    );
};

export default ProductCart;