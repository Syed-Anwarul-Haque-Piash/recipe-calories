import React from 'react';

const Cooks = ({cooks}) => {
    return (
        <div>
            <h1 className='font-bold text-2xl p-4 m-4'>Want to cook: {cooks.length}</h1>
        </div>
    );
};

export default Cooks;