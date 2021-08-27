interface Props {
  component?: string;
  colors?: object;

  value?: number;
  defaultValue?: number;
  input?: boolean;
  inputType?: string;
  inputPlaceholder?: string;
  inputDisabled?: boolean;
  inputReadOnly?: boolean;

  buttonsOnly: ?boolean;

  rounded?: boolean;
  small?: boolean;
  large?: boolean;
  raised?: boolean;
  outlin?: booleane;

  onChange?: (e: any) => void;
  onFocus?: (e: any) => void;
  onBlur?: (e: any) => void;
  onMinus?: (e: any) => void;
  onPlus?: (e: any) => void;
}
