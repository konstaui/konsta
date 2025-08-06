import React, { useRef } from 'react';
import List from './List.jsx';
import { useList } from '../shared/use-list.js';
import { ListContext } from '../shared/ListContext.js';

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

  const listContext = useList();

  return (
    <li
      ref={(el) => {
        elRef.current = el;
        if (ref && typeof ref === 'function') ref(el);
        else if (ref) ref.current = el;
      }}
    >
      <List nested {...attrs}>
        <ListContext.Provider
          value={{ nested: false, dividers: listContext?.dividers }}
        >
          {children}
        </ListContext.Provider>
      </List>
    </li>
  );
};

ListGroup.displayName = 'ListGroup';

export default ListGroup;
