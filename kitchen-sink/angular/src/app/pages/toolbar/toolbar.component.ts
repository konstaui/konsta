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
import { KToolbarComponent } from '../../../../../../src/angular/components/toolbar.component.js';
import { KToolbarPaneComponent } from '../../../../../../src/angular/components/toolbar-pane.component.js';
import { KLinkComponent } from '../../../../../../src/angular/components/link.component.js';
import { KBlockComponent } from '../../../../../../src/angular/components/block.component.js';
import { KButtonComponent } from '../../../../../../src/angular/components/button.component.js';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    CommonModule,
    KPageComponent,
    KNavbarComponent,
    KNavbarBackLinkComponent,
    KToolbarComponent,
    KToolbarPaneComponent,
    KLinkComponent,
    KBlockComponent,
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
    <k-page class="flex flex-col min-h-screen">
      <k-navbar title="Toolbar">
        <k-navbar-back-link
          left
          *ngIf="!isPreview()"
          (clicked)="back()"
        ></k-navbar-back-link>
      </k-navbar>

      <k-toolbar
        *ngIf="isTop()"
        top
        class="left-0 ios:top-safe-15 ios:mt-1 material:top-safe-16 sticky w-full"
      >
        <k-toolbar-pane>
          <k-link>Link 1</k-link>
          <k-link>Link 2</k-link>
        </k-toolbar-pane>
        <k-toolbar-pane>
          <k-link>Link 3</k-link>
        </k-toolbar-pane>
      </k-toolbar>

      <k-block [strong]="true" [inset]="true" class="space-y-4">
        <p>
          Toolbar supports both top and bottom positions. Click the following
          button to change its position.
        </p>
        <p>
          <k-button [rounded]="true" (clicked)="togglePosition()">
            Toggle Toolbar Position
          </k-button>
        </p>
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
          elementum tellus non, tortor. Pellentesque felis eros, dictum vitae
          lacinia quis, lobortis vitae ipsum. Cras vehicula bibendum lorem quis
          imperdiet.
        </p>
        <p>
          In hac habitasse platea dictumst. Etiam varius, ante vel ornare
          facilisis, velit massa rutrum dolor, ac porta magna magna lacinia
          nunc. Curabitur cursus laoreet. Aenean vel tempus augue. Pellentesque
          in imperdiet nibh. Mauris rhoncus nulla id sem suscipit volutpat.
          Pellentesque ac arcu in nisi viverra pulvinar. Nullam nulla orci,
          bibendum sed ligula non, ullamcorper iaculis mi. In hac habitasse
          platea dictumst. Praesent varius at nisl eu luctus. Cras aliquet porta
          est. Quisque elementum quis dui et consectetur. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed
          sed laoreet purus. Pellentesque eget ante ante.
        </p>
        <p>
          Duis et ultricies nibh. Sed facilisis turpis urna, ac imperdiet erat
          venenatis eu. Proin sit amet faucibus tortor, et varius sem. Etiam
          vitae lacinia neque. Aliquam nisi purus, interdum in arcu sed, ultrices
          rutrum arcu. Nulla mi turpis, consectetur vel enim quis, facilisis
          viverra dui. Aliquam quis convallis tortor, quis semper ligula. Morbi
          ullamcorper massa at accumsan. Etiam purus odio, posuere in ligula
          vitae, viverra ultricies justo. Vestibulum nec interdum nisi. Aenean
          ac consectetur velit, non malesuada magna. Sed pharetra vehicula
          augue, vel venenatis lectus gravida eget. Curabitur lacus tellus,
          venenatis eu arcu in, interdum auctor nunc. Nunc non metus neque.
          Suspendisse viverra lectus sed risus aliquet, vel accumsan dolor
          feugiat.
        </p>
      </k-block>

      <k-toolbar
        *ngIf="!isTop()"
        class="left-0 sticky bottom-0 w-full mt-auto"
      >
        <k-toolbar-pane>
          <k-link>Link 1</k-link>
          <k-link>Link 2</k-link>
        </k-toolbar-pane>
        <k-toolbar-pane>
          <k-link>Link 3</k-link>
        </k-toolbar-pane>
      </k-toolbar>
    </k-page>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent {
  readonly isPreview = computed(
    () =>
      typeof document !== 'undefined' &&
      document.location.href.includes('examplePreview')
  );

  readonly isTop = signal(false);

  togglePosition() {
    this.isTop.update((value) => !value);
  }

  back() {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  }
}
