import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { cls } from '../shared/cls.js';
import { positionClass } from '../shared/position-class.js';
import { useTheme } from '../shared/use-theme.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import CheckboxIcon from './icons/CheckboxIcon.jsx';
import { useDarkClasses } from '../shared/use-dark-classes.js';

const Radio = forwardRef((props, ref) => {
  const {
    component = 'label',
    className,
    colors: colorsProp,

    defaultChecked,
    checked,
    name,
    value,
    disabled,
    readOnly,
    onChange,

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

  const Component = component;

  const attrs = {
    ...rest,
  };

  const theme = useTheme({ ios, material });
  const themeClasses = useThemeClasses({ ios, material });
  const dark = useDarkClasses();

  const colors = {
    borderIos: cls(
      'border-black border-opacity-30',
      dark('dark:border-white dark:border-opacity-30')
    ),
    borderMaterial: cls(
      'border-black border-opacity-40',
      dark('dark:border-white dark:border-opacity-40')
    ),
    bgChecked: 'bg-primary',
    borderChecked: 'border-primary',
    ...colorsProp,
  };

  const state =
    checked || (defaultChecked && !onChange) ? 'checked' : 'notChecked';

  const c = themeClasses(
    {
      base: cls(
        `cursor-pointer inline-block align-middle`,
        positionClass('relative', className)
      ),
      iconWrap: {
        common: 'flex items-center justify-center rounded-full',
        ios: 'w-5.5 h-5.5 border',
        material: 'w-5 h-5 border-2',
        notChecked: {
          ios: colors.borderIos,
          material: colors.borderMaterial,
        },
        checked: {
          common: colors.borderChecked,
        },
      },
      icon: {
        ios: 'text-primary',
        material: `w-3/5 h-3/5 rounded-full ${colors.bgChecked}`,
        notChecked: 'opacity-0',
        checked: 'opacity-100',
      },
      indeterminateIcon: {
        common: 'bg-white w-3/4',
        ios: 'h-0.25',
        material: 'h-0.5',
      },
      input: {
        common: 'hidden',
      },
    },
    className
  );

  return (
    <Component ref={elRef} className={c.base} {...attrs}>
      <input
        type="radio"
        name={name}
        value={value}
        disabled={disabled}
        readOnly={readOnly}
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        className={c.input}
      />

      <i className={c.iconWrap[state]}>
        {theme === 'ios' ? (
          <CheckboxIcon className={c.icon[state]} />
        ) : (
          <span className={c.icon[state]} />
        )}
      </i>
      {children}
    </Component>
  );
});

Radio.displayName = 'Radio';

export default Radio;
