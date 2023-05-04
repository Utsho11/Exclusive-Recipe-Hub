import React from 'react';
import error from '../../assets/images.jpg'

const ErrorPage = () => {
    return (
        <div className='text-center my-4'>
        <img style={{height:'600px'}} className='img-fluid w-100' src={error} alt="" />
        </div>
    );
};

export default ErrorPage;