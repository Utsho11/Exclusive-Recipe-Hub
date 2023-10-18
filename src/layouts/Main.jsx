import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/footer/Footer';
import { Container } from 'react-bootstrap';
import NavigationBar from '../shared/navbar/NavigationBar';

const Main = () => {
    return (
        <div style={{backgroundColor: "#f9f9f9",paddingTop:'100px'}}>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;