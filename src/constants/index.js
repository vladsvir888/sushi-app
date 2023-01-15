export const breadcrumbsAboutItems = [
    {
        title: 'Главная',
        path: '/'
    },
    {
        title: 'О нас'
    }
];

export const menuItems = [
    {
        text: 'Меню',
        to: '/',
    }, 
    {
        text: 'О нас',
        to: '/about'
    }
];

export const accordionData = [
    {
        id: 0,
        title: 'Кто мы?',
        content: 'Первая и самая крупная в Москве компания по доставке суши. Мы были основаны в 2012-м году. За следующие десять лет было открыто еще десять точек, что позволило осуществлять доставку в любой район города в максимально короткие сроки.'
    },
    {
        id: 1,
        title: 'Наши преимущества',
        content: 'Заказывая у нас, вы можете не сомневаться в свежести и качестве выбранных блюд! Мы готовим ТОЛЬКО из свежих ингредиентов и ТОЛЬКО после вашего заказа!'
    },
    {
        id: 2,
        title: 'Почему нас выбирают?',
        content: 'Потому что у нас низкие цены, свежие ингредиенты, все блюда готовятся после заказа, а также у нас широкий выбор!'
    }
];

export const API = 'https://6375fa807e93bcb006bf1faa.mockapi.io/items';

export const options = [
    { name: 'По названию ↑', value: 'title' },
    { name: 'По названию ↓', value: '-title' },
    { name: 'По цене ↑', value: 'price' },
    { name: 'По цене ↓', value: '-price' },
    { name: 'По весу ↑', value: 'weight' },
    { name: 'По весу ↓', value: '-weight' }
];

export const LIMIT = 8;

export const NUMS_PRODUCTS = 20;