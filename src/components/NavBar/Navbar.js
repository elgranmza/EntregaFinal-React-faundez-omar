import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <NavLink to="/" className="navbar-item">
                    Mi Sitio
                </NavLink>
                <div className='Categories'>
                    <NavLink to='/category/audio' activeClassName='ActiveOption' className='Option'>
                        Audio
                    </NavLink>
                    <NavLink to='/category/electrónica' activeClassName='ActiveOption' className='Option'>
                        Electrónica
                    </NavLink>
                    <NavLink to='/category/consola' activeClassName='ActiveOption' className='Option'>
                        Consola
                    </NavLink>
                </div>
                <div className="navbar-end">
                    <CartWidget />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
