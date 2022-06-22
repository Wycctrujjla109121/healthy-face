import React, { useState } from 'react';

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

const Main = ({states, useStates, defaultState}) => {
    return (
        <div className={style.main}>
            <BrowserRouter>
                <Menu states={states} />

                <Routes>
                    <Route path="*" element={<Content states={states} useStates={useStates} defaultState={defaultState}/>} />

                    <Route path="cart" element={<Cart states={states} useStates={useStates} defaultState={defaultState}/>} />

                    <Route path="productCard" element={<ProductCard/>} />

                    <Route path="cart/order" element={<Order states={states}/>}/>
                </Routes>

                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default Main;
