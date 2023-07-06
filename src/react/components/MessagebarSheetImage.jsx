import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { MessagebarClasses } from '../../shared/classes/MessagebarClasses.js';
import { MessagebarColors } from '../../shared/colors/MessagebarColors.js';
import { useTheme } from '../shared/use-theme.js';

import CheckboxIcon from './icons/CheckboxIcon.jsx';

const MessagebarSheetImage = forwardRef((props, ref) => {
  const {
    component = 'label',
    className,
    colors: colorsProp,

    id,
    image,
    checked,

    ios,
    material,

    children,
    ...rest
  } = props;

  const elRef = useRef(null);

  useImperativeHandle(ref, () => ({
    el: elRef.current,
  }));
  const theme = useTheme({ ios, material });
  const themeClasses = useThemeClasses({ ios, material });
  const dark = useDarkClasses();
  const colors = MessagebarColors(colorsProp, dark);

  const c = themeClasses(
    MessagebarClasses({ ...props }, colors, { darkClasses: dark })
  );

  const handleChange = (e) => {
    if (checked && props.onChecked) {
      props.onChecked(e);
    } else if (!checked && props.onUnchecked) {
      props.onUnchecked(e);
    }
    if (props.onChange) {
      props.onChange(e);
    }
  };
  const Component = component;

  const attrs = {
    ...rest,
  };

  return (
    <Component
      id={id}
      className={c.MessagebarSheetImage}
      ref={elRef}
      {...attrs}
    >
      <input type="checkbox" checked={checked} onChange={handleChange} />
      <i className={c.icon}>
        <CheckboxIcon theme={theme} className={c.iconCheckbox} />
      </i>
    </Component>
  );
});

MessagebarSheetImage.displayName = 'MessagebarSheetImage';
export default MessagebarSheetImage;
