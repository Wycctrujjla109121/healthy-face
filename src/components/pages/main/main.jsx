import React from 'react';

//  COMPONENTS
import Menu from './menu/menu.jsx'
import Preview from './preview/preview.jsx'
import Showspray from './showspray/showspray.jsx'
import Ourproject from './ourproject/ourproject.jsx'

//  STYLES


const main = () => {
    return (
        <div>
            <Menu />
            <Preview />
            <Showspray />
            <Ourproject />
        </div>
    );
};

export default main;