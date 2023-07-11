/* eslint-disable no-console */
import React, {
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
  useEffect,
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
    component = 'div',
    className,
    colors: colorsProp,

    placeholder = 'Search',
    value,
    inputId,
    inputStyle,

    disableButton = false,
    disableButtonText = 'Cancel',
    clearButton = true,

    onInput,
    onChange,
    onFocus,
    onBlur,
    onClear,
    onDisable,

    ios,
    material,

    // children,
    ...rest
  } = props;

  const searchElRef = useRef(null);
  const elRef = useRef(null);
  const disableButtonRef = useRef(null);
  const [disableButtonWidth, setDisableButtonWidth] = useState(0);
  const disableTimeout = useRef(null);
  const allowTransition = useRef(false);

  useImperativeHandle(ref, () => ({
    el: elRef.current,
    searchEl: searchElRef.current,
  }));

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

  useEffect(() => {
    if (disableButtonRef.current) {
      setDisableButtonWidth(disableButtonRef.current.offsetWidth);
    }
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        allowTransition.current = true;
      });
    });
  }, []);

  const c = themeClasses(
    SearchbarClasses({ ...props }, colors, { isEnabled, darkClasses: dark })
  );

  const CancelButton =
    theme === 'ios' ? (
      <button
        type="button"
        ref={disableButtonRef}
        style={{
          marginRight: isEnabled ? 0 : `-${disableButtonWidth}px`,
          transitionDuration: !allowTransition.current ? '0ms' : '',
        }}
        className={c.cancelButton}
        onClick={handleDisableButton}
        onPointerDown={(e) => e.preventDefault()}
      >
        {disableButtonText}
      </button>
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
      ref={elRef}
      className={c.base}
      {...attrs}
      onBlurCapture={onGlobalBlur}
      onFocusCapture={onGlobalFocus}
    >
      <div className={c.inner}>
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
      </div>
      {disableButton && CancelButton}
    </Component>
  );
});

Searchbar.displayName = 'Searchbar';

export default Searchbar;
