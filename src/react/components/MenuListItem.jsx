import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import ListItem from './ListItem.jsx';

const MenuListItem = forwardRef((props, ref) => {
  const {
    active,

    href,

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
    <ListItem
      ref={elRef}
      menuListItem
      menuListItemActive={active}
      href={href || false}
      {...attrs}
    >
      {children}
    </ListItem>
  );
});

MenuListItem.displayName = 'MenuListItem';

export default MenuListItem;
