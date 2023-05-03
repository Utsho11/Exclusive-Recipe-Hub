import React from 'react';
import logo from './img/logo.png'

const Header = () => {
    return (
        <div className='text-center'>
           <img className='img-fluid' src={logo} alt="" />
        </div>
    );
};

export default Header;