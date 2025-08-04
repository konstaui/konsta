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
     *
     * @default 'bg-ios-light-glass dark:bg-ios-dark-glass'
     */
    bgIos?: string;
    /**
     *
     * @default 'bg-md-light-surface-3 dark:bg-md-dark-surface-3'
     */
    bgMaterial?: string;
  };

  /**
   * Renders popover "angle"/"corner"
   *
   * @default false
   */
  angle?: boolean;
  /**
   * Additional css class to add on "angle"/"corner" element
   *
   * @default undefined
   */
  angleClassName?: string;

  /**
   * Allows to open/close Popover and set its initial state
   *
   * @default false
   */
  opened?: boolean;
  /**
   * Enables Popover backdrop (dark semi transparent layer behind)
   *
   * @default true
   */
  backdrop?: boolean;
  /**
   * Click handler on backdrop element
   */
  onBackdropClick?: (e: any) => void;
  /**
   * Popover target element. Popover will be positioned around this element
   */
  target?: React.Ref<HTMLElement> | HTMLElement | string;
  /**
   * Virtual target element horizontal offset from left side of the screen. Required without using real target element (`target` prop)
   */
  targetX?: number;
  /**
   * Virtual target element vertical offset from top of the screen. Required without using real target element (`target` prop)
   */
  targetY?: number;
  /**
   * Virtual target element width (in px). Required without using real target element (`target` prop)
   */
  targetWidth?: number;
  /**
   * Virtual target element height (in px). Required without using real target element (`target` prop)
   */
  targetHeight?: number;
}
