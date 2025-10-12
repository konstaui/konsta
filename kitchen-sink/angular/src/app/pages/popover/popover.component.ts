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
import { KPopoverComponent } from '../../../../../../src/angular/components/popover.component.js';
import { KBlockComponent } from '../../../../../../src/angular/components/block.component.js';
import { KLinkComponent } from '../../../../../../src/angular/components/link.component.js';
import { KButtonComponent } from '../../../../../../src/angular/components/button.component.js';
import { KListComponent } from '../../../../../../src/angular/components/list.component.js';
import { KListItemComponent } from '../../../../../../src/angular/components/list-item.component.js';

@Component({
  selector: 'app-popover',
  imports: [
    CommonModule,
    KPageComponent,
    KNavbarComponent,
    KNavbarBackLinkComponent,
    KPopoverComponent,
    KBlockComponent,
    KLinkComponent,
    KButtonComponent,
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
      <k-navbar title="Popover">
        @if (!isPreview()) {
          <k-navbar-back-link left (clicked)="back()"></k-navbar-back-link>
        }
        <k-link
          [navbar]="true"
          right
          class="popover-navbar-link"
          (clicked)="openPopover('.popover-navbar-link')"
        >
          Popover
        </k-link>
      </k-navbar>

      <k-block [strong]="true" [inset]="true" class="space-y-4">
        <k-button
          [rounded]="true"
          class="popover-button"
          (clicked)="openPopover('.popover-button')"
        >
          Open popover on me
        </k-button>
      </k-block>

      <k-block [strong]="true" [inset]="true" class="space-y-4">
        <p>
          Mauris fermentum neque et luctus venenatis. Vivamus a sem rhoncus,
          ornare tellus eu, euismod mauris. In porta turpis at semper convallis.
          Duis adipiscing leo eu nulla lacinia, quis rhoncus metus condimentum.
          Etiam nec malesuada nibh. Maecenas quis lacinia nisl, vel posuere
          dolor. Vestibulum condimentum, nisl ac vulputate egestas, neque enim
          dignissim elit, rhoncus volutpat magna enim a est. Aenean sit amet
          ligula neque. Cras suscipit rutrum enim. Nam a odio facilisis,
          elementum tellus non,
          <k-link
            class="popover-link-1"
            (clicked)="openPopover('.popover-link-1')"
          >
            popover
          </k-link>
          tortor. Pellentesque felis eros, dictum vitae lacinia quis, lobortis
          vitae ipsum. Cras vehicula bibendum lorem quis imperdiet.
        </p>
        <p>
          In hac habitasse platea dictumst. Etiam varius, ante vel ornare
          facilisis, velit massa rutrum dolor, ac porta magna magna lacinia
          nunc. Curabitur
          <k-link
            class="popover-link-2"
            (clicked)="openPopover('.popover-link-2')"
          >
            popover!
          </k-link>
          cursus laoreet. Aenean vel tempus augue. Pellentesque in imperdiet
          nibh. Mauris rhoncus nulla id sem suscipit volutpat. Pellentesque ac
          arcu in nisi viverra pulvinar. Nullam nulla orci, bibendum sed ligula
          non, ullamcorper iaculis mi. In hac habitasse platea dictumst. Praesent
          varius at nisl eu luctus. Cras aliquet porta est. Quisque elementum
          quis dui et consectetur. Cum sociis natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Sed sed laoreet purus.
          Pellentesque eget ante ante.
        </p>
        <p>
          Duis et ultricies nibh. Sed facilisis turpis urna, ac imperdiet erat
          venenatis eu. Proin sit amet faucibus tortor, et varius sem. Etiam
          vitae lacinia neque. Aliquam nisi purus, interdum in arcu sed,
          ultrices rutrum arcu. Nulla mi turpis, consectetur vel enim quis,
          facilisis viverra dui. Aliquam quis convallis tortor, quis semper
          ligula. Morbi ullamcorper
          <k-link
            class="popover-link-3"
            (clicked)="openPopover('.popover-link-3')"
          >
            one more popover
          </k-link>
          massa at accumsan. Etiam purus odio, posuere in ligula vitae, viverra
          ultricies justo. Vestibulum nec interdum nisi. Aenean ac consectetur
          velit, non malesuada magna. Sed pharetra vehicula augue, vel venenatis
          lectus gravida eget. Curabitur lacus tellus, venenatis eu arcu in,
          interdum auctor nunc. Nunc non metus neque. Suspendisse viverra lectus
          sed risus aliquet, vel accumsan dolor feugiat.
        </p>
      </k-block>

      <k-popover
        [opened]="popoverOpened()"
        [target]="popoverTarget()"
        (backdropClick)="closePopover()"
      >
        <k-list [nested]="true">
          @for (item of popoverItems; track item) {
            <k-list-item
              [title]="item"
              [link]="true"
              (click)="closePopover()"
            ></k-list-item>
          }
        </k-list>
      </k-popover>
    </k-page>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopoverComponent {
  readonly isPreview = computed(
    () =>
      typeof document !== 'undefined' &&
      document.location.href.includes('examplePreview')
  );

  readonly popoverOpened = signal(false);
  readonly popoverTarget = signal<string | HTMLElement | null>(null);

  readonly popoverItems = [
    'Item 1',
    'List Item 2',
    'Item 3',
    'List Item 4',
    'Item 5',
  ];

  openPopover(target: string | HTMLElement) {
    this.popoverTarget.set(target);
    this.popoverOpened.set(true);
  }

  closePopover() {
    this.popoverOpened.set(false);
  }

  back() {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  }
}
