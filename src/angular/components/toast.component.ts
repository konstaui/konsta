import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Signal,
  computed,
  contentChild,
  input,
} from '@angular/core';
import { ToastClasses } from '../../shared/classes/ToastClasses.js';
import { ToastColors } from '../../shared/colors/ToastColors.js';
import {
  useDarkClasses,
  useThemeClasses,
  useThemeSignal,
} from '../shared/theme-helpers.js';
import { KGlassComponent } from './glass.component.js';

type ToastTag = 'div' | 'span';
type ToastPosition = 'left' | 'right' | 'center';

@Component({
  selector: 'k-toast',
  standalone: true,
  imports: [CommonModule, KGlassComponent],
  template: `
    @switch (componentTag()) {
      @case ('span') {
        <span class="{{ baseClass()[position()] }}">
          <k-glass class="{{ innerClass() }}">
            <div class="{{ contentClass() }}">
              <ng-content />
              @if (hasButton()) {
                <div class="{{ buttonClass() }}">
                  <ng-container *ngIf="button(); else buttonSlotTpl">
                    {{ button() }}
                  </ng-container>
                  <ng-template #buttonSlotTpl>
                    <ng-content select="[button]" />
                  </ng-template>
                </div>
              }
            </div>
          </k-glass>
        </span>
      }
      @default {
        <div class="{{ baseClass()[position()] }}">
          <k-glass class="{{ innerClass() }}">
            <div class="{{ contentClass() }}">
              <ng-content />
              @if (hasButton()) {
                <div class="{{ buttonClass() }}">
                  <ng-container *ngIf="button(); else buttonSlotTpl2">
                    {{ button() }}
                  </ng-container>
                  <ng-template #buttonSlotTpl2>
                    <ng-content select="[button]" />
                  </ng-template>
                </div>
              }
            </div>
          </k-glass>
        </div>
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KToastComponent {
  readonly component = input<ToastTag>('div');
  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly colors = input<Record<string, string> | undefined>(undefined);
  readonly ios = input<boolean | undefined>(undefined);
  readonly material = input<boolean | undefined>(undefined);
  readonly position = input<ToastPosition>('left');
  readonly opened = input<boolean>(false);
  readonly button = input<string | undefined>(undefined);

  private readonly buttonSlot =
    contentChild<ElementRef<HTMLElement>>('[button]');

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
    ToastColors(this.colors() ?? {}, this.dark)
  );

  private readonly classes = computed(
    () =>
      this.themeClasses(
        ToastClasses(
          {
            opened: this.opened(),
            position: this.position(),
          },
          this.palette(),
          this.className()
        ),
        this.className()
      ) as Record<string, any>
  );

  readonly baseClass: Signal<Record<ToastPosition, string>> = computed(
    () => this.classes()['base'] as Record<ToastPosition, string>
  );
  readonly innerClass: Signal<string> = computed(
    () => this.classes()['inner'] as string
  );
  readonly contentClass: Signal<string> = computed(
    () => this.classes()['content'] as string
  );
  readonly buttonClass: Signal<string> = computed(
    () => this.classes()['button'] as string
  );

  readonly componentTag: Signal<ToastTag> = computed(() => {
    const value = (this.component() || 'div').toLowerCase();
    return value === 'span' ? 'span' : 'div';
  });

  readonly hasButton = computed(
    () =>
      (this.button() !== undefined && this.button() !== null) ||
      !!this.buttonSlot()?.nativeElement
  );
}
