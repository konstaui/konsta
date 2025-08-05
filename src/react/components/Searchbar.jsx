/* eslint-disable no-console */
import React, { useRef, useState, useEffect } from 'react';
import { SearchbarClasses } from '../../shared/classes/SearchbarClasses.js';
import { SearchbarColors } from '../../shared/colors/SearchbarColors.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { cls } from '../../shared/cls.js';
import { useTheme } from '../shared/use-theme.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';

import DeleteIcon from './icons/DeleteIcon.jsx';
import SearchIcon from './icons/SearchIcon.jsx';
import BackIcon from './icons/BackIcon.jsx';
import SearchDisableIcon from './icons/SearchDisableIcon.jsx';

import Glass from './Glass.jsx';

const Searchbar = (props) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,
    placeholder = 'Search',
    value,
    inputId,
    inputStyle,

    disableButton = false,
    clearButton = true,

    onInput,
    onChange,
    onFocus,
    onBlur,
    onClear,
    onDisable,

    ios,
    material,

    ref,

    // children,
    ...rest
  } = props;

  const searchElRef = useRef(null);
  const elRef = useRef(null);
  const disableTimeout = useRef(null);

  const [isEnabled, setIsEnabled] = useState(false);
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

  const handleFocus = (e) => {
    setIsEnabled(true);
    if (onFocus) onFocus(e);
  };

  const handleBlur = (e) => {
    if (onBlur) onBlur(e);
  };

  const onGlobalBlur = () => {
    if (!value) {
      disableTimeout.current = setTimeout(() => {
        setIsEnabled(false);
      });
    }
  };
  const onGlobalFocus = () => {
    clearTimeout(disableTimeout.current);
  };

  const handleDisableButton = (e) => {
    e.preventDefault();
    setIsEnabled(false);
    if (searchElRef.current) {
      searchElRef.current.blur();
    }
    if (onDisable) onDisable();
    if (onClear) onClear();
  };

  const c = themeClasses(
    SearchbarClasses({ ...props }, colors, { isEnabled, darkClasses: dark })
  );

  const CancelButton =
    theme === 'ios' ? (
      <Glass
        component="button"
        type="button"
        style={{
          marginRight: isEnabled ? 0 : `-${48 + 16}px`,
          marginLeft: isEnabled ? '16px' : 0,
        }}
        className={c.cancelButton}
        onClick={handleDisableButton}
        onPointerDown={(e) => e.preventDefault()}
      >
        <SearchDisableIcon />
      </Glass>
    ) : (
      <BackIcon
        theme={theme}
        onClick={handleDisableButton}
        className={cls(c.cancelButton)}
        onPointerDown={(e) => e.preventDefault()}
      />
    );
  const Component = component;

  const attrs = {
    ...rest,
  };

  return (
    <Component
      ref={(el) => {
        elRef.current = el;
        if (ref && typeof ref === 'function') ref(el);
        else if (ref) ref.current = el;
      }}
      className={c.base}
      {...attrs}
      onBlurCapture={onGlobalBlur}
      onFocusCapture={onGlobalFocus}
    >
      <Glass className={c.inner}>
        <span className={c.searchIconWrap}>
          <SearchIcon ios={ios} material={material} className={c.searchIcon} />
        </span>
        <input
          id={inputId}
          ref={searchElRef}
          className={cls(c.input)}
          style={inputStyle}
          type="text"
          name="search"
          placeholder={placeholder}
          value={value}
          onInput={handleInput}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {value && clearButton && (
          <button className={c.clearButton} onClick={onClear} type="button">
            <DeleteIcon theme={theme} className={c.deleteIcon} />
          </button>
        )}
      </Glass>
      {disableButton && CancelButton}
    </Component>
  );
};

Searchbar.displayName = 'Searchbar';

export default Searchbar;
