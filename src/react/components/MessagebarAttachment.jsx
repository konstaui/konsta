/* eslint-disable jsx-a11y/alt-text */
import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import { useThemeClasses } from '../shared/use-theme-classes.js';
// import { cls } from '../../shared/cls.js';
// import { useTheme } from '../shared/use-theme.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { MessagebarClasses } from '../../shared/classes/MessagebarClasses.js';
import { MessagebarColors } from '../../shared/colors/MessagebarColors.js';

const MessagebarAttachment = forwardRef((props, ref) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,

    id,
    image,
    deletable,

    onClick,
    onDeleteClick,

    ios,
    material,

    children,
    ...rest
  } = props;

  const elRef = useRef(null);

  useImperativeHandle(ref, () => ({
    el: elRef.current,
  }));

  // const theme = useTheme({ ios, material });
  const themeClasses = useThemeClasses({ ios, material });
  const dark = useDarkClasses();
  const colors = MessagebarColors(colorsProp, dark);

  const handleClick = (e) => {
    if (onClick) onClick(e);
  };
  const handleDeleteClick = (e) => {
    if (onDeleteClick) onDeleteClick(e);
  };
  const c = themeClasses(
    MessagebarClasses({ ...props }, colors, { darkClasses: dark })
  );
  const Component = component;

  const attrs = {
    ...rest,
  };

  return (
    <Component
      id={id}
      className={c.MessagebarAttachmentItem}
      {...attrs}
      ref={elRef}
      onClick={handleClick}
    >
      {image && <img src={image} />}
      {deletable && (
        <span
          className={c.MessagebarAttachmentDelete}
          onClick={handleDeleteClick}
        />
      )}
      {children}
    </Component>
  );
});

MessagebarAttachment.displayName = 'MessagebarAttachment';
export default MessagebarAttachment;
