import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Signal,
  computed,
  effect,
  input,
  viewChild,
} from '@angular/core';
import { cls } from '../../shared/cls.js';
import { PageClasses } from '../../shared/classes/PageClasses.js';
import { PageColors } from '../../shared/colors/PageColors.js';
import { useDarkClasses, useThemeClasses } from '../shared/theme-helpers.js';

@Component({
  selector: 'k-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div #root class="{{ classes() }}">
      <ng-content />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KPageComponent {
  private readonly host = viewChild<ElementRef<HTMLElement>>('root');

  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly colors = input<Record<string, string> | undefined>(undefined);
  readonly ios = input<boolean | undefined>(undefined);
  readonly material = input<boolean | undefined>(undefined);

  private readonly themeClasses = useThemeClasses(() => ({
    ios: this.ios() === true,
    material: this.material() === true,
  }));

  private readonly dark = useDarkClasses();

  private readonly palette = computed(() =>
    PageColors(this.colors() ?? {}, this.dark)
  );

  readonly classes: Signal<string> = computed(() => {
    const pageClasses = this.themeClasses(
      PageClasses(
        {
          className: this.className(),
        },
        this.palette(),
        this.className()
      )
    ) as Record<string, any>;
    return cls(pageClasses['base']);
  });

  constructor() {
    effect(() => {
      const el = this.host()?.nativeElement;
      if (!el) return;
      el.setAttribute('class', this.classes());
    });
  }
}
