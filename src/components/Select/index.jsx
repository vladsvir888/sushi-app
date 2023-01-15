import React from 'react';

import './index.css';

const Select = ({ 
    defaultValue, 
    options, 
    selectedSort,
    sortProducts
}) => {
    return (
        <select
            value={selectedSort}
            onChange={event => sortProducts(event.target.value)}
            className="select"
        >
            <option disabled value="">{defaultValue}</option>
            {options.map(option =>
                <option 
                    key={option.value} 
                    value={option.value}
                >
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default Select;