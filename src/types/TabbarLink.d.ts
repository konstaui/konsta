interface Props {
  /**
   * Makes this tabbar link active
   *
   * @default false
   */
  active?: boolean;
  /**
   * Component's HTML Element
   *
   * @default 'a'
   */
  component?: string;
  /**
   * Link icon content
   */
  icon?: React.ReactNode;
  /**
   * Link label content
   */
  label?: string | React.ReactNode;
}
