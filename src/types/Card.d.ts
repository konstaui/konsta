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
     * Card bg color
     *
     * @default 'bg-block-strong-light dark:bg-block-strong-dark'
     */
    bg?: string;
    /**
     * Card footer text color
     *
     * @default 'text-black dark:text-white'
     */
    footerText?: string;
  };
  /**
   * Tailwind CSS margin class
   *
   * @default 'm-4'
   * */
  margin?: string;
  /**
   * Content of the Card header
   */
  header?: React.ReactNode | string;
  /**
   * Content of the Card footer
   */
  footer?: React.ReactNode | string;
  /**
   * Makes card outline
   */
  outline?: boolean;
}
