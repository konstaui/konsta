interface Props {
  /**
   * Component's HTML Element
   *
   * @default 'div'
   */
  component?: string;
  /**
   * App theme
   *
   * @default 'material'
   */
  theme?: 'ios' | 'material';
  /**
   * Include `dark:` variants (if dark theme is in use)
   *
   * @default false
   * */
  dark?: boolean;
  /**
   * Enables touch ripple effect in Material theme. Allows to globally disable touch ripple for all components
   *
   * @default true
   */
  touchRipple?: boolean;

  /**
   * Adds `safe-areas` class to the container. Should be enabled if app container is the full screen element to properly handle screen safe areas
   *
   * @default true
   */
  safeAreas?: boolean;
}
