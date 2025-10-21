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
      @switch (component()) {
        @case ('section') {
          <section
            #popover
            [class]="classes()"
            [style]="style()"
          >
            <ng-container *ngTemplateOutlet="popoverContent"></ng-container>
          </section>
        }
        @default {
          <div
            #popover
            [class]="classes()"
            [style]="style()"
          >
            <ng-container *ngTemplateOutlet="popoverContent"></ng-container>
          </div>
        }
      }

      <ng-template #popoverContent>
        @if (angle()) {
          <div
            #angleEl
            [style]="angleStyle()"
            [class]="angleWrapClasses()"
          >
            <div [class]="angleArrowClasses()"></div>
          </div>
        }
        <k-glass [class]="innerClasses()">
          <ng-content />
        </k-glass>
      </ng-template>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KPopoverComponent {
  private readonly popoverRef = viewChild<ElementRef<HTMLDivElement>>('popover');
  private readonly angleRef = viewChild<ElementRef<HTMLDivElement>>('angleEl');

  readonly opened = input<boolean>(false);
  readonly target = input<string | HTMLElement | null>(null);
  readonly targetX = input<number | undefined>(undefined);
  readonly targetY = input<number | undefined>(undefined);
  readonly targetWidth = input<number | undefined>(undefined);
  readonly targetHeight = input<number | undefined>(undefined);
  readonly backdrop = input<boolean>(true);
  readonly angle = input<boolean>(false);
  readonly angleClassName = input<string>('');
  readonly ios = input<boolean | undefined>(undefined);
  readonly material = input<boolean | undefined>(undefined);
  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly component = input<'div' | 'section'>('div');
  readonly colors = input<Record<string, string> | undefined>(undefined);

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
  private readonly angleStyleSig = signal<Record<string, string>>({});
  private readonly anglePositionSig = signal<string>('bottom');

  readonly style = this.styleSig.asReadonly();
  readonly angleStyle = this.angleStyleSig.asReadonly();

  private readonly colorsComputed = computed(() =>
    PopoverColors(this.colors() ?? {}, this.dark)
  );

  private readonly classesObj = computed(() =>
    PopoverClasses({ angleClassName: this.angleClassName() }, this.colorsComputed(), this.dark)
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

  readonly angleWrapClasses = computed(() => {
    const c = this.themeClasses(this.classesObj());
    const position = this.anglePositionSig() as 'top' | 'bottom' | 'left' | 'right';
    return c.angleWrap?.[position] ?? '';
  });

  readonly angleArrowClasses = computed(() => {
    const c = this.themeClasses(this.classesObj());
    const position = this.anglePositionSig() as 'top' | 'bottom' | 'left' | 'right';
    return c.angleArrow?.[position] ?? '';
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

    let element: HTMLElement | null = null;

    if (typeof target === 'string') {
      element = document.querySelector(target);
    } else {
      element = target;
    }

    if (!element) return null;

    // If the element has no dimensions (display: contents), try to find the actual rendered element
    if (element.offsetWidth === 0 && element.offsetHeight === 0) {
      // Try to find the first child with dimensions
      const children = element.querySelectorAll('*');
      for (let i = 0; i < children.length; i++) {
        const child = children[i] as HTMLElement;
        if (child.offsetWidth > 0) {
          return child;
        }
      }
      // If no child found, try first child
      if (element.children.length > 0) {
        return element.children[0] as HTMLElement;
      }
    }

    return element;
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

    const angleEl = this.angleRef()?.nativeElement;
    const {
      popoverTop,
      popoverLeft,
      popoverPosition,
      angleTop,
      angleLeft,
      anglePosition
    } = calcPopoverPosition({
      popoverEl,
      targetEl: target,
      angleEl,
      needsAngle: this.angle(),
      targetX: this.targetX(),
      targetY: this.targetY(),
      targetWidth: this.targetWidth(),
      targetHeight: this.targetHeight(),
      theme: this.theme(),
    });

    this.styleSig.set({ top: popoverTop, left: popoverLeft });
    this.positionSig.set(popoverPosition);

    if (this.angle() && angleTop !== undefined && angleLeft !== undefined) {
      this.angleStyleSig.set({ top: angleTop, left: angleLeft });
      this.anglePositionSig.set(anglePosition);
    }
  }
}
