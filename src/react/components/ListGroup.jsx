import React, { useRef } from 'react';
import List from './List.jsx';

const ListGroup = (props) => {
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
    <li
      ref={(el) => {
        elRef.current = el;
        if (ref && typeof ref === 'function') ref(el);
        else if (ref) ref.current = el;
      }}
    >
      <List nested {...attrs}>
        {children}
      </List>
    </li>
  );
};

ListGroup.displayName = 'ListGroup';

export default ListGroup;
