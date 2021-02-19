import React from 'react';
import { useTheme } from '../shared/use-theme';

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

  const { themeClasses } = useTheme({ ios, material });

  const colors = {
    bg: 'bg-primary',
    ...colorsProp,
  };

  const state =
    checked || (defaultChecked && !onChange) ? 'checked' : 'notChecked';

  const c = themeClasses(
    {
      base: {
        common: `cursor-pointer select-none inline-block align-middle relative duration-300 rounded-full`,
        ios: 'h-8 w-13 p-0.5',
        material: 'w-9 h-3',
        notChecked: {
          ios: 'bg-gray-200',
          material: 'bg-gray-300',
        },
        checked: {
          ios: `${colors.bg}`,
          material: `${colors.bg} bg-opacity-50`,
        },
      },
      inner: {
        ios: 'w-full h-full bg-white rounded-full block duration-300 transform',
        checked: {
          ios: 'scale-0',
        },
      },
      knob: {
        common: 'rounded-full absolute duration-300 transform',
        ios: 'w-7 h-7 shadow left-0.5 top-0.5 bg-white',
        material: 'w-5 h-5 shadow-md left-0 -top-1',
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
