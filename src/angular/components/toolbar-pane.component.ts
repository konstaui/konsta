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
import { TOOLBAR_CONTEXT } from '../shared/toolbar-context.js';
import { KGlassComponent } from './glass.component.js';

@Component({
  selector: 'k-toolbar-pane',

  imports: [CommonModule, KGlassComponent],
  template: `
    @if (theme() === 'material') {
      <ng-content />
    } @else {
      <k-glass [component]="component()" [class]="classes()['base']">
        <ng-content />
      </k-glass>
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
}
