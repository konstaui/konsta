interface Props {
  /**
   * Component's HTML Element
   *
   * @default 'div'
   */
  component?: string;
  /**
   * Object with Tailwind CSS colors classes
   * */
  colors?: {
    /**
     * Stepper text (value) color
     *
     * @default 'text-primary'
     */
    text?: string;
    /**
     * Stepper border color
     *
     * @default 'border-primary'
     */
    border?: string;
    /**
     * Stepper button bg color
     *
     * @default 'bg-primary'
     */
    bg?: string;
    /**
     * Outline stepper button pressed/active bg color
     *
     * @default 'active:bg-primary'
     */
    activeBg?: string;
    /**
     * Fill-style stepper button pressed/active bg color
     *
     * @default 'active:bg-primary-dark'
     */
    activeBgDark?: string;
    /**
     * Touch ripple color
     *
     * @default 'touch-ripple-primary'
     */
    touchRipple?: string;
  };
  /**
   * Stepper value
   *
   * @default 0
   */
  // @ts-ignore
  value?: number;
  /**
   * Stepper input default value, in case of uncontrolled component
   */
  defaultValue?: number;
  /**
   * Defines should it render <input> element or not
   *
   * @default false
   */
  input?: boolean;
  /**
   * Input type
   *
   * @default 'text'
   */
  inputType?: string;
  /**
   * Input placeholder
   */
  inputPlaceholder?: string;
  /**
   * Defines whether the stepper input is disabled or not
   *
   * @default false
   */
  inputDisabled?: boolean;
  /**
   * Defines whether the stepper input is read only or not
   *
   * @default false
   */
  inputReadOnly?: boolean;
  /**
   * Disables inner value container between stepper buttons
   *
   * @default false
   */
  buttonsOnly?: boolean;
  /**
   * Makes stepper round
   *
   * @default false
   */
  rounded?: boolean;
  /**
   * Makes stepper small
   *
   * @default false
   */
  small?: boolean;
  /**
   * Makes stepper large
   *
   * @default false
   */
  large?: boolean;
  /**
   * Makes stepper raised (with shadow)
   *
   * @default false
   */
  raised?: boolean;
  /**
   * Makes stepper outline
   *
   * @default false
   */
  outline?: boolean;
  /**
   * Enables touch ripple effect in Material theme
   *
   * @default true
   */
  touchRipple?: boolean;

  /**
   * Stepper input `change` handler
   */
  onChange?: (e: any) => void;
  /**
   * Stepper input `focus` handler
   */
  onFocus?: (e: any) => void;
  /**
   * Stepper input `blur` handler
   */
  onBlur?: (e: any) => void;
  /**
   * Stepper "minus" button click handler
   */
  onMinus?: (e: any) => void;
  /**
   * Stepper "plus" button click handler
   */
  onPlus?: (e: any) => void;
}
