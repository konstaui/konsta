import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { KonstaTheme } from '../../../../../../src/angular/shared/konsta-context.js';
import { KNavbarComponent } from '../../../../../../src/angular/components/navbar.component.js';
import { KPageComponent } from '../../../../../../src/angular/components/page.component.js';
import { KBlockTitleComponent } from '../../../../../../src/angular/components/block-title.component.js';
import { KBlockComponent } from '../../../../../../src/angular/components/block.component.js';
import { KListComponent } from '../../../../../../src/angular/components/list.component.js';
import { KListItemComponent } from '../../../../../../src/angular/components/list-item.component.js';
import { KRadioComponent } from '../../../../../../src/angular/components/radio.component.js';
import { KToggleComponent } from '../../../../../../src/angular/components/toggle.component.js';
import { KLinkComponent } from '../../../../../../src/angular/components/link.component.js';
import { KPopoverComponent } from '../../../../../../src/angular/components/popover.component.js';
import { ThemeService } from '../../shared/theme.service';
import { demoRoutes } from '../../routes';
import { DemoIconComponent } from '../../components/demo-icon.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    KNavbarComponent,
    KPageComponent,
    KBlockTitleComponent,
    KBlockComponent,
    KListComponent,
    KListItemComponent,
    KRadioComponent,
    KToggleComponent,
    KLinkComponent,
    KPopoverComponent,
    DemoIconComponent,
  ],
  styles: [
    `
      .home-color-picker {
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        box-shadow: inset 0 0 0 1px rgba(148, 163, 184, 0.4);
      }

      .home-color-picker:hover {
        transform: scale(1.05);
      }

      .color-swatch {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 3rem;
        height: 3rem;
        border-radius: 999px;
        border: 1px solid rgba(148, 163, 184, 0.35);
        background: linear-gradient(135deg, #007aff, #2563eb);
        transition: transform 0.2s ease, border-color 0.2s ease;
      }

      .color-swatch:hover {
        transform: scale(1.05);
        border-color: rgba(99, 102, 241, 0.6);
      }

      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
    `,
  ],
  template: `
    <k-page>
      <k-navbar
        [title]="'Konsta UI'"
        [large]="true"
        [transparent]="true"
        [centerTitle]="true"
      ></k-navbar>

      <k-block-title>Theme</k-block-title>
      <k-list [strong]="true" [inset]="true">
        <k-list-item [label]="true" [title]="'iOS Theme'">
          <div media>
            <k-radio
              [checked]="theme() === 'ios'"
              (changed)="setTheme('ios')"
            ></k-radio>
          </div>
        </k-list-item>
        <k-list-item [label]="true" [title]="'Material Theme'">
          <div media>
            <k-radio
              [checked]="theme() === 'material'"
              (changed)="setTheme('material')"
            ></k-radio>
          </div>
        </k-list-item>
      </k-list>

      <k-list [strong]="true" [inset]="true">
        <k-list-item [label]="true" [title]="'Dark Mode'">
          <div after>
            <k-toggle [checked]="dark()" (changed)="toggleDark()"></k-toggle>
          </div>
        </k-list-item>
        <k-list-item
          [title]="'Color Theme'"
          (click)="openColorPicker()"
          class="cursor-pointer"
        >
          <div after>
            <div
              class="w-6 h-6 rounded-full home-color-picker"
              [ngClass]="{
                'bg-brand-primary': !color(),
                'bg-brand-red': color() === 'k-color-brand-red',
                'bg-brand-green': color() === 'k-color-brand-green',
                'bg-brand-yellow': color() === 'k-color-brand-yellow',
                'bg-brand-purple': color() === 'k-color-brand-purple'
              }"
            ></div>
          </div>
        </k-list-item>
        <ng-container *ngIf="theme() === 'material'">
          <k-list-item [label]="true" [title]="'Vibrant Colors'">
            <div after>
              <k-toggle
                [checked]="vibrant()"
                (changed)="toggleVibrant()"
              ></k-toggle>
            </div>
          </k-list-item>
          <k-list-item [label]="true" [title]="'Monochrome'">
            <div after>
              <k-toggle
                [checked]="monochrome()"
                (changed)="toggleMonochrome()"
              ></k-toggle>
            </div>
          </k-list-item>
        </ng-container>
      </k-list>

      <k-popover
        [opened]="colorPickerOpened()"
        target=".home-color-picker"
        (backdropClick)="closeColorPicker()"
      >
        <div class="grid grid-cols-3 gap-2 py-2">
          <k-link component="button" class="color-swatch" (clicked)="clearColor()">
            <span class="sr-only">Default</span>
          </k-link>
          <k-link component="button" class="color-swatch bg-brand-red" (clicked)="setColor('k-color-brand-red')">
            <span class="sr-only">Red</span>
          </k-link>
          <k-link component="button" class="color-swatch bg-brand-green" (clicked)="setColor('k-color-brand-green')">
            <span class="sr-only">Green</span>
          </k-link>
          <k-link component="button" class="color-swatch bg-brand-yellow" (clicked)="setColor('k-color-brand-yellow')">
            <span class="sr-only">Yellow</span>
          </k-link>
          <k-link component="button" class="color-swatch bg-brand-purple" (clicked)="setColor('k-color-brand-purple')">
            <span class="sr-only">Purple</span>
          </k-link>
        </div>
      </k-popover>

      <k-block-title>Components</k-block-title>
      <k-list [strong]="true" [inset]="true">
        <ng-container *ngIf="routes.length === 0; else routesList">
          <k-list-item>
            <div title>Angular component demos are in progress.</div>
          </k-list-item>
        </ng-container>
        <ng-template #routesList>
          <k-list-item *ngFor="let route of routes">
            <div media>
              <app-demo-icon />
            </div>
            <div title>{{ route.title }}</div>
            <div content>
              <k-link
                component="button"
                class="inline-flex items-center gap-1 text-primary"
                (clicked)="navigate(route.path)"
              >
                View <span aria-hidden="true">→</span>
              </k-link>
            </div>
          </k-list-item>
        </ng-template>
      </k-list>
    </k-page>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private readonly themeService = inject(ThemeService);
  private readonly router = inject(Router);

  readonly theme = this.themeService.theme;
  readonly dark = this.themeService.dark;
  readonly color = this.themeService.color;
  readonly vibrant = this.themeService.vibrant;
  readonly monochrome = this.themeService.monochrome;
  readonly colorPickerOpened = signal(false);

  readonly routes = demoRoutes;

  setTheme(theme: KonstaTheme) {
    this.themeService.setTheme(theme);
  }

  toggleDark() {
    this.themeService.toggleDark();
  }

  setColor(color: string) {
    this.themeService.setColor(color);
    this.closeColorPicker();
  }

  clearColor() {
    this.themeService.setColor('');
    this.closeColorPicker();
  }

  toggleVibrant() {
    this.themeService.toggleVibrant();
  }

  toggleMonochrome() {
    this.themeService.toggleMonochrome();
  }

  openColorPicker() {
    this.colorPickerOpened.set(true);
  }

  closeColorPicker() {
    this.colorPickerOpened.set(false);
  }

  navigate(path: string) {
    this.router.navigateByUrl(path);
  }
}
