import { useContext } from 'react';
import { ListContext } from './ListContext.js';

export const useList = () => {
  return useContext(ListContext);
};
