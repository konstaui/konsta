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
     * Range bg color
     *
     * @default 'bg-primary'
     */
    valueBg?: string;
    /**
     * Range thumb bg color in iOS theme
     *
     * @default 'range-thumb:bg-white'
     */
    thumbBgIos?: string;
    /**
     * Range thumb bg color in Material theme
     *
     * @default 'range-thumb:bg-primary'
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
