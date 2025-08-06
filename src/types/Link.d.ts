interface Props {
  /**
   * Component's HTML Element
   *
   * @default 'a'
   */
  component?: string;
  /**
   * Object with Tailwind CSS colors classes
   * */
  colors?: {
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
     * @default ''
     */
    navbarTextIos?: string;
    /**
     *
     * @default ''
     */
    navbarTextMaterial?: string;
    /**
     *
     * @default ''
     */
    toolbarTextIos?: string;
    /**
     *
     * @default 'text-md-light-primary dark:text-md-dark-primary'
     */
    toolbarTextMaterial?: string;
  };

  /**
   * Enable if Link doesn't contain anything except icon
   *
   * @default false
   */
  iconOnly?: boolean;

  /**
   * Highlights Tabbar Link as currently active
   *
   * @default false
   */
  tabbarActive?: boolean;
  /**
   * Object with additional props (attributes) to pass to the Link/Button
   */
  linkProps?: any;
  /**
   * Click handler
   */
  onClick?: (e: any) => void;
}
