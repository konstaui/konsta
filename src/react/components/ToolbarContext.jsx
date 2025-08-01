import { createContext, useContext } from 'react';

export const ToolbarContext = createContext({
  tabbarLabels: true,
  tabbarIcons: true,
  tabbar: false,
  toolbar: false,
});

export const useToolbarContext = () => useContext(ToolbarContext);
