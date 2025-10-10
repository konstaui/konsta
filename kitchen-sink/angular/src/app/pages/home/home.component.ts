import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
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
import { DemoIconComponent } from '../../components/demo-icon.component.js';

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

      .home-color-picker {
        transition: transform 0.2s ease, box-shadow 0.2s ease;
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
              component="div"
              [checked]="theme() === 'ios'"
              (changed)="setTheme('ios')"
            ></k-radio>
          </div>
        </k-list-item>
        <k-list-item [label]="true" [title]="'Material Theme'">
          <div media>
            <k-radio
              component="div"
              [checked]="theme() === 'material'"
              (changed)="setTheme('material')"
            ></k-radio>
          </div>
        </k-list-item>
      </k-list>

      <k-list [strong]="true" [inset]="true">
        <k-list-item [label]="true" [title]="'Dark Mode'">
          <div after>
            <k-toggle
              component="div"
              [checked]="dark()"
              (changed)="toggleDark()"
            ></k-toggle>
          </div>
        </k-list-item>
        <k-list-item
          [title]="'Color Theme'"
          [link]="true"
          (click)="openColorPicker()"
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
                component="div"
                [checked]="vibrant()"
                (changed)="toggleVibrant()"
              ></k-toggle>
            </div>
          </k-list-item>
          <k-list-item [label]="true" [title]="'Monochrome'">
            <div after>
              <k-toggle
                component="div"
                [checked]="monochrome()"
                (changed)="toggleMonochrome()"
              ></k-toggle>
            </div>
          </k-list-item>
        </ng-container>
      </k-list>

      <k-popover
        [opened]="colorPickerOpened()"
        class="w-auto"
        target=".home-color-picker"
        (backdropClick)="closeColorPicker()"
      >
        <div class="grid grid-cols-3 py-2 ios:px-2">
          <k-link
            component="button"
            class="overflow-hidden h-12 w-12 flex items-center justify-center"
            (clicked)="clearColor()"
          >
            <span class="bg-brand-primary w-6 h-6 rounded-full"></span>
          </k-link>
          <k-link
            component="button"
            class="overflow-hidden h-12 w-12 flex items-center justify-center"
            (clicked)="setColor('k-color-brand-red')"
          >
            <span class="bg-brand-red w-6 h-6 rounded-full"></span>
          </k-link>
          <k-link
            component="button"
            class="overflow-hidden h-12 w-12 flex items-center justify-center"
            (clicked)="setColor('k-color-brand-green')"
          >
            <span class="bg-brand-green w-6 h-6 rounded-full"></span>
          </k-link>
          <k-link
            component="button"
            class="overflow-hidden h-12 w-12 flex items-center justify-center"
            (clicked)="setColor('k-color-brand-yellow')"
          >
            <span class="bg-brand-yellow w-6 h-6 rounded-full"></span>
          </k-link>
          <k-link
            component="button"
            class="overflow-hidden h-12 w-12 flex items-center justify-center"
            (clicked)="setColor('k-color-brand-purple')"
          >
            <span class="bg-brand-purple w-6 h-6 rounded-full"></span>
          </k-link>
        </div>
      </k-popover>

      <k-block-title>Components</k-block-title>
      <k-list [strong]="true" [inset]="true">
        <k-list-item
          *ngFor="let route of routes"
          [title]="route.title"
          [link]="true"
          [routerLink]="route.path"
        >
          <div media>
            <app-demo-icon />
          </div>
        </k-list-item>
      </k-list>
    </k-page>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private readonly themeService = inject(ThemeService);

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
}
