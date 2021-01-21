import React, { useState } from 'react';

import { CategorieContextProvider } from '../contexts/CategorieContext';
import Header from '../components/Header';
import BestSellers from '../components/BestSellers';
import Categories from '../components/Categories';
import Products from '../components/Products';

export default function Home(){    
    return(
        <CategorieContextProvider>
            <Header />
            <BestSellers />
            <Categories />
            <Products />
        </CategorieContextProvider>
    );
}