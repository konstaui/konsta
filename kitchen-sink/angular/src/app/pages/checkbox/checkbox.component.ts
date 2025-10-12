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

type GroupOption = 'Books' | 'Movies' | 'Food' | 'Drinks';
type MovieOption = 'Movie 1' | 'Movie 2';

type MediaItem = {
  readonly id: string;
  readonly title: string;
  readonly after: string;
  readonly subtitle: string;
  readonly text: string;
};

const GROUP_OPTIONS: readonly GroupOption[] = [
  'Books',
  'Movies',
  'Food',
  'Drinks',
];
const MOVIE_OPTIONS: readonly MovieOption[] = ['Movie 1', 'Movie 2'];
const LONG_TEXT =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus.';
const MEDIA_ITEMS: readonly MediaItem[] = [
  {
    id: 'Item 1',
    title: 'Facebook',
    after: '17:14',
    subtitle: 'New messages from John Doe',
    text: LONG_TEXT,
  },
  {
    id: 'Item 2',
    title: 'John Doe (via Twitter)',
    after: '17:11',
    subtitle: 'John Doe (@_johndoe) mentioned you on Twitter!',
    text: LONG_TEXT,
  },
];

@Component({
  selector: 'app-checkbox',
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
        @if (!isPreview()) {
          <k-navbar-back-link left (clicked)="back()"></k-navbar-back-link>
        }
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
        @for (option of groupOptions; track option) {
          <k-list-item [label]="true" [title]="option">
            <k-checkbox
              media
              component="div"
              name="demo-checkbox"
              [checked]="group().includes(option)"
              (changed)="toggleGroupValue(option)"
            ></k-checkbox>
          </k-list-item>
        }
      </k-list>

      <k-block-title>Indeterminate State</k-block-title>
      <k-list [strong]="true" [inset]="true">
        <k-list-item [label]="true" [title]="'Movies'">
          <k-checkbox
            media
            component="div"
            [checked]="isAllMoviesSelected()"
            [indeterminate]="isSomeMoviesSelected()"
            (changed)="toggleMoviesAll()"
          ></k-checkbox>
          <div content>
            <ul class="ps-12">
              @for (movie of movieOptions; track movie) {
                <k-list-item [label]="true" [title]="movie">
                  <k-checkbox
                    media
                    component="div"
                    name="demo-checkbox"
                    [value]="movie"
                    [checked]="movies().includes(movie)"
                    (changed)="onMovieChange($event)"
                  ></k-checkbox>
                </k-list-item>
              }
            </ul>
          </div>
        </k-list-item>
      </k-list>

      <k-block-title>With Media Lists</k-block-title>
      <k-list [strong]="true" [inset]="true">
        @for (item of mediaItems; track item.id) {
          <k-list-item
            [label]="true"
            [title]="item.title"
            [after]="item.after"
            [subtitle]="item.subtitle"
            [text]="item.text"
          >
            <k-checkbox
              media
              component="div"
              name="demo-media-checkbox"
              [checked]="media().includes(item.id)"
              (changed)="toggleMediaValue(item.id)"
            ></k-checkbox>
          </k-list-item>
        }
      </k-list>
    </k-page>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent {
  readonly groupOptions = GROUP_OPTIONS;
  readonly movieOptions = MOVIE_OPTIONS;
  readonly mediaItems = MEDIA_ITEMS;

  readonly isPreview = computed(
    () =>
      typeof document !== 'undefined' &&
      document.location.href.includes('examplePreview')
  );

  readonly checked1 = signal(false);
  readonly checked2 = signal(true);

  readonly group = signal<GroupOption[]>(['Books']);
  readonly movies = signal<MovieOption[]>([MOVIE_OPTIONS[0]]);
  readonly media = signal<MediaItem['id'][]>([MEDIA_ITEMS[0].id]);

  readonly isAllMoviesSelected = computed(
    () => this.movies().length === this.movieOptions.length
  );
  readonly isSomeMoviesSelected = computed(() => {
    const count = this.movies().length;
    return count > 0 && count < this.movieOptions.length;
  });

  toggleChecked1(event: Event) {
    const target = this.getCheckboxTarget(event);
    if (!target) {
      return;
    }
    this.checked1.set(target.checked);
  }

  toggleChecked2(event: Event) {
    const target = this.getCheckboxTarget(event);
    if (!target) {
      return;
    }
    this.checked2.set(target.checked);
  }

  toggleGroupValue(value: GroupOption) {
    this.group.update((current) =>
      current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value]
    );
  }

  onMovieChange(event: Event) {
    const target = this.getCheckboxTarget(event);
    if (!target || !this.isMovieOption(target.value)) {
      return;
    }
    const { value, checked } = target;

    this.movies.update((current) => {
      const hasValue = current.includes(value);
      if (checked && !hasValue) {
        return [...current, value];
      }
      if (!checked && hasValue) {
        return current.filter((item) => item !== value);
      }
      return current;
    });
  }

  toggleMoviesAll() {
    this.movies.update((current) =>
      current.length === this.movieOptions.length ? [] : [...this.movieOptions]
    );
  }

  toggleMediaValue(value: MediaItem['id']) {
    this.media.update((current) =>
      current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value]
    );
  }

  back() {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  }

  private getCheckboxTarget(event: Event): HTMLInputElement | null {
    const { target } = event;
    return target instanceof HTMLInputElement ? target : null;
  }

  private isMovieOption(value: string): value is MovieOption {
    return this.movieOptions.includes(value as MovieOption);
  }
}
