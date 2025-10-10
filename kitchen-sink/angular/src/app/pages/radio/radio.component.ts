import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { KPageComponent } from '../../../../../../src/angular/components/page.component.js';
import { KNavbarComponent } from '../../../../../../src/angular/components/navbar.component.js';
import { KNavbarBackLinkComponent } from '../../../../../../src/angular/components/navbar-back-link.component.js';
import { KBlockTitleComponent } from '../../../../../../src/angular/components/block-title.component.js';
import { KBlockComponent } from '../../../../../../src/angular/components/block.component.js';
import { KListComponent } from '../../../../../../src/angular/components/list.component.js';
import { KListItemComponent } from '../../../../../../src/angular/components/list-item.component.js';
import { KRadioComponent } from '../../../../../../src/angular/components/radio.component.js';

@Component({
  selector: 'app-radio',
  imports: [
    CommonModule,
    KPageComponent,
    KNavbarComponent,
    KNavbarBackLinkComponent,
    KBlockTitleComponent,
    KBlockComponent,
    KListComponent,
    KListItemComponent,
    KRadioComponent,
  ],
  styles: [
    `
      :host {
        display: contents;
      }
    `,
  ],
  template: `
    <k-page>
      <k-navbar title="Radio">
        @if (!isPreview()) {
          <k-navbar-back-link left (clicked)="back()"></k-navbar-back-link>
        }
      </k-navbar>

      <k-block-title>Inline</k-block-title>
      <k-block [strong]="true" [inset]="true">
        <p>
          Lorem
          <k-radio
            name="demo-radio-inline"
            value="inline-1"
            [checked]="inlineValue() === 'inline-1'"
            (changed)="inlineValue.set('inline-1')"
          />
          ipsum dolor sit amet, consectetur adipisicing elit. Alias beatae illo
          nihil aut eius commodi sint eveniet aliquid eligendi
          <k-radio
            name="demo-radio-inline"
            value="inline-2"
            [checked]="inlineValue() === 'inline-2'"
            (changed)="inlineValue.set('inline-2')"
          />
          ad delectus impedit tempore nemo, enim vel praesentium consequatur
          nulla mollitia!
        </p>
      </k-block>

      <k-block-title>Radio Group</k-block-title>
      <k-list [strong]="true" [inset]="true">
        @for (option of groupOptions; track option) {
          <k-list-item [label]="true" [title]="option">
            <ng-container ngProjectAs="[media]">
              <k-radio
                component="div"
                [value]="option"
                [checked]="groupValue() === option"
                (changed)="groupValue.set(option)"
              ></k-radio>
            </ng-container>
          </k-list-item>
        }
      </k-list>

      <k-list [strong]="true" [inset]="true">
        @for (option of groupOptions; track option) {
          <k-list-item [label]="true" [title]="option">
            <ng-container ngProjectAs="[after]">
              <k-radio
                component="div"
                [value]="option"
                [checked]="groupValue() === option"
                (changed)="groupValue.set(option)"
              ></k-radio>
            </ng-container>
          </k-list-item>
        }
      </k-list>

      <k-block-title>With Media Lists</k-block-title>
      <k-list [strong]="true" [inset]="true">
        <k-list-item
          [label]="true"
          [title]="'Facebook'"
          [after]="'17:14'"
          [subtitle]="'New messages from John Doe'"
          [text]="longText"
        >
          <ng-container ngProjectAs="[media]">
            <k-radio
              component="div"
              [checked]="mediaValue() === 'Item 1'"
              (changed)="mediaValue.set('Item 1')"
            ></k-radio>
          </ng-container>
        </k-list-item>
        <k-list-item
          [label]="true"
          [title]="'John Doe (via Twitter)'"
          [after]="'17:11'"
          [subtitle]="'John Doe (@_johndoe) mentioned you on Twitter!'"
          [text]="longText"
        >
          <ng-container ngProjectAs="[media]">
            <k-radio
              component="div"
              [checked]="mediaValue() === 'Item 2'"
              (changed)="mediaValue.set('Item 2')"
            ></k-radio>
          </ng-container>
        </k-list-item>
      </k-list>
    </k-page>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioComponent {
  readonly isPreview = computed(
    () =>
      typeof document !== 'undefined' &&
      document.location.href.includes('examplePreview')
  );

  readonly inlineValue = signal<'inline-1' | 'inline-2'>('inline-1');
  readonly groupValue = signal<'Books' | 'Movies' | 'Food' | 'Drinks'>('Books');
  readonly mediaValue = signal<'Item 1' | 'Item 2'>('Item 1');

  readonly groupOptions: readonly ('Books' | 'Movies' | 'Food' | 'Drinks')[] =
    ['Books', 'Movies', 'Food', 'Drinks'];

  readonly longText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus.';

  back() {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  }
}
