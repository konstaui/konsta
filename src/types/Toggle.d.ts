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
     * @default 'bg-ios-light-surface-1-shade dark:bg-ios-dark-surface-1-tint'
     */
    bgIos?: string;
    /**
     *
     * @default 'bg-primary'
     */
    checkedBgIos?: string;
    /**
     *
     * @default 'bg-white'
     */
    thumbBgIos?: string;
    /**
     *
     * @default 'bg-white'
     */
    checkedThumbBgIos?: string;
    /**
     *
     * @default 'bg-md-light-surface-variant dark:bg-md-dark-surface-variant'
     */
    bgMaterial?: string;
    /**
     *
     * @default 'bg-md-light-primary dark:bg-md-dark-primary'
     */
    checkedBgMaterial?: string;
    /**
     *
     * @default 'border-md-light-outline dark:border-md-dark-outline'
     */
    borderMaterial?: string;
    /**
     *
     * @default 'border-md-light-primary dark:border-md-dark-primary'
     */
    checkedBorderMaterial?: string;
    /**
     *
     * @default 'bg-md-light-outline dark:bg-md-dark-outline'
     */
    thumbBgMaterial?: string;
    /**
     *
     * @default 'bg-md-light-on-primary dark:bg-md-dark-on-primary'
     */
    checkedThumbBgMaterial?: string;
  };

  /**
   * Defines whether the toggle input is checked or not, for the case if it is uncontrolled component
   *
   * @default false
   */
  defaultChecked?: boolean;
  /**
   * Defines whether the toggle input is checked or not
   *
   * @default false
   */
  checked?: boolean;
  /**
   * Toggle input name
   */
  name?: string;
  /**
   * Toggle input value
   * */
  value?: any;
  /**
   * Defines whether the toggle input is disabled or not
   *
   * @default false
   */
  disabled?: boolean;
  /**
   * Defines whether the toggle input is readonly or not
   *
   * @default false
   */
  readOnly?: boolean;

  /**
   * Toggle input `change` event handler
   */
  onChange?: (e: any) => void;
}
