import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToLS } from 'store/cartSlice';

import { breadcrumbsAboutItems, accordionData } from 'constants';

import Accordion from 'components/Accordion';
import Breadcrumbs from 'components/Breadcrumbs';
import AsideInfo from 'components/AsideInfo';

const About = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.getItem('cart_items')) {
            const items = JSON.parse(localStorage.getItem('cart_items'));

            dispatch(addToLS(items));
        }
    }, []);

    return (
        <main className="main">
            <div className="container">
                <Breadcrumbs items={breadcrumbsAboutItems} />
                <div className="main__heading">
                    <h1 className="heading">
                        О нас
                    </h1>
                </div>
                <Accordion 
                    items={accordionData}
                    initialActiveItemIndex={0} 
                />
                <AsideInfo />
            </div>
        </main>
    );
};

export default About;