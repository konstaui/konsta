import React, { useRef } from 'react';
import List from './List.jsx';

const MenuList = (props) => {
  const {
    // Children
    children,
    ref,
    // Rest
    ...rest
  } = props;

  const elRef = useRef(null);

  const attrs = {
    ...rest,
  };

  return (
    <List
      ref={(el) => {
        elRef.current = el;
        if (ref && typeof ref === 'function') ref(el);
        else if (ref) ref.current = el;
      }}
      menuList
      {...attrs}
    >
      {children}
    </List>
  );
};

MenuList.displayName = 'MenuList';

export default MenuList;
