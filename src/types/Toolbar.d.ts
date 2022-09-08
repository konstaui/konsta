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
     * @default 'bg-ios-light-surface-2 dark:bg-ios-dark-surface-2'
     */
    bgIos?: string;
    /**
     *
     * @default 'bg-md-light-surface-2 dark:bg-md-dark-surface-2'
     */
    bgMaterial?: string;
    /**
     *
     * @default 'bg-primary'
     */
    tabbarHighlightBgIos?: string;
    /**
     *
     * @default 'bg-md-light-primary dark:bg-md-dark-primary'
     */
    tabbarHighlightBgMaterial?: string;
  };

  /**
   * Makes Toolbar background translucent (with `backdrop-filter: blur`) in iOS theme
   *
   * @default true
   */
  translucent?: boolean;
  /**
   * Additional class to add on Toolbar's "background" element
   */
  bgClassName?: string;
  /**
   * Additional class to add on Toolbar's "inner" element
   */
  innerClassName?: string;

  /**
   * Renders outer hairlines (borders). If not specified, will be enabled for iOS theme
   *
   * @default undefined
   */
  outline?: boolean;

  /**
   * Enables tabbar, same as using `<Tabbar>` component
   *
   * @default false
   */
  tabbar?: boolean;
  /**
   * Enables tabbar with labels, same as using `<Tabbar labels>` component
   *
   * @default false
   */
  tabbarLabels?: boolean;

  /**
   * Enables tabbar with icons, same as using `<Tabbar icons>` component
   *
   * @default false
   */
  tabbarIcons?: boolean;

  /**
   * Enables top toolbar, in this case it renders border on shadows on opposite sides
   *
   * @default false
   */

  top?: boolean;
}
