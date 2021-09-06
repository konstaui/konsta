import React from 'react';
import { TailwindMobileContext } from './TailwindMobileContext.js';

const TailwindMobileProvider = (props) => {
  const { theme, dark, touchRipple = true, children } = props;

  return (
    <TailwindMobileContext.Provider value={{ theme, dark, touchRipple }}>
      {children}
    </TailwindMobileContext.Provider>
  );
};

export { TailwindMobileProvider };
