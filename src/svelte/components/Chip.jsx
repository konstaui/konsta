import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { ChipClasses } from '../../shared/classes/ChipClasses.js';
import { cls } from '../../shared/cls.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';

import DeleteIcon from './icons/DeleteIcon.jsx';

const Chip = forwardRef((props, ref) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,
    media,
    deleteButton,
    onDelete,

    ios,
    material,

    // Style
    outline,

    // Children
    children,

    // Rest
    ...rest
  } = props;

  const elRef = useRef(null);

  useImperativeHandle(ref, () => ({
    el: elRef.current,
  }));

  const Component = component;

  const attrs = {
    ...rest,
  };

  const themeClasses = useThemeClasses({ ios, material });
  const dark = useDarkClasses();

  const style = outline ? 'outline' : 'fill';

  const colors = {
    bg: cls(`bg-black bg-opacity-10`, dark('dark:bg-white dark:bg-opacity-10')),
    text: 'text-current',
    border: cls(
      `border-black border-opacity-10`,
      dark('dark:border-white dark:border-opacity-10')
    ),
    ...colorsProp,
  };

  const c = themeClasses(ChipClasses(props, colors), className);

  return (
    <Component ref={elRef} className={c.base[style]} {...attrs}>
      {media && <div className={c.media}>{media}</div>}
      {children}
      {deleteButton && (
        <div className={c.deleteButton} onClick={onDelete}>
          <DeleteIcon className="h-4 w-4" />
        </div>
      )}
    </Component>
  );
});

Chip.displayName = 'Chip';

export default Chip;
