interface Props {
  /**
   * Component's HTML Element
   *
   * @default 'div'
   */
  component?: string;

  /**
   * Makes block header inset, overwrites `insetIos` and `insetMaterial`
   *
   * @default undefined
   */
  inset?: boolean;

  /**
   * Makes block header inset in iOS theme
   *
   * @default undefined
   */
  insetIos?: boolean;

  /**
   * Makes block header inset in Material theme
   *
   * @default undefined
   */
  insetMaterial?: boolean;
}
