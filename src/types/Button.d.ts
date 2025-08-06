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
     * @default 'bg-primary active:bg-ios-primary-shade'
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
     * @default 'bg-transparent active:bg-primary/15'
     */
    clearBgIos?: string;
    /**
     *
     * @default 'bg-transparent'
     */
    clearBgMaterial?: string;
    /**
     *
     * @default 'bg-transparent active:bg-primary/15'
     */
    outlineBgIos?: string;
    /**
     *
     * @default 'bg-transparent'
     */
    outlineBgMaterial?: string;
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
     * @default 'text-black'
     */
    segmentedStrongTextIos?: string;
    /**
     *
     * @default ''
     */
    segmentedStrongTextMaterial?: string;
    /**
     *
     * @default 'bg-primary/15 active:bg-primary/25'
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
     * @default 'text-black/30 dark:text-white/30'
     */
    disabledText?: string;
    /**
     *
     * @default 'bg-black/10 dark:bg-white/10'
     */
    disabledBg?: string;
    /**
     *
     * @default 'border-black/10 dark:border-white/10'
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
   * @default false
   */
  outlineIos?: boolean;

  /**
   * Makes button outline in Material theme
   *
   * @default false
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
   * @default false
   */
  clearIos?: boolean;

  /**
   * Makes button in clear style (without fill color) in Material theme
   *
   * @default false
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
   * @default false
   */
  tonalIos?: boolean;

  /**
   * Makes button in tonal style (with semitransparent fill color) in Material theme
   *
   * @default false
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
   * @default false
   */
  roundedIos?: boolean;

  /**
   * Makes button rounded in Material theme
   *
   * @default false
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
   * @default false
   */
  smallIos?: boolean;

  /**
   * Makes button small in Material theme
   *
   * @default false
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
   * @default false
   */
  largeIos?: boolean;

  /**
   * Makes button large in Material theme
   *
   * @default false
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
   * @default false
   */
  raisedIos?: boolean;

  /**
   * Makes button raised (with shadow) in Material theme
   *
   * @default false
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
   * Makes button disabled
   *
   * @default false
   */
  disabled?: boolean;
}
