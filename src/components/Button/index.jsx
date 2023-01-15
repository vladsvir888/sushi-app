import React from 'react';

import cn from 'classnames';

import './index.css';

const Button = ({ children, classes, ...props }) => {
    return (
        <button 
            className={cn("btn", classes)} 
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;