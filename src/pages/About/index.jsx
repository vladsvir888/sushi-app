import React from 'react';

import { breadcrumbsAboutItems, accordionData } from 'constants';

import Accordion from 'components/Accordion';
import Breadcrumbs from 'components/Breadcrumbs';
import AsideInfo from 'components/AsideInfo';

const About = () => {
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