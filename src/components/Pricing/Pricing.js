import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOptions = [
        {id:1, name: 'fre e', price:0, benefits:[
            'lifetime free',
            'unlimited deals',
            'localaized deals',
            'fantastic deals',
            'crazy deals'
        ]},
        {id:2, name: 'regular', price:6.56, benefits:[
            'everything on free free',
            'unlimited deals',
            'localaized deals',
            'fantastic deals',
            'crazy deals'
        ]},
        {id:3, name: 'premium', price:19.99, benefits:[
            'everything free regular',
            'unlimited deals',
            'localaized deals',
            'fantastic deals',
            'crazy deals'
        ]},
    ]
    return (
        <div className='bg-indigo-700 p-4 mt-8'>
            <h1 className='text-6xl font-mono text-white'>best deal of the town</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet modi nulla aspernatur eum quo! Magni quam ipsam sequi illo autem, rerum consectetur assumenda doloremque libero harum cum! Voluptatibus asperiores, sunt sit quam magnam exercitationem iure voluptate ducimus incidunt ad soluta aspernatur amet, fugit in deleniti omnis repellat. Dolore, placeat rerum.</p>
            <div className='grid md:grid-cols-3 gap-3 mt-8 '>
                {
                    pricingOptions.map(option => <PricingOption
                    key={option.id}
                    option={option}
                    ></PricingOption>)
                }
            </div>
        </div>
        
    );
};

export default Pricing;