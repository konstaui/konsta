interface Props {
  /**
   * Component's HTML Element
   *
   * @default 'button'
   */
  component?: string;
  /**
   * Object with Tailwind CSS colors classes
   * */
  colors?: {
    /**
     *
     * @default 'active:bg-primary'
     */
    activeBgIos?: string;
    /**
     *
     * @default ''
     */
    activeBgMaterial?: string;
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
     * @default 'text-white'
     */
    fillTextIos?: string;
    /**
     *
     * @default 'text-md-light-on-primary dark:text-md-dark-on-primary'
     */
    fillTextMaterial?: string;
    /**
     *
     * @default 'active:bg-ios-primary-shade'
     */
    fillActiveBgIos?: string;
    /**
     *
     * @default ''
     */
    fillActiveBgMaterial?: string;
    /**
     *
     * @default 'bg-primary'
     */
    fillBgIos?: string;
    /**
     *
     * @default 'bg-md-light-primary dark:bg-md-dark-primary'
     */
    fillBgMaterial?: string;
    /**
     *
     * @default 'touch-ripple-white dark:touch-ripple-primary'
     */
    fillTouchRipple?: string;
    /**
     *
     * @default 'border-primary'
     */
    outlineBorderIos?: string;
    /**
     *
     * @default 'border-md-light-outline dark:border-md-dark-outline'
     */
    outlineBorderMaterial?: string;
    /**
     *
     * @default 'bg-primary'
     */
    tonalBgIos?: string;
    /**
     *
     * @default 'bg-md-light-secondary-container dark:bg-md-dark-secondary-container'
     */
    tonalBgMaterial?: string;
    /**
     *
     * @default 'text-primary'
     */
    tonalTextIos?: string;
    /**
     *
     * @default 'text-md-light-on-secondary-container dark:text-md-dark-on-secondary-container'
     */
    tonalTextMaterial?: string;
    /**
     *
     * @default 'touch-ripple-primary'
     */
    touchRipple?: string;
    /**
     *
     * @default 'text-black text-opacity-30 dark:text-white dark:text-opacity-30'
     */
    disabledText?: string;
    /**
     *
     * @default 'bg-black bg-opacity-10 dark:bg-white dark:bg-opacity-10'
     */
    disabledBg?: string;
    /**
     *
     * @default 'border-black border-opacity-10 dark:border-white dark:border-opacity-10'
     */
    disabledBorder?: string;
  };
  /**
   * Link's `href` attribute, when specified will also be rendered as `<a>` element
   * */
  href?: string;

  /**
   * Makes button outline. Overwrites `outlineIos` and `outlineMaterial` props
   *
   * @default undefined
   */
  outline?: boolean;

  /**
   * Makes button outline in iOS theme
   *
   * @default undefined
   */
  outlineIos?: boolean;

  /**
   * Makes button outline in Material theme
   *
   * @default undefined
   */
  outlineMaterial?: boolean;

  /**
   * Makes button in clear style (without fill color). Overwrites `clearIos` and `clearMaterial` props
   *
   * @default undefined
   */
  clear?: boolean;

  /**
   * Makes button in clear style (without fill color) in iOS theme
   *
   * @default undefined
   */
  clearIos?: boolean;

  /**
   * Makes button in clear style (without fill color) in Material theme
   *
   * @default undefined
   */
  clearMaterial?: boolean;

  /**
   * Makes button in tonal style (with semitransparent fill color). Overwrites `tonalIos` and `tonalMaterial` props
   *
   * @default undefined
   */
  tonal?: boolean;

  /**
   * Makes button in tonal style (with semitransparent fill color) in iOS theme
   *
   * @default undefined
   */
  tonalIos?: boolean;

  /**
   * Makes button in tonal style (with semitransparent fill color) in Material theme
   *
   * @default undefined
   */
  tonalMaterial?: boolean;

  /**
   * Makes button rounded. Overwrites `roundedIos` and `roundedMaterial` props
   *
   * @default undefined
   */
  rounded?: boolean;

  /**
   * Makes button rounded in iOS theme
   *
   * @default undefined
   */
  roundedIos?: boolean;

  /**
   * Makes button rounded in Material theme
   *
   * @default undefined
   */
  roundedMaterial?: boolean;

  /**
   * Makes button small. Overwrites `smallIos` and `smallMaterial` props
   *
   * @default undefined
   */
  small?: boolean;

  /**
   * Makes button small in iOS theme
   *
   * @default undefined
   */
  smallIos?: boolean;

  /**
   * Makes button small in Material theme
   *
   * @default undefined
   */
  smallMaterial?: boolean;

  /**
   * Makes button large. Overwrites `largeIos` and `largeMaterial` props
   *
   * @default undefined
   */
  large?: boolean;

  /**
   * Makes button large in iOS theme
   *
   * @default undefined
   */
  largeIos?: boolean;

  /**
   * Makes button large in Material theme
   *
   * @default undefined
   */
  largeMaterial?: boolean;

  /**
   * Makes button raised (with shadow). Overwrites `raisedIos` and `raisedMaterial` props
   *
   * @default undefined
   */
  raised?: boolean;

  /**
   * Makes button raised (with shadow) in iOS theme
   *
   * @default undefined
   */
  raisedIos?: boolean;

  /**
   * Makes button raised (with shadow) in Material theme
   *
   * @default undefined
   */
  raisedMaterial?: boolean;

  /**
   * Makes button inline (e.g. `display: inline-flex`)
   *
   * @default false
   */
  inline?: boolean;

  /**
   * Renders segmented button, same as `<SegmentedButton>`
   *
   * @default false
   */
  segmented?: boolean;
  /**
   * Renders segmented strong button, same as `<SegmentedButton strong>`
   *
   * @default false
   */
  segmentedStrong?: boolean;
  /**
   * Renders segmented active button, same as `<SegmentedButton active>`
   *
   * @default false
   */
  segmentedActive?: boolean;

  /**
   * Enables touch ripple effect in Material theme
   *
   * @default true
   */
  touchRipple?: boolean;

  /**
   * Makes button disabled
   *
   * @default false
   */
  disabled?: boolean;
}
