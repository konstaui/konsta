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
     * @default 'bg-black'
     */
    bgIos?: string;
    /**
     *
     * @default 'bg-md-light-surface-5 dark:bg-md-dark-surface-5'
     */
    bgMaterial?: string;
    /**
     *
     * @default 'text-white'
     */
    textIos?: string;
    /**
     *
     * @default 'text-md-light-primary dark:text-md-dark-primary'
     */
    textMaterial?: string;
  };
  /**
   * Makes Toast background translucent (with `backdrop-filter: blur`) in iOS theme
   *
   * @default true
   */
  translucent?: boolean;
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
