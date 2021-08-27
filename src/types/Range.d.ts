interface Props {
  component?: string;
  colors?: object;

  inputId?: string;
  name?: string;
  value?: any;
  defaultValue?: any;
  readOnly?: boolean;
  disabled?: boolean;
  step?: number;
  min?: number;
  max?: number;
  onChange?: (e: any) => void;
  onFocus?: (e: any) => void;
  onBlur?: (e: any) => void;
}
