import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  computed,
  input,
} from '@angular/core';
import { BlockClasses } from '../../shared/classes/BlockClasses.js';
import { BlockColors } from '../../shared/colors/BlockColors.js';
import {
  useDarkClasses,
  useThemeClasses,
  useThemeSignal,
  useThemeSpecificProps,
} from '../shared/theme-helpers.js';
import { cls } from '../../shared/cls.js';

@Component({
  selector: 'k-block',

  imports: [CommonModule],
  styles: [
    `
      :host {
        display: contents;
      }
    `,
  ],
  template: `
    @switch (component()) {
      @case ('section') {
        <section [class]="classes()">
          <ng-content />
        </section>
      }
      @default {
        <div [class]="classes()">
          <ng-content />
        </div>
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KBlockComponent {

  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly colors = input<Record<string, string> | undefined>(undefined);
  readonly ios = input<boolean | undefined>(undefined);
  readonly material = input<boolean | undefined>(undefined);
  readonly component = input<'div' | 'section'>('div');
  readonly inset = input<boolean | undefined>(undefined);
  readonly insetIos = input<boolean | undefined>(undefined);
  readonly insetMaterial = input<boolean | undefined>(undefined);
  readonly nested = input<boolean>(false);
  readonly strong = input<boolean | undefined>(undefined);
  readonly strongIos = input<boolean | undefined>(undefined);
  readonly strongMaterial = input<boolean | undefined>(undefined);
  readonly outline = input<boolean | undefined>(undefined);
  readonly outlineIos = input<boolean | undefined>(undefined);
  readonly outlineMaterial = input<boolean | undefined>(undefined);

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

  private readonly resolvedProps = useThemeSpecificProps(
    this.theme,
    () => ({
      inset: this.inset(),
      strong: this.strong(),
      outline: this.outline(),
    }),
    () => ({
      insetIos: this.insetIos(),
      insetMaterial: this.insetMaterial(),
      strongIos: this.strongIos(),
      strongMaterial: this.strongMaterial(),
      outlineIos: this.outlineIos(),
      outlineMaterial: this.outlineMaterial(),
    })
  );

  readonly classes: Signal<string> = computed(() => {
    const resolved = this.resolvedProps();
    const c = this.themeClasses(
      BlockClasses(
        {
          inset: resolved.inset,
          nested: this.nested(),
          strong: resolved.strong,
          outline: resolved.outline,
        },
        this.palette()
      )
    ) as Record<string, any>;

    return cls(
      c.base,
      resolved.inset && c.inset,
      this.className()
    );
  });

  constructor() {
    this.classes();
  }
}
