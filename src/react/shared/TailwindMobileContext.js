import React from 'react';

const TailwindMobileContext = React.createContext({
  theme: 'material',
  dark: true,
  touchRipple: true,
});

export { TailwindMobileContext };
