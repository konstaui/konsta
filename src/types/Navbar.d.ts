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
     * Navbar bg color in iOS theme
     *
     * @default 'bg-bars-ios-light dark:bg-bars-ios-dark'
     */
    bgIos?: string;
    /**
     * Navbar bg color in iOS theme
     *
     * @default 'bg-bars-material-light dark:bg-bars-material-dark'
     */
    bgMaterial?: string;
    /**
     * Title text color
     *
     * @default 'text-black dark:text-white'
     */
    title?: string;
  };

  /**
   * Additional class to add on Navbar's "background" element
   */
  bgClassName?: string;
  /**
   * Additional class to add on Navbar's "inner" element
   */
  innerClassName?: string;
  /**
   * Additional class to add on Navbar's "left" element
   */
  leftClassName?: string;
  /**
   * Additional class to add on Navbar's "title" element
   */
  titleClassName?: string;
  /**
   * Additional class to add on Navbar's "subtitle" element
   */
  subtitleClassName?: string;
  /**
   * Additional class to add on Navbar's "right" element
   */
  rightClassName?: string;
  /**
   * Additional class to add on Navbar's "subnavbar" element
   */
  subnavbarClassName?: string;
  /**
   * Makes Navbar background translucent (with `backdrop-filter: blur`) in iOS theme
   *
   * @default true
   */
  translucent?: boolean;
  /**
   * Renders outer hairlines (borders) on iOS theme
   *
   * @default true
   */
  hairlines?: boolean;

  /**
   * Content of the Navbar's "left" area
   */
  left?: string | number | React.ReactNode;
  /**
   * Content of the Navbar's "title" area
   */
  title?: string | number | React.ReactNode;
  /**
   * Content of the Navbar's "subtitle" area
   */
  subtitle?: string | number | React.ReactNode;
  /**
   * Content of the Navbar's "right" area
   */
  right?: string | number | React.ReactNode;
  /**
   * Content of the Navbar's "subnavbar" area
   */
  subnavbar?: string | number | React.ReactNode;
}
