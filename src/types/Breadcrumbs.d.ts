interface Props {
  /**
   * Component's HTML Element
   *
   * @default 'div'
   */
  component?: string | React.ComponentType<any>;
  /**
   * Font size in iOS theme
   *
   * @default 'text-[17px]'
   */
  fontSizeIos?: string;
  /**
   * Font size in Material theme
   *
   * @default 'text-[14px]'
   */
  fontSizeMaterial?: string;
}
