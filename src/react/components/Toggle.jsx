import React from 'react';
import { cls } from '../shared/cls.js';
import { positionClass } from '../shared/position-class.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';

const Toggle = (props) => {
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

  const Component = component;

  const attrs = {
    ...rest,
  };

  const themeClasses = useThemeClasses({ ios, material });
  const dark = useDarkClasses();

  const colors = {
    bg: 'bg-primary',
    ...colorsProp,
  };

  const state =
    checked || (defaultChecked && !onChange) ? 'checked' : 'notChecked';

  const c = themeClasses(
    {
      base: {
        common: cls(
          positionClass('relative', className),
          `cursor-pointer select-none inline-block align-middle relative duration-300 rounded-full`
        ),
        ios: 'h-8 w-13 p-0.5',
        material: 'w-9 h-3.5',
        notChecked: {
          ios: cls(
            'bg-black bg-opacity-10',
            dark('dark:bg-white dark:bg-opacity-20')
          ),
          material: cls(
            'bg-black bg-opacity-30',
            dark('dark:bg-white dark:bg-opacity-30')
          ),
        },
        checked: {
          ios: `${colors.bg}`,
          material: `${colors.bg} bg-opacity-50`,
        },
      },
      inner: {
        ios: cls(
          'w-full h-full bg-white rounded-full block duration-300 transform',
          dark('dark:bg-opacity-0')
        ),
        notChecked: {},
        checked: {
          ios: 'scale-0',
        },
      },
      knob: {
        common: 'rounded-full absolute duration-300 transform',
        ios: 'w-7 h-7 shadow-ios-toggle left-0.5 top-0.5 bg-white',
        material: 'w-5 h-5 shadow-md left-0 -top-0.75',
        checked: {
          ios: 'translate-x-5',
          material: `${colors.bg} translate-x-4`,
        },
        notChecked: {
          material: 'bg-white',
        },
      },
      input: {
        common: 'hidden',
      },
    },
    className
  );

  return (
    <Component className={c.base[state]} {...attrs}>
      <input
        type="checkbox"
        name={name}
        value={value}
        disabled={disabled}
        readOnly={readOnly}
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        className={c.input}
      />
      <span className={c.inner[state]} />
      <span className={c.knob[state]} />
      {children}
    </Component>
  );
};

export default Toggle;
