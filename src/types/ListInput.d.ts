interface Props {
  /**
   * Component's HTML Element
   *
   * @default 'li'
   */
  component?: string;
  /**
   * Object with Tailwind CSS colors classes
   * */
  colors?: {
    /**
     * Input text color
     *
     * @default 'text-primary'
     */
    labelFocus?: string;
    /**
     * Input error color
     *
     * @default 'text-red-500'
     */
    errorText?: string;
    /**
     * Input errored hairline color
     *
     * @default 'hairline-red-500'
     */
    hairlineError?: string;
    /**
     * Input hairline color
     *
     * @default 'hairline-primary'
     */
    hairlineFocus?: string;
  };
  /**
   * Label content
   */
  label?: string | React.ReactNode;
  /**
   * Renders outline-style input (with border around), overwrites `outlineIos` and `outlineMaterial`
   *
   * @default undefined
   */
  outline?: boolean;
  /**
   * Renders outline-style input (with border around) in iOS theme
   *
   * @default false
   */
  outlineIos?: boolean;
  /**
   * Renders outline-style input (with border around) in Material theme
   *
   * @default false
   */
  outlineMaterial?: boolean;
  /**
   * Makes floating label
   *
   * @default false
   */
  floatingLabel?: boolean;
  /**
   * Content of the list item "media" area (e.g. icon)
   */
  media?: string | React.ReactNode;
  /**
   * Custom input element
   */
  input?: React.ReactNode;
  /**
   * Content of the input "info"
   */
  info?: string | React.ReactNode;
  /**
   * Content of the input "error"
   */
  error?: string | boolean | React.ReactNode;
  /**
   * Adds input clear button
   *
   * @default false
   */
  clearButton?: boolean;
  /**
   * Renders additional dropdown icon (useful to use with `select` inputs)
   *
   * @default false
   */
  dropdown?: boolean;
  /**
   * Input id attribute
   */
  inputId?: string;
  /**
   * Additional input classes
   */
  inputStyle?: React.CSSProperties;
  /**
   * Additional input styles
   */
  inputClassName?: string;

  /**
   * Input name
   */
  name?: string;
  /**
   * Input value
   */
  value?: any;
  /**
   * Input value, in case of uncontrolled component
   */
  defaultValue?: any;
  /**
   * Input type
   *
   * @default 'text'
   */
  type?: string;
  /**
   * Value of input's native "inputmode" attribute
   */
  inputMode?: string;
  /**
   * Marks input as readonly
   */
  readOnly?: boolean;
  /**
   * Marks input as required
   */
  required?: boolean;
  /**
   * Marks input as disabled
   */
  disabled?: boolean;
  /**
   * Input placeholder
   */
  placeholder?: string | number;
  /**
   * Value of input's native "size" attribute
   */
  size?: string | number;
  /**
   * Value of input's native "accept" attribute
   */
  accept?: string | number;
  /**
   * Value of input's native "autoComplete" attribute
   */
  autoComplete?: string;
  /**
   * Value of input's native "autocorrect" attribute
   */
  autoCorrect?: string;
  /**
   * Value of input's native "autocapitalize" attribute
   */
  autoCapitalize?: string;
  /**
   * Value of input's native "spellcheck" attribute
   */
  spellCheck?: string;
  /**
   * Value of input's native "autofocus" attribute
   */
  autoFocus?: boolean;
  /**
   * Value of input's native "autosave" attribute
   */
  autoSave?: string;
  /**
   * Value of input's native "max" attribute
   */
  max?: string | number;
  /**
   * Value of input's native "min" attribute
   */
  min?: string | number;
  /**
   * Value of input's native "step" attribute
   */
  step?: string | number;
  /**
   * Value of input's native "maxlength" attribute
   */
  maxLength?: string | number;
  /**
   * Value of input's native "minlength" attribute
   */
  minLength?: string | number;
  /**
   * Value of input's native "multiple" attribute
   */
  multiple?: boolean;
  /**
   * Value of input's native "pattern" attribute
   */
  pattern?: string;
  /**
   * Value of input's native "tabindex" attribute
   */
  tabIndex?: string | number;
  /**
   * `input` event handler
   */
  onInput?: (e: any) => void;
  /**
   * `change` event handler
   */
  onChange?: (e: any) => void;
  /**
   * `focus` event handler
   */
  onFocus?: (e: any) => void;
  /**
   * `blur` event handler
   */
  onBlur?: (e: any) => void;
  /**
   * `clear` event handler
   */
  onClear?: (e: any) => void;
}
