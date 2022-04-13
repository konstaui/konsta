import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import List from './List.jsx';

const MenuList = forwardRef((props, ref) => {
  const {
    // Children
    children,

    // Rest
    ...rest
  } = props;

  const elRef = useRef(null);

  useImperativeHandle(ref, () => ({
    el: elRef.current,
  }));

  const attrs = {
    ...rest,
  };

  return (
    <List ref={elRef} menuList {...attrs}>
      {children}
    </List>
  );
});

MenuList.displayName = 'MenuList';

export default MenuList;
