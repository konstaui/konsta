import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  computed,
  effect,
  forwardRef,
  input,
} from '@angular/core';
import { cls } from '../../shared/cls.js';
import { ListClasses } from '../../shared/classes/ListClasses.js';
import { ListColors } from '../../shared/colors/ListColors.js';
import {
  LIST_CONTEXT,
  createListContext,
} from '../shared/list-context.js';
import {
  useDarkClasses,
  useThemeClasses,
  useThemeSignal,
} from '../shared/theme-helpers.js';

@Component({
  selector: 'k-list',
  
  imports: [CommonModule],
  template: `
    <div #root [class]="baseClasses()">
      <ul [class]="ulClasses()">
        <ng-content />
      </ul>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [
    {
      provide: LIST_CONTEXT,
      useFactory: (component: KListComponent) => component.contextValue,
      deps: [forwardRef(() => KListComponent)],
    },
  ],
})
export class KListComponent {
  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly colors = input<Record<string, string> | undefined>(undefined);

  readonly ios = input<boolean | undefined>(undefined);
  readonly material = input<boolean | undefined>(undefined);

  readonly dividers = input<boolean | undefined>(undefined);
  readonly dividersIos = input<boolean | undefined>(true);
  readonly dividersMaterial = input<boolean | undefined>(false);
  readonly inset = input<boolean | undefined>(undefined);
  readonly insetIos = input<boolean | undefined>(undefined);
  readonly insetMaterial = input<boolean | undefined>(undefined);
  readonly strong = input<boolean | undefined>(undefined);
  readonly strongIos = input<boolean | undefined>(undefined);
  readonly strongMaterial = input<boolean | undefined>(undefined);
  readonly outline = input<boolean | undefined>(undefined);
  readonly outlineIos = input<boolean | undefined>(undefined);
  readonly outlineMaterial = input<boolean | undefined>(undefined);
  readonly nested = input<boolean>(false);
  readonly menuList = input<boolean>(false);

  private readonly theme = useThemeSignal(() => ({
    ios: this.ios() === true,
    material: this.material() === true,
  }));

  private readonly dark = useDarkClasses();
  private readonly themeClasses = useThemeClasses(() => ({
    ios: this.ios() === true,
    material: this.material() === true,
  }));

  private readonly palette = computed(() =>
    ListColors(this.colors() ?? {}, this.dark)
  );

  readonly hasDividers = computed(() => {
    if (this.dividers() !== undefined) return !!this.dividers();
    return this.theme() === 'ios'
      ? !!this.dividersIos()
      : !!this.dividersMaterial();
  });

  readonly isInset = computed(() => {
    if (this.inset() !== undefined) return !!this.inset();
    return this.theme() === 'ios'
      ? !!this.insetIos()
      : !!this.insetMaterial();
  });

  readonly isStrong = computed(() => {
    if (this.strong() !== undefined) return !!this.strong();
    const value = this.theme() === 'ios'
      ? this.strongIos()
      : this.strongMaterial();
    return !!value;
  });

  readonly isOutline = computed(() => {
    if (this.outline() !== undefined) return !!this.outline();
    const value = this.theme() === 'ios'
      ? this.outlineIos()
      : this.outlineMaterial();
    return !!value;
  });

  readonly classes = computed(() =>
    this.themeClasses(
      ListClasses(
        {
          nested: this.nested(),
          inset: this.isInset(),
          strong: this.isStrong(),
          outline: this.isOutline(),
        },
        this.palette()
      ),
      this.className()
    ) as Record<string, any>
  );

  readonly baseClasses: Signal<string> = computed(() => {
    const c = this.classes();
    return cls(
      c['base'],
      this.isInset() ? c['inset'] : '',
      this.menuList() ? c['menuList'] : ''
    );
  });

  readonly ulClasses: Signal<string> = computed(() => {
    const c = this.classes();
    return c['ul'];
  });

  private readonly nestedSignal = computed(() => !!this.nested());

  readonly contextValue = createListContext({
    dividers: this.hasDividers,
    nested: this.nestedSignal,
  });

  constructor() {
  }
}
