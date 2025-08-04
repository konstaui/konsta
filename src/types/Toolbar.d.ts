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
     * @default 'bg-gradient-to-t from-ios-light-surface to-transparent dark:from-ios-dark-surface/50'
     */
    bgIos?: string;
    /**
     *
     * @default 'bg-md-light-surface-2 dark:bg-md-dark-surface-2'
     */
    bgMaterial?: string;
    /**
     *
     * @default ''
     */
    tabbarHighlightBgIos?: string;
    /**
     *
     * @default 'bg-md-light-primary dark:bg-md-dark-primary'
     */
    tabbarHighlightBgMaterial?: string;
  };

  /**
   * Additional class to add on Toolbar's "background" element
   */
  bgClassName?: string;
  /**
   * Additional class to add on Toolbar's "inner" element
   */
  innerClassName?: string;

  /**
   * Material theme only: Renders outer hairlines (borders)
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
