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
import { KCheckboxComponent } from '../../../../../../src/angular/components/checkbox.component.js';
import { KBlockTitleComponent } from '../../../../../../src/angular/components/block-title.component.js';
import { KBlockComponent } from '../../../../../../src/angular/components/block.component.js';
import { KListComponent } from '../../../../../../src/angular/components/list.component.js';
import { KListItemComponent } from '../../../../../../src/angular/components/list-item.component.js';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [
    CommonModule,
    KPageComponent,
    KNavbarComponent,
    KNavbarBackLinkComponent,
    KCheckboxComponent,
    KBlockTitleComponent,
    KBlockComponent,
    KListComponent,
    KListItemComponent,
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
      <k-navbar title="Checkbox">
        <k-navbar-back-link
          left
          *ngIf="!isPreview()"
          (clicked)="back()"
        ></k-navbar-back-link>
      </k-navbar>

      <k-block-title>Inline</k-block-title>
      <k-block [strong]="true" [inset]="true">
        <p>
          Lorem
          <k-checkbox
            class="mx-1"
            name="checkbox-1"
            [checked]="checked1()"
            (changed)="toggleChecked1($event)"
          ></k-checkbox>
          ipsum dolor sit amet, consectetur adipisicing elit. Alias beatae illo
          nihil aut eius commodi sint eveniet aliquid eligendi
          <k-checkbox
            class="mx-1"
            name="checkbox-2"
            [checked]="checked2()"
            (changed)="toggleChecked2($event)"
          ></k-checkbox>
          ad delectus impedit tempore nemo, enim vel praesentium consequatur
          nulla mollitia!
        </p>
      </k-block>

      <k-block-title>Checkbox Group</k-block-title>
      <k-list [strong]="true" [inset]="true">
        <k-list-item [label]="true" [title]="'Books'">
          <k-checkbox
            media
            ngProjectAs="[media]"
            [component]="'span'"
            name="demo-checkbox"
            [checked]="group().includes('Books')"
            (changed)="toggleGroupValue('Books')"
          ></k-checkbox>
        </k-list-item>
        <k-list-item [label]="true" [title]="'Movies'">
          <k-checkbox
            media
            ngProjectAs="[media]"
            [component]="'span'"
            name="demo-checkbox"
            [checked]="group().includes('Movies')"
            (changed)="toggleGroupValue('Movies')"
          ></k-checkbox>
        </k-list-item>
        <k-list-item [label]="true" [title]="'Food'">
          <k-checkbox
            media
            ngProjectAs="[media]"
            [component]="'span'"
            name="demo-checkbox"
            [checked]="group().includes('Food')"
            (changed)="toggleGroupValue('Food')"
          ></k-checkbox>
        </k-list-item>
        <k-list-item [label]="true" [title]="'Drinks'">
          <k-checkbox
            media
            ngProjectAs="[media]"
            [component]="'span'"
            name="demo-checkbox"
            [checked]="group().includes('Drinks')"
            (changed)="toggleGroupValue('Drinks')"
          ></k-checkbox>
        </k-list-item>
      </k-list>

      <k-block-title>Indeterminate State</k-block-title>
      <k-list [strong]="true" [inset]="true">
        <k-list-item [label]="true" [title]="'Movies'">
          <k-checkbox
            media
            ngProjectAs="[media]"
            [component]="'span'"
            [checked]="movies().length === 2"
            [indeterminate]="movies().length === 1"
            (changed)="toggleMoviesAll()"
          ></k-checkbox>
          <div content>
            <ul class="ps-12">
              <k-list-item [label]="true" [title]="'Movie 1'">
                <k-checkbox
                  media
                  ngProjectAs="[media]"
                  [component]="'span'"
                  name="demo-checkbox"
                  value="Movie 1"
                  [checked]="movies().includes('Movie 1')"
                  (changed)="onMovieChange($event)"
                ></k-checkbox>
              </k-list-item>
              <k-list-item [label]="true" [title]="'Movie 2'">
                <k-checkbox
                  media
                  ngProjectAs="[media]"
                  [component]="'span'"
                  name="demo-checkbox"
                  value="Movie 2"
                  [checked]="movies().includes('Movie 2')"
                  (changed)="onMovieChange($event)"
                ></k-checkbox>
              </k-list-item>
            </ul>
          </div>
        </k-list-item>
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
          <k-checkbox
            media
            ngProjectAs="[media]"
            [component]="'span'"
            name="demo-media-checkbox"
            [checked]="media().includes('Item 1')"
            (changed)="toggleMediaValue('Item 1')"
          ></k-checkbox>
        </k-list-item>
        <k-list-item
          [label]="true"
          [title]="'John Doe (via Twitter)'"
          [after]="'17:11'"
          [subtitle]="'John Doe (@_johndoe) mentioned you on Twitter!'"
          [text]="longText"
        >
          <k-checkbox
            media
            ngProjectAs="[media]"
            [component]="'span'"
            name="demo-media-checkbox"
            [checked]="media().includes('Item 2')"
            (changed)="toggleMediaValue('Item 2')"
          ></k-checkbox>
        </k-list-item>
      </k-list>
    </k-page>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent {
  readonly isPreview = computed(
    () =>
      typeof document !== 'undefined' &&
      document.location.href.includes('examplePreview')
  );

  readonly checked1 = signal(false);
  readonly checked2 = signal(true);

  readonly group = signal<string[]>(['Books']);
  readonly movies = signal<string[]>(['Movie 1']);
  readonly media = signal<string[]>(['Item 1']);

  readonly longText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus.';

  toggleChecked1(event: Event) {
    const target = event.target as HTMLInputElement;
    this.checked1.set(target.checked);
  }

  toggleChecked2(event: Event) {
    const target = event.target as HTMLInputElement;
    this.checked2.set(target.checked);
  }

  toggleGroupValue(value: string) {
    const next = [...this.group()];
    const index = next.indexOf(value);
    if (index >= 0) {
      next.splice(index, 1);
    } else {
      next.push(value);
    }
    this.group.set(next);
  }

  onMovieChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    const next = [...this.movies()];
    const index = next.indexOf(value);
    if (target.checked && index < 0) {
      next.push(value);
    }
    if (!target.checked && index >= 0) {
      next.splice(index, 1);
    }
    this.movies.set(next);
  }

  toggleMoviesAll() {
    const length = this.movies().length;
    if (length === 2 || length === 0) {
      this.movies.set(['Movie 1', 'Movie 2']);
    } else {
      this.movies.set([]);
    }
  }

  toggleMediaValue(value: string) {
    const next = [...this.media()];
    const index = next.indexOf(value);
    if (index >= 0) {
      next.splice(index, 1);
    } else {
      next.push(value);
    }
    this.media.set(next);
  }

  back() {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  }
}
