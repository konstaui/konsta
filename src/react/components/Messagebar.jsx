import React, { useRef, useState } from 'react';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { MessagebarClasses } from '../../shared/classes/MessagebarClasses.js';
import { MessagebarColors } from '../../shared/colors/MessagebarColors.js';
import Toolbar from './Toolbar.jsx';
import Glass from './Glass.jsx';

const Messagebar = (props) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,
    id,
    style,
    name,
    placeholder = 'Message',
    value,
    outline = false,
    // eslint-disable-next-line
    leftClassName = '',
    // eslint-disable-next-line
    rightClassName = '',
    textareaId,
    disabled,
    size,

    left,
    right,

    ios,
    material,

    onInput,
    onChange,
    onFocus,

    children,
    ref,

    ...rest
  } = props;

  const elRef = useRef(null);
  const areaElRef = useRef(null);

  const [isFocused, setIsFocused] = useState(false);

  const themeClasses = useThemeClasses({ ios, material });
  const dark = useDarkClasses();

  const colors = MessagebarColors(colorsProp, dark);

  const onFocusInternal = (e) => {
    setIsFocused(true);
    if (onFocus) onFocus(e);
  };

  const c = themeClasses(
    MessagebarClasses(
      { ...props },
      colors,
      {
        isFocused,
      },
      className
    )
  );

  const Component = component;

  const attrs = {
    ...rest,
  };

  return (
    <Component
      ref={(el) => {
        elRef.current = el;
        if (ref && typeof ref === 'function') ref(el);
        else if (ref) ref.current = el;
      }}
      id={id}
      style={style}
      className={c.base}
      {...attrs}
    >
      <Toolbar
        colors={colors}
        outline={outline}
        className={c.toolbar}
        innerClassName={c.toolbarInner}
      >
        {left && <div className={c.left}>{left}</div>}
        <Glass className={c.messagebarArea}>
          <textarea
            id={textareaId}
            ref={areaElRef}
            type="textarea"
            className={c.messagebarInput}
            placeholder={placeholder}
            name={name}
            size={size}
            disabled={disabled}
            onInput={onInput}
            onChange={onChange}
            onFocus={onFocusInternal}
            value={value}
          />
        </Glass>
        {right && <div className={c.right}>{right}</div>}
      </Toolbar>
    </Component>
  );
};

Messagebar.displayName = 'Messagebar';
export default Messagebar;
