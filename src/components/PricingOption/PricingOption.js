import React from 'react';

const PricingOption = (props) => {
    const {name, price} = props.option;
    return (
        <div className='bg-white p-5 rounded-lg  '>
            <h2 className='text-xl font-bold bg-indigo-700 py-2 text-white'>{name}</h2>
            <p>
                <span className='text-6xl font-bold'>{price}
                </span>
                <span className='text-xl font-bold text-gray-500'>
                    /mo
                </span>
            </p>

        </div>
    );
};

export default PricingOption;