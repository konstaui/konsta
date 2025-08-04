import React, { useRef } from 'react';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { ActionsClasses } from '../../shared/classes/ActionsClasses.js';

const Actions = (props) => {
  const {
    component = 'div',
    className,

    ios,
    material,

    opened,
    backdrop = true,
    onBackdropClick,

    // Children
    children,

    ref,

    // Rest
    ...rest
  } = props;

  const elRef = useRef(null);

  const state = opened ? 'opened' : 'closed';

  const Component = component;

  const attrs = {
    ...rest,
  };

  const themeClasses = useThemeClasses({ ios, material });

  const c = themeClasses(ActionsClasses(props), className);

  return (
    <>
      {backdrop && (
        <div className={c.backdrop[state]} onClick={onBackdropClick} />
      )}
      <Component
        ref={(el) => {
          elRef.current = el;
          if (ref && typeof ref === 'function') ref(el);
          else if (ref) ref.current = el;
        }}
        className={c.base[state]}
        {...attrs}
      >
        {children}
      </Component>
    </>
  );
};

Actions.displayName = 'Actions';

export default Actions;
