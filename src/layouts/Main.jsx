import React from 'react';
import Header from '../shared/header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/footer/Footer';
import { Container } from 'react-bootstrap';
import NavigationBar from '../shared/navbar/NavigationBar';

const Main = () => {
    return (
        <Container>
            <Header></Header>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </Container>
    );
};

export default Main;