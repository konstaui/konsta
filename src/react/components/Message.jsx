/* eslint-disable jsx-a11y/alt-text */
import React, {
  useRef,
  // useState,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { cls } from '../../shared/cls.js';
// import { useTheme } from '../shared/use-theme.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { MessageClasses } from '../../shared/classes/MessageClasses.js';
import { MessageColors } from '../../shared/colors/MessageColors.js';

const Message = forwardRef((props, ref) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,

    id,
    text,
    name,
    type = 'sent',
    header,
    footer,
    textHeader,
    textFooter,
    avatar,

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
  const colors = MessageColors(colorsProp, dark);

  const c = themeClasses(MessageClasses({ ...props }, colors));
  const Component = component;

  const attrs = {
    ...rest,
  };

  const classes = cls(className, c.message, {
    [c.messageSent]: type === 'sent',
    [c.messageReceived]: type === 'received',
  });

  return (
    <Component id={id} ref={elRef} className={classes} {...attrs}>
      {avatar && <div className={c.messageAvatar}>{avatar}</div>}
      <div className={c.messageContent}>
        {name && <div className={c.messageName}>{name}</div>}
        {header && <div className={c.messageHeader}>{header}</div>}
        <div className={c.messageBubble}>
          {textHeader && (
            <div className={c.messageTextHeader}>{textHeader}</div>
          )}
          {text && <div className={c.messageText}>{text}</div>}
          {textFooter && (
            <div className={c.messageTextFooter}>{textFooter}</div>
          )}
        </div>
        {footer && <div className={c.messageFooter}>{footer}</div>}
      </div>
    </Component>
  );
});

Message.displayName = 'Message';
export default Message;
