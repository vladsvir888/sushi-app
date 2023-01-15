import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from 'store/cartModalSlice';
import { clearCart } from 'store/cartSlice';
import { cartTotalPriceSelector } from 'store/selectors';

import cn from 'classnames';

import Button from 'components/Button';
import ProductCart from 'components/ProductCart';

import styles from './Cart.module.css';

const Cart = () => {
    const isVisible = useSelector((state) => state.cartModal.isVisible);
    const productsCart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const total = useSelector(cartTotalPriceSelector);

    return (
        <>
            <div 
                className={cn(styles.cart, `${!isVisible ? "" : styles.cart_active}`)}
            >
                <div className={styles.cart__header}>
                    <h2>
                        Корзина
                    </h2>
                    <Button 
                        classes={styles.cart__close}
                        onClick={() => dispatch(toggle())}
                    >
                        <svg className={styles.cart__close_icon} width="13" height="14" viewBox="0 0 13 14" xmlns="http://www.w3.org/2000/svg">
                            <rect y="12" width="16" height="1" transform="rotate(-45 0 12)" />
                            <rect x="1" y="1" width="16" height="1" transform="rotate(45 1 1)" />
                        </svg>
                    </Button>
                </div>
                {productsCart.length 
                    ? (
                        <>
                            <ul className={styles.cart__list}>
                                {productsCart.map(product =>
                                    <li 
                                        key={product.id} 
                                        className={styles.cart__item}
                                    >
                                        <ProductCart {...product} />
                                    </li>
                                )}
                            </ul>
                            <div className={styles.cart__inner}>
                                <Button 
                                    classes={styles.cart__remove_btn}
                                    onClick={() => dispatch(clearCart())}
                                >
                                    Удалить товары с корзины
                                </Button>
                                <p className={styles.cart__total}>
                                    Итоговая сумма: {total} руб.
                                </p>
                            </div>
                        </>
                    )
                    : (
                        <h2>Товаров нет в корзине</h2>
                    )
                }
            </div>
            {isVisible && (
                <div 
                    className={styles.cart__overlay}
                    onClick={() => dispatch(toggle())}
                ></div>
            )}
        </>
    );
};

export default Cart;