import React from 'react';
import { useDispatch } from 'react-redux';
import { increase, decrease, changeInputValue } from 'store/cartSlice';

import styles from './Quantity.module.css';

const Quantity = ({product}) => {
    const dispatch = useDispatch();

    return (
        <div className={styles.quantity}>
            <button 
                className={styles.quantity__btn} 
                aria-label="Уменьшить"
                onClick={() => dispatch(decrease(product))}
            >
                <svg
                    className={styles.quantity__icon}
                    aria-hidden="true"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <line
                        y1="6"
                        x2="12"
                        y2="6"
                    />
                </svg>
            </button>
            <input 
                className={styles.quantity__input} 
                type="text"
                value={product.quantity} 
                onChange={(e) => dispatch(changeInputValue({product: product, quantity: e.target.value}))}
            />
            <button 
                className={styles.quantity__btn} 
                aria-label="Увеличить"
                onClick={() => dispatch(increase(product))}
            >
                <svg
                        className={styles.quantity__icon}
                        aria-hidden="true"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                    <line
                        x1="6"
                        x2="6"
                        y2="12" />
                    <line
                        y1="6"
                        x2="12"
                        y2="6" />
                </svg>
            </button>
        </div>
    );
};

export default Quantity;