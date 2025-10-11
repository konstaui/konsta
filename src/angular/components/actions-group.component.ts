import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  computed,
  input,
} from '@angular/core';
import { ActionsGroupClasses } from '../../shared/classes/ActionsGroupClasses.js';
import { ActionsGroupColors } from '../../shared/colors/ActionsGroupColors.js';
import {
  useDarkClasses,
  useThemeClasses,
  useThemeSignal,
} from '../shared/theme-helpers.js';
import { KGlassComponent } from './glass.component.js';

@Component({
  selector: 'k-actions-group',
  
  imports: [CommonModule, KGlassComponent],
  template: `
    <k-glass
      [component]="component()"
      [class]="classes()"
      [ios]="ios()"
      [material]="material()"
    >
      <ng-content />
    </k-glass>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KActionsGroupComponent {
  readonly component = input<string>('div');
  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly colors = input<Record<string, string> | undefined>(undefined);
  readonly ios = input<boolean | undefined>(undefined);
  readonly material = input<boolean | undefined>(undefined);
  readonly dividers = input<boolean | undefined>(undefined);

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
    ActionsGroupColors(this.colors() ?? {}, this.dark)
  );

  private readonly hasDividers = computed(() => {
    const value = this.dividers();
    if (value !== undefined && value !== null) return value;
    return true;
  });

  readonly classes: Signal<string> = computed(() => {
    const c = this.themeClasses(
      ActionsGroupClasses(
        {
          dividers: this.hasDividers(),
        },
        this.palette()
      ),
      this.className()
    ) as Record<string, any>;
    return c['base'] as string;
  });
}
