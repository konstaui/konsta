interface Props {
  /**
   * Component's HTML Element
   *
   * @default 'div'
   */
  component?: string | React.ComponentType<any>;
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
     * @default 'shadow-ios-light-glass dark:shadow-ios-dark-glass'
     */
    shadowIos?: string;
  };
  /**
   * Enables iOS "liquid glass" hover highlight effect on pointer move (iOS theme only)
   *
   * @default true
   */
  highlight?: boolean;
}
