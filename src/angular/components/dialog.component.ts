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
import { DialogClasses } from '../../shared/classes/DialogClasses.js';
import { DialogColors } from '../../shared/colors/DialogColors.js';
import {
  useDarkClasses,
  useThemeClasses,
} from '../shared/theme-helpers.js';
import { KGlassComponent } from './glass.component.js';

type DialogState = 'opened' | 'closed';

@Component({
  selector: 'k-dialog',
  
  imports: [CommonModule, KGlassComponent],
  template: `
    @if (backdrop()) {
      <div
        class="{{ backdropClasses()[state()] }}"
        (click)="handleBackdropClick($event)"
      ></div>
    }
    <k-glass
      [component]="componentTag()"
      [class]="baseClasses()[state()]"
      [ios]="ios()"
      [material]="material()"
      [highlight]="false"
    >
      <div class="{{ contentWrapClasses() }}">
        @if (hasTitle()) {
          <div class="{{ titleClasses() }}">
            @if (title() !== undefined && title() !== null) {
              {{ title() }}
            } @else {
              <ng-content select="[title]" />
            }
          </div>
        }
        <div class="{{ contentClasses() }}">
          @if (content() !== undefined && content() !== null) {
            {{ content() }}
          } @else {
            <ng-content />
          }
        </div>
      </div>
      @if (hasButtons()) {
        <div class="{{ buttonsClasses() }}">
          @if (buttons() !== undefined && buttons() !== null) {
            {{ buttons() }}
          } @else {
            <ng-content select="[buttons]" />
          }
        </div>
      }
    </k-glass>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KDialogComponent {
  readonly component = input<string>('div');
  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly colors = input<Record<string, string> | undefined>(undefined);
  readonly ios = input<boolean | undefined>(undefined);
  readonly material = input<boolean | undefined>(undefined);
  readonly titleFontSizeIos = input<string>('text-[17px]');
  readonly titleFontSizeMaterial = input<string>('text-[24px]');
  readonly sizeIos = input<string | undefined>(undefined);
  readonly sizeMaterial = input<string | undefined>(undefined);
  readonly opened = input<boolean>(false);
  readonly backdrop = input<boolean>(true);
  readonly title = input<string | number | undefined>(undefined);
  readonly content = input<string | number | undefined>(undefined);
  readonly buttons = input<string | number | undefined>(undefined);

  readonly backdropClick = output<Event>();

  private readonly titleSlot =
    contentChild<ElementRef<HTMLElement>>('[title]');
  private readonly buttonsSlot =
    contentChild<ElementRef<HTMLElement>>('[buttons]');

  private readonly themeClasses = useThemeClasses(() => ({
    ios: this.ios() === true,
    material: this.material() === true,
  }));
  private readonly dark = useDarkClasses();

  readonly state: Signal<DialogState> = computed(() =>
    this.opened() ? 'opened' : 'closed'
  );

  private readonly palette = computed(() =>
    DialogColors(this.colors() ?? {}, this.dark)
  );

  private readonly classes = computed(
    () =>
      this.themeClasses(
        DialogClasses(
          {
            titleFontSizeIos: this.titleFontSizeIos(),
            titleFontSizeMaterial: this.titleFontSizeMaterial(),
            sizeIos: this.sizeIos(),
            sizeMaterial: this.sizeMaterial(),
          },
          this.palette(),
          this.className()
        ),
        this.className()
      ) as Record<string, any>
  );

  readonly baseClasses: Signal<Record<DialogState, string>> = computed(
    () => this.classes()['base'] as Record<DialogState, string>
  );
  readonly contentWrapClasses: Signal<string> = computed(
    () => this.classes()['contentWrap'] as string
  );
  readonly titleClasses: Signal<string> = computed(
    () => this.classes()['title'] as string
  );
  readonly contentClasses: Signal<string> = computed(
    () => this.classes()['content'] as string
  );
  readonly buttonsClasses: Signal<string> = computed(
    () => this.classes()['buttons'] as string
  );
  readonly backdropClasses: Signal<Record<DialogState, string>> = computed(
    () => this.classes()['backdrop'] as Record<DialogState, string>
  );

  readonly hasTitle = computed(
    () => this.title() !== undefined && this.title() !== null || !!this.titleSlot()
  );

  readonly hasButtons = computed(
    () => this.buttons() !== undefined && this.buttons() !== null || !!this.buttonsSlot()
  );

  readonly componentTag: Signal<string> = computed(() => {
    const value = (this.component() || 'div').toLowerCase();
    switch (value) {
      case 'div':
      case 'section':
      case 'span':
      case 'article':
      case 'form':
        return value;
      default:
        return 'div';
    }
  });

  handleBackdropClick(event: Event) {
    this.backdropClick.emit(event);
  }
}
