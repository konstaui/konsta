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
     * FAB bg color
     *
     * @default 'bg-primary'
     */
    bg?: string;
    /**
     * FAB pressed bg color
     *
     * @default 'active:bg-ios-primary-shade'
     */
    activeBg?: string;
    /**
     * FAB text color
     *
     * @default 'text-white'
     */
    text?: string;
  };
  /**
   * Fab's link `href` attribute
   */
  href?: string;
  /**
   * Button text (content)
   */
  text?: string | React.ReactNode;
  /**
   * Text position, can be `after` icon or `before` icon
   *
   * @default 'after'
   */
  textPosition?: 'after' | 'before';
  /**
   * Fab's icon
   */
  icon?: React.ReactNode;
  /**
   * Enables touch ripple effect in Material theme
   *
   * @default true
   */
  touchRipple?: boolean;
}
