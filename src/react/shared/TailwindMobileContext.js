import React from 'react';

const TailwindMobileContext = React.createContext({
  theme: 'ios',
  dark: true,
  touchRipple: true,
});

export { TailwindMobileContext };
