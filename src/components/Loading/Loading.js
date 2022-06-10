import React from 'react';
import loading from '../../images/loading.gif';
const Loading = () => {
    return (
        <div>
            <div className='container'>
                <div className='d-flex justify-content-center align-items-center'>
                    <img src={loading} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Loading;