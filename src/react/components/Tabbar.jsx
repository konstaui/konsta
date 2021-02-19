import React from 'react';
import Toolbar from './Toolbar';

const Tabbar = (props) => {
  const {
    labels,

    children,

    ...rest
  } = props;

  const attrs = {
    ...rest,
  };

  return (
    <Toolbar tabbar tabbarLabels={labels} {...attrs}>
      {children}
    </Toolbar>
  );
};

export default Tabbar;
