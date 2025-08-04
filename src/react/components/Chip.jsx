import React, { useRef } from 'react';
import { ChipClasses } from '../../shared/classes/ChipClasses.js';
import { ChipColors } from '../../shared/colors/ChipColors.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useTheme } from '../shared/use-theme.js';

import DeleteIcon from './icons/DeleteIcon.jsx';

const Chip = (props) => {
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

    ref,

    // Rest
    ...rest
  } = props;

  const elRef = useRef(null);

  const Component = component;

  const attrs = {
    ...rest,
  };

  const themeClasses = useThemeClasses({ ios, material });
  const theme = useTheme({ ios, material });
  const dark = useDarkClasses();

  const style = outline ? 'outline' : 'fill';

  const colors = ChipColors(colorsProp, dark);

  const c = themeClasses(ChipClasses(props, colors), className);

  return (
    <Component
      ref={(el) => {
        elRef.current = el;
        if (ref && typeof ref === 'function') ref(el);
        else if (ref) ref.current = el;
      }}
      className={c.base[style]}
      {...attrs}
    >
      {media && <div className={c.media}>{media}</div>}
      {children}
      {deleteButton && (
        <div
          className={c.deleteButton}
          role="button"
          tabIndex="0"
          onClick={onDelete}
        >
          <DeleteIcon theme={theme} className="h-4 w-4" />
        </div>
      )}
    </Component>
  );
};

Chip.displayName = 'Chip';

export default Chip;
