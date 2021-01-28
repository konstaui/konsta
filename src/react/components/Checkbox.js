import React, { useEffect, useRef } from 'react';
import { cls } from '../shared/cls';
import { useTheme } from '../shared/use-theme';
import CheckboxIcon from './icons/CheckboxIcon';

const Checkbox = (props) => {
  const {
    tag = 'label',
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

  const Component = tag;

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

  const c = {
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
  };

  const classes = cls(themeClasses(c.base), className);
  const iconWrapClasses = themeClasses(c.iconWrap, state);
  const iconClasses = themeClasses(c.icon, state);
  const indeterminateIconClasses = themeClasses(c.indeterminateIcon);
  const inputClasses = themeClasses(c.input);

  useEffect(() => {
    if (inputElRef.current) {
      inputElRef.current.indeterminate = !!indeterminate;
    }
  }, [indeterminate]);

  return (
    <Component className={classes} {...attrs}>
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
        className={inputClasses}
      />
      <i className={iconWrapClasses}>
        {indeterminate ? (
          <span className={indeterminateIconClasses} />
        ) : (
          <CheckboxIcon
            ios={ios}
            material={material}
            className={iconClasses}
            fill="#fff"
          />
        )}
      </i>
      {children}
    </Component>
  );
};

export default Checkbox;
