import React, { createContext, useState } from 'react';

const CategorieContext = createContext();
export default CategorieContext;

export function CategorieContextProvider (props) {
    const [categorieId, setCategorieId] = useState(0);

    return (
        <CategorieContext.Provider value = {{categorieId, setCategorieId}}>
            {props.children}
        </CategorieContext.Provider>
    );
}