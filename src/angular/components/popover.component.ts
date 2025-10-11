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
import { useThemeSignal } from '../shared/theme-helpers.js';
import { cls } from '../../shared/cls.js';

@Component({
  selector: 'k-popover',
  
  imports: [CommonModule],
  template: `
    @if (opened()) {
      <div
      class="k-popover-backdrop fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-200"
      (click)="onBackdropClick()"
    ></div>
      <div
      #popover
      [class]="classes()"
      [style]="style()"
    >
      <ng-content />
    </div>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KPopoverComponent {
  private readonly popoverRef = viewChild<ElementRef<HTMLDivElement>>('popover');

  readonly opened = input<boolean>(false);
  readonly target = input<string | HTMLElement | null>(null);
  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });

  readonly backdropClick = output<void>();

  private readonly theme = useThemeSignal();

  private readonly styleSig = signal<Record<string, string>>({});

  readonly style = this.styleSig.asReadonly();
  readonly classes = computed(() =>
    cls(
      'k-popover fixed z-30 rounded-3xl bg-white/95 p-3 shadow-lg dark:bg-slate-800/95 transition-opacity duration-200',
      this.className()
    )
  );

  constructor() {
    effect(() => {
      if (!this.opened()) {
        this.styleSig.set({});
        return;
      }
      queueMicrotask(() => this.updatePosition());
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
    const { popoverTop, popoverLeft } = calcPopoverPosition({
      popoverEl,
      targetEl: target,
      needsAngle: false,
      theme: this.theme(),
    });
    this.styleSig.set({ top: popoverTop, left: popoverLeft });
  }
}
