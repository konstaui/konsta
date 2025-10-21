import { CommonModule, NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Signal,
  computed,
  contentChild,
  input,
} from '@angular/core';
import { IconClasses } from '../../shared/classes/IconClasses.js';
import {
  useThemeClasses,
  useThemeSignal,
} from '../shared/theme-helpers.js';
import { KBadgeComponent } from './badge.component.js';

type IconTag = 'i' | 'span' | 'div';

@Component({
  selector: 'k-icon',
  
  imports: [CommonModule, NgTemplateOutlet, KBadgeComponent],
  template: `
    <ng-template #iconContent>
      @if (theme() === 'ios') {
        <ng-content select="[ios]" />
      } @else {
        <ng-content select="[material]" />
      }
      <ng-content />
      @if (hasBadge()) {
        <k-badge
          small
          [colors]="badgeColors() ?? undefined"
          class="{{ badgeClass() }}"
        >
          {{ badge() }}
          <ng-content select="[badge]" />
        </k-badge>
      }
    </ng-template>

    @switch (componentTag()) {
      @case ('span') {
        <span class="{{ baseClass() }}">
          <ng-container *ngTemplateOutlet="iconContent"></ng-container>
        </span>
      }
      @case ('div') {
        <div class="{{ baseClass() }}">
          <ng-container *ngTemplateOutlet="iconContent"></ng-container>
        </div>
      }
      @default {
        <i class="{{ baseClass() }}">
          <ng-container *ngTemplateOutlet="iconContent"></ng-container>
        </i>
      }
    }
  `,
  styles: [
    `
      :host {
        display: contents;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KIconComponent {
  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly component = input<IconTag>('i');
  readonly ios = input<boolean | undefined>(undefined);
  readonly material = input<boolean | undefined>(undefined);
  readonly badge = input<string | number | undefined>(undefined);
  readonly badgeColors = input<Record<string, string> | undefined>(undefined);

  private readonly badgeSlot =
    contentChild<ElementRef<HTMLElement>>('[badge]');

  private readonly theme = useThemeSignal(() => ({
    ios: this.ios() === true,
    material: this.material() === true,
  }));
  private readonly themeClasses = useThemeClasses(() => ({
    ios: this.ios() === true,
    material: this.material() === true,
  }));

  private readonly classes = computed(
    () =>
      this.themeClasses(
        IconClasses(),
        this.className()
      ) as Record<string, any>
  );

  readonly baseClass: Signal<string> = computed(
    () => this.classes()['base'] as string
  );
  readonly badgeClass: Signal<string> = computed(
    () => this.classes()['badge'] as string
  );

  readonly hasBadge = computed(
    () => this.badge() !== undefined && this.badge() !== null || !!this.badgeSlot()
  );

  readonly componentTag: Signal<IconTag> = computed(() => {
    const value = (this.component() || 'i').toLowerCase();
    if (value === 'span') return 'span';
    if (value === 'div') return 'div';
    return 'i';
  });
}
