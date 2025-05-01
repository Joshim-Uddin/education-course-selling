import { Cloudinary } from '@cloudinary/url-gen/index';
import React, { createContext } from 'react';

export const Context = createContext(null);
const cld = new Cloudinary({ cloud: { cloudName: 'dfxk2ofkn' } });
const Provider = ({children}) => {
    const info = {
        cld
      };
    return (
        <Context.Provider value={info}>{children}</Context.Provider>
    );
};

export default Provider;