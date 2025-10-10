import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { KPageComponent } from '../../../../../../src/angular/components/page.component.js';
import { KNavbarComponent } from '../../../../../../src/angular/components/navbar.component.js';
import { KNavbarBackLinkComponent } from '../../../../../../src/angular/components/navbar-back-link.component.js';
import { KBlockTitleComponent } from '../../../../../../src/angular/components/block-title.component.js';
import { KBlockComponent } from '../../../../../../src/angular/components/block.component.js';
import { KListComponent } from '../../../../../../src/angular/components/list.component.js';
import { KListItemComponent } from '../../../../../../src/angular/components/list-item.component.js';
import { KBadgeComponent } from '../../../../../../src/angular/components/badge.component.js';
import { KChevronIconComponent } from '../../../../../../src/angular/components/icons/chevron-icon.component.js';
import { DemoIconComponent } from '../../components/demo-icon.component.js';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    KPageComponent,
    KNavbarComponent,
    KNavbarBackLinkComponent,
    KBlockTitleComponent,
    KBlockComponent,
    KListComponent,
    KListItemComponent,
    KBadgeComponent,
    KChevronIconComponent,
    DemoIconComponent,
  ],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  readonly longText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus.';

  readonly demoIconSrc = new URL('../../images/demo-icon.png', import.meta.url).href;

  readonly songs = [
    {
      title: 'Yellow Submarine',
      artist: 'Beatles',
      price: '$15',
      image: 'https://cdn.framework7.io/placeholder/people-160x160-1.jpg',
    },
    {
      title: "Don't Stop Me Now",
      artist: 'Queen',
      price: '$22',
      image: 'https://cdn.framework7.io/placeholder/people-160x160-2.jpg',
    },
    {
      title: 'Billie Jean',
      artist: 'Michael Jackson',
      price: '$16',
      image: 'https://cdn.framework7.io/placeholder/people-160x160-3.jpg',
    },
  ];

  readonly mailItems = [
    {
      title: 'Facebook',
      subtitle: 'New messages from John Doe',
      time: '17:14',
    },
    {
      title: 'John Doe (via Twitter)',
      subtitle: 'John Doe (@_johndoe) mentioned you on Twitter!',
      time: '17:11',
    },
    {
      title: 'Facebook',
      subtitle: 'New messages from John Doe',
      time: '16:48',
    },
    {
      title: 'John Doe (via Twitter)',
      subtitle: 'John Doe (@_johndoe) mentioned you on Twitter!',
      time: '15:32',
    },
  ];

  readonly groupedNames = [
    {
      title: 'A',
      items: ['Aaron', 'Abbie', 'Adam'],
    },
    {
      title: 'B',
      items: ['Bailey', 'Barclay', 'Bartolo'],
    },
    {
      title: 'C',
      items: ['Caiden', 'Calvin', 'Candy'],
    },
  ];

  back() {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  }
}
