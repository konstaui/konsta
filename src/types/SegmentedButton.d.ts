interface Props {
  /**
   * Component's HTML Element
   *
   * @default 'button'
   */
  component?: string;
  /**
   * Highlights button as active
   *
   * @default false
   */
  active?: boolean;

  /**
   * Makes strong segmented button (should be used within `<Segmented strong>`)
   *
   * @default false
   */
  strong?: boolean;

  /**
   * Makes segmented button rounded (should be used within `<Segmented rounded>`)
   *
   * @default false
   */
  rounded?: boolean;
}
