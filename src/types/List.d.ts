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
   * Renders dividers (borders) between list items, overwrites `dividersIos` and `dividersMaterial`
   *
   * @default undefined
   */
  dividers?: boolean;
  /**
   * Renders dividers (borders) between list items in iOS theme
   *
   * @default true
   */
  dividersIos?: boolean;
  /**
   * Renders dividers (borders) between list items in Material theme
   *
   * @default false
   */
  dividersMaterial?: boolean;
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
   * Renders list outer borders
   *
   * @default true
   */
  outline?: boolean;
}
