import React, { useRef } from 'react';
import ListItem from './ListItem.jsx';

const MenuListItem = (props) => {
  const {
    active,
    href,

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
    <ListItem
      ref={(el) => {
        elRef.current = el;
        if (ref && typeof ref === 'function') ref(el);
        else if (ref) ref.current = el;
      }}
      menuListItem
      menuListItemActive={active}
      href={href || false}
      {...attrs}
    >
      {children}
    </ListItem>
  );
};

MenuListItem.displayName = 'MenuListItem';

export default MenuListItem;
