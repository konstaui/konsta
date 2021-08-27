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
     * Chip bg color
     *
     * @default 'bg-black bg-opacity-10 dark:bg-white dark:bg-opacity-10'
     */
    bg?: string;
    /**
     * Chip text color
     *
     * @default 'text-current'
     */
    text?: string;
    /**
     * Chip border color
     *
     * @default 'border-black border-opacity-10 dark:border-white dark:border-opacity-10'
     */
    border?: string;
  };
  /**
   * Content of the chip media area (e.g. icon)
   */
  media?: React.ReactNode;
  /**
   * Defines whether the Chip has additional "delete" button or not
   *
   * @default false
   */
  deleteButton?: boolean;
  /**
   * Makes chip outline
   *
   * @default false
   */
  outline?: boolean;
  /**
   * Event will be triggered on Chip delete button click
   */
  onDelete?: (e: any) => void;
}
