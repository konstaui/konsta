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
     * Radio border color in iOS theme
     *
     * @default 'border-black border-opacity-30 dark:border-white dark:border-opacity-30'
     */
    borderIos?: string;
    /**
     * Radio border color in Material theme
     *
     * @default 'border-black border-opacity-40 dark:border-white dark:border-opacity-40'
     */
    borderMaterial?: string;
    /**
     * Radio bg color when it is checked
     *
     * @default 'bg-primary'
     */
    bgChecked?: string;
    /**
     * Radio border color when it is checked
     *
     * @default 'border-primary'
     */
    borderChecked?: string;
  };

  /**
   * Defines whether the radio input is checked or not, for the case if it is uncontrolled component
   *
   * @default false
   */
  defaultChecked?: boolean;
  /**
   * Defines whether the radio input is checked or not
   *
   * @default false
   */
  checked?: boolean;
  /**
   * Defines whether the radio input is in indeterminate state or not
   *
   * @default false
   */
  /**
   * Radio input name
   */
  name?: string;
  /**
   * Radio input value
   */
  value?: any;
  /**
   * Defines whether the radio input is disabled
   *
   * @default false
   */
  disabled?: boolean;
  /**
   * Defines whether the radio input is readonly
   *
   * @default false
   */
  readOnly?: boolean;
  /**
   * Event will be triggered when radio state changed
   */
  onChange?: (e: any) => void;
}
