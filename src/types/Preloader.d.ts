interface Props {
  /**
   * Component's HTML Element
   *
   * @default 'span'
   */
  component?: string | React.ComponentType<any>;
  /**
   * Object with Tailwind CSS colors classes
   * */
  colors?: {
    /**
     *
     * @default 'text-primary'
     */
    iconIos?: string;
    /**
     *
     * @default 'text-md-light-primary dark:text-md-dark-primary'
     */
    iconMaterial?: string;
  };
}
