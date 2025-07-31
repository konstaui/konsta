import React, { useRef } from 'react';
import Toolbar from './Toolbar.jsx';
import { TabbarContext } from './TabbarContext.jsx';

const Tabbar = (props) => {
  const {
    labels,
    icons,
    ref,
    children,

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
      <TabbarContext.Provider value={{ labels, icons, tabbar: true }}>
        {children}
      </TabbarContext.Provider>
    </Toolbar>
  );
};

Tabbar.displayName = 'Tabbar';

export default Tabbar;
