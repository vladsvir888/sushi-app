import React from 'react';

import cn from 'classnames';

import styles from './DarkModeSwitcher.module.css';

const DarkModeSwitcher = ({
    switchDarkMode,
    isdarkMode
}) => {
    return (
        <div className={styles.wrap}>
            <label className={styles.toggle} htmlFor="check_theme">
                <input 
                    id="check_theme"
                    className={cn("visually-hidden", styles.input)}
                    type="checkbox"
                    onChange={switchDarkMode}
                    checked={isdarkMode}
                />
                <div className={styles.round}>
                    <span className="visually-hidden">Switcher round</span>
                </div>
            </label>
        </div>
    );
};

export default DarkModeSwitcher;