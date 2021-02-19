import React from 'react';
import { useTheme } from '../shared/use-theme';
import DeleteIcon from './icons/DeleteIcon';

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

    // Rest
    ...rest
  } = props;

  const Component = component;

  const attrs = {
    ...rest,
  };

  const { themeClasses } = useTheme({ ios, material });

  const style = outline ? 'outline' : 'fill';

  const colors = {
    bg: 'bg-gray-200',
    text: 'text-current',
    border: 'border-gray-200',
    ...colorsProp,
  };

  const c = themeClasses(
    {
      base: {
        common: `${colors.text} text-sm inline-flex items-center justify-center align-middle rounded-full px-3 py-1`,

        fill: `${colors.bg}`,
        outline: `border ${colors.border}`,
      },
      media: '-ml-3 -my-1 mr-1 select-none',
      deleteButton:
        '-mr-2 -my-1 ml-1 h-full flex items-center justify-center w-6 cursor-pointer opacity-50 active:opacity-100 select-none',
    },
    className
  );

  return (
    <Component className={c.base[style]} {...attrs}>
      {media && <div className={c.media}>{media}</div>}
      {children}
      {deleteButton && (
        <div className={c.deleteButton} onClick={onDelete}>
          <DeleteIcon className="h-4 w-4" />
        </div>
      )}
    </Component>
  );
};

export default Chip;
