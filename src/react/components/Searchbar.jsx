/* eslint-disable no-console */
import React, {
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { SearchbarClasses } from '../../shared/classes/SearchbarClasses.js';
import { SearchbarColors } from '../../shared/colors/SearchbarColors.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { cls } from '../../shared/cls.js';
import { useTheme } from '../shared/use-theme.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';

import DeleteIcon from './icons/DeleteIcon.jsx';
import SearchIcon from './icons/SearchIcon.jsx';
import BackIcon from './icons/BackIcon.jsx';

const Searchbar = forwardRef((props, ref) => {
  const {
    component = 'label',
    className,
    colors: colorsProp,

    // inputID,
    placeholder = 'Search',
    value,
    inputStyle,
    items,

    // form='true',
    disableButton = false,
    disableButtonText = 'Cancel',
    clearButton,

    onInput,
    onChange,
    onFocus,
    onBlur,
    onClear,
    onCancel,

    ios,
    material,

    // children,
    ...rest
  } = props;

  const searchElRef = useRef(null);
  const elRef = useRef(null);

  useImperativeHandle(ref, () => ({
    el: elRef.current,
    searchEl: searchElRef.current,
  }));

  const [isFocused, setIsFocused] = useState(false);
  const [showCancel, setShowCancel] = useState(false);
  const theme = useTheme({ ios, material });
  const themeClasses = useThemeClasses({ ios, material });
  const dark = useDarkClasses();

  const colors = SearchbarColors(colorsProp, dark);

  const handleInput = (e) => {
    if (onInput) onInput(e);
  };

  const handleChange = (e) => {
    if (onChange) onChange(e);
  };

  const onFocusInternal = (e) => {
    setIsFocused(true);
    setShowCancel(true);
    if (onFocus) onFocus(e);
  };

  const onBlurInternal = (e) => {
    if (!searchElRef.current.value) {
      setIsFocused(false);
      setShowCancel(false);
    }
    if (onBlur) onBlur(e);
  };

  const handleCancel = (e) => {
    e.preventDefault();

    if (onCancel) {
      onCancel();
      setIsFocused(false);
      setShowCancel(false);
    }
    if (searchElRef.current) {
      setIsFocused(false);
      setShowCancel(false);
      // searchElRef.current.value = '';
    }
  };

  const c = themeClasses(
    SearchbarClasses({ ...props }, colors, { isFocused, darkClasses: dark })
  );
  const CancelButton =
    theme === 'ios' ? (
      <div className={c.cancelButton} onClick={handleCancel}>
        {disableButtonText}
      </div>
    ) : (
      <BackIcon
        theme={theme}
        onClick={handleCancel}
        className={cls(c.cancelButton, c.icon)}
      />
    );
  const Component = component;

  const attrs = {
    ...rest,
  };

  return (
    <Component ref={elRef} className={c.base} {...attrs}>
      <div className={c.inner}>
        <span className={c.inputWrap}>
          <span className={c.iconSearch}>
            <SearchIcon
              ios={ios}
              material={material}
              className={c.searchIcon}
            />
          </span>
          <input
            ref={searchElRef}
            className={cls(c.input)}
            style={inputStyle}
            type="text"
            name="search"
            placeholder={placeholder}
            value={value}
            onInput={handleInput}
            onChange={handleChange}
            onFocus={onFocusInternal}
            onBlur={onBlurInternal}
          />
          <span className={c.iconDelete}>
            {value && (
              <DeleteIcon
                theme={theme}
                onClick={onClear}
                className={cls(c.clearButton, c.icon)}
              />
            )}
          </span>
        </span>
      </div>
      {showCancel && !disableButton && CancelButton}
    </Component>
  );
});

Searchbar.displayName = 'Searchbar';

export default Searchbar;
