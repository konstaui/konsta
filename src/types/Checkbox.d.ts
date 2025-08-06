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
     *
     * @default 'border-black/30 dark:border-white/30'
     */
    borderIos?: string;
    /**
     *
     * @default 'border-md-light-outline dark:border-md-dark-outline'
     */
    borderMaterial?: string;
    /**
     *
     * @default 'bg-primary'
     */
    bgCheckedIos?: string;
    /**
     *
     * @default 'bg-md-light-primary dark:bg-md-dark-primary'
     */
    bgCheckedMaterial?: string;
    /**
     *
     * @default 'border-primary'
     */
    borderCheckedIos?: string;
    /**
     *
     * @default 'border-md-light-primary dark:border-md-dark-primary'
     */
    borderCheckedMaterial?: string;
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
