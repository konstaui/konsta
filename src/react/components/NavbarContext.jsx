import { createContext, useContext } from 'react';

export const NavbarContext = createContext({
  navbar: false,
});

export const useNavbarContext = () => useContext(NavbarContext);
