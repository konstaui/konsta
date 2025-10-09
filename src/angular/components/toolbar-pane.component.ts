import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  computed,
  inject,
  input,
} from '@angular/core';
import { ToolbarPaneClasses } from '../../shared/classes/ToolbarPaneClasses.js';
import { ToolbarPaneColors } from '../../shared/colors/ToolbarPaneColors.js';
import {
  useDarkClasses,
  useThemeClasses,
  useThemeSignal,
} from '../shared/theme-helpers.js';
import { KGlassComponent } from './glass.component.js';
import { TOOLBAR_CONTEXT } from '../shared/toolbar-context.js';

@Component({
  selector: 'k-toolbar-pane',
  standalone: true,
  imports: [CommonModule, KGlassComponent],
  template: `
    <ng-container [ngSwitch]="theme()">
      <k-glass
        *ngSwitchCase="'ios'"
        [component]="component()"
        [class]="baseClasses()"
      >
        <ng-content />
      </k-glass>
      <ng-container *ngSwitchDefault>
        <ng-content />
      </ng-container>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KToolbarPaneComponent {
  readonly component = input<'div' | 'nav'>('div');
  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly colors = input<Record<string, string> | undefined>(undefined);
  readonly ios = input<boolean | undefined>(undefined);
  readonly material = input<boolean | undefined>(undefined);

  private readonly theme = useThemeSignal(() => ({
    ios: this.ios() === true,
    material: this.material() === true,
  }));
  private readonly themeClasses = useThemeClasses(() => ({
    ios: this.ios() === true,
    material: this.material() === true,
  }));
  private readonly dark = useDarkClasses();
  private readonly toolbarCtx = inject(TOOLBAR_CONTEXT);

  private readonly palette = computed(() =>
    ToolbarPaneColors(this.colors() ?? {}, this.dark)
  );

  readonly classes = computed(() =>
    this.themeClasses(
      ToolbarPaneClasses(
        {
          tabbar: this.toolbarCtx.tabbar(),
        },
        this.palette(),
        this.dark,
        this.className()
      ),
      this.className()
    ) as Record<string, any>
  );

  readonly baseClasses: Signal<string> = computed(
    () => this.classes()['base']
  );

  readonly themeSignal = this.theme;
}
