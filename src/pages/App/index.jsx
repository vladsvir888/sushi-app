import React from 'react';
import { Routes, Route } from 'react-router-dom';

import routes from 'routes';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Cart from 'components/Cart';

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                {routes.map(route =>
                    <Route 
                        key={route.element} 
                        path={route.path} 
                        element={route.element} 
                    />
                )}
            </Routes>
            <Footer />
            <Cart />
        </>
    );
};

export default App;