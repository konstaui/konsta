import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  computed,
  input,
} from '@angular/core';
import { NavbarClasses } from '../../shared/classes/NavbarClasses.js';
import { NavbarColors } from '../../shared/colors/NavbarColors.js';
import {
  useDarkClasses,
  useThemeClasses,
  useThemeSignal,
} from '../shared/theme-helpers.js';

@Component({
  selector: 'k-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="{{ baseClasses() }}">
      <div class="{{ bgClasses() }}"></div>
      <div class="{{ innerClasses() }}">
        <div class="{{ leftClasses() }}">
          <ng-content select="[left]" />
        </div>
        <div class="{{ titleContainerClasses() }}">
          <div class="{{ titleClasses() }}" *ngIf="title()">{{ title() }}</div>
          <div class="{{ subtitleClasses() }}" *ngIf="subtitle()">
            {{ subtitle() }}
          </div>
        </div>
        <div class="{{ rightClasses() }}">
          <ng-content select="[right]" />
        </div>
      </div>
      <div *ngIf="subnavbar()" class="{{ subnavbarClasses() }}">
        <ng-content select="[subnavbar]" />
      </div>
    </nav>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KNavbarComponent {
  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly colors = input<Record<string, string> | undefined>(undefined);
  readonly ios = input<boolean | undefined>(undefined);
  readonly material = input<boolean | undefined>(undefined);
  readonly title = input<string | undefined>(undefined);
  readonly subtitle = input<string | undefined>(undefined);
  readonly outline = input<boolean>(false);
  readonly large = input<boolean>(false);
  readonly medium = input<boolean>(false);
  readonly transparent = input<boolean>(false);
  readonly centerTitle = input<boolean | undefined>(undefined);
  readonly subnavbar = input<boolean>(false);

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
    NavbarColors(this.colors() ?? {}, this.dark)
  );

  readonly classes = computed(() =>
    this.themeClasses(
      NavbarClasses(
        {
          outline: this.outline(),
          large: this.large(),
          medium: this.medium(),
          transparent: this.transparent(),
          left: true,
          right: true,
          subnavbar: this.subnavbar(),
          fontSizeIos: 'text-[17px]',
          fontSizeMaterial: 'text-lg',
          titleFontSizeIos: 'text-[17px]',
          titleFontSizeMaterial: 'text-[22px]',
          titleLargeFontSizeIos: 'text-[34px]',
          titleLargeFontSizeMaterial: 'text-[28px]',
          titleMediumFontSizeIos: 'text-[24px]',
          titleMediumFontSizeMaterial: 'text-[24px]',
          centerTitle: this.centerTitle() ?? this.theme() === 'ios',
        },
        this.palette(),
        this.className()
      ),
      this.className()
    ) as Record<string, any>
  );

  readonly baseClasses: Signal<string> = computed(
    () => this.classes()['base']
  );
  readonly bgClasses: Signal<string> = computed(
    () => this.classes()['bg']
  );
  readonly innerClasses: Signal<string> = computed(
    () => this.classes()['inner']
  );
  readonly leftClasses: Signal<string> = computed(
    () => this.classes()['left']
  );
  readonly rightClasses: Signal<string> = computed(
    () => this.classes()['right']
  );
  readonly titleClasses: Signal<string> = computed(
    () => this.classes()['title']
  );
  readonly titleContainerClasses: Signal<string> = computed(
    () => this.classes()['titleContainer']
  );
  readonly subtitleClasses: Signal<string> = computed(
    () => this.classes()['subtitle']
  );
  readonly subnavbarClasses: Signal<string> = computed(
    () => this.classes()['subnavbar']
  );
}
