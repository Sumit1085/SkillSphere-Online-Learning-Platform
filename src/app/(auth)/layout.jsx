import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </div>
    );
};

export default layout;