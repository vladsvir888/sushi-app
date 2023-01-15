import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from 'store/cartModalSlice';
import { cartTotalSelector } from 'store/selectors';
import { NavLink } from 'react-router-dom';

import cn from 'classnames';

import { menuItems } from 'constants';

import Logo from 'components/Logo';
import DarkModeSwitcher from 'components/DarkModeSwitcher';

import styles from './Header.module.css';
import Button from 'components/Button';

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const dispatch = useDispatch();
    const total = useSelector(cartTotalSelector);

    const setDark = () => {
        setIsDarkMode(true);

        localStorage.setItem('mode', 'dark');

        document.documentElement.classList.add('dark');
    }

    const setLight = () => {
        setIsDarkMode(false);

        localStorage.setItem('mode', 'light');

        document.documentElement.removeAttribute('class');
    }

    const switchDarkMode = () => {
        if (!isDarkMode) { // если это не darkMode
            setDark(); // то делаем darkMode
        } else {
            setLight(); // иначе lightMode
        }
    }

    useEffect(() => {
        const isDarkMode = localStorage.getItem('mode'); // проверяем, сохранен ли в LS режим

        if (isDarkMode === null) return; // если нет - выходим

        if (isDarkMode === 'dark') {
            setDark();
        } else {
            setLight();
        }
    }, []);

    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.header__inner}>
                    <div className={cn("offset-x", styles.header__start)}>
                        <Logo
                            alt="Главная страница"
                            sizes={{width: 50, height: 50}} 
                        />
                        <nav>
                            <ul className={cn("offset-x", styles.header__list)}>
                                {menuItems.map(menuItem => 
                                    <li key={menuItem.to}>
                                        <NavLink
                                            className={cn("link", styles.header__link)}
                                            to={menuItem.to}
                                        >
                                            {menuItem.text}
                                        </NavLink>
                                    </li>
                                )}
                            </ul>
                        </nav>
                    </div>
                    <div className={cn("offset-x", styles.header__end)}>
                        <Button 
                            classes={styles.header__btn}
                            onClick={() => dispatch(toggle())}
                            >
                            <span className={styles.header__counter}>{total}</span>
                            <svg
                                className={styles.header__icon}
                                viewBox="0 0 1024 1024"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                >
                                <path
                                    d="M1003.442802 167.945013c-9.960863-11.328-23.089881-17.323551-37.997406-17.323551l-752.437048 0C202.701608 92.595908 150.935618 47.89073 91.855034 47.89073L24.385387 47.89073c-12.900821 0-23.340591 10.43977-23.340591 23.340591s10.43977 23.340591 23.340591 23.340591l67.469648 0c38.08848 0 71.549569 29.860075 76.381621 69.156056l33.232892 191.808514 58.921971 414.867776c3.418866 28.514427 28.560476 51.696406 56.04955 51.696406l609.366561 0c12.900821 0 23.340591-10.43977 23.340591-23.340591 0-12.900821-10.43977-23.340591-23.340591-23.340591L316.441069 775.419482c-3.327792 0-9.003048-4.740978-9.756201-11.07729l-11.478426-80.802304 112.454188-9.484002 485.847363-35.877115c31.888268-0.182149 59.833737-24.52558 63.434751-54.248531l62.751183-359.251084C1022.202051 203.822129 1015.95579 182.054359 1003.442802 167.945013z"
                                    p-id="4120"
                                ></path>
                                <path
                                    d="M849.442382 894.790196c-34.740222 0-63.005986 28.265764-63.005986 63.001893 0 34.716686 28.28009 62.977333 63.005986 62.977333 34.69622 0 62.972217-28.266787 62.972217-62.977333C912.414599 923.05596 884.152928 894.790196 849.442382 894.790196z"
                                    p-id="4121"
                                ></path>
                                <path
                                    d="M355.396289 894.790196c-34.740222 0-63.004963 28.265764-63.004963 63.001893 0 34.716686 28.28009 62.977333 63.004963 62.977333 34.69622 0 62.972217-28.266787 62.972217-62.977333C418.368506 923.05596 390.108882 894.790196 355.396289 894.790196z"
                                    p-id="4122"
                                ></path>
                            </svg>
                        </Button>
                        <DarkModeSwitcher 
                            switchDarkMode={switchDarkMode}
                            isdarkMode={isDarkMode}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;