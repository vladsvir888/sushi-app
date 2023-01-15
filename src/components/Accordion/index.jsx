import React from 'react';

import { useState } from 'react';

import AccordionItem from 'components/AccordionItem';

import styles from './Accordion.module.css';

const Accordion = ({
    items,
    initialActiveItemIndex
}) => {
    const [activeItemIndex, setActiveItemIndex] = useState(initialActiveItemIndex || 0);

    const handleItemClick = (index) => {
        setActiveItemIndex(activeItemIndex === index ? "" : index);
    };

    return (
        <div className={styles.accordion}>
            {items.map((item, index) =>
                <AccordionItem 
                    key={item.title}
                    item={item}
                    isActive={activeItemIndex === index}
                    onItemClick={() => handleItemClick(index)}
                />
            )}
        </div>
    );
};

export default Accordion;