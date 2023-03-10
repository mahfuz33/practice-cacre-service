import React from 'react';
import sleeping from '../../../images/sleeping.jpg';

const NotFound = () => {
    return (
        <div>
            <h2 className='text-primary text-center' >Mecanic is Sleeping.</h2>
            <img className='vw-100 vh-100' src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;