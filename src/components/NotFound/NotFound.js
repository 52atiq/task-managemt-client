import React from 'react';
import error from '../../asset/error.png'
const NotFound = () => {
    return (
        <div>
            <div className='flex justify-center items-center'>
                <img src={error} />
            </div>
        </div>
    );
};

export default NotFound;