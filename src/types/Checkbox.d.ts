interface Props {
  /**
   * Component's HTML Element
   *
   * @default 'label'
   */
  component?: string;
  /**
   * Object with Tailwind CSS colors classes
   * */
  colors?: {
    /**
     * Checkbox border color in iOS theme
     *
     * @default 'border-black border-opacity-30 dark:border-white dark:border-opacity-30'
     */
    borderIos?: string;
    /**
     * Checkbox border color in Material theme
     *
     * @default 'border-black border-opacity-40 dark:border-white dark:border-opacity-40'
     */
    borderMaterial?: string;
    /**
     * Bg color when it is checked
     *
     * @default 'bg-primary'
     */
    bgChecked?: string;
    /**
     * Border color when it is checked
     *
     * @default 'border-primary'
     */
    borderChecked?: string;
  };
  /**
   * Defines whether the checkbox input is checked or not, for the case if it is uncontrolled component
   *
   * @default false
   */
  defaultChecked?: boolean;
  /**
   * Defines whether the checkbox input is checked or not
   *
   * @default false
   */
  checked?: boolean;
  /**
   * Defines whether the checkbox input is in indeterminate state or not
   *
   * @default false
   */
  indeterminate?: boolean;
  /**
   * Checkbox input name
   */
  name?: string;
  /**
   * Checkbox input value
   */
  value?: any;
  /**
   * Defines whether the checkbox input is disabled
   *
   * @default false
   */
  disabled?: boolean;
  /**
   * Defines whether the checkbox input is readonly
   *
   * @default false
   */
  readOnly?: boolean;
  /**
   * Event will be triggered when checkbox state changed
   */
  onChange?: (e: any) => void;
}
