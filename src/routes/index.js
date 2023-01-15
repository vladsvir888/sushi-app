import Menu from 'pages/Menu';
import About from 'pages/About';
import Error from 'pages/Error';
import ProductDetail from 'pages/ProductDetail';

const routes = [
    {
        path: '/',
        element: <Menu />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/product/:id',
        element: <ProductDetail />
    },
    {
        path: '*',
        element: <Error text="Cтраница не найдена" />
    }
];

export default routes;