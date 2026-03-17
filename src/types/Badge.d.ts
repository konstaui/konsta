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
     * Badge bg color
     *
     * @default 'bg-primary'
     */
    bg?: string;
    /**
     * Badge text color
     *
     * @default 'text-white'
     */
    text?: string;
  };
  /**
   * Makes small badge
   */
  small?: boolean;
}
