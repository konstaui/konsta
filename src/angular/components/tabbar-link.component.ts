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
import { TabbarLinkClasses } from '../../shared/classes/TabbarLinkClasses.js';
import { TabbarLinkColors } from '../../shared/colors/TabbarLinkColors.js';
import { KLinkComponent } from './link.component.js';
import {
  useDarkClasses,
  useThemeClasses,
} from '../shared/theme-helpers.js';
import { cls } from '../../shared/cls.js';

@Component({
  selector: 'k-tabbar-link',

  imports: [CommonModule, KLinkComponent],
  styles: [
    `
      :host {
        display: contents;
      }
    `,
  ],
  template: `
    <k-link
      [component]="component()"
      [class]="linkClasses()"
      [href]="href()"
      [target]="target()"
      [tabbar]="true"
      [tabbarActive]="active()"
      [tabbarLabels]="hasLabel()"
      [tabbarIcons]="hasIcon()"
      [ios]="ios()"
      [material]="material()"
      (clicked)="clicked.emit($event)"
    >
      <span class="{{ contentClasses() }}">
        @if (hasIcon()) {
          <span class="{{ iconContainerClasses() }}">
            <span class="{{ iconBgClasses() }}"></span>
            @if (icon()) {
              <ng-container *ngTemplateOutlet="icon()!" />
            } @else {
              <ng-content select="[icon]" />
            }
          </span>
        }
        @if (hasLabel()) {
          <span class="{{ labelClasses() }}">
            @if (label()) {
              {{ label() }}
            } @else {
              <ng-content select="[label]" />
            }
          </span>
        }
        <ng-content select="[content]" />
      </span>
    </k-link>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KTabbarLinkComponent {
  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly colors = input<Record<string, string> | undefined>(undefined);
  readonly ios = input<boolean | undefined>(undefined);
  readonly material = input<boolean | undefined>(undefined);
  readonly active = input<boolean>(false);
  readonly component = input<string>('a');
  readonly href = input<string | undefined>(undefined);
  readonly target = input<string | undefined>(undefined);
  readonly label = input<string | undefined>(undefined);
  readonly icon = input<any | undefined>(undefined);

  readonly clicked = output<Event>();

  private readonly iconSlot =
    contentChild<ElementRef<HTMLElement>>('[icon]');
  private readonly labelSlot =
    contentChild<ElementRef<HTMLElement>>('[label]');

  readonly hasIcon: Signal<boolean> = computed(() => !!this.icon() || !!this.iconSlot());
  readonly hasLabel: Signal<boolean> = computed(
    () => (this.label() != null && this.label() !== '') || !!this.labelSlot()
  );

  private readonly themeClasses = useThemeClasses(() => ({
    ios: this.ios() === true,
    material: this.material() === true,
  }));
  private readonly dark = useDarkClasses();

  private readonly palette = computed(() =>
    TabbarLinkColors(this.colors() ?? {}, this.dark)
  );

  private readonly classes = computed(() => {
    return this.themeClasses(
      TabbarLinkClasses(
        {
          active: this.active(),
          hasIcon: this.hasIcon(),
          hasLabel: this.hasLabel(),
        },
        this.palette()
      ),
      this.className()
    ) as Record<string, any>;
  });

  readonly linkClasses: Signal<string> = computed(() =>
    cls(this.classes()['base'] as string | undefined, this.className())
  );

  readonly contentClasses: Signal<string> = computed(
    () => this.classes()['content'] as string
  );
  readonly iconContainerClasses: Signal<string> = computed(
    () => this.classes()['iconContainer'] as string
  );
  readonly iconBgClasses: Signal<string> = computed(
    () => this.classes()['iconBg'] as string
  );
  readonly labelClasses: Signal<string> = computed(
    () => this.classes()['label'] as string
  );
}
