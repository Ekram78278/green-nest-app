import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import FooterElement from '../components/FooterElement';



const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
            
            
            <div className='flex-1 max-w-screen-2xl w-full py-4 md:py-8 lg:py-12 mx-auto'>
                <Outlet></Outlet>
                
            </div>

            <div className=''>
                <FooterElement></FooterElement>
            </div>

        </div>
    );
};

export default MainLayout;