import { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [aboutmacopen, setaboutmacopen] = useState(false);
    const openAboutthismac = ()=>{
        setaboutmacopen(true);
    }
    const closeAboutthismac = ()=>{
        setaboutmacopen(false);
    }
  
  return (
    <AppContext.Provider value={{ aboutmacopen, openAboutthismac, closeAboutthismac }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
