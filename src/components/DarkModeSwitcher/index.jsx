import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { switchDarkMode } from 'store/darkModeSlice';

import cn from 'classnames';

import styles from './DarkModeSwitcher.module.css';

const DarkModeSwitcher = () => {
    const dispatch = useDispatch();
    const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

    useEffect(() => {
        const isDarkMode = localStorage.getItem('mode'); // проверяем, сохранен ли в LS режим темы

        if (isDarkMode === null) return; // если нет - выходим

        if (isDarkMode === 'dark') {
            dispatch(switchDarkMode(true));
        }
    }, []);

    return (
        <div className={styles.wrap}>
            <label className={styles.toggle} htmlFor="check_theme">
                <input 
                    id="check_theme"
                    className={cn("visually-hidden", styles.input)}
                    type="checkbox"
                    onChange={() => dispatch(switchDarkMode(!isDarkMode))}
                    checked={isDarkMode}
                />
                <div className={styles.round}>
                    <span className="visually-hidden">Switcher round</span>
                </div>
            </label>
        </div>
    );
};

export default DarkModeSwitcher;