import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'k-chevron-icon',
  standalone: true,
  template: `
    <svg
      [attr.class]="className() ?? null"
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="14"
      viewBox="0 0 12 20"
      fill="currentColor"
    >
      <path
        d="M11.518406,10.5648622 C11.4831857,10.6163453 11.4426714,10.6653692 11.3968592,10.7111814 L2.5584348,19.5496058 C1.9753444,20.1326962 1.03186648,20.1345946 0.44199608,19.5447242 C-0.14379032,18.9589377 -0.14922592,18.0146258 0.43711448,17.4282854 L7.87507783,9.9903221 L0.4431923,2.5584366 C-0.1398981,1.9753462 -0.1417965,1.0318683 0.448074,0.4419979 C1.0338604,-0.1437886 1.9781723,-0.1492241 2.56451268,0.4371163 L11.4029371,9.2755407 C11.7556117,9.6282153 11.7969345,10.1725307 11.518406,10.5648622 Z"
      />
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KChevronIconComponent {
  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
}
