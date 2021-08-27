import React from 'react';
import { cls } from '../shared/cls.js';
import { TailwindMobileProvider } from '../shared/TailwindMobileProvider.jsx';

const App = (props) => {
  const {
    component = 'div',
    className,

    theme = 'material',

    // Children
    children,

    // Rest
    ...rest
  } = props;

  const Component = component;

  const attrs = {
    ...rest,
  };

  return (
    <TailwindMobileProvider theme={theme}>
      <Component className={cls(`twm-${theme}`, className)} {...attrs}>
        {children}
      </Component>
    </TailwindMobileProvider>
  );
};

export default App;
