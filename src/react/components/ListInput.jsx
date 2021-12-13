import React, {
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { cls } from '../shared/cls.js';
import { useTheme } from '../shared/use-theme.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';

import DeleteIcon from './icons/DeleteIcon.jsx';
import DropdownIcon from './icons/DropdownIcon.jsx';
import ListItem from './ListItem.jsx';
import { useDarkClasses } from '../shared/use-dark-classes.js';

const ListInput = forwardRef((props, ref) => {
  const {
    component = 'li',
    className,
    colors: colorsProp,

    label,
    inlineLabel,
    floatingLabel,
    media,
    input, // for custom input
    info, // string
    error, // string or bool
    clearButton,
    dropdown,

    hairlines = true,

    // input props
    inputId,
    inputStyle,
    inputClassName = '',

    name,
    value,
    defaultValue,
    type = 'text',
    inputMode,
    readOnly,
    required,
    disabled,
    placeholder,
    size,
    accept,
    autoComplete,
    autoCorrect,
    autoCapitalize,
    spellCheck,
    autoFocus,
    autoSave,
    max,
    min,
    step,
    maxLength,
    minLength,
    multiple,
    pattern,
    tabIndex,

    onInput,
    onChange,
    onFocus,
    onBlur,
    onClear,

    ios,
    material,

    children,
    ...rest
  } = props;

  const inputElRef = useRef(null);
  const elRef = useRef(null);

  useImperativeHandle(ref, () => ({
    el: elRef.current,
    inputEl: inputElRef.current,
  }));

  const [isFocused, setIsFocused] = useState(false);

  const theme = useTheme({ ios, material });
  const themeClasses = useThemeClasses({ ios, material });
  const dark = useDarkClasses();

  const colors = {
    labelFocus: 'text-primary',
    errorText: 'text-red-500',
    hairlineError: 'hairline-red-500',
    hairlineFocus: 'hairline-primary',
    ...colorsProp,
  };

  const labelStyle =
    !label || inlineLabel
      ? 'inline'
      : label && floatingLabel
      ? 'floating'
      : 'stacked';
  const labelStyleIsInline = labelStyle === 'inline' ? 'inline' : 'notInline';
  const labelStyleIsFloating =
    labelStyle === 'floating' ? 'floating' : 'notFloating';

  const getDomValue = () => {
    if (!inputElRef.current) return undefined;
    return inputElRef.current.value;
  };

  const isInputHasValue = () => {
    const domValue = getDomValue();
    return typeof value === 'undefined'
      ? domValue || domValue === 0
      : value || value === 0;
  };
  const isFloatingTransformed =
    label && floatingLabel && !isInputHasValue() && !isFocused;

  const getLabelColor = (force) => {
    if (labelStyle === 'inline' && !force) return '';
    if (error) return colors.errorText;
    if (isFocused && theme === 'material') return colors.labelFocus;
    if (labelStyle === 'floating') return 'opacity-50';

    return '';
  };

  const getHairlineColor = () => {
    if (error) return colors.hairlineError;
    if (isFocused) return colors.hairlineFocus;
    return '';
  };

  const onFocusInternal = (e) => {
    setIsFocused(true);
    if (onFocus) onFocus(e);
  };
  const onBlurInternal = (e) => {
    setIsFocused(false);
    if (onBlur) onBlur(e);
  };

  const c = themeClasses({
    base: ``,
    itemContent: '',
    inner: {
      common: '',
      material: 'hairline-b-none',
      inline: {
        common: 'flex items-center',
      },
      stacked: '',
      floating: 'overflow-hidden',
    },
    label: {
      common: `text-xs ${getLabelColor()}`,
      inline: {
        material: 'duration-200',
      },
      stacked: {
        common: 'duration-200',
        material: '-mt-1',
      },
      floating: {
        common: cls(
          `pointer-events-none duration-200 transform origin-left`,
          isFloatingTransformed && 'scale-133'
        ),
        ios: isFloatingTransformed ? 'translate-y-7.5' : '',
        material: `-mt-1 ${isFloatingTransformed ? 'translate-y-5' : ''}`,
      },
    },
    inputWrap: {
      common: 'relative',
      ios: '-mb-2.5',
      material: hairlines
        ? `hairline-b hairline-duration-200 ${getHairlineColor()} ${
            isFocused || error ? 'hairline-b-scale' : ''
          }`
        : '',
      inline: {
        common: `shrink-10 w-full`,
        ios: '-mt-2.5',
        material: `-my-1`,
      },
      stacked: {
        material: '-mb-1',
      },
      floating: {
        material: '-mb-1',
      },
    },
    media: {
      inline: '',
      notInline: {
        material: 'self-end',
      },
    },
    titleWrap: {
      material: `duration-200 ${getLabelColor(true)}`,
      inline: `w-4/12 shrink-0 mr-2`,
      notInline: '',
    },
    input: {
      common: `block text-base appearance-none w-full focus:outline-none bg-transparent ${inputClassName}`,
      ios: 'h-11',
      material: 'h-9',
      notFloating: cls(
        'placeholder-black placeholder-opacity-30',
        dark('dark:placeholder-white dark:placeholder-opacity-30'),
        type === 'textarea' && 'py-3'
      ),

      floating: isFloatingTransformed
        ? 'placeholder-transparent'
        : cls(
            `placeholder-black placeholder-opacity-30`,
            dark('dark:placeholder-white dark:placeholder-opacity-30')
          ),
    },
    errorInfo: {
      common: 'text-xs relative z-10',
      inline: 'mb-2',
      notInline: {
        ios: 'mt-1',
        material: 'mt-2',
      },
    },
    error: colors.errorText,
    info: 'opacity-50',
    clearButton: {
      common:
        'absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer opacity-45 active:opacity-30',
      ios: 'w-3.5 h-3.5',
      material: 'w-4.5 h-4.5',
    },
    dropdown:
      'absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none opacity-50',
  });

  const attrs = {
    ...rest,
  };

  const createInput = () => {
    if (input) return input;
    const InputComponent =
      type === 'select' || type === 'textarea' ? type : 'input';
    const needsType = InputComponent === 'input';
    return (
      <InputComponent
        id={inputId}
        ref={inputElRef}
        className={c.input[labelStyleIsFloating]}
        style={inputStyle}
        name={name}
        type={needsType ? type : undefined}
        placeholder={placeholder}
        inputMode={inputMode}
        size={size}
        accept={accept}
        autoComplete={autoComplete}
        autoCorrect={autoCorrect}
        autoCapitalize={autoCapitalize}
        spellCheck={spellCheck}
        autoFocus={autoFocus}
        autoSave={autoSave}
        disabled={disabled}
        max={max}
        maxLength={maxLength}
        min={min}
        minLength={minLength}
        step={step}
        multiple={multiple}
        readOnly={readOnly}
        required={required}
        pattern={pattern}
        tabIndex={tabIndex}
        value={value}
        defaultValue={defaultValue}
        onInput={onInput}
        onChange={onChange}
        onFocus={onFocusInternal}
        onBlur={onBlurInternal}
      >
        {type === 'select' ? children : null}
      </InputComponent>
    );
  };
  const errorInfoContent = (
    <>
      {error && error !== true && (
        <div className={cls(c.errorInfo[labelStyleIsInline], c.error)}>
          {error}
        </div>
      )}
      {info && !error && (
        <div className={cls(c.errorInfo[labelStyleIsInline], c.info)}>
          {info}
        </div>
      )}
    </>
  );

  const innerChildren = (
    <>
      {labelStyle !== 'inline' && label && (
        <div className={c.label[labelStyle]}>{label}</div>
      )}
      <div className={c.inputWrap[labelStyle]}>
        {createInput()}
        {clearButton && (
          <DeleteIcon onClick={onClear} className={c.clearButton} />
        )}
        {dropdown && <DropdownIcon className={c.dropdown} />}
        {labelStyle === 'inline' && errorInfoContent}
      </div>
      {labelStyle !== 'inline' && errorInfoContent}
    </>
  );

  return (
    <ListItem
      ref={elRef}
      component={component}
      media={media}
      className={c.base}
      title={labelStyle === 'inline' ? label : null}
      mediaClassName={c.media[labelStyleIsInline]}
      innerClassName={c.inner[labelStyle]}
      contentClassName={c.itemContent}
      titleWrapClassName={c.titleWrap[labelStyleIsInline]}
      innerChildren={innerChildren}
      {...attrs}
    >
      {type !== 'select' ? children : null}
    </ListItem>
  );
});

ListInput.displayName = 'ListInput';

export default ListInput;
