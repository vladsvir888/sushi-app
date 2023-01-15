import React from 'react';
import { Link } from 'react-router-dom';

import cn from 'classnames';

import styles from './Breadcrumbs.module.css';

const Breadcrumbs = ({ items }) => {
    return (
        <nav className={styles.breadcrumbs}>
            <ol className={styles.breadcrumbs__list}>
                {items.map(item =>
                    <li 
                        className={styles.breadcrumbs__item} 
                        key={item.title}
                    >
                        {item.path 
                            ? (
                                <Link className={cn("link", styles.breadcrumbs__link)} to={item.path}>
                                    {item.title}
                                </Link>
                            )
                            : (
                                <span aria-current="page">
                                    {item.title}
                                </span>
                            )
                        }
                    </li>
                )}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;