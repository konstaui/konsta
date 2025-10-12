import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { KPageComponent } from '../../../../../../src/angular/components/page.component.js';
import { KNavbarComponent } from '../../../../../../src/angular/components/navbar.component.js';
import { KNavbarBackLinkComponent } from '../../../../../../src/angular/components/navbar-back-link.component.js';
import { KBlockTitleComponent } from '../../../../../../src/angular/components/block-title.component.js';
import { KCardComponent } from '../../../../../../src/angular/components/card.component.js';
import { KListComponent } from '../../../../../../src/angular/components/list.component.js';
import { KListItemComponent } from '../../../../../../src/angular/components/list-item.component.js';
import { KLinkComponent } from '../../../../../../src/angular/components/link.component.js';
import { KButtonComponent } from '../../../../../../src/angular/components/button.component.js';

@Component({
  selector: 'app-cards',
  imports: [
    CommonModule,
    KPageComponent,
    KNavbarComponent,
    KNavbarBackLinkComponent,
    KBlockTitleComponent,
    KCardComponent,
    KListComponent,
    KListItemComponent,
    KLinkComponent,
    KButtonComponent,
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
      <k-navbar title="Cards">
        @if (!isPreview()) {
          <k-navbar-back-link left (clicked)="back()"></k-navbar-back-link>
        }
      </k-navbar>

      <k-block-title>Simple Cards</k-block-title>
      <k-card>
        This is a simple card with plain text, but cards can also contain their
        own header, footer, list view, image, or any other element.
      </k-card>
      <k-card header="Card header" footer="Card footer">
        Card with header and footer. Card headers are used to display card
        titles and footers for additional information or just for custom
        actions.
      </k-card>
      <k-card>
        Another card. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Suspendisse feugiat sem est, non tincidunt ligula volutpat sit amet.
        Mauris aliquet magna justo.
      </k-card>

      <k-block-title>Outline Cards</k-block-title>
      <k-card [outline]="true">
        This is a simple card with plain text, but cards can also contain their
        own header, footer, list view, image, or any other element.
      </k-card>
      <k-card [outline]="true" header="Card header" footer="Card footer">
        Card with header and footer. Card headers are used to display card
        titles and footers for additional information or just for custom
        actions.
      </k-card>
      <k-card [outline]="true">
        Another card. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Suspendisse feugiat sem est, non tincidunt ligula volutpat sit amet.
        Mauris aliquet magna justo.
      </k-card>

      <k-block-title>Outline With Dividers</k-block-title>
      <k-card
        [outline]="true"
        header="Card header"
        footer="Card footer"
        [headerDivider]="true"
        [footerDivider]="true"
      >
        Card with header and footer. Card headers are used to display card
        titles and footers for additional information or just for custom
        actions.
      </k-card>

      <k-block-title>Raised Cards</k-block-title>
      <k-card [raised]="true">
        This is a simple card with plain text, but cards can also contain their
        own header, footer, list view, image, or any other element.
      </k-card>
      <k-card [raised]="true" header="Card header" footer="Card footer">
        Card with header and footer. Card headers are used to display card
        titles and footers for additional information or just for custom
        actions.
      </k-card>
      <k-card [raised]="true">
        Another card. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Suspendisse feugiat sem est, non tincidunt ligula volutpat sit amet.
        Mauris aliquet magna justo.
      </k-card>

      <k-block-title>Card With List View</k-block-title>
      <k-card>
        <k-list [nested]="true" class="-m-4">
          <k-list-item [link]="true" [title]="'Link 1'"></k-list-item>
          <k-list-item [link]="true" [title]="'Link 2'"></k-list-item>
          <k-list-item [link]="true" [title]="'Link 3'"></k-list-item>
          <k-list-item [link]="true" [title]="'Link 4'"></k-list-item>
          <k-list-item [link]="true" [title]="'Link 5'"></k-list-item>
        </k-list>
      </k-card>

      <k-block-title>Styled Cards</k-block-title>
      <div class="lg:grid lg:grid-cols-2">
        <k-card [outline]="true">
          <div
            class="ios:-mx-4 ios:-mt-4 h-48 p-4 flex items-end text-white ios:font-bold bg-cover bg-center material:rounded-xl mb-4 material:text-[22px]"
            [style.backgroundImage]="natureImage"
          >
            Journey To Mountains
          </div>
          <div class="text-gray-500 mb-3">Posted on January 21, 2021</div>
          <p>
            Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies
            efficitur vitae non felis. Phasellus quis nibh hendrerit...
          </p>

          <div footer>
            <div class="flex justify-between material:hidden">
              <k-link>Like</k-link>
              <k-link>Read more</k-link>
            </div>
            <div class="flex justify-start ios:hidden space-x-2 rtl:space-x-reverse">
              <k-button [rounded]="true" [inline]="true">Like</k-button>
              <k-button [rounded]="true" [inline]="true" [outline]="true">
                Read more
              </k-button>
            </div>
          </div>
        </k-card>
        <k-card>
          <div
            class="ios:-mx-4 ios:-mt-4 h-48 p-4 flex items-end text-white ios:font-bold bg-cover bg-center material:rounded-xl mb-4 material:text-[22px]"
            [style.backgroundImage]="peopleImage"
          >
            Journey To Mountains
          </div>
          <div class="text-gray-500 mb-3">Posted on January 21, 2021</div>
          <p>
            Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies
            efficitur vitae non felis. Phasellus quis nibh hendrerit...
          </p>

          <div footer>
            <div class="flex justify-between material:hidden">
              <k-link>Like</k-link>
              <k-link>Read more</k-link>
            </div>
            <div class="flex justify-start ios:hidden space-x-2 rtl:space-x-reverse">
              <k-button [rounded]="true" [inline]="true">Like</k-button>
              <k-button [rounded]="true" [inline]="true" [outline]="true">
                Read more
              </k-button>
            </div>
          </div>
        </k-card>
      </div>
    </k-page>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardsComponent {
  readonly isPreview = computed(
    () =>
      typeof document !== 'undefined' &&
      document.location.href.includes('examplePreview')
  );

  readonly natureImage = "url('https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg')";
  readonly peopleImage = "url('https://cdn.framework7.io/placeholder/people-1000x600-3.jpg')";

  back() {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  }
}
