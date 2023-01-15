import React, { useRef, useEffect } from 'react';

import cn from 'classnames';

import Button from 'components/Button';

import styles from 'components/Accordion/Accordion.module.css';

const AccordionItem = ({ 
    item,
    isActive,
    onItemClick
 }) => {
    const ref = useRef();

    useEffect(() => {
        if (isActive === true) {
            ref.current.style.marginBottom = '20px';
            ref.current.style.maxHeight = `${ref.current.scrollHeight}px`;
        }
    }, []);

    return (
        <div className={
            cn(
                styles.accordion__item,
                `${isActive ? styles.accordion__item_active : ""}`
            )
        }>
            <Button 
                classes={styles.accordion__title}
                onClick={onItemClick}
            >
                {item.title}
            </Button>
            <p 
                ref={ref}
                className={styles.accordion__content}
                style={
                    isActive
                    ? { maxHeight: ref.current?.scrollHeight, marginBottom: '20px' }
                    : { maxHeight: '', marginBottom: '' }
                }
            >
                {item.content}
            </p>
        </div>
    );
};

export default AccordionItem;