import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Signal,
  computed,
  contentChild,
  input,
  output,
} from '@angular/core';
import { ChipClasses } from '../../shared/classes/ChipClasses.js';
import { ChipColors } from '../../shared/colors/ChipColors.js';
import {
  useDarkClasses,
  useThemeClasses,
  useThemeSignal,
} from '../shared/theme-helpers.js';
import { KDeleteIconComponent } from './icons/delete-icon.component.js';

type ChipStyle = 'fill' | 'outline';

@Component({
  selector: 'k-chip',
  standalone: true,
  imports: [CommonModule, KDeleteIconComponent],
  template: `
    <{{ component() }} class="{{ baseClasses()[style()] }}">
      <div *ngIf="hasMedia()" class="{{ mediaClasses() }}">
        <ng-container *ngIf="media(); else mediaSlot">
          {{ media() }}
        </ng-container>
        <ng-template #mediaSlot>
          <ng-content select="[media]" />
        </ng-template>
      </div>
      <ng-content />
      <div
        *ngIf="deleteButton()"
        class="{{ deleteButtonClasses() }}"
        role="button"
        [attr.tabindex]="0"
        (click)="handleDelete($event)"
      >
        <k-delete-icon
          class="h-4 w-4"
          [ios]="ios()"
          [material]="material()"
        />
      </div>
    </{{ component() }}>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KChipComponent {
  readonly component = input<string>('div');
  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly colors = input<Record<string, string> | undefined>(undefined);
  readonly ios = input<boolean | undefined>(undefined);
  readonly material = input<boolean | undefined>(undefined);
  readonly media = input<string | number | undefined>(undefined);
  readonly deleteButton = input<boolean>(false);
  readonly outline = input<boolean>(false);

  readonly deleted = output<Event>();

  private readonly mediaSlot =
    contentChild<ElementRef<HTMLElement>>('[media]');

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
    ChipColors(this.colors() ?? {}, this.dark)
  );

  private readonly classes = computed(() =>
    this.themeClasses(
      ChipClasses({}, this.palette()),
      this.className()
    ) as Record<string, any>
  );

  readonly baseClasses: Signal<Record<ChipStyle, string>> = computed(
    () => this.classes()['base'] as Record<ChipStyle, string>
  );
  readonly mediaClasses: Signal<string> = computed(
    () => this.classes()['media'] as string
  );
  readonly deleteButtonClasses: Signal<string> = computed(
    () => this.classes()['deleteButton'] as string
  );

  readonly style: Signal<ChipStyle> = computed(() =>
    this.outline() ? 'outline' : 'fill'
  );

  readonly hasMedia = computed(
    () => !!this.media() || !!this.mediaSlot()
  );

  handleDelete(event: Event) {
    this.deleted.emit(event);
  }
}
