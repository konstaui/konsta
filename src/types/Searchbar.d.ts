interface Props {
  /**
   * Component's HTML Element
   *
   *  @default 'div'
   */
  component?: string;
  /**
   * Object with Tailwind CSS colors classes
   * */
  colors?: {
    /**
     *
     * @default ''
     */
    bgIos?: string;
    /**
     *
     * @default 'bg-md-light-secondary-container dark:bg-md-dark-secondary-container'
     */
    bgMaterial?: string;
    /**
     *
     * @default 'placeholder-md-light-on-surface-variant dark:placeholder-md-dark-on-surface-variant'
     */
    placeholderMaterial?: string;
    /**
     *
     * @default ''
     */
    labelTextIos?: string;
  };
   /**
   * Searchbar placeholder
   *
   * @default 'Search'
   */
   placeholder?: string | number;
  /**
   * Searchbar value
   */
  value?: any;
   /**
   * Input id attribute
   */
   inputId?: string;
    /**
   * Additional input classes
   */
  inputStyle?: React.CSSProperties;
  /**
   * Adds button for cancel search and set its initial state
   *
   * @default false
   */
  disableButton?: boolean;
  /**
   *
   * @default 'Cancel'
   */
  disableButtonText?: string;
   /**
   * Adds input clear button
   *
   * @default true
   */
   clearButton?: boolean;
   /**
   * `input` event handler
   */
  onInput?: (e: any) => void;
  /**
   * `change` event handler
   */
  onChange?: (e: any) => void;
  /**
   * `focus` event handler
   */
  onFocus?: (e: any) => void;
  /**
   * `blur` event handler
   */
  onBlur?: (e: any) => void;
  /**
   * `clear` event handler
   */
  onClear?: (e: any) => void;
  /**
   * `disable` event handler
   */
  onDisable?: (e: any) => void;
}
