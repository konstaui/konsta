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

  const c = themeClasses(
    MessagebarClasses({ ...props }, colors, {
      isFocused,
    })
  );

  const Component = component;

  const attrs = {
    ...rest,
  };

  return (
    <Component ref={elRef} id={id} style={style} className={c.base} {...attrs}>
      <Toolbar colors={colors} outline={outline}>
        {left && <div className={c.left}>{left}</div>}
        <div className={c.messagebarArea}>
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
        </div>
        {right && <div className={c.right}>{right}</div>}
      </Toolbar>
    </Component>
  );
});

Messagebar.displayName = 'Messagebar';
export default Messagebar;
