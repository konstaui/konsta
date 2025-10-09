import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Signal,
  computed,
  input,
  viewChild,
} from '@angular/core';
import { BlockClasses } from '../../shared/classes/BlockClasses.js';
import { BlockColors } from '../../shared/colors/BlockColors.js';
import {
  useDarkClasses,
  useThemeClasses,
  useThemeSignal,
} from '../shared/theme-helpers.js';
import { cls } from '../../shared/cls.js';

@Component({
  selector: 'k-block',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div #root class="{{ classes() }}">
      <ng-content />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KBlockComponent {
  private readonly host = viewChild<ElementRef<HTMLElement>>('root');

  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly colors = input<Record<string, string> | undefined>(undefined);
  readonly ios = input<boolean | undefined>(undefined);
  readonly material = input<boolean | undefined>(undefined);
  readonly inset = input<boolean>(false);
  readonly nested = input<boolean>(false);
  readonly strong = input<boolean>(false);
  readonly outline = input<boolean>(false);

  private readonly theme = useThemeSignal(() => ({
    ios: this.ios() === true,
    material: this.material() === true,
  }));
  private readonly themeClasses = useThemeClasses(() => ({
    ios: this.ios() === true,
    material: this.material() === true,
  }));
  private readonly dark = useDarkClasses();

  private readonly palette = computed(() =>
    BlockColors(this.colors() ?? {}, this.dark)
  );

  readonly classes: Signal<string> = computed(() => {
    const blockClasses = this.themeClasses(
      BlockClasses(
        {
          inset: this.inset(),
          nested: this.nested(),
          strong: this.strong(),
          outline: this.outline(),
        },
        this.palette()
      ),
      this.className()
    ) as Record<string, any>;

    const base = blockClasses['base'];
    const insetClass = this.inset() ? blockClasses['inset'] : '';
    return cls(base, insetClass, this.className());
  });

  constructor() {
    this.classes();
  }
}
