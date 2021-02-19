import React from 'react';
import ListItem from './ListItem';

const MenuListItem = (props) => {
  const {
    active,

    href,

    // Children
    children,

    // Rest
    ...rest
  } = props;

  const attrs = {
    ...rest,
  };

  return (
    <ListItem
      menuListItem
      menuListItemActive={active}
      href={href || false}
      {...attrs}
    >
      {children}
    </ListItem>
  );
};

export default MenuListItem;
