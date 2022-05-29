import React, {useState, useEffect, useRef} from 'react';

import './sidebar.scss';
import {Link, useLocation} from "react-router-dom";

import sidebarItems from '../../sidebarItems';

const Sidebar = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [indicatorHeight, setIndicatorHeight] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
            indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
            setIndicatorHeight(sidebarItem.clientHeight);
        }, 100);
    }, []);

    useEffect(() => {
        const currentPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarItems.findIndex(item => item.section === currentPath);
        setActiveIndex(currentPath.length === 0 ? 0 : activeItem);
    }, [location]);

    return (
        <div className='sidebar'>
            <div
                ref={sidebarRef}
                className="sidebar__menu"
            >
                <div
                    ref={indicatorRef}
                    className="sidebar__menu__indicator"
                    style={{
                        transform: `translateX(-50%) translateY(${activeIndex * indicatorHeight}px)`
                    }}
                ></div>
                {
                    sidebarItems.map((item, index) => (
                        <Link to={item.to} key={index}>
                            <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                                <div className="sidebar__menu__item__icon">
                                    {item.icon}
                                </div>
                                <div className="sidebat__menu__item__text">
                                    {item.display}
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Sidebar;
