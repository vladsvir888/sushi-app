import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToLS } from 'store/cartSlice';

import cn from 'classnames';

import ProductService from 'API/ProductService';

import { API } from 'constants';

import { useFetching } from 'hooks/useFetching';

import Error from 'pages/Error';

import Button from 'components/Button';
import ProductDetailCard from 'components/ProductDetailCard';
import { ProductDetailLoader } from 'components/Skeleton';

import styles from './ProductDetail.module.css';

const ProductDetail = () => {
    const { id } = useParams();
    const [data, setData] = useState({});
    const navigate = useNavigate();
    const [isShow, setIsShow] = useState(false);
    const dispatch = useDispatch();

    const [getData, isLoading, errorData] = useFetching(async (url) => {
        const response = await ProductService.getProduct(url);

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        setData(await response.json());

        if (localStorage.getItem('cart_items')) {
            const items = JSON.parse(localStorage.getItem('cart_items'));

            dispatch(addToLS(items));
        }
    });

    useEffect(() => {
        getData(`${API}/${id}`);
    }, []);

    useEffect(() => {
        const onClickOutside = (event) => {
            if (event.target.closest('.js-icon-info')) return;
            
            // если event.target не содержит все, что находится в попапе, то закрыть попап
            if (!event.target.closest('.js-popup-info')) {
                setIsShow(false);
            }
        };

        document.body.addEventListener('click', onClickOutside);

        return () => document.body.removeEventListener('click', onClickOutside);
    }, [isShow]);

    if (errorData) {
        return <Error 
            isImg={false}
            isBtn={false} 
            text={`Произошла какая-то ошибка: ${errorData}`} 
        />
    }

    return (
        <main>
            <div className={cn("container", styles.container)}>
                {isLoading
                    ? (
                        <div className={styles.inner}>
                            {new Array(1).fill().map((_, index) => <ProductDetailLoader key={index} />)}
                        </div>
                    )
                    : (
                        <>
                            <Button onClick={() => navigate(-1)} classes={styles.back}>
                                ❮ Вернуться назад
                            </Button>
                            <ProductDetailCard 
                                data={data}
                                isShow={isShow}
                                setIsShow={setIsShow}
                            />
                        </>
                    )
                }
            </div>
        </main>
    );
};

export default ProductDetail;