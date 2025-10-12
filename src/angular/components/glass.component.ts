import { CommonModule, NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Signal,
  computed,
  input,
  viewChild,
} from '@angular/core';
import { GlassClasses } from '../../shared/classes/GlassClasses.js';
import {
  useDarkClasses,
  useThemeClasses,
  useThemeSignal,
} from '../shared/theme-helpers.js';
import { useIosHighlight } from '../shared/ios-highlight.js';

@Component({
  selector: 'k-glass',
  styles: [`
    :host {
      display: contents;
    }
  `],
  imports: [CommonModule, NgTemplateOutlet],
  template: `
    @switch (component()) {
      @case ('span') {
        <span #root class="{{ classes() }}" [ngStyle]="style() ?? {}">
          <ng-container *ngTemplateOutlet="content"></ng-container>
          @if (afterContent()) {
            <ng-container *ngTemplateOutlet="afterContent()!" />
          }
        </span>
      }
      @case ('section') {
        <section #root class="{{ classes() }}" [ngStyle]="style() ?? {}">
          <ng-container *ngTemplateOutlet="content"></ng-container>
          @if (afterContent()) {
            <ng-container *ngTemplateOutlet="afterContent()!" />
          }
        </section>
      }
      @case ('button') {
        <button
          #root
          class="{{ classes() }}"
          [attr.type]="buttonType() ?? 'button'"
          [ngStyle]="style() ?? {}"
        >
          <ng-container *ngTemplateOutlet="content"></ng-container>
          @if (afterContent()) {
            <ng-container *ngTemplateOutlet="afterContent()!" />
          }
        </button>
      }
      @default {
        <div #root class="{{ classes() }}" [ngStyle]="style() ?? {}">
          <ng-container *ngTemplateOutlet="content"></ng-container>
          @if (afterContent()) {
            <ng-container *ngTemplateOutlet="afterContent()!" />
          }
        </div>
      }
    }

    <ng-template #content>
      <ng-content />
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KGlassComponent {
  private readonly root = viewChild<ElementRef<HTMLElement>>('root');

  readonly component = input<'div' | 'span' | 'section' | 'button'>('div');
  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly style = input<Record<string, any> | null | undefined>(undefined);
  readonly ios = input<boolean | undefined>(undefined);
  readonly material = input<boolean | undefined>(undefined);
  readonly highlight = input<boolean>(true);
  readonly buttonType = input<string | undefined>(undefined);
  readonly afterContent = input<any | undefined>(undefined);

  private readonly themeClasses = useThemeClasses(() => ({
    ios: this.ios() === true,
    material: this.material() === true,
  }));
  private readonly dark = useDarkClasses();
  private readonly theme = useThemeSignal(() => ({
    ios: this.ios() === true,
    material: this.material() === true,
  }));

  readonly classes: Signal<string> = computed(() =>
    this.themeClasses(
      GlassClasses({}, this.dark),
      this.className()
    )['base'] as string
  );

  constructor() {
    useIosHighlight({
      element: () => this.root()?.nativeElement ?? null,
      enabled: () =>
        this.highlight() === true && this.theme() === 'ios',
    });
  }
}
