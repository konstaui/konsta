import { useContext } from 'react';
import { ListDividersContext } from './ListDividersContext.js';

export const useListDividers = () => {
  return useContext(ListDividersContext);
};
