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
     * Popover bg color
     *
     * @default 'bg-ios-light-surface-3 dark:bg-ios-dark-surface-3'
     */
    bg?: string;
  };
  /**
   * Makes Popover background translucent (with `backdrop-filter: blur`) in iOS theme
   *
   * @default true
   */
  translucent?: boolean;
  /**
   * Renders popover "angle"/"corner"
   *
   * @default true
   */
  angle?: boolean;
  /**
   * Additional css class to add on "angle"/"corner" element
   *
   * @default undefined
   */
  angleClassName?: string;
  /**
   * Tailwind CSS size classes
   *
   * @default 'w-64'
   * */
  size?: string;
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
