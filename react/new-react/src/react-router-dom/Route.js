import React from 'react';
import RouterContext from './Context';

const HashRouter = (props) => {
    return <RouterContext.Provider value={{a : 1}}>
        { props.children }
    </RouterContext.Provider>
}

export default HashRouter;
