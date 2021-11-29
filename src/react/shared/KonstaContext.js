import React from 'react';

const KonstaContext = React.createContext({
  theme: 'material',
  dark: true,
  touchRipple: true,
});

export { KonstaContext };
