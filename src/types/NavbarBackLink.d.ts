interface Props {
  /**
   * Component's HTML Element
   *
   * @default 'a'
   */
  component?: string;
  /**
   * Text content of the back link
   *
   * @default 'Back'
   */
  text?: string | React.ReactNode;
  /**
   * Defines whether to show the link text. When 'auto', it hides link text for Material theme
   *
   * @default false
   */
  showText?: boolean;
  /**
   * Link click handler
   */
  onClick?: (e: any) => void;
}
