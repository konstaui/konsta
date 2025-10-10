import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { KPageComponent } from '../../../../../../src/angular/components/page.component.js';
import { KNavbarComponent } from '../../../../../../src/angular/components/navbar.component.js';
import { KNavbarBackLinkComponent } from '../../../../../../src/angular/components/navbar-back-link.component.js';
import { KBlockComponent } from '../../../../../../src/angular/components/block.component.js';
import { KBlockTitleComponent } from '../../../../../../src/angular/components/block-title.component.js';
import { KSegmentedComponent } from '../../../../../../src/angular/components/segmented.component.js';
import { KSegmentedButtonComponent } from '../../../../../../src/angular/components/segmented-button.component.js';

@Component({
  selector: 'app-subnavbar',
  standalone: true,
  imports: [
    CommonModule,
    KPageComponent,
    KNavbarComponent,
    KNavbarBackLinkComponent,
    KBlockComponent,
    KBlockTitleComponent,
    KSegmentedComponent,
    KSegmentedButtonComponent,
  ],
  template: `
    <k-page>
      <k-navbar title="Subnavbar" [subnavbar]="true">
        <k-navbar-back-link
          left
          *ngIf="!isPreview()"
          (clicked)="back()"
        ></k-navbar-back-link>
        <div subnavbar>
          <k-segmented [strong]="true" [rounded]="true">
            <k-segmented-button [active]="true">Button</k-segmented-button>
            <k-segmented-button>Button</k-segmented-button>
            <k-segmented-button>Button</k-segmented-button>
          </k-segmented>
        </div>
      </k-navbar>

      <div class="relative">
        <k-block [strong]="true" [inset]="true">
          <p>
            Subnavbar is useful when you need to put any additional elements
            into Navbar, like Tab Links or Search Bar. It also remains visible
            when Navbar hidden.
          </p>
        </k-block>
        <k-block [strong]="true" [inset]="true" class="space-y-4">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
            consequuntur numquam quia labore eligendi asperiores obcaecati neque
            sapiente fugit vel praesentium accusantium, earum corporis officiis
            tempora est delectus fugiat laudantium?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            possimus, magni excepturi molestias consequatur commodi nihil velit
            quo odit adipisci voluptatibus quam fugit nesciunt repellat
            accusantium libero repudiandae consectetur alias!
          </p>
          <p>
            Nihil unde iusto ab animi eum? Quia natus provident fugit, molestias
            ea numquam qui distinctio ex perferendis fuga! Fugit voluptates
            obcaecati ipsa recusandae eos saepe ducimus repudiandae. Explicabo,
            fuga obcaecati!
          </p>
          <p>
            Neque voluptas eius, quod consequatur officia dolor sunt
            cupiditate, animi commodi cumque nam ex totam autem ipsum doloribus!
            Possimus eligendi unde provident, esse molestias amet minus!
            Laboriosam veniam alias eum.
          </p>
          <p>
            Dicta obcaecati, architecto at ducimus suscipit dolor ea praesentium
            sint? Deleniti ipsam magni dolorem amet quibusdam temporibus
            pariatur suscipit voluptas, quas harum nesciunt culpa facere
            consequuntur id et accusamus exercitationem!
          </p>
          <p>
            Officiis, quibusdam reprehenderit corporis non nisi debitis magnam.
            Deleniti, recusandae iusto repellendus dicta magni exercitationem
            labore natus reiciendis sapiente error dolorum necessitatibus maxime
            laborum esse suscipit praesentium ratione. Ex, in.
          </p>
        </k-block>
      </div>
    </k-page>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubnavbarComponent {
  readonly isPreview = computed(
    () =>
      typeof document !== 'undefined' &&
      document.location.href.includes('examplePreview')
  );

  back() {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  }
}
