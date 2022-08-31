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
     * Strong block bg color
     *
     * @default 'bg-ios-light-surface-1 dark:bg-ios-dark-surface-1'
     */
    strongBg?: string;
  };
  /**
   * Tailwind CSS margin class
   *
   * @default 'my-8'
   * */
  margin?: string;
  /**
   * Adds extra highlighting and padding block content
   *
   * @default false
   */
  strong?: boolean;
  /**
   * Makes block inset
   *
   * @default false
   */
  inset?: boolean;
  /**
   * Removes hairlines and margins, useful for case nesting block within other blocks
   *
   * @default false
   */
  nested?: boolean;
  /**
   * Renders outer hairlines (borders) when the block is `strong`
   *
   * @default true
   */
  hairlines?: boolean;
}
