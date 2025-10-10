import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'k-preloader-material-icon',
  standalone: true,
  template: `
    <svg
      [attr.class]="className() ?? null"
      viewBox="0 0 36 36"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="18" cy="18" r="16" />
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KPreloaderMaterialIconComponent {
  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
}
