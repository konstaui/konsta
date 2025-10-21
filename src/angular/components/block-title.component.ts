import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Signal,
  computed,
  effect,
  inject,
  input,
  viewChild,
} from '@angular/core';
import { BlockTitleClasses } from '../../shared/classes/BlockTitleClasses.js';
import { BlockTitleColors } from '../../shared/colors/BlockTitleColors.js';
import { useDarkClasses, useThemeClasses } from '../shared/theme-helpers.js';

@Component({
  selector: 'k-block-title',

  imports: [CommonModule],
  template: `
    @switch (component()) {
      @case ('h1') {
        <h1 #wrapper [class]="classes()">
          <ng-content />
        </h1>
      }
      @case ('h2') {
        <h2 #wrapper [class]="classes()">
          <ng-content />
        </h2>
      }
      @case ('h3') {
        <h3 #wrapper [class]="classes()">
          <ng-content />
        </h3>
      }
      @case ('h4') {
        <h4 #wrapper [class]="classes()">
          <ng-content />
        </h4>
      }
      @default {
        <div #wrapper [class]="classes()">
          <ng-content />
        </div>
      }
    }
  `,
  styles: [
    `
      :host {
        display: block;
      }
      :host:has(+ k-block),
      :host:has(+ k-block-header),
      :host:has(+ k-block-footer),
      :host:has(+ k-list),
      :host:has(+ k-table) {
        margin-bottom: -1.5rem !important;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KBlockTitleComponent {
  private readonly host = inject(ElementRef);
  private readonly wrapper = viewChild<ElementRef<HTMLElement>>('wrapper');

  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly colors = input<Record<string, string> | undefined>(undefined);
  readonly medium = input<boolean | undefined>(undefined);
  readonly large = input<boolean | undefined>(undefined);
  readonly ios = input<boolean | undefined>(undefined);
  readonly material = input<boolean | undefined>(undefined);
  readonly component = input<'div' | 'h1' | 'h2' | 'h3' | 'h4'>('div');

  private readonly themeClasses = useThemeClasses(() => ({
    ios: this.ios() === true,
    material: this.material() === true,
  }));
  private readonly dark = useDarkClasses();

  private readonly palette = computed(() =>
    BlockTitleColors(this.colors() ?? {}, this.dark)
  );

  readonly classes: Signal<string> = computed(() => {
    const classes = this.themeClasses(
      BlockTitleClasses(
        {
          medium: this.medium(),
          large: this.large(),
        },
        this.palette()
      ),
      this.className()
    ) as Record<string, any>;
    return classes['base'] as string;
  });

  constructor() {
    // No longer need this effect since the wrapper element handles classes
  }
}
