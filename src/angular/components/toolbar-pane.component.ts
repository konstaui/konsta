import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
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
import { useIosHighlight } from '../shared/ios-highlight.js';

@Component({
  selector: 'k-toolbar-pane',
  
  imports: [CommonModule],
  template: `
    <ng-content />
  `,
  host: {
    '[class]': 'hostClasses()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KToolbarPaneComponent implements OnInit {
  readonly component = input<'div' | 'nav'>('div');
  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly colors = input<Record<string, string> | undefined>(undefined);
  readonly ios = input<boolean | undefined>(undefined);
  readonly material = input<boolean | undefined>(undefined);

  private readonly elementRef = inject(ElementRef);
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

  readonly hostClasses: Signal<string> = computed(() => {
    const theme = this.theme();
    if (theme === 'material') {
      return '';
    }
    // For iOS, apply glass classes
    return this.classes()['base'] || '';
  });

  readonly themeSignal = this.theme;

  constructor() {
    useIosHighlight({
      element: () => this.elementRef.nativeElement,
      enabled: () => this.theme() === 'ios',
    });
  }

  ngOnInit(): void {
    // Apply component type if needed
    const comp = this.component();
    if (comp && comp !== 'div') {
      // Angular components are divs by default, we'd need to handle this differently
      console.warn('ToolbarPane: component input is not fully supported in Angular');
    }
  }
}
