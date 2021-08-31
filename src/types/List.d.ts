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
     * List bg color
     *
     * @default 'bg-block-strong-light dark:bg-block-strong-dark'
     */
    bg?: string;
  };
  /**
   * Tailwind CSS margin class
   *
   * @default 'my-8'
   * */
  margin?: string;
  /**
   * Makes list block inset
   *
   * @default false
   */
  inset?: boolean;
  /**
   * Removes hairlines and margins, useful for case nesting list block within other blocks
   *
   * @default false
   */
  nested?: boolean;
  /**
   * Renders list as Menu List (same as `<MenuList>`)
   */
  menuList?: boolean;
  /**
   * Renders outer hairlines (borders)
   *
   * @default true
   */
  hairlines?: boolean;
}
