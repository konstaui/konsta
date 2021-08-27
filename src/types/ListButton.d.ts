interface Props {
  /**
   * Component's HTML Element
   *
   * @default 'li'
   */
  component?: string;
  /**
   * Object with Tailwind CSS colors classes
   * */
  colors?: {
    /**
     * List button text color
     *
     * @default 'text-primary'
     */
    text?: string;
    /**
     * List button pressed bg color
     *
     * @default 'active:bg-primary'
     */
    activeBg?: string;
    /**
     * List button touch ripple color
     *
     * @default 'touch-ripple-primary'
     */
    touchRipple?: string;
  };
  /**
   * Renders button outer hairlines (borders)
   *
   * @default true
   */
  hairlines?: boolean;
  /**
   * Button's link `href` attribute
   */
  href?: string;
  /**
   * Button's link `target` attribute
   */
  target?: string;
  /**
   * Button's `type` attribute (if rendered as `<button>` with `linkComponent: 'button'`)
   *
   * @default undefined
   */
  type?: string;
  /**
   * Button's `type` attribute (if rendered as `<button>` with `linkComponent: 'button'`)
   */
  value?: any;
  /**
   * Button HTML Element
   *
   * @default 'a'
   * */
  linkComponent?: string;
  /**
   * Object with additional props (attributes) to pass to the Link/Button
   */
  linkProps?: any;
}
