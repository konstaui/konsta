import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { KPageComponent } from '../../../../../../src/angular/components/page.component.js';
import { KNavbarComponent } from '../../../../../../src/angular/components/navbar.component.js';
import { KNavbarBackLinkComponent } from '../../../../../../src/angular/components/navbar-back-link.component.js';
import { KFabComponent } from '../../../../../../src/angular/components/fab.component.js';
import { KBlockComponent } from '../../../../../../src/angular/components/block.component.js';
import { ThemeService } from '../../shared/theme.service';

@Component({
  selector: 'app-fab',
  imports: [
    CommonModule,
    KPageComponent,
    KNavbarComponent,
    KNavbarBackLinkComponent,
    KFabComponent,
    KBlockComponent,
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
      <k-navbar title="FAB">
        @if (!isPreview()) {
          <k-navbar-back-link left (clicked)="back()"></k-navbar-back-link>
        }
      </k-navbar>

      <k-fab
        class="fixed right-safe-4 ios:top-safe-19 material:top-safe-18 z-20 k-color-brand-red"
        [icon]="plusIconTpl"
      ></k-fab>

      <k-fab class="fixed right-safe-4 bottom-safe-4 z-20" [icon]="plusIconTpl"></k-fab>

      <k-fab class="fixed left-safe-4 bottom-safe-4 z-20 k-color-brand-green" [icon]="plusIconTpl"></k-fab>

      <k-fab
        class="fixed left-safe-4 ios:top-safe-19 material:top-safe-18 z-20 k-color-brand-yellow"
        [icon]="plusIconTpl"
      ></k-fab>

      <k-fab
        class="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
        [icon]="plusIconTpl"
      ></k-fab>

      <k-fab
        class="fixed left-1/2 bottom-safe-4 transform -translate-x-1/2 z-20"
        [text]="'Create'"
        [textPosition]="'after'"
        [icon]="plusIconTpl"
      ></k-fab>

      <ng-template #plusIconTpl>
        @if (isIos()) {
          <svg
            class="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5V19"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M5 12H19"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        } @else {
          <svg
            class="w-6 h-6"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z" />
          </svg>
        }
      </ng-template>

      <k-block [strong]="true" [inset]="true" class="space-y-4">
        @for (paragraph of primaryParagraphs; track paragraph) {
          <p>
            {{ paragraph }}
          </p>
        }
      </k-block>

      <k-block [strong]="true" [inset]="true" class="space-y-4">
        @for (paragraph of secondaryParagraphs; track paragraph) {
          <p>
            {{ paragraph }}
          </p>
        }
      </k-block>
    </k-page>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FabComponent {
  private readonly themeService = inject(ThemeService);

  readonly isPreview = computed(
    () =>
      typeof document !== 'undefined' &&
      document.location.href.includes('examplePreview')
  );

  readonly isIos = computed(() => this.themeService.theme() === 'ios');

  readonly primaryParagraphs: readonly string[] = [
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, quo rem beatae, delectus eligendi est saepe molestias perferendis suscipit, commodi labore ipsa non quasi eum magnam neque ducimus! Quasi, numquam.',
    'Maiores culpa, itaque! Eaque natus ab cum ipsam numquam blanditiis a, quia, molestiae aut laudantium recusandae ipsa. Ad iste ex asperiores ipsa, mollitia perferendis consectetur quam eaque, voluptate laboriosam unde.',
    'Sed odit quis aperiam temporibus vitae necessitatibus, laboriosam, exercitationem dolores odio sapiente provident. Accusantium id, itaque aliquam libero ipsum eos fugiat distinctio laboriosam exercitationem sequi facere quas quidem magnam reprehenderit.',
    'Pariatur corporis illo, amet doloremque. Ab veritatis sunt nisi consectetur error modi, nam illo et nostrum quia aliquam ipsam vitae facere voluptates atque similique odit mollitia, rerum placeat nobis est.',
    'Et impedit soluta minus a autem adipisci cupiditate eius dignissimos nihil officia dolore voluptatibus aperiam reprehenderit esse facilis labore qui, officiis consectetur. Ipsa obcaecati aspernatur odio assumenda veniam, ipsum alias.',
  ];

  readonly secondaryParagraphs: readonly string[] = [
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa ipsa debitis sed nihil eaque dolore cum iste quibusdam, accusamus doloribus, tempora quia quos voluptatibus corporis officia at quas dolorem earum!',
    'Quod soluta eos inventore magnam suscipit enim at hic in maiores temporibus pariatur tempora minima blanditiis vero autem est perspiciatis totam dolorum, itaque repellat? Nobis necessitatibus aut odit aliquam adipisci.',
    'Tenetur delectus perspiciatis ex numquam, unde corrupti velit! Quam aperiam, animi fuga veritatis consectetur, voluptatibus atque consequuntur dignissimos itaque, sint impedit cum cumque at. Adipisci sint, iusto blanditiis ullam? Vel?',
    'Dignissimos velit officia quibusdam! Eveniet beatae, aut, omnis temporibus consequatur expedita eaque aliquid quos accusamus fugiat id iusto autem obcaecati repellat fugit cupiditate suscipit natus quas doloribus? Temporibus necessitatibus, libero.',
    'Architecto quisquam ipsa fugit facere, repudiandae asperiores vitae obcaecati possimus, labore excepturi reprehenderit consectetur perferendis, ullam quidem hic, repellat fugiat eaque fuga. Consectetur in eveniet, deleniti recusandae omnis eum quas?',
    'Quos nulla consequatur quo, officia quaerat. Nulla voluptatum, assumenda quibusdam, placeat cum aut illo deleniti dolores commodi odio ipsam, recusandae est pariatur veniam repudiandae blanditiis. Voluptas unde deleniti quisquam, nobis?',
    'Atque qui quaerat quasi officia molestiae, molestias totam incidunt reprehenderit laboriosam facilis veritatis, non iusto! Dolore ipsam obcaecati voluptates minima maxime minus qui mollitia facere. Nostrum esse recusandae voluptatibus eligendi.',
  ];

  back() {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  }
}
