import React from 'react';

import cn from 'classnames';

import Button from 'components/Button';
import Tooltip from 'components/Tooltip';

import styles from './ProductDetail.module.css';

const ProductDetailCard = ({ data, isShow, setIsShow }) => {
    return (
        <article className={styles.inner}>
            <img 
                src={data.imageUrl} 
                alt={data.title} 
            />
            <div className={styles.content}>
                <h1 className={styles.title}>
                    {data.title}
                </h1>
                <div className={styles.content__inner}>
                    <div className={styles.weight}>
                        {data.weight} г. за 1 шт.
                        <Button 
                            classes={cn("js-icon-info", styles.icon__btn)} 
                            onClick={() => setIsShow(!isShow)}
                            aria-label="Открыть тултип"
                        >
                            <svg className={styles.icon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M12 0C5.37253 0 0 5.37253 0 12.0004C0 18.6275 5.37253 24 12 24C18.6274 24 24 18.6275 24 12.0004C24 5.37253 18.6274 0 12 0ZM11.9969 5.10041C13.0017 5.10041 13.8167 5.91518 13.8167 6.92026C13.8167 7.92549 13.0017 8.74015 11.9969 8.74015C10.9917 8.74015 10.1766 7.92549 10.1766 6.92026C10.1766 5.91518 10.9917 5.10041 11.9969 5.10041ZM15.123 18.7624C15.123 18.9442 14.9756 19.0917 14.7941 19.0917H13.7355H10.2578H9.20002C9.01847 19.0917 8.87112 18.9442 8.87112 18.7624V18.0872C8.87112 17.9054 9.01842 17.758 9.20002 17.758H10.2578V11.3543H9.16749C8.98594 11.3543 8.83849 11.2069 8.83849 11.025V10.3491C8.83849 10.1672 8.98594 10.0198 9.16749 10.0198H10.2578H13.4066H13.4173C13.5987 10.0198 13.7462 10.1672 13.7462 10.3491V17.7579H14.7941C14.9756 17.7579 15.1231 17.9053 15.1231 18.0871V18.7624H15.123Z" />
                            </svg>
                        </Button>
                        {isShow && (
                            <Tooltip weight={data.weight} />
                        )}
                    </div>
                    <p className={styles.price}>
                        {data.price} руб.
                    </p>
                    <p className={styles.descr}>
                        Состав: {data.description}
                    </p>
                </div>
            </div>
        </article>
    );
};

export default ProductDetailCard;