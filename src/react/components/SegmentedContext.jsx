import { createContext, useContext } from 'react';

export const SegmentedContext = createContext({
  strong: false,
  outline: false,
  rounded: false,
  raised: false,
});

export const useSegmentedContext = () => {
  return useContext(SegmentedContext);
};
