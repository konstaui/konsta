import {
  Directive,
  ElementRef,
  effect,
  input,
  Renderer2,
} from '@angular/core';
import { GlassClasses } from '../../shared/classes/GlassClasses.js';
import {
  useDarkClasses,
  useThemeClasses,
  useThemeSignal,
} from '../shared/theme-helpers.js';
import { useIosHighlight } from '../shared/ios-highlight.js';

@Directive({
  selector: '[kGlass]',
  standalone: true,
})
export class KGlassDirective {
  readonly kGlass = input<string | undefined>(undefined);
  readonly ios = input<boolean | undefined>(undefined);
  readonly material = input<boolean | undefined>(undefined);
  readonly highlight = input<boolean>(true);

  private readonly themeClasses = useThemeClasses(() => ({
    ios: this.ios() === true,
    material: this.material() === true,
  }));
  private readonly dark = useDarkClasses();
  private readonly theme = useThemeSignal(() => ({
    ios: this.ios() === true,
    material: this.material() === true,
  }));

  private appliedGlassClasses: string[] = [];
  private appliedAdditionalClasses: string[] = [];

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {
    // Apply classes when they change
    effect(() => {
      // Check if element has children
      const hasChildren = this.el.nativeElement.children.length > 0;

      if (!hasChildren) {
        // Hide when empty
        this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
        return;
      }

      // Show when has content
      this.renderer.removeStyle(this.el.nativeElement, 'display');

      // Remove previously applied glass classes
      this.appliedGlassClasses.forEach(cls => {
        this.renderer.removeClass(this.el.nativeElement, cls);
      });
      this.appliedGlassClasses = [];

      // Apply glass classes on iOS
      if (this.theme() === 'ios') {
        const glassClasses = this.themeClasses(
          GlassClasses({}, this.dark),
          undefined
        )['base'] as string;

        // Apply glass classes
        const glassClassList = glassClasses.split(' ').filter(c => c.trim());
        glassClassList.forEach(cls => {
          this.renderer.addClass(this.el.nativeElement, cls);
        });
        this.appliedGlassClasses = glassClassList;
      }

      // Remove previously applied additional classes
      this.appliedAdditionalClasses.forEach(cls => {
        this.renderer.removeClass(this.el.nativeElement, cls);
      });
      this.appliedAdditionalClasses = [];

      // Apply additional classes from input
      const additionalClasses = this.kGlass();
      if (additionalClasses) {
        const classList = additionalClasses.split(' ').filter(c => c.trim());
        classList.forEach(cls => {
          this.renderer.addClass(this.el.nativeElement, cls);
        });
        this.appliedAdditionalClasses = classList;
      }
    });

    // Setup iOS highlight
    useIosHighlight({
      element: () => this.el.nativeElement,
      enabled: () =>
        this.highlight() === true && this.theme() === 'ios',
    });
  }
}
