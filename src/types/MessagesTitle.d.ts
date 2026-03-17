interface Props {
  /**
   * Component's HTML Element
   *
   * @default 'div'
   */
  component?: string | React.ComponentType<any>;
  colors?: {
    /**
     *
     * @default 'text-md-light-on-surface-variant dark:text-md-dark-on-surface-variant'
     */
    titleMd?: string;
  };
}
