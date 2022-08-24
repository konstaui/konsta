import React, { useState } from 'react';
import {
  Page,
  Navbar,
  NavbarBackLink,
  BlockTitle,
  List,
  ListInput,
} from 'konsta/react';

import DemoIcon from '../components/DemoIcon';

export default function FormInputsPage() {
  const isPreview = document.location.href.includes('examplePreview');
  const [name, setName] = useState({ value: '', changed: false });
  const [demoValue, setDemoValue] = useState('');

  const onNameChange = (e) => {
    setName({ value: e.target.value, changed: true });
  };
  const onDemoValueChange = (e) => {
    setDemoValue(e.target.value);
  };
  const onDemoValueClear = () => {
    setDemoValue('');
  };
  return (
    <Page>
      <Navbar
        title="Form Inputs"
        left={!isPreview && <NavbarBackLink onClick={() => history.back()} />}
      />

      <BlockTitle>Default</BlockTitle>
      <List strongIos insetIos>
        <ListInput
          label="Name"
          type="text"
          placeholder="Your name"
          media={<DemoIcon />}
        />

        <ListInput
          label="Password"
          type="password"
          placeholder="Your password"
          media={<DemoIcon />}
        />

        <ListInput
          label="E-mail"
          type="email"
          placeholder="Your e-mail"
          media={<DemoIcon />}
        />

        <ListInput
          label="URL"
          type="url"
          placeholder="URL"
          media={<DemoIcon />}
        />

        <ListInput
          label="Phone"
          type="tel"
          placeholder="Your phone number"
          media={<DemoIcon />}
        />

        <ListInput
          label="Gender"
          type="select"
          dropdown
          defaultValue="Male"
          placeholder="Please choose..."
          media={<DemoIcon />}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </ListInput>

        <ListInput
          label="Birthday"
          type="date"
          defaultValue="2014-04-30"
          placeholder="Please choose..."
          media={<DemoIcon />}
        />

        <ListInput
          label="Date time"
          type="datetime-local"
          placeholder="Please choose..."
          media={<DemoIcon />}
        />

        <ListInput
          label="Textarea"
          type="textarea"
          placeholder="Bio"
          media={<DemoIcon />}
          inputClassName="h-20 resize-none"
        />
      </List>

      <BlockTitle>Outline</BlockTitle>
      <List strongIos insetIos>
        <ListInput
          outline
          label="Name"
          type="text"
          placeholder="Your name"
          media={<DemoIcon />}
        />

        <ListInput
          outline
          label="Password"
          type="password"
          placeholder="Your password"
          media={<DemoIcon />}
        />

        <ListInput
          outline
          label="E-mail"
          type="email"
          placeholder="Your e-mail"
          media={<DemoIcon />}
        />

        <ListInput
          outline
          label="URL"
          type="url"
          placeholder="URL"
          media={<DemoIcon />}
        />

        <ListInput
          outline
          label="Phone"
          type="tel"
          placeholder="Your phone number"
          media={<DemoIcon />}
        />

        <ListInput
          outline
          label="Gender"
          type="select"
          dropdown
          defaultValue="Male"
          placeholder="Please choose..."
          media={<DemoIcon />}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </ListInput>

        <ListInput
          outline
          label="Birthday"
          type="date"
          defaultValue="2014-04-30"
          placeholder="Please choose..."
          media={<DemoIcon />}
        />

        <ListInput
          outline
          label="Date time"
          type="datetime-local"
          placeholder="Please choose..."
          media={<DemoIcon />}
        />

        <ListInput
          outline
          label="Textarea"
          type="textarea"
          placeholder="Bio"
          media={<DemoIcon />}
          inputClassName="h-20 resize-none"
        />
      </List>

      <BlockTitle>Floating Labels</BlockTitle>
      <List strongIos insetIos>
        <ListInput
          label="Name"
          floatingLabel
          type="text"
          placeholder="Your name"
          media={<DemoIcon />}
        />

        <ListInput
          label="Password"
          floatingLabel
          type="password"
          placeholder="Your password"
          media={<DemoIcon />}
        />

        <ListInput
          label="E-mail"
          floatingLabel
          type="email"
          placeholder="Your e-mail"
          media={<DemoIcon />}
        />

        <ListInput
          label="URL"
          floatingLabel
          type="url"
          placeholder="URL"
          media={<DemoIcon />}
        />

        <ListInput
          label="Phone"
          floatingLabel
          type="tel"
          placeholder="Your phone number"
          media={<DemoIcon />}
        />
      </List>

      <BlockTitle>Outline + Floating Labels</BlockTitle>
      <List strongIos insetIos>
        <ListInput
          outline
          label="Name"
          floatingLabel
          type="text"
          placeholder="Your name"
          media={<DemoIcon />}
        />

        <ListInput
          outline
          label="Password"
          floatingLabel
          type="password"
          placeholder="Your password"
          media={<DemoIcon />}
        />

        <ListInput
          outline
          label="E-mail"
          floatingLabel
          type="email"
          placeholder="Your e-mail"
          media={<DemoIcon />}
        />

        <ListInput
          outline
          label="URL"
          floatingLabel
          type="url"
          placeholder="URL"
          media={<DemoIcon />}
        />

        <ListInput
          outline
          label="Phone"
          floatingLabel
          type="tel"
          placeholder="Your phone number"
          media={<DemoIcon />}
        />
      </List>

      <BlockTitle>Validation + Additional Info</BlockTitle>
      <List strongIos insetIos>
        <ListInput
          label="Name"
          type="text"
          placeholder="Your name"
          info="Basic string checking"
          value={name.value}
          error={
            name.changed && !name.value.trim() ? 'Please specify your name' : ''
          }
          media={<DemoIcon />}
          onChange={onNameChange}
        />
      </List>

      <BlockTitle>Clear Button</BlockTitle>
      <List strongIos insetIos>
        <ListInput
          label="TV Show"
          type="text"
          placeholder="Your favorite TV show"
          info="Type something to see clear button"
          value={demoValue}
          clearButton={demoValue.length > 0}
          media={<DemoIcon />}
          onChange={onDemoValueChange}
          onClear={onDemoValueClear}
        />
      </List>

      <BlockTitle>Icon + Input</BlockTitle>
      <List strongIos insetIos>
        <ListInput type="text" placeholder="Your name" media={<DemoIcon />} />

        <ListInput
          type="password"
          placeholder="Your password"
          media={<DemoIcon />}
        />

        <ListInput
          type="email"
          placeholder="Your e-mail"
          media={<DemoIcon />}
        />

        <ListInput type="url" placeholder="URL" media={<DemoIcon />} />
      </List>

      <BlockTitle>Label + Input</BlockTitle>
      <List strongIos insetIos>
        <ListInput label="Name" type="text" placeholder="Your name" />

        <ListInput
          label="Password"
          type="password"
          placeholder="Your password"
        />

        <ListInput label="E-mail" type="email" placeholder="Your e-mail" />

        <ListInput label="URL" type="url" placeholder="URL" />
      </List>

      <BlockTitle>Only Inputs</BlockTitle>
      <List strongIos insetIos>
        <ListInput type="text" placeholder="Your name" />

        <ListInput type="password" placeholder="Your password" />

        <ListInput type="email" placeholder="Your e-mail" />

        <ListInput type="url" placeholder="URL" />
      </List>

      <BlockTitle>Inputs + Additional Info</BlockTitle>
      <List strongIos insetIos>
        <ListInput
          type="text"
          placeholder="Your name"
          info="Full name please"
        />

        <ListInput
          type="password"
          placeholder="Your password"
          info="8 characters minimum"
        />

        <ListInput
          type="email"
          placeholder="Your e-mail"
          info="Your work e-mail address"
        />

        <ListInput type="url" placeholder="URL" info="Your website URL" />
      </List>
    </Page>
  );
}
FormInputsPage.displayName = 'FormInputsPage';
