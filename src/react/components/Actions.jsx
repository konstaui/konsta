import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { ActionsClasses } from '../../shared/classes/ActionsClasses.js';

const Actions = forwardRef((props, ref) => {
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

    // Rest
    ...rest
  } = props;

  const elRef = useRef(null);

  useImperativeHandle(ref, () => ({
    el: elRef.current,
  }));

  const state = opened ? 'opened' : 'closed';

  const Component = component;

  const attrs = {
    ...rest,
  };

  const themeClasses = useThemeClasses({ ios, material });

  const c = themeClasses(ActionsClasses(props, className), className);

  return (
    <>
      {backdrop && (
        <div className={c.backdrop[state]} onClick={onBackdropClick} />
      )}
      <Component ref={elRef} className={c.base[state]} {...attrs}>
        {children}
      </Component>
    </>
  );
});

Actions.displayName = 'Actions';

export default Actions;
