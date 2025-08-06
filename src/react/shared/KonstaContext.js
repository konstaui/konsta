import React from 'react';

const KonstaContext = React.createContext({
  theme: 'material',
  dark: true,
  materialTouchRipple: true,
  iosHoverHighlight: true,
});

export { KonstaContext };
