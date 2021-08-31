interface Props {
  /**
   * Component's HTML Element
   *
   * @default 'div'
   */
  component?: string;
  /**
   * Object with Tailwind CSS colors classes
   * */
  colors?: {
    /**
     * Outline segmented border color
     *
     * @default 'border-primary'
     */
    border?: string;
    /**
     * Outline segmented divider color
     *
     * @default 'divide-primary'
     */
    divide?: string;
  };

  /**
   * Makes segmented raised
   *
   * @default false
   */
  raised?: boolean;
  /**
   * Makes segmented outline
   *
   * @default false
   */
  outline?: boolean;
  /**
   * Makes segmented strong
   *
   * @default false
   */
  strong?: boolean;
  /**
   * Makes segmented rounded
   *
   * @default false
   */
  rounded?: boolean;

  /**
   * Only for `strong` segmented. Active index of the currently active button. If not specified it will look in child components for button with `active` or `segmenterActive` prop.
   *
   * @default undefined
   */
  activeButtonIndex?: number;
  /**
   * Only for `strong` segmented. Amount of segmented buttons. If not specified it will look on the amount of child components.
   *
   * @default undefined
   */
  childButtonsLength?: number;
}
