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
     * Checked toggle bg color
     *
     * @default 'bg-primary'
     */
    bg?: string;

    /**
     * Checked toggle bg color in dark theme
     *
     * @default 'dark:bg-primary'
     */
    darkBg: 'dark:bg-primary';
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
   * Enables touch ripple effect in Material theme
   *
   * @default true
   */
  touchRipple?: boolean;
  /**
   * Toggle input `change` event handler
   */
  onChange?: (e: any) => void;
}
