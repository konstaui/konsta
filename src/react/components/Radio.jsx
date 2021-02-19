import React from 'react';
import { useTheme } from '../shared/use-theme';
import RadioIcon from './icons/RadioIcon';

const Radio = (props) => {
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

  const { theme, themeClasses } = useTheme({ ios, material });

  const colors = {
    borderIos: 'border-gray-300',
    borderMaterial: 'border-gray-500',
    bgChecked: 'bg-primary',
    borderChecked: 'border-primary',
    ...colorsProp,
  };

  const state =
    checked || (defaultChecked && !onChange) ? 'checked' : 'notChecked';

  const c = themeClasses(
    {
      base: `cursor-pointer inline-block align-middle relative`,
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
        common: `w-3/5 h-3/5`,
        ios: 'text-primary',
        material: `rounded-full ${colors.bgChecked}`,
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
    <Component className={c.base} {...attrs}>
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
          <RadioIcon className={c.icon[state]} />
        ) : (
          <span className={c.icon[state]} />
        )}
      </i>
      {children}
    </Component>
  );
};

export default Radio;
