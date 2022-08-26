import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { DialogClasses } from '../../shared/classes/DialogClasses.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { DialogColors } from '../../shared/colors/DialogColors.js';

const Dialog = forwardRef((props, ref) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,

    opened,
    backdrop = true,
    onBackdropClick,
    translucent = true,

    sizeIos = 'w-[16.875rem]',
    sizeMaterial = 'w-[19.5rem]',

    titleFontSizeIos = 'text-[18px]',
    titleFontSizeMaterial = 'text-[24px]',
    title,
    content,
    buttons,

    ios,
    material,

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
  const dark = useDarkClasses();

  const colors = DialogColors(colorsProp, dark);

  const c = themeClasses(
    DialogClasses(
      {
        ...props,
        titleFontSizeIos,
        titleFontSizeMaterial,
        translucent,
        sizeIos,
        sizeMaterial,
      },
      colors,
      className,
      { hasButtons: !!buttons }
    ),
    className
  );

  return (
    <>
      {backdrop && (
        <div className={c.backdrop[state]} onClick={onBackdropClick} />
      )}
      <Component ref={elRef} className={c.base[state]} {...attrs}>
        <div className={c.contentWrap}>
          {title && <div className={c.title}>{title}</div>}
          {(content || children) && (
            <div className={c.content}>
              {content}
              {children}
            </div>
          )}
        </div>

        {buttons && <div className={c.buttons}>{buttons}</div>}
      </Component>
    </>
  );
});

Dialog.displayName = 'Dialog';

export default Dialog;
