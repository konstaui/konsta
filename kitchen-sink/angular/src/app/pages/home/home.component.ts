import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal, viewChild, TemplateRef } from '@angular/core';
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
import { DemoIconComponent } from '../../components/demo-icon.component';
const DEMO_ICON_SRC = '/demo-icon.png';

@Component({
  selector: 'app-home',
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
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
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
  readonly demoIconSrc = DEMO_ICON_SRC;
  readonly demoIconTemplate = viewChild<TemplateRef<any>>('demoIconTemplate');

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
