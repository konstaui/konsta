import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import List from './List.jsx';

const ListGroup = forwardRef((props, ref) => {
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
    <li ref={elRef}>
      <List nested {...attrs}>
        {children}
      </List>
    </li>
  );
});

ListGroup.displayName = 'ListGroup';

export default ListGroup;
