import React from 'react';
import List from './List.jsx';

const ListGroup = (props) => {
  const {
    // Children
    children,

    // Rest
    ...rest
  } = props;

  const attrs = {
    ...rest,
  };

  return (
    <li>
      <List nested {...attrs}>
        {children}
      </List>
    </li>
  );
};

export default ListGroup;
