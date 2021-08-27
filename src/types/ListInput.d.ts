interface Props {
  component?: string;
  colors?: object;
  label?: string | React.ReactNode;
  inlineLabel?: boolean;
  floatingLabel?: boolean;
  media?: string | React.ReactNode;
  input?: React.ReactNode;
  info?: string | React.ReactNode;
  error?: string | boolean | React.ReactNode;
  clearButton?: boolean;
  dropdown?: boolean;

  hairlines?: boolean;

  inputId?: string;
  inputStyle?: React.CSSProperties;
  inputClassName?: string;

  name?: string;
  value?: any;
  defaultValue?: any;
  type?: string;
  inputMode?: string;
  readOnly?: boolean;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string | number;
  size?: string | number;
  accept?: string | number;
  autoComplete?: string;
  autoCorrect?: string;
  autoCapitalize?: string;
  spellCheck?: string;
  autoFocus?: boolean;
  autoSave?: string;
  max?: string | number;
  min?: string | number;
  step?: string | number;
  maxLength?: string | number;
  minLength?: string | number;
  multiple?: boolean;
  pattern?: string;
  tabIndex?: string | number;

  onInput?: (e: any) => void;
  onChange?: (e: any) => void;
  onFocus?: (e: any) => void;
  onBlur?: (e: any) => void;
  onClear?: (e: any) => void;
}
