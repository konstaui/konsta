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
     * Toolbar bg color in iOS theme
     *
     * @default 'bg-bars-ios-light dark:bg-bars-ios-dark'
     */
    bgIos?: string;
    /**
     * Toolbar bg color in iOS theme
     *
     * @default 'bg-bars-material-light dark:bg-bars-material-dark'
     */
    bgMaterial?: string;
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
   * Renders outer hairlines (borders) on iOS theme
   *
   * @default true
   */
  hairlines?: boolean;

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
