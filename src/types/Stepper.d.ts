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
     *
     * @default 'active:bg-primary'
     */
    activeBgIos?: string;
    /**
     *
     * @default ''
     */
    activeBgMaterial?: string;
    /**
     *
     * @default 'text-primary'
     */
    textIos?: string;
    /**
     *
     * @default 'text-md-light-primary dark:text-md-dark-primary'
     */
    textMaterial?: string;
    /**
     *
     * @default 'text-white'
     */
    fillTextIos?: string;
    /**
     *
     * @default 'text-md-light-on-primary dark:text-md-dark-on-primary'
     */
    fillTextMaterial?: string;
    /**
     *
     * @default 'bg-primary'
     */
    fillBgIos?: string;
    /**
     *
     * @default 'bg-md-light-primary dark:bg-md-dark-primary'
     */
    fillBgMaterial?: string;
    /**
     *
     * @default 'active:bg-ios-primary-shade'
     */
    fillActiveBgIos?: string;
    /**
     *
     * @default ''
     */
    fillActiveBgMaterial?: string;
    /**
     *
     * @default 'touch-ripple-white dark:touch-ripple-primary'
     */
    fillTouchRipple?: string;
    /**
     *
     * @default 'border-primary'
     */
    outlineBorderIos?: string;
    /**
     *
     * @default 'border-md-light-outline dark:border-md-dark-outline'
     */
    outlineBorderMaterial?: string;
    /**
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
   * Makes stepper round. Overwrites `roundedIos` and `roundedMaterial`
   *
   * @default undefined
   */
  rounded?: boolean;
  /**
   * Makes stepper round in iOS theme
   *
   * @default undefined
   */
  roundedIos?: boolean;
  /**
   * Makes stepper round in Material theme
   *
   * @default undefined
   */
  roundedMaterial?: boolean;
  /**
   * Makes stepper small. Overwrites `smallIos` and `smallMaterial`
   *
   * @default undefined
   */
  small?: boolean;
  /**
   * Makes stepper small in iOS theme
   *
   * @default undefined
   */
  smallIos?: boolean;
  /**
   * Makes stepper small in Material theme
   *
   * @default undefined
   */
  smallMaterial?: boolean;
  /**
   * Makes stepper large. Overwrites `largeIos` and `largeMaterial`
   *
   * @default undefined
   */
  large?: boolean;
  /**
   * Makes stepper large in iOS theme
   *
   * @default undefined
   */
  largeIos?: boolean;
  /**
   * Makes stepper large in Material theme
   *
   * @default undefined
   */
  largeMaterial?: boolean;
  /**
   * Makes stepper raised (with shadow). Overwrites `raisedIos` and `raisedMaterial`
   *
   * @default undefined
   */
  raised?: boolean;
  /**
   * Makes stepper raised (with shadow) in iOS theme
   *
   * @default undefined
   */
  raisedIos?: boolean;
  /**
   * Makes stepper raised (with shadow) in Material theme
   *
   * @default undefined
   */
  raisedMaterial?: boolean;
  /**
   * Makes stepper outline. Overwrites `outlineIos` and `outlineMaterial`
   *
   * @default undefined
   */
  outline?: boolean;
  /**
   * Makes stepper outline in iOS theme
   *
   * @default undefined
   */
  outlineIos?: boolean;
  /**
   * Makes stepper outline in Material theme
   *
   * @default undefined
   */
  outlineMaterial?: boolean;
  /**
   * Enables touch ripple effect in Material theme
   *
   * @default true
   */
  touchRipple?: boolean;

  /**
   * Stepper input `input` handler
   */
  onInput?: (e: any) => void;
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
