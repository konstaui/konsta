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
import { KLinkComponent } from '../../../../../../src/angular/components/link.component.js';
import { KBlockComponent } from '../../../../../../src/angular/components/block.component.js';
import { KBlockTitleComponent } from '../../../../../../src/angular/components/block-title.component.js';
import { KBlockHeaderComponent } from '../../../../../../src/angular/components/block-header.component.js';
import { KListComponent } from '../../../../../../src/angular/components/list.component.js';
import { KListItemComponent } from '../../../../../../src/angular/components/list-item.component.js';
import { KRadioComponent } from '../../../../../../src/angular/components/radio.component.js';
import { KToggleComponent } from '../../../../../../src/angular/components/toggle.component.js';

type NavbarSize = 'Default' | 'Medium' | 'Large';

@Component({
  selector: 'app-navbar',
  imports: [
    CommonModule,
    KPageComponent,
    KNavbarComponent,
    KNavbarBackLinkComponent,
    KLinkComponent,
    KBlockComponent,
    KBlockTitleComponent,
    KBlockHeaderComponent,
    KListComponent,
    KListItemComponent,
    KRadioComponent,
    KToggleComponent,
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
      <k-navbar
        title="Navbar"
        subtitle="Subtitle"
        class="top-0 sticky"
        [medium]="size() === 'Medium'"
        [large]="size() === 'Large'"
        [transparent]="isTransparent()"
      >
        @if (!isPreview()) {
          <k-navbar-back-link left (clicked)="back()"></k-navbar-back-link>
        }
        <k-link right>Right</k-link>
      </k-navbar>
      <div class="relative">
        <k-block [strong]="true" [inset]="true">
          <p>
            Navbar is a fixed area at the top of a screen that contains Page
            title and navigation elements.
          </p>
        </k-block>

        <k-block-title>Size</k-block-title>
        <k-block-header>
          Medium and Large will collapse to usual size on page scroll
        </k-block-header>
        <k-list [strong]="true" [inset]="true">
          @for (option of sizeOptions; track option) {
            <k-list-item [label]="true" [title]="option" [after]="radioTpl"></k-list-item>

            <ng-template #radioTpl>
              <k-radio
                component="div"
                [value]="option"
                [checked]="size() === option"
                (changed)="setSize(option)"
              ></k-radio>
            </ng-template>
          }
        </k-list>

        <k-block-title>Transparent</k-block-title>
        <k-block-header>
          When navbar is transparent, its title and background will become
          visible on page scroll
        </k-block-header>
        <k-list [strong]="true" [inset]="true">
          <k-list-item [label]="true" [title]="'Transparent'" [after]="transparentToggleTpl"></k-list-item>

          <ng-template #transparentToggleTpl>
            <k-toggle
              component="div"
              [checked]="isTransparent()"
              (changed)="toggleTransparent()"
            ></k-toggle>
          </ng-template>
        </k-list>

        <k-block [strong]="true" [inset]="true" class="space-y-4">
          @for (paragraph of paragraphs; track paragraph) {
            <p>
              {{ paragraph }}
            </p>
          }
        </k-block>
      </div>
    </k-page>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  readonly isPreview = computed(
    () =>
      typeof document !== 'undefined' &&
      document.location.href.includes('examplePreview')
  );

  readonly size = signal<NavbarSize>('Default');
  readonly isTransparent = signal(false);

  readonly sizeOptions: readonly NavbarSize[] = [
    'Default',
    'Medium',
    'Large',
  ];

  readonly paragraphs: readonly string[] = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tempore ratione unde accusantium distinctio nulla quia numquam earum odio, optio, nisi rem deserunt. Molestiae delectus, ut assumenda numquam magni enim.',
    'Architecto molestias cum dolor dolorem provident consequuntur incidunt sunt fugiat tenetur odio, recusandae placeat rem veniam. Voluptates, repellendus odit, magni nesciunt, optio laborum asperiores repudiandae consectetur suscipit ab cupiditate eum.',
    'Aliquam, iste accusamus deleniti temporibus exercitationem neque perferendis optio, blanditiis quisquam molestias perspiciatis cumque harum tenetur veniam. Dolorum fugit doloribus est, deserunt, eligendi, quaerat quidem itaque tempore laborum non illum?',
    'Rerum magni sunt quis veniam, dolor ratione saepe ducimus tempore voluptatum porro quod commodi? Aperiam laudantium deleniti totam dolorum qui accusantium iste saepe facere optio, soluta maxime mollitia deserunt cumque.',
    'Iusto tempore quis provident, saepe illum ex ipsum cupiditate explicabo ratione unde facere nemo delectus harum, blanditiis eius sit asperiores nam. Aut cupiditate est tempore officia, perspiciatis esse asperiores repudiandae?',
    'Consequuntur itaque harum eos vero, reiciendis dolorum iure non earum molestias tenetur sint enim, maxime recusandae ad perferendis repudiandae! Sit, quos exercitationem beatae numquam laborum nobis natus. Obcaecati, ea inventore.',
    'Fugit culpa labore sapiente excepturi reiciendis, nulla, nihil neque ut veritatis quis quibusdam dolorum? Voluptatibus animi officia perspiciatis doloremque cum voluptatem, quia ratione modi vero, consequatur ipsum, praesentium quibusdam amet?',
    'Laudantium nihil sint nam placeat, nemo rerum ipsam explicabo iusto dolores molestiae expedita eos consequuntur ut architecto consequatur soluta ad maiores voluptatem tenetur in velit. Minima quia molestiae nobis voluptatibus.',
    'Expedita soluta quia inventore et placeat id exercitationem quisquam eligendi est eius sapiente quo, cum nesciunt mollitia, sit veniam ducimus tempora culpa adipisci commodi in autem nihil voluptatem corporis? Perspiciatis.',
    'Molestias, est? Eligendi vero distinctio voluptatem cumque id voluptatibus, officia minima repellendus sit illo tempora labore provident? Eum tenetur consectetur quae, in facilis autem ipsam doloribus voluptate vitae suscipit nobis.',
    'Obcaecati optio iste hic, soluta minus ullam, perferendis pariatur non possimus autem nostrum libero sapiente. Corporis quo cum iusto exercitationem velit. Non beatae eveniet asperiores ipsa consequuntur temporibus sapiente earum!',
    'Temporibus, omnis. Excepturi dolorum expedita laudantium quasi quod id adipisci, esse, nam atque in, incidunt ex ab distinctio repellendus beatae voluptatem alias odit illum quis. Illo numquam voluptatibus error voluptatum!',
  ];

  setSize(option: NavbarSize) {
    this.size.set(option);
  }

  toggleTransparent() {
    this.isTransparent.update((value) => !value);
  }

  back() {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  }
}
