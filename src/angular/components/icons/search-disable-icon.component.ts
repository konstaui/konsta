import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'k-search-disable-icon',
  
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 56 56"
      fill="currentColor"
    >
      <path
        d="M10.0234 43.0234C9.2266 43.8203 9.2031 45.1797 10.0234 45.9766C10.8438 46.7734 12.1797 46.7734 13 45.9766L28 30.9766L43 45.9766C43.7969 46.7734 45.1563 46.7969 45.9766 45.9766C46.7734 45.1562 46.7734 43.8203 45.9766 43.0234L30.9531 28L45.9766 13C46.7734 12.2031 46.7969 10.8437 45.9766 10.0469C45.1328 9.2266 43.7969 9.2266 43 10.0469L28 25.0469L13 10.0469C12.1797 9.2266 10.8203 9.2031 10.0234 10.0469C9.2266 10.8672 9.2266 12.2031 10.0234 13L25.0234 28Z"
      />
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KSearchDisableIconComponent {}
