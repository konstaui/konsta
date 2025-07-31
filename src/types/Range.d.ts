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
     * @default 'bg-primary'
     */
    valueBgIos?: string;
    /**
     *
     * @default 'bg-md-light-primary dark:bg-md-dark-primary'
     */
    valueBgMaterial?: string;
    /**
     *
     * @default 'bg-white'
     */
    thumbBgIos?: string;
    /**
     *
     * @default 'bg-md-light-primary dark:bg-md-dark-primary'
     */
    thumbBgMaterial?: string;
  };

  /**
   * Range input id attribute
   */
  inputId?: string;
  /**
   * Range input name
   */
  name?: string;
  /**
   * Range value
   */
  value?: any;
  /**
   * Range value, in case of uncontrolled component
   */
  defaultValue?: any;
  /**
   * Defines whether the range input is disabled
   *
   * @default false
   */
  disabled?: boolean;
  /**
   * Defines whether the range input is readonly
   *
   * @default false
   */
  readOnly?: boolean;
  /**
   * Range step
   *
   * @default 1
   */
  step?: number;
  /**
   * Range min value
   *
   * @default 0
   */
  min?: number;
  /**
   * Range max value
   *
   * @default 100
   */
  max?: number;
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
}
