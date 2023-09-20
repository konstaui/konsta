interface Props {
  /**
   * Object with Tailwind CSS colors classes
   * */
  colors?: {
    /**
     * Table Cell header text color
     *
     * @default 'text-black/45 dark:text-white/55'
     */
    textHeaderIos?: string;
    /**
     * Table Cell header text color
     *
     * @default 'text-md-light-on-surface-variant dark:text-md-dark-on-surface-variant'
     */
    textHeaderMaterial?: string;
  };
  /**
   * Is located inside the TableHead
   */
  header?: boolean;
}
