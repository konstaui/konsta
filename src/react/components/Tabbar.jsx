import React, { useRef } from 'react';
import Toolbar from './Toolbar.jsx';

const Tabbar = (props) => {
  const {
    labels,
    icons,
    children,
    ref,

    ...rest
  } = props;

  const elRef = useRef(null);

  const attrs = {
    ...rest,
  };

  return (
    <Toolbar
      ref={(el) => {
        elRef.current = el;
        if (ref && typeof ref === 'function') ref(el);
        else if (ref) ref.current = el;
      }}
      tabbar
      tabbarIcons={icons}
      tabbarLabels={labels}
      {...attrs}
    >
      {children}
    </Toolbar>
  );
};

Tabbar.displayName = 'Tabbar';

export default Tabbar;
