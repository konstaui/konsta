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
     * Page bg color in iOS theme
     *
     * @default 'bg-ios-light-page dark:bg-ios-dark-page'
     */
    bgIos?: string;
    /**
     * Page bg color in Material theme
     *
     * @default 'bg-page-material-light dark:bg-page-material-dark'
     */
    bgMaterial?: string;
  };
}
