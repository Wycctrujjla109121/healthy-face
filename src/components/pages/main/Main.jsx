import React from 'react';

//  Route
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//  COMPONENTS
import Menu from './menu/Menu.jsx'
import Content from './content/Content.jsx'
import Footer from './footer/Footer.jsx'
import Cart from '../cart/Cart.jsx'
import ProductCard from '../productCard/ProductCard.jsx';
import Order from '../order/Order.jsx'
//  STYLES
import style from './main.module.scss'

const main = () => {
    return (
        <div className={style.main}>
            <BrowserRouter>
                <Menu />

                <Routes>
                    <Route path="*" element={<Content />} />

                    <Route path="cart" element={<Cart />} />

                    <Route path="productCard" element={<ProductCard/>}/>

                    <Route path="cart/order" element={<Order/>}/>
                </Routes>

                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default main;
