import React from 'react';

import cn from 'classnames';

import styles from './Tooltip.module.css';

const Tooltip = ({ weight }) => {
    return (
        <div className={cn("js-popup-info", styles.tooltip)}>
            <div className={styles.tooltip__wrap}>
                <h3 className={styles.tooltip__title}>
                    Пищевая ценность:
                </h3>
            </div>
            {weight && (
                <p>
                    Вес: {weight} г. за 1 шт.
                </p>
            )}
        </div>
    );
};

export default Tooltip;