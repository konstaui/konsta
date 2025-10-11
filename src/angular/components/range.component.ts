import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  Signal,
  computed,
  effect,
  input,
  output,
  signal,
  viewChild,
} from '@angular/core';
import { cls } from '../../shared/cls.js';
import { RangeClasses } from '../../shared/classes/RangeClasses.js';
import { RangeColors } from '../../shared/colors/RangeColors.js';
import {
  useDarkClasses,
  useThemeClasses,
  useThemeSignal,
} from '../shared/theme-helpers.js';

type RangeTag = 'div' | 'span';

@Component({
  selector: 'k-range',
  
  imports: [CommonModule],
  template: `
    @switch (componentTag()) {
      @case ('span') {
        <span class="{{ baseClass() }}">
          <span #trackBg class="{{ trackBgClass() }}"></span>
          <span
            class="{{ trackValueClass() }}"
            [style]="trackValueStyle()"
          ></span>
          @if (isMaterial()) {
            <span
              class="{{ trackEmptyClass() }}"
              [style]="trackEmptyStyle()"
            ></span>
            <span class="{{ stopClass() }}"></span>
          }
          <input
            class="{{ inputClass() }}"
            type="range"
            [attr.id]="inputId() ?? null"
            [attr.name]="name() ?? null"
            [attr.min]="min()"
            [attr.max]="max()"
            [attr.step]="step()"
            [value]="currentValue()"
            [attr.defaultValue]="defaultValueAttr()"
            [readOnly]="readOnly()"
            [disabled]="disabled()"
            (input)="handleInput($event)"
            (change)="change.emit($event)"
            (focus)="focus.emit($event)"
            (blur)="blur.emit($event)"
          />
          <span
            #thumbWrap
            class="{{ thumbWrapClass() }}"
            [style]="thumbWrapStyle()"
          >
            @if (isIos()) {
              <span class="{{ thumbShadowClass() }}"></span>
            }
            <span class="{{ thumbClass() }}"></span>
          </span>
          <ng-content />
        </span>
      }
      @default {
        <div class="{{ baseClass() }}">
          <span #trackBg class="{{ trackBgClass() }}"></span>
          <span
            class="{{ trackValueClass() }}"
            [style]="trackValueStyle()"
          ></span>
          @if (isMaterial()) {
            <span
              class="{{ trackEmptyClass() }}"
              [style]="trackEmptyStyle()"
            ></span>
            <span class="{{ stopClass() }}"></span>
          }
          <input
            class="{{ inputClass() }}"
            type="range"
            [attr.id]="inputId() ?? null"
            [attr.name]="name() ?? null"
            [attr.min]="min()"
            [attr.max]="max()"
            [attr.step]="step()"
            [value]="currentValue()"
            [attr.defaultValue]="defaultValueAttr()"
            [readOnly]="readOnly()"
            [disabled]="disabled()"
            (input)="handleInput($event)"
            (change)="change.emit($event)"
            (focus)="focus.emit($event)"
            (blur)="blur.emit($event)"
          />
          <span
            #thumbWrap
            class="{{ thumbWrapClass() }}"
            [style]="thumbWrapStyle()"
          >
            @if (isIos()) {
              <span class="{{ thumbShadowClass() }}"></span>
            }
            <span class="{{ thumbClass() }}"></span>
          </span>
          <ng-content />
        </div>
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KRangeComponent implements AfterViewInit, OnDestroy {
  readonly component = input<RangeTag>('div');
  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly colors = input<Record<string, string> | undefined>(undefined);
  readonly ios = input<boolean | undefined>(undefined);
  readonly material = input<boolean | undefined>(undefined);

  readonly inputId = input<string | undefined>(undefined);
  readonly name = input<string | undefined>(undefined);
  readonly value = input<number | undefined>(undefined);
  readonly defaultValue = input<number | undefined>(undefined);
  readonly readOnly = input<boolean>(false);
  readonly disabled = input<boolean>(false);
  readonly step = input<number>(1);
  readonly min = input<number>(0);
  readonly max = input<number>(100);

  readonly input = output<Event>();
  readonly change = output<Event>();
  readonly focus = output<Event>();
  readonly blur = output<Event>();

  private readonly thumbWrapRef =
    viewChild<ElementRef<HTMLSpanElement>>('thumbWrap');
  private readonly trackBgRef =
    viewChild<ElementRef<HTMLSpanElement>>('trackBg');

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
    RangeColors(this.colors() ?? {}, this.dark)
  );

  private readonly classes = computed(
    () =>
      this.themeClasses(
        RangeClasses(
          {
            step: this.step(),
            min: this.min(),
            max: this.max(),
          },
          this.palette(),
          this.dark,
          this.className()
        ),
        this.className()
      ) as Record<string, any>
  );

  readonly baseClass: Signal<string> = computed(
    () => this.classes()['base'] as string
  );
  readonly trackBgClass: Signal<string> = computed(
    () => this.classes()['trackBg'] as string
  );
  readonly trackValueClass: Signal<string> = computed(
    () => this.classes()['trackValue'] as string
  );
  readonly trackEmptyClass: Signal<string> = computed(
    () => this.classes()['trackEmpty'] as string
  );
  readonly stopClass: Signal<string> = computed(
    () => this.classes()['stop'] as string
  );
  readonly inputClass: Signal<string> = computed(() =>
    cls(
      this.classes()['input'] as string,
      this.classes()['inputThumb'] as string,
      this.classes()['inputTrack'] as string
    )
  );
  readonly thumbWrapClass: Signal<string> = computed(
    () => this.classes()['thumbWrap'] as string
  );
  readonly thumbClass: Signal<string> = computed(
    () => this.classes()['thumb'] as string
  );
  readonly thumbShadowClass: Signal<string> = computed(() =>
    (this.classes()['thumbShadow'] as string) ?? ''
  );

  readonly componentTag: Signal<RangeTag> = computed(() => {
    const value = (this.component() || 'div').toLowerCase();
    return value === 'span' ? 'span' : 'div';
  });

  readonly isIos = computed(() => this.theme() === 'ios');
  readonly isMaterial = computed(() => this.theme() === 'material');

  private readonly thumbOffset = signal(0);
  private readonly thumbPercentOffset = signal(0);

  private readonly resizeHandler = () => {
    this.calculateThumbOffset();
    this.updateThumbOffset();
  };

  constructor() {
    effect(() => {
      // ensure we recalc when theme changes
      this.theme();
      this.scheduleMeasurements();
    });

    effect(() => {
      this.currentValue();
      this.scheduleThumbUpdate();
    });
  }

  ngAfterViewInit(): void {
    this.calculateThumbOffset();
    this.updateThumbOffset();
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.resizeHandler);
    }
  }

  ngOnDestroy(): void {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.resizeHandler);
    }
  }

  readonly currentValue = computed(() => {
    const val = this.value();
    if (val !== undefined && val !== null) return val;
    const def = this.defaultValue();
    if (def !== undefined && def !== null) return def;
    return this.min();
  });

  readonly valueWidth = computed(() => {
    const ratio = this.valueRatio();
    return Math.max(0, Math.min(1, ratio)) * 100;
  });

  private readonly valueRatio = computed(() => {
    const min = this.min();
    const max = this.max();
    const value = this.currentValue();
    if (max === min) return 0;
    return (value - min) / (max - min);
  });

  readonly trackValueStyle = computed(() => {
    if (this.isIos()) {
      return {
        width: `${this.valueWidth()}%`,
      };
    }
    return {
      width: `calc(${this.thumbOffset() * 100}%)`,
    };
  });

  readonly trackEmptyStyle = computed(() => ({
    width: `calc(${100 - this.thumbOffset() * 100}% - 16px)`,
  }));

  readonly thumbWrapStyle = computed(() => ({
    insetInlineStart: `${this.thumbOffset() * 100}%`,
  }));

  defaultValueAttr() {
    const val = this.value();
    if (val !== undefined && val !== null) return null;
    const def = this.defaultValue();
    if (def !== undefined && def !== null) return def;
    return null;
  }

  handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    const numeric = Number(target.value);
    if (!Number.isNaN(numeric)) {
      this.updateFromInput(numeric);
    }
    this.input.emit(event);
  }

  private updateFromInput(numeric: number) {
    if (this.value() === undefined || this.value() === null) {
      // uncontrolled mode -> update defaultValue
      this.defaultValue.set(numeric);
    }
  }

  private scheduleMeasurements() {
    queueMicrotask(() => {
      this.calculateThumbOffset();
      this.updateThumbOffset();
    });
  }

  private scheduleThumbUpdate() {
    queueMicrotask(() => this.updateThumbOffset());
  }

  private calculateThumbOffset() {
    const thumb = this.thumbWrapRef()?.nativeElement;
    const track = this.trackBgRef()?.nativeElement;
    if (!thumb || !track) return;
    const thumbWidth = thumb.offsetWidth;
    const trackWidth = track.offsetWidth;
    if (trackWidth === 0) return;
    const percentOffset = thumbWidth / trackWidth;
    this.thumbPercentOffset.set(percentOffset);
  }

  private updateThumbOffset() {
    const percent = this.valueRatio();
    const offset = percent * (1 - this.thumbPercentOffset());
    this.thumbOffset.set(Math.max(0, Math.min(1, offset)));
  }
}
