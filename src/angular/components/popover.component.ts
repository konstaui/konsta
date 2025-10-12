import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  computed,
  effect,
  input,
  output,
  signal,
  viewChild,
} from '@angular/core';
import { calcPopoverPosition } from '../../shared/calc-popover-position.js';
import { useThemeSignal, useThemeClasses, useDarkClasses } from '../shared/theme-helpers.js';
import { cls } from '../../shared/cls.js';
import { PopoverClasses } from '../../shared/classes/PopoverClasses.js';
import { PopoverColors } from '../../shared/colors/PopoverColors.js';
import { KGlassComponent } from './glass.component.js';

@Component({
  selector: 'k-popover',

  imports: [CommonModule, KGlassComponent],
  styles: [
    `
      :host {
        display: contents;
      }
    `,
  ],
  template: `
    @if (opened()) {
      @if (backdrop()) {
        <div
          [class]="backdropClasses()"
          (click)="onBackdropClick()"
        ></div>
      }
      <div
        #popover
        [class]="classes()"
        [style]="style()"
      >
        <k-glass [class]="innerClasses()">
          <ng-content />
        </k-glass>
      </div>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KPopoverComponent {
  private readonly popoverRef = viewChild<ElementRef<HTMLDivElement>>('popover');

  readonly opened = input<boolean>(false);
  readonly target = input<string | HTMLElement | null>(null);
  readonly backdrop = input<boolean>(true);
  readonly ios = input<boolean | undefined>(undefined);
  readonly material = input<boolean | undefined>(undefined);
  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });

  readonly backdropClick = output<void>();

  private readonly theme = useThemeSignal(() => ({
    ios: this.ios() === true,
    material: this.material() === true,
  }));

  private readonly themeClasses = useThemeClasses(() => ({
    ios: this.ios() === true,
    material: this.material() === true,
  }));

  private readonly dark = useDarkClasses();

  private readonly styleSig = signal<Record<string, string>>({});
  private readonly positionSig = signal<string>('top-left');

  readonly style = this.styleSig.asReadonly();

  private readonly colors = computed(() =>
    PopoverColors({}, this.dark)
  );

  private readonly classesObj = computed(() =>
    PopoverClasses({}, this.colors(), this.dark)
  );

  readonly state = computed(() => this.opened() ? 'opened' : 'closed');

  private readonly originClasses = {
    'top-right': 'origin-bottom-left',
    'top-left': 'origin-bottom-right',
    'middle-left': 'origin-right',
    'middle-right': 'origin-left',
    'bottom-right': 'origin-top-left',
    'bottom-left': 'origin-top-right',
  };

  readonly classes = computed(() => {
    const c = this.themeClasses(this.classesObj(), this.className());
    const state = this.state();
    const position = this.positionSig() as keyof typeof this.originClasses;
    return cls(
      c.base[state],
      this.originClasses[position]
    );
  });

  readonly backdropClasses = computed(() => {
    const c = this.themeClasses(this.classesObj());
    const state = this.state();
    return c.backdrop[state];
  });

  readonly innerClasses = computed(() => {
    const c = this.themeClasses(this.classesObj());
    const state = this.state();
    return c.inner[state];
  });

  constructor() {
    effect(() => {
      if (!this.opened()) {
        this.styleSig.set({});
        this.positionSig.set('top-left');
        return;
      }
      // Safari needs extra time for layout
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTimeout(() => this.updatePosition(), 10);
        });
      });
    });

    effect((onCleanup) => {
      if (!this.opened()) return;

      const handleResize = () => this.updatePosition();
      if (typeof window !== 'undefined') {
        window.addEventListener('resize', handleResize);
        onCleanup(() => {
          window.removeEventListener('resize', handleResize);
        });
      }
    });
  }

  private resolveTarget(): HTMLElement | null {
    const target = this.target();
    if (!target) return null;
    if (typeof target === 'string') {
      return document.querySelector(target);
    }
    return target;
  }

  onBackdropClick() {
    this.backdropClick.emit();
  }

  private updatePosition() {
    const popoverEl = this.popoverRef()?.nativeElement;
    if (!popoverEl) return;
    const target = this.resolveTarget();
    if (!target) return;

    // Ensure element has been measured
    const width = popoverEl.offsetWidth;
    if (width === 0) {
      // Element not yet rendered, try again
      requestAnimationFrame(() => this.updatePosition());
      return;
    }

    const { popoverTop, popoverLeft, popoverPosition } = calcPopoverPosition({
      popoverEl,
      targetEl: target,
      needsAngle: false,
      theme: this.theme(),
    });
    this.styleSig.set({ top: popoverTop, left: popoverLeft });
    this.positionSig.set(popoverPosition);
  }
}
