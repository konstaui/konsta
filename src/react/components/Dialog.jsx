import React, { useRef } from 'react';
import { DialogClasses } from '../../shared/classes/DialogClasses.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { DialogColors } from '../../shared/colors/DialogColors.js';
import Glass from './Glass.jsx';

const Dialog = (props) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,

    opened,
    backdrop = true,
    onBackdropClick,

    titleFontSizeIos = 'text-[17px]',
    titleFontSizeMaterial = 'text-[24px]',
    title,
    content,
    buttons,

    ios,
    material,

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
  const dark = useDarkClasses();

  const colors = DialogColors(colorsProp, dark);

  const c = themeClasses(
    DialogClasses(
      {
        ...props,
        titleFontSizeIos,
        titleFontSizeMaterial,
      },
      colors
    ),
    className
  );

  return (
    <>
      {backdrop && (
        <div className={c.backdrop[state]} onClick={onBackdropClick} />
      )}
      <Glass
        component={Component}
        highlight={false}
        ref={(el) => {
          elRef.current = el;
          if (ref && typeof ref === 'function') ref(el);
          else if (ref) ref.current = el;
        }}
        className={c.base[state]}
        {...attrs}
      >
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
      </Glass>
    </>
  );
};

Dialog.displayName = 'Dialog';

export default Dialog;
