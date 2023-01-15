import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import logo from 'assets/img/logo.png';

const Logo = ({ alt, sizes}) => {
    const { pathname } = useLocation();

    return (
        <>
            {pathname.length > 1
                ? (
                    <Link to="/">
                        <img 
                            src={logo} 
                            alt={alt}
                            width={sizes.width}
                            height={sizes.height}
                        />
                    </Link>
                )
                : (
                    <img 
                        src={logo} 
                        alt={alt}
                        width={sizes.width}
                        height={sizes.height}
                    />
                )
            }
        </>
    );
};

export default Logo;