import { CheckCircleIcon } from '@heroicons/react/solid';
import React from 'react';

const Benefit = (props) => {
    return (
        <p className='flex items-center'>
                <CheckCircleIcon className='w-5 h-5 text-green-700 mr-2'></CheckCircleIcon>
                {props.benefit}
                </p>
    );
};

export default Benefit;