import React, { useState } from 'react';
import Link from '../LInk/Link';
import { MenuIcon, XIcon } from '@heroicons/react/solid'


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        {id: 1, name: 'Home', link: '/home'},
        {id: 2, name: 'shop', link: '/shop'},
        {id: 3, name: 'deals', link: '/deals'},
        {id: 4, name: 'contuct us', link: '/contuct'},
    ]
    return (
        <nav className='bg-indigo-700'>
            <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden'>
                {open ? <XIcon></XIcon> :<MenuIcon></MenuIcon>}
            </div>
            <ul className={`md:flex justify-center bg-indigo-700 w-full text-white py-5 absolute md:static duration-500 ease-in ${open ? 'top-6': 'top-[-120px]'}`}>
                {
                    routes.map(route => <Link key={route.id}
                    route={route}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;