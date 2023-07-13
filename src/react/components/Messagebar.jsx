import React, {
  forwardRef,
  useRef,
  useImperativeHandle,
  useState,
} from 'react';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { MessagebarClasses } from '../../shared/classes/MessagebarClasses.js';
import { MessagebarColors } from '../../shared/colors/MessagebarColors.js';

// import Link from './Link.jsx';
import Toolbar from './Toolbar.jsx';

const Messagebar = forwardRef((props, ref) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,

    id,
    style,
    name,
    placeholder = 'Message',
    value,
    textareaId,
    disabled,
    size,
    sendLink,
    isOutline = true,
    leftIconClassName = '',
    rightIconClassName = '',

    leftIcon,
    rightIcon,

    ios,
    material,

    onInput,
    onChange,
    onFocus,
    onBlur,

    children,
    ...rest
  } = props;

  const elRef = useRef(null);
  const areaElRef = useRef(null);

  useImperativeHandle(ref, () => ({
    el: elRef.current,
    areaElRef: areaElRef.current,
  }));

  const [isFocused, setIsFocused] = useState(false);

  const themeClasses = useThemeClasses({ ios, material });
  const dark = useDarkClasses();

  const colors = MessagebarColors(colorsProp, dark);

  const onFocusInternal = (e) => {
    setIsFocused(true);
    if (onFocus) onFocus(e);
  };

  const onBlurInternal = (e) => {
    setIsFocused(false);
    if (onBlur) onBlur(e);
  };

  const c = themeClasses(
    MessagebarClasses({ ...props }, colors, {
      isFocused,
      leftIconClassName,
      rightIconClassName,
      darkClasses: dark,
    })
  );

  const Component = component;

  const attrs = {
    ...rest,
  };

  return (
    <Component ref={elRef} id={id} style={style} className={c.base} {...attrs}>
      <Toolbar
        colors={{ ...colors, bgMaterial: 'transparent' }}
        outline={!isOutline}
      >
        {leftIcon && <div className={c.leftIcon}>{leftIcon}</div>}
        <div className={c.messagebarArea}>
          <input
            id={textareaId}
            ref={areaElRef}
            type="textarea"
            className={c.messagebarInput}
            placeholder={placeholder}
            disabled={disabled}
            name={name}
            size={size}
            onInput={onInput}
            onChange={onChange}
            onFocus={onFocusInternal}
            onBlur={onBlurInternal}
            value={value}
          />
        </div>
        {rightIcon && <div className={c.rightIcon}>{rightIcon}</div>}
      </Toolbar>
    </Component>
  );
});

Messagebar.displayName = 'Messagebar';
export default Messagebar;
