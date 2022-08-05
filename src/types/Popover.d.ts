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
     * @default 'bg-popover-light dark:bg-popover-dark'
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
   * Renders popover "angle"/"corner", if not specified then it will automatically show "angle"/"corner" if iOS theme is enabled
   *
   */
  angle?: boolean;
  /**
   * Additional css class to add on "angle"/"corner" element
   *
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
