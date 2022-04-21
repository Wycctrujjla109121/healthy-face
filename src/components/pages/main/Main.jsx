import React from 'react';

//  Route
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//  COMPONENTS
import Menu from './menu/Menu.jsx'
import Content from './content/Content.jsx'
import Footer from './footer/Footer.jsx'
import Cart from '../cart/Cart.jsx'
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
                </Routes>

                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default main;
