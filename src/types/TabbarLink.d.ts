interface Props {
  /**
   * Makes this tabbar link active
   *
   * @default false
   */
  active?: boolean;
  /**
   * Object with Tailwind CSS colors classes
   * */
  colors?: {
    /**
     *
     * @default 'text-black dark:text-white'
     */
    textIos?: string;
    /**
     *
     * @default 'text-primary'
     */
    textActiveIos?: string;
    /**
     *
     * @default 'text-md-light-on-surface-variant dark:text-md-dark-on-surface-variant'
     */
    textMaterial?: string;
    /**
     *
     * @default 'text-md-light-on-secondary-container dark:text-md-dark-on-secondary-container'
     */
    textActiveMaterial?: string;
    /**
     *
     * @default ''
     */
    iconBgIos?: string;
    /**
     *
     * @default ''
     */
    iconBgActiveIos?: string;
    /**
     *
     * @default ''
     */
    iconBgMaterial?: string;
    /**
     *
     * @default 'bg-md-light-secondary-container dark:bg-md-dark-secondary-container'
     */
    iconBgActiveMaterial?: string;
  };

  /**
   * Component's HTML Element
   *
   * @default 'a'
   */
  component?: string;
  /**
   * Object with additional props (attributes) to pass to the Link/Button
   */
  linkProps?: any;
  /**
   * Link icon content
   */
  icon?: React.ReactNode;
  /**
   * Link label content
   */
  label?: string | React.ReactNode;
}
