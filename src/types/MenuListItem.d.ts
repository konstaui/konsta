interface Props {
  /**
   * Makes menu list item highlighted (active)
   *
   * @default false
   */
  active?: boolean;
  /**
   * Menu list item link's `href` attribute
   */
  href?: string | boolean;
  /**
   * Content of the media area (e.g. icon)
   */
  media?: React.ReactNode;
  /**
   * Content of the menu list item "subtitle" area
   */
  subtitle?: string | number | React.ReactNode;
}
