import { CommonModule, NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Signal,
  computed,
  contentChild,
  effect,
  input,
  output,
  signal,
} from '@angular/core';
import { cls } from '../../shared/cls.js';
import { MessagebarClasses } from '../../shared/classes/MessagebarClasses.js';
import { MessagebarColors } from '../../shared/colors/MessagebarColors.js';
import {
  useDarkClasses,
  useThemeClasses,
  useThemeSignal,
} from '../shared/theme-helpers.js';
import { KGlassDirective } from '../directives/glass.directive.js';
import { KToolbarComponent } from './toolbar.component.js';
import { KToolbarPaneComponent } from './toolbar-pane.component.js';
import { KLinkComponent } from './link.component.js';
import { KIconComponent } from './icon.component.js';

type MessagebarTag = 'div' | 'span';

@Component({
  selector: 'k-messagebar',

  imports: [CommonModule, KGlassDirective, KToolbarComponent, KToolbarPaneComponent, KLinkComponent, KIconComponent],
  template: `
    @switch (componentTag()) {
      @case ('span') {
        <span class="{{ baseClass() }}" [attr.id]="id() ?? null" [ngStyle]="style()">
          <ng-container *ngTemplateOutlet="messagebarTemplate"></ng-container>
        </span>
      }
      @default {
        <div class="{{ baseClass() }}" [attr.id]="id() ?? null" [ngStyle]="style()">
          <ng-container *ngTemplateOutlet="messagebarTemplate"></ng-container>
        </div>
      }
    }

    <ng-template #messagebarTemplate>
      <k-toolbar
        [class]="toolbarClass()"
        [innerClassName]="toolbarInnerClass()"
        [colors]="colors()"
        [outline]="outline()"
        [ios]="ios()"
        [material]="material()"
      >
        <div [class]="leftClass()">
          <ng-content select="[left]" />
        </div>
        <div kGlass [class]="messagebarAreaClass()">
          <textarea
            [class]="messagebarInputClass()"
            [attr.id]="textareaId() ?? null"
            [attr.name]="name() ?? null"
            [attr.placeholder]="placeholder()"
            [attr.disabled]="disabled() ? '' : null"
            [attr.size]="size() ?? null"
            [value]="stringValue()"
            (input)="handleInput($event)"
            (change)="handleChange($event)"
            (focus)="handleFocus($event)"
            (blur)="handleBlur($event)"
          ></textarea>
        </div>
        <div [class]="rightClass()">
          <ng-content select="[right]" />
        </div>
      </k-toolbar>
    </ng-template>
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
export class KMessagebarComponent {
  private readonly leftSlot =
    contentChild<ElementRef<HTMLElement>>('[left]');
  private readonly rightSlot =
    contentChild<ElementRef<HTMLElement>>('[right]');

  readonly component = input<MessagebarTag>('div');
  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly colors = input<Record<string, string> | undefined>(undefined);
  readonly ios = input<boolean | undefined>(undefined);
  readonly material = input<boolean | undefined>(undefined);
  readonly id = input<string | undefined>(undefined);
  readonly style = input<Record<string, any> | undefined>(undefined);

  readonly placeholder = input<string>('Message');
  readonly value = input<string | null | undefined>(undefined);
  readonly outline = input<boolean>(false);
  readonly textareaId = input<string | undefined>(undefined);
  readonly disabled = input<boolean>(false);
  readonly name = input<string | undefined>(undefined);
  readonly size = input<number | string | undefined>(undefined);

  readonly input = output<Event>();
  readonly change = output<Event>();
  readonly focus = output<Event>();
  readonly blur = output<Event>();
  readonly valueChange = output<string | null>();

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
    MessagebarColors(this.colors() ?? {}, this.dark)
  );

  private readonly internalValue = signal<string>(''); 
  private readonly focused = signal(false);

  private readonly classes = computed(
    () =>
      this.themeClasses(
        MessagebarClasses(
          {
            outline: this.outline(),
          },
          this.palette(),
          {
            isFocused: this.focused(),
          },
          this.className()
        ),
        this.className()
      ) as Record<string, any>
  );

  readonly baseClass: Signal<string> = computed(
    () => this.classes()['base'] as string
  );
  readonly toolbarClass: Signal<string> = computed(() => {
    const base = (this.classes()['toolbar'] as string) ?? '';
    const bg =
      this.theme() === 'ios'
        ? this.palette()['bgIos'] ?? ''
        : this.palette()['bgMaterial'] ?? '';
    // Add padding classes to match React structure
    return cls(base, bg, 'pb-safe-4 px-safe-4');
  });
  readonly toolbarInnerClass: Signal<string> = computed(() => {
    const base = this.classes()['toolbarInner'] as string;
    // Add necessary classes to match React structure: height, flex layout, positioning
    return cls(base, 'h-12 flex relative justify-between');
  });
  readonly leftClass: Signal<string> = computed(
    () => this.classes()['left'] as string
  );
  readonly rightClass: Signal<string> = computed(
    () => this.classes()['right'] as string
  );
  readonly messagebarAreaClass: Signal<string> = computed(
    () => this.classes()['messagebarArea'] as string
  );
  readonly messagebarInputClass: Signal<string> = computed(
    () => this.classes()['messagebarInput'] as string
  );

  readonly stringValue = computed(() => {
    const external = this.value();
    if (external !== undefined) return external ?? '';
    return this.internalValue() ?? '';
  });

  readonly hasLeft = computed(() => !!this.leftSlot());
  readonly hasRight = computed(() => !!this.rightSlot());

  readonly componentTag: Signal<MessagebarTag> = computed(() => {
    const value = (this.component() || 'div').toLowerCase();
    return value === 'span' ? 'span' : 'div';
  });

  constructor() {
    effect(() => {
      const external = this.value();
      if (external !== undefined) {
        this.internalValue.set(external ?? '');
      }
    });
  }

  handleInput(event: Event) {
    const value = (event.target as HTMLTextAreaElement).value;
    this.internalValue.set(value);
    this.input.emit(event);
    this.valueChange.emit(value);
  }

  handleChange(event: Event) {
    this.change.emit(event);
  }

  handleFocus(event: Event) {
    this.focused.set(true);
    this.focus.emit(event);
  }

  handleBlur(event: Event) {
    this.focused.set(false);
    this.blur.emit(event);
  }
}
