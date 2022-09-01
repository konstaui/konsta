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
     * @default 'text-primary'
     */
    navbarTextIos?: string;
    /**
     *
     * @default ''
     */
    navbarTextMaterial?: string;
  };
  /**
   * Should be enabled if Link is in the Navbar
   *
   * @default false
   * */
  navbar?: boolean;
  /**
   * Should be enabled if Link is in the Toolbar
   *
   * @default false
   */
  toolbar?: boolean;
  /**
   * Enable if Link doesn't contain anything except icon
   *
   * @default false
   */
  iconOnly?: boolean;
  /**
   * Should be enabled if Link is in the Tabbar
   *
   * @default false
   */
  tabbar?: boolean;
  /**
   * Highlights Tabbar Link as currently active
   *
   * @default false
   */
  tabbarActive?: boolean;
  /**
   * Click handler
   */
  onClick?: (e: any) => void;
  /**
   * Enables touch ripple effect in Material theme. If not specified, enabled by default if link is `toolbar`, `tabbar` or `navbar`
   *
   * @default undefined
   */
  touchRipple?: boolean;
}
