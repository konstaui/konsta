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
import { KBlockComponent } from '../../../../../../src/angular/components/block.component.js';
import { KBlockTitleComponent } from '../../../../../../src/angular/components/block-title.component.js';
import { KListComponent } from '../../../../../../src/angular/components/list.component.js';
import { KListInputComponent } from '../../../../../../src/angular/components/list-input.component.js';
import { DemoIconComponent } from '../../components/demo-icon.component.js';

@Component({
  selector: 'app-form-inputs',
  standalone: true,
  imports: [
    CommonModule,
    KPageComponent,
    KNavbarComponent,
    KNavbarBackLinkComponent,
    KBlockComponent,
    KBlockTitleComponent,
    KListComponent,
    KListInputComponent,
    DemoIconComponent,
  ],
  template: `
    <k-page>
      <k-navbar title="Form Inputs">
        <k-navbar-back-link
          left
          *ngIf="!isPreview()"
          (clicked)="back()"
        ></k-navbar-back-link>
      </k-navbar>

      <k-block-title>Default</k-block-title>
      <k-list [insetIos]="true" [strongIos]="true">
        <k-list-input
          label="Name"
          placeholder="Your name"
        >
          <app-demo-icon media></app-demo-icon>
        </k-list-input>
        <k-list-input
          label="Password"
          type="password"
          placeholder="Your password"
        >
          <app-demo-icon media></app-demo-icon>
        </k-list-input>
        <k-list-input
          label="E-mail"
          type="email"
          placeholder="Your e-mail"
        >
          <app-demo-icon media></app-demo-icon>
        </k-list-input>
        <k-list-input label="URL" type="url" placeholder="URL">
          <app-demo-icon media></app-demo-icon>
        </k-list-input>
        <k-list-input label="Phone" type="tel" placeholder="Your phone number">
          <app-demo-icon media></app-demo-icon>
        </k-list-input>
        <k-list-input
          label="Gender"
          type="select"
          [dropdown]="true"
          [defaultValue]="'Male'"
          placeholder="Please choose..."
        >
          <app-demo-icon media></app-demo-icon>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </k-list-input>
        <k-list-input
          label="Birthday"
          type="date"
          [defaultValue]="'2014-04-30'"
          placeholder="Please choose..."
        >
          <app-demo-icon media></app-demo-icon>
        </k-list-input>
        <k-list-input
          label="Date time"
          type="datetime-local"
          placeholder="Please choose..."
        >
          <app-demo-icon media></app-demo-icon>
        </k-list-input>
        <k-list-input
          label="Textarea"
          type="textarea"
          placeholder="Bio"
          [inputClassName]="'!h-20 resize-none'"
        >
          <app-demo-icon media></app-demo-icon>
        </k-list-input>
      </k-list>

      <k-block-title>Outline</k-block-title>
      <k-list [insetIos]="true" [strongIos]="true">
        <k-list-input
          label="Name"
          placeholder="Your name"
          [outline]="true"
        >
          <app-demo-icon media></app-demo-icon>
        </k-list-input>
        <k-list-input
          label="Password"
          type="password"
          placeholder="Your password"
          [outline]="true"
        >
          <app-demo-icon media></app-demo-icon>
        </k-list-input>
        <k-list-input
          label="E-mail"
          type="email"
          placeholder="Your e-mail"
          [outline]="true"
        >
          <app-demo-icon media></app-demo-icon>
        </k-list-input>
        <k-list-input
          label="URL"
          type="url"
          placeholder="URL"
          [outline]="true"
        >
          <app-demo-icon media></app-demo-icon>
        </k-list-input>
        <k-list-input
          label="Phone"
          type="tel"
          placeholder="Your phone number"
          [outline]="true"
        >
          <app-demo-icon media></app-demo-icon>
        </k-list-input>
        <k-list-input
          label="Gender"
          type="select"
          [dropdown]="true"
          [outline]="true"
          [defaultValue]="'Male'"
          placeholder="Please choose..."
        >
          <app-demo-icon media></app-demo-icon>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </k-list-input>
        <k-list-input
          label="Birthday"
          type="date"
          [outline]="true"
          [defaultValue]="'2014-04-30'"
          placeholder="Please choose..."
        >
          <app-demo-icon media></app-demo-icon>
        </k-list-input>
        <k-list-input
          label="Date time"
          type="datetime-local"
          [outline]="true"
          placeholder="Please choose..."
        >
          <app-demo-icon media></app-demo-icon>
        </k-list-input>
        <k-list-input
          label="Textarea"
          type="textarea"
          placeholder="Bio"
          [outline]="true"
          [inputClassName]="'!h-20 resize-none'"
        >
          <app-demo-icon media></app-demo-icon>
        </k-list-input>
      </k-list>

      <k-block-title>Floating Labels</k-block-title>
      <k-list [insetIos]="true" [strongIos]="true">
        <k-list-input
          label="Name"
          placeholder="Your name"
          [floatingLabel]="true"
        >
          <app-demo-icon media></app-demo-icon>
        </k-list-input>
        <k-list-input
          label="Password"
          type="password"
          placeholder="Your password"
          [floatingLabel]="true"
        >
          <app-demo-icon media></app-demo-icon>
        </k-list-input>
        <k-list-input
          label="E-mail"
          type="email"
          placeholder="Your e-mail"
          [floatingLabel]="true"
        >
          <app-demo-icon media></app-demo-icon>
        </k-list-input>
        <k-list-input
          label="URL"
          type="url"
          placeholder="URL"
          [floatingLabel]="true"
        >
          <app-demo-icon media></app-demo-icon>
        </k-list-input>
        <k-list-input
          label="Phone"
          type="tel"
          placeholder="Your phone number"
          [floatingLabel]="true"
        >
          <app-demo-icon media></app-demo-icon>
        </k-list-input>
      </k-list>

      <k-block-title>Outline + Floating Labels</k-block-title>
      <k-list [insetIos]="true" [strongIos]="true">
        <k-list-input
          label="Name"
          placeholder="Your name"
          [floatingLabel]="true"
          [outline]="true"
        >
          <app-demo-icon media></app-demo-icon>
        </k-list-input>
        <k-list-input
          label="Password"
          type="password"
          placeholder="Your password"
          [floatingLabel]="true"
          [outline]="true"
        >
          <app-demo-icon media></app-demo-icon>
        </k-list-input>
        <k-list-input
          label="E-mail"
          type="email"
          placeholder="Your e-mail"
          [floatingLabel]="true"
          [outline]="true"
        >
          <app-demo-icon media></app-demo-icon>
        </k-list-input>
        <k-list-input
          label="URL"
          type="url"
          placeholder="URL"
          [floatingLabel]="true"
          [outline]="true"
        >
          <app-demo-icon media></app-demo-icon>
        </k-list-input>
        <k-list-input
          label="Phone"
          type="tel"
          placeholder="Your phone number"
          [floatingLabel]="true"
          [outline]="true"
        >
          <app-demo-icon media></app-demo-icon>
        </k-list-input>
      </k-list>

      <k-block-title>Validation + Additional Info</k-block-title>
      <k-list [insetIos]="true" [strongIos]="true">
        <k-list-input
          label="Name"
          placeholder="Your name"
          [value]="name().value"
          [error]="name().changed && !name().value.trim() ? 'Please specify your name' : ''"
          info="Basic string checking"
          (input)="onNameChange($event)"
        >
          <app-demo-icon media></app-demo-icon>
        </k-list-input>
      </k-list>

      <k-block-title>Clear Button</k-block-title>
      <k-list [insetIos]="true" [strongIos]="true">
        <k-list-input
          label="TV Show"
          placeholder="Your favorite TV show"
          info="Type something to see clear button"
          [value]="demoValue()"
          [clearButton]="demoValue().length > 0"
          (input)="onDemoValueChange($event)"
          (clear)="onDemoValueClear()"
        >
          <app-demo-icon media></app-demo-icon>
        </k-list-input>
      </k-list>

      <k-block-title>Icon + Input</k-block-title>
      <k-list [insetIos]="true" [strongIos]="true">
        <k-list-input placeholder="Your name">
          <app-demo-icon media></app-demo-icon>
        </k-list-input>
        <k-list-input type="password" placeholder="Your password">
          <app-demo-icon media></app-demo-icon>
        </k-list-input>
        <k-list-input type="email" placeholder="Your e-mail">
          <app-demo-icon media></app-demo-icon>
        </k-list-input>
        <k-list-input type="url" placeholder="URL">
          <app-demo-icon media></app-demo-icon>
        </k-list-input>
      </k-list>

      <k-block-title>Label + Input</k-block-title>
      <k-list [insetIos]="true" [strongIos]="true">
        <k-list-input label="Name" placeholder="Your name" />
        <k-list-input
          label="Password"
          type="password"
          placeholder="Your password"
        />
        <k-list-input label="E-mail" type="email" placeholder="Your e-mail" />
        <k-list-input label="URL" type="url" placeholder="URL" />
      </k-list>

      <k-block-title>Only Inputs</k-block-title>
      <k-list [insetIos]="true" [strongIos]="true">
        <k-list-input placeholder="Your name" />
        <k-list-input type="password" placeholder="Your password" />
        <k-list-input type="email" placeholder="Your e-mail" />
        <k-list-input type="url" placeholder="URL" />
      </k-list>

      <k-block-title>Inputs + Additional Info</k-block-title>
      <k-list [insetIos]="true" [strongIos]="true">
        <k-list-input placeholder="Your name" info="Full name please" />
        <k-list-input
          type="password"
          placeholder="Your password"
          info="8 characters minimum"
        />
        <k-list-input
          type="email"
          placeholder="Your e-mail"
          info="Your work e-mail address"
        />
        <k-list-input
          type="url"
          placeholder="URL"
          info="Your website URL"
        />
      </k-list>
    </k-page>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormInputsComponent {
  readonly isPreview = computed(
    () =>
      typeof document !== 'undefined' &&
      document.location.href.includes('examplePreview')
  );

  readonly name = signal({ value: '', changed: false });
  readonly demoValue = signal('');

  onNameChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.name.set({ value, changed: true });
  }

  onDemoValueChange(event: Event) {
    this.demoValue.set((event.target as HTMLInputElement).value);
  }

  onDemoValueClear() {
    this.demoValue.set('');
  }

  back() {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  }
}
