import React, { useEffect, useRef } from 'react';
import { useThemeClasses } from '../shared/use-theme-classes';

import CheckboxIcon from './icons/CheckboxIcon';

const Checkbox = (props) => {
  const {
    component = 'label',
    className,
    colors: colorsProp,

    defaultChecked,
    checked,
    indeterminate,
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

  const inputElRef = useRef(null);

  const Component = component;

  const attrs = {
    ...rest,
  };

  const themeClasses = useThemeClasses({ ios, material });

  const colors = {
    borderIos:
      'border-black border-opacity-30 dark:border-white dark:border-opacity-30',
    borderMaterial:
      'border-black border-opacity-40 dark:border-white dark:border-opacity-40',
    bgChecked: 'bg-primary',
    borderChecked: 'border-primary',
    ...colorsProp,
  };

  const state =
    checked || (defaultChecked && !onChange) || indeterminate
      ? 'checked'
      : 'notChecked';

  const c = themeClasses(
    {
      base: `cursor-pointer inline-block align-middle relative`,
      iconWrap: {
        common: 'flex items-center justify-center',
        ios: 'w-5.5 h-5.5 rounded-full border',
        material: 'w-4.5 h-4.5 rounded-sm border-2',
        notChecked: {
          ios: colors.borderIos,
          material: colors.borderMaterial,
        },
        checked: `${colors.bgChecked} ${colors.borderChecked}`,
      },
      icon: {
        notChecked: 'opacity-0',
        checked: 'opacity-100',
      },
      indeterminateIcon: {
        common: 'bg-white w-3/4',
        ios: 'h-0.25',
        material: 'h-0.5',
      },
      input: 'hidden',
    },
    className
  );

  useEffect(() => {
    if (inputElRef.current) {
      inputElRef.current.indeterminate = !!indeterminate;
    }
  }, [indeterminate]);

  return (
    <Component className={c.base} {...attrs}>
      <input
        ref={inputElRef}
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
      <i className={c.iconWrap[state]}>
        {indeterminate ? (
          <span className={c.indeterminateIcon} />
        ) : (
          <CheckboxIcon
            ios={ios}
            material={material}
            className={c.icon[state]}
            fill="#fff"
          />
        )}
      </i>
      {children}
    </Component>
  );
};

export default Checkbox;
