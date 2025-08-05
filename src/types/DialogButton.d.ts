interface Props {
  /**
   * Component's HTML Element
   *
   * @default 'button'
   */
  component?: string;
  /**
   * DialogButton click handler
   */
  onClick?: (e: any) => void;
  /**
   * Makes button bold in iOS theme and fill in Material theme, overwrites `strongIos` and `strongMaterial`
   *
   * @default false
   */
  strong?: boolean;
  /**
   * Makes button bold in iOS theme
   *
   * @default false
   */
  strongIos?: boolean;
  /**
   * Makes button fill in Material theme
   *
   * @default false
   */
  strongMaterial?: boolean;

  /**
   * Makes button disabled
   *
   * @default false
   */
  disabled?: boolean;
}
