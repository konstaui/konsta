import React, { useEffect, useRef } from 'react';
import { useTheme } from '../shared/use-theme';
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

    // Theme
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

  const { themeClasses } = useTheme({ ios, material });

  const colors = {
    borderIos: 'border-gray-300',
    borderMaterial: 'border-gray-500',
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
      base: {
        initial: `cursor-pointer inline-block align-middle relative`,
      },
      iconWrap: {
        initial: 'flex items-center justify-center',
        ios: 'w-5.5 h-5.5 rounded-full border',
        material: 'w-4.5 h-4.5 rounded-sm border-2',
        notChecked: {
          ios: colors.borderIos,
          material: colors.borderMaterial,
        },
        checked: {
          initial: `${colors.bgChecked} ${colors.borderChecked}`,
        },
      },
      icon: {
        notChecked: 'opacity-0',
        checked: 'opacity-100',
      },
      indeterminateIcon: {
        initial: 'bg-white w-3/4',
        ios: 'h-0.25',
        material: 'h-0.5',
      },
      input: {
        initial: 'hidden',
      },
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
