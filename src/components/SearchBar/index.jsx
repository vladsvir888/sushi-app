import React from 'react';

import Button from 'components/Button';

import styles from './SearchBar.module.css';

const SearchBar = ({
    searchQuery,
    setSearchQuery
}) => {
    return (
        <div className={styles.search}>
            <input
                value={searchQuery}
                onChange={event => setSearchQuery(event.target.value)}
                id="search_input" 
                className={styles.search__input} 
                type="text" 
                placeholder="Введите продукт" 
            />
            <label 
                className={styles.search__label} 
                htmlFor="search_input"
            >
                Введите продукт
            </label>
            {searchQuery && (
                <Button 
                    onClick={() => setSearchQuery('')} 
                    classes={styles.search__close}
                >
                    <svg className={styles.search__icon} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"></path>
                    </svg>
                </Button>
            )}
        </div>
    );
};

export default SearchBar;