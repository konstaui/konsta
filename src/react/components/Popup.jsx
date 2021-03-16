import React from 'react';
import { cls } from '../shared/cls';
import { useThemeClasses } from '../shared/use-theme-classes';

const Popup = (props) => {
  const {
    component = 'div',
    className,
    size = 'w-screen h-screen md:w-160 md:h-160',
    opened,
    close,
    closeOnBackdropClick = true,

    ios,
    material,

    // Children
    children,

    // Rest
    ...rest
  } = props;

  const state = opened ? 'opened' : 'closed';

  const Component = component;

  const attrs = {
    ...rest,
  };

  const themeClasses = useThemeClasses({ ios, material });

  const c = themeClasses(
    {
      base: {
        common: cls(
          'bg-white dark:bg-black left-1/2 top-1/2 fixed transition-transform transform -translate-x-1/2 duration-400 z-40 md:rounded max-w-full max-h-full overflow-hidden',
          size
        ),
        ios: '',
        material: 'shadow-2xl',
        opened: '-translate-y-1/2',
        closed: 'translate-y-full',
      },
      backdrop: {
        common:
          'fixed z-40 w-full h-full left-0 top-0 bg-black bg-opacity-50 duration-400',
        opened: '',
        closed: 'opacity-0 pointer-events-none',
      },
    },
    className
  );

  const closePopup = () => {
    if (close && closeOnBackdropClick) close(false);
  };

  return (
    <>
      <div className={c.backdrop[state]} onClick={closePopup} />
      <Component className={c.base[state]} {...attrs}>
        {children}
      </Component>
    </>
  );
};

export default Popup;
