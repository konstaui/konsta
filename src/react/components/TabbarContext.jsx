import { createContext, useContext } from 'react';

export const TabbarContext = createContext({
  labels: true,
  icons: true,
  tabbar: false,
});

export const useTabbarContext = () => {
  return useContext(TabbarContext);
};
