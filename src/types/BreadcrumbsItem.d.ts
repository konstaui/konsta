interface Props {
  /**
   * Component's HTML Element
   *
   * @default 'div'
   */
  component?: string;
  /**
   * Marks breadcrumb item as active/current (usually last item in breadcrumbs)
   *
   * @default false
   */
  active?: boolean;
  /**
   * Object with Tailwind CSS colors classes
   * */
  colors?: {
    /**
     *
     * @default 'text-black/55 dark:text-white/55'
     */
    textIos?: string;
    /**
     *
     * @default 'text-md-light-on-secondary-container dark:text-md-dark-on-secondary-container'
     */
    textMaterial?: string;
    /**
     *
     * @default ''
     */
    bgIos?: string;
    /**
     *
     * @default 'bg-md-light-secondary-container dark:bg-md-dark-secondary-container'
     */
    bgMaterial?: string;
    /**
     *
     * @default 'text-black dark:text-white'
     */
    textActiveIos?: string;
    /**
     *
     * @default 'text-md-light-on-secondary-container dark:text-md-dark-on-secondary-container'
     */
    textActiveMaterial?: string;
  };
}
