import React from 'react';
import { TailwindMobileContext } from './TailwindMobileContext.js';

const TailwindMobileProvider = (props) => {
  const { theme, children } = props;

  return (
    <TailwindMobileContext.Provider value={{ theme }}>
      {children}
    </TailwindMobileContext.Provider>
  );
};

export { TailwindMobileProvider };
