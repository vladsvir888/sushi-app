import Product from 'components/Product';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from 'store/productsSlice';

import ProductService from 'API/ProductService';

import { API, options, LIMIT, NUMS_PRODUCTS } from 'constants';

import { useFetching } from 'hooks/useFetching';

import Error from 'pages/Error';

import { MenuLoader } from 'components/Skeleton';
import Select from 'components/Select';
import SearchBar from 'components/SearchBar';
import Pagination from 'components/Pagination';

import styles from './Menu.module.css';

const Menu = () => {
    const data = useSelector((state) => state.products.data);
    const dispatch = useDispatch();

    const [selectedSort, setSelectedSort] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const [page, setPage] = useState(1);
    const pageCount = Math.ceil(NUMS_PRODUCTS / LIMIT);

    const handlePageClick = (event) => {
        setPage(event.selected + 1); // event.selected - индекс выбранного/кликнутого элемента в пагинации

        window.scrollTo(0, 0);
    }

    const [getData, isLoading, errorData] = useFetching(async (url) => {
        const response = await ProductService.getProduct(url);

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        const result = await response.json();

        dispatch(add(result));
    });

    useEffect(() => {
        getData(`${API}?page=${page}&limit=${LIMIT}`);
    }, [page]);

    const sortProducts = (sort) => { // sort - тип сортировки (title, price и т.д.)
        setSelectedSort(sort);

        const compare = (a, b) => {
            if (a[sort] > b[sort]) return 1;
            if (a[sort] === b[sort]) return 0;
            if (a[sort] < b[sort]) return -1;
        }

        if (!sort.includes('-')) {
            dispatch(add([...data].sort(compare)));
        } else { // сортируем в обратном порядке
            sort = sort.slice(1); // отсекаем минус

            dispatch(add([...data].sort(compare).reverse()))
        }
    }

    const searchedProducts = useMemo(() => {
        if (!searchQuery) return data;

        return data.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()));
    }, [data, searchQuery]);

    if (errorData) {
        return <Error 
            isImg={false}
            isBtn={false} 
            text={`Произошла какая-то ошибка: ${errorData}`} 
        />
    }

    return (
        <main className="main">
            <div className="container">
                <div className="main__heading">
                    <h1 className="heading">
                        Наше меню
                    </h1>
                    <SearchBar 
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                    />
                    <Select
                        selectedSort={selectedSort}
                        sortProducts={sortProducts}
                        defaultValue="Сортировка"
                        options={options}
                    />
                </div>
                {isLoading
                    ? (
                        <div className={styles.product__wrap}>
                            {new Array(LIMIT).fill().map((_, index) => <MenuLoader key={index} />)}
                        </div>
                    )
                    : (
                        <>
                            {searchedProducts.length
                                ? (
                                    <ul className={styles.product__wrap}>
                                        {searchedProducts.map(item =>
                                            <li key={item.id}>
                                                <Product {...item} />
                                            </li>
                                        )}
                                    </ul>
                                )
                                : (
                                    <h1 className="heading text-center">Ничего не найдено!</h1>
                                )
                            }
                        </>
                    )
                }
                <Pagination 
                    pageCount={pageCount} 
                    handlePageClick={handlePageClick} 
                />
            </div>
        </main>
    );
};

export default Menu;