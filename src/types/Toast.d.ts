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
     * @default 'bg-ios-light-glass dark:bg-ios-dark-glass'
     */
    bgIos?: string;
    /**
     *
     * @default 'bg-md-light-surface-5 dark:bg-md-dark-surface-5'
     */
    bgMaterial?: string;
    /**
     *
     * @default ''
     */
    textIos?: string;
    /**
     *
     * @default 'text-md-light-primary dark:text-md-dark-primary'
     */
    textMaterial?: string;
  };
  /**
   * Toast button content
   */
  button?: React.ReactNode;
  /**
   * Toast position (only on wide screens). Can be `left`, `center` or `right`
   *
   * @default 'left'
   */
  position?: 'left' | 'center' | 'right';
  /**
   * Allows to open/close Toast and set its initial state
   *
   * @default false
   */
  opened?: boolean;
}
