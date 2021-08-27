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
     * Button text color
     *
     * @default 'text-primary'
     */
    text?: string;
    /**
     * Outline button border color
     *
     * @default 'border-primary'
     */
    border?: string;
    /**
     * Full button bg color
     *
     * @default 'bg-primary'
     */
    bg?: string;
    /**
     * Clicked fill button bg color
     *
     * @default 'active:bg-primary'
     */
    activeBg?: string;
    /**
     * Clicked fill button bg color in dark theme
     *
     * @default 'active:bg-primary-dark'
     */
    activeBgDark?: string;
    /**
     * Touch ripple color
     *
     * @default 'touch-ripple-primary'
     */
    touchRipple?: string;
  };
  /**
   * Link's `href` attribute, when specified will also be rendered as `<a>` element
   * */
  href?: string;
  /**
   * Makes button outline
   *
   * @default undefined
   */
  outline?: boolean;
  /**
   * Makes button in clear style (without fill color)
   *
   * @default false
   */
  clear?: boolean;
  /**
   * Makes button rounded
   *
   * @default false
   */
  rounded?: boolean;
  /**
   * Makes button small
   *
   * @default false
   */
  small?: boolean;
  /**
   * Makes button large
   *
   * @default false
   */
  large?: boolean;
  /**
   * Makes button raised (with shadow)
   *
   * @default false
   */
  raised?: boolean;
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
}
