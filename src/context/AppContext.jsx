import { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [aboutmacopen, setaboutmacopen] = useState(false);
    const [safariopen, setsafariopen] = useState(false);

    const openAboutthismac = ()=>{
      setaboutmacopen(true);
    }
    const closeAboutthismac = ()=>{
      setaboutmacopen(false);
    }
    const openSafari = ()=>{
      setdockApps(prev =>
        prev.map(app =>
          app.name === 'Safari' ? { ...app, isOpen: true } : app
        )
      );
      setsafariopen(true);
    }
    const closeSafari = ()=>{
      setdockApps(prev =>
        prev.map(app =>
          app.name === 'Safari' ? { ...app, isOpen: false } : app
        )
      );
      setsafariopen(false);
    }

    const [dockApps, setdockApps] = useState([
      { name: 'Finder', icon: '/icons/finder.png', isOpen: true, opener: openSafari },
      { name: 'Launchpad', icon: '/icons/launchpad.png', isOpen: false, opener: openSafari },
      { name: 'Safari', icon: '/icons/safari.png', isOpen: false, opener: openSafari },
      { name: 'Notes', icon: '/icons/notes.png', isOpen: false, opener: openSafari },
      { name: 'Settings', icon: '/icons/settings.png', isOpen: false, opener: openSafari },
    ]);
  
  return (
    <AppContext.Provider value={{ aboutmacopen, openAboutthismac, closeAboutthismac, safariopen, openSafari, closeSafari, dockApps }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
