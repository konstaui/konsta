import React from 'react';
import { TailwindMobileContext } from './TailwindMobileContext.js';

const TailwindMobileProvider = (props) => {
  const { theme, dark, children } = props;

  return (
    <TailwindMobileContext.Provider value={{ theme, dark }}>
      {children}
    </TailwindMobileContext.Provider>
  );
};

export { TailwindMobileProvider };
