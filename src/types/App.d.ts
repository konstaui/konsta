interface Props {
  /**
   * Component's HTML Element
   *
   * @default 'div'
   */
  component?: string;
  /**
   * App theme. If set to `'parent'` it will look for `ios` or `md` class on root `<html>` element, useful to use with parent framework like Framework7 or Ionic
   *
   * @default 'material'
   */
  theme?: 'ios' | 'material' | 'parent';
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
  materialTouchRipple?: boolean;
  /**
   * Enables touch highlight effect in iOS theme. Allows to globally disable touch highlight for all components
   *
   * @default true
   */
  iosHoverHighlight?: boolean;
  /**
   * Adds `safe-areas` class to the container. Should be enabled if app container is the full screen element to properly handle screen safe areas
   *
   * @default true
   */
  safeAreas?: boolean;
}
