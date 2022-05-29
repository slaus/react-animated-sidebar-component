import React from 'react';
import {Outlet} from 'react-router-dom';

import './app-layout.scss';

import Sidebar from "../sidebar";

const AppLayout = () => {

    return (
        <div className='app'>
            <Sidebar />
            <Outlet/>
        </div>
    );
};

export default AppLayout;
