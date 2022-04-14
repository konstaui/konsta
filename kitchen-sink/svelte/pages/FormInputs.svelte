<script>
  import {
    Page,
    Navbar,
    NavbarBackLink,
    BlockTitle,
    List,
    ListInput,
    useTheme,
  } from 'konsta/svelte';

  import DemoIcon from '../components/DemoIcon.svelte';

  const isPreview = document.location.href.includes('examplePreview');
  let name = { value: '', changed: false };
  let demoValue = '';
  $: theme = useTheme((newValue) => (theme = newValue));
  $: hairlines = theme !== 'material';

  const onNameChange = (e) => {
    name = { value: e.target.value, changed: true };
  };
  const onDemoValueChange = (e) => {
    demoValue = e.target.value;
  };
  const onDemoValueClear = () => {
    demoValue = '';
  };
</script>

<Page>
  <Navbar title="Form Inputs">
    <svelte:fragment slot="left">
      {#if !isPreview}
        <NavbarBackLink onClick={() => history.back()} />
      {/if}
    </svelte:fragment>
  </Navbar>

  <BlockTitle>Full Layout / Inline Labels</BlockTitle>
  <List {hairlines}>
    <ListInput label="Name" inlineLabel type="text" placeholder="Your name">
      <DemoIcon slot="media" />
    </ListInput>

    <ListInput
      label="Password"
      inlineLabel
      type="password"
      placeholder="Your password"
    >
      <DemoIcon slot="media" />
    </ListInput>

    <ListInput
      label="E-mail"
      inlineLabel
      type="email"
      placeholder="Your e-mail"
    >
      <DemoIcon slot="media" />
    </ListInput>

    <ListInput label="URL" inlineLabel type="url" placeholder="URL">
      <DemoIcon slot="media" />
    </ListInput>

    <ListInput
      label="Phone"
      inlineLabel
      type="tel"
      placeholder="Your phone number"
    >
      <DemoIcon slot="media" />
    </ListInput>

    <ListInput
      label="Gender"
      inlineLabel
      type="select"
      dropdown
      defaultValue="Male"
      placeholder="Please choose..."
    >
      <DemoIcon slot="media" />
      <option value="Male">Male</option>
      <option value="Female">Female</option>
    </ListInput>

    <ListInput
      label="Birthday"
      inlineLabel
      type="date"
      defaultValue="2014-04-30"
      placeholder="Please choose..."
    >
      <DemoIcon slot="media" />
    </ListInput>

    <ListInput
      label="Date time"
      inlineLabel
      type="datetime-local"
      placeholder="Please choose..."
    >
      <DemoIcon slot="media" />
    </ListInput>

    <ListInput
      label="Textarea"
      inlineLabel
      type="textarea"
      placeholder="Bio"
      inputclass="h-20 resize-none"
    >
      <DemoIcon slot="media" />
    </ListInput>
  </List>

  <BlockTitle>Full Layout / Stacked Labels</BlockTitle>
  <List {hairlines}>
    <ListInput label="Name" type="text" placeholder="Your name">
      <DemoIcon slot="media" />
    </ListInput>

    <ListInput label="Password" type="password" placeholder="Your password">
      <DemoIcon slot="media" />
    </ListInput>

    <ListInput label="E-mail" type="email" placeholder="Your e-mail">
      <DemoIcon slot="media" />
    </ListInput>

    <ListInput label="URL" type="url" placeholder="URL">
      <DemoIcon slot="media" />
    </ListInput>

    <ListInput label="Phone" type="tel" placeholder="Your phone number">
      <DemoIcon slot="media" />
    </ListInput>

    <ListInput
      label="Gender"
      type="select"
      dropdown
      defaultValue="Male"
      placeholder="Please choose..."
    >
      <DemoIcon slot="media" />
      <option value="Male">Male</option>
      <option value="Female">Female</option>
    </ListInput>

    <ListInput
      label="Birthday"
      type="date"
      defaultValue="2014-04-30"
      placeholder="Please choose..."
    >
      <DemoIcon slot="media" />
    </ListInput>

    <ListInput
      label="Date time"
      type="datetime-local"
      placeholder="Please choose..."
    >
      <DemoIcon slot="media" />
    </ListInput>

    <ListInput
      label="Textarea"
      type="textarea"
      placeholder="Bio"
      inputclass="h-20 resize-none"
    >
      <DemoIcon slot="media" />
    </ListInput>
  </List>

  <BlockTitle>Floating Labels</BlockTitle>
  <List {hairlines}>
    <ListInput label="Name" floatingLabel type="text" placeholder="Your name">
      <DemoIcon slot="media" />
    </ListInput>

    <ListInput
      label="Password"
      floatingLabel
      type="password"
      placeholder="Your password"
    >
      <DemoIcon slot="media" />
    </ListInput>

    <ListInput
      label="E-mail"
      floatingLabel
      type="email"
      placeholder="Your e-mail"
    >
      <DemoIcon slot="media" />
    </ListInput>

    <ListInput label="URL" floatingLabel type="url" placeholder="URL">
      <DemoIcon slot="media" />
    </ListInput>

    <ListInput
      label="Phone"
      floatingLabel
      type="tel"
      placeholder="Your phone number"
    >
      <DemoIcon slot="media" />
    </ListInput>
  </List>

  <BlockTitle>Validation + Additional Info</BlockTitle>
  <List {hairlines}>
    <ListInput
      label="Name"
      type="text"
      placeholder="Your name"
      info="Basic string checking"
      value={name.value}
      error={name.changed && !name.value.trim()
        ? 'Please specify your name'
        : ''}
      onInput={onNameChange}
    >
      <DemoIcon slot="media" />
    </ListInput>
  </List>

  <BlockTitle>Clear Button</BlockTitle>
  <List {hairlines}>
    <ListInput
      label="TV Show"
      type="text"
      placeholder="Your favorite TV show"
      info="Type something to see clear button"
      value={demoValue}
      clearButton={demoValue.length > 0}
      onInput={onDemoValueChange}
      onClear={onDemoValueClear}
    >
      <DemoIcon slot="media" />
    </ListInput>
  </List>

  <BlockTitle>Icon + Input</BlockTitle>
  <List {hairlines}>
    <ListInput type="text" placeholder="Your name">
      <DemoIcon slot="media" />
    </ListInput>

    <ListInput type="password" placeholder="Your password">
      <DemoIcon slot="media" />
    </ListInput>

    <ListInput type="email" placeholder="Your e-mail">
      <DemoIcon slot="media" />
    </ListInput>

    <ListInput type="url" placeholder="URL">
      <DemoIcon slot="media" />
    </ListInput>
  </List>

  <BlockTitle>Label + Input</BlockTitle>
  <List {hairlines}>
    <ListInput label="Name" type="text" placeholder="Your name" />

    <ListInput label="Password" type="password" placeholder="Your password" />

    <ListInput label="E-mail" type="email" placeholder="Your e-mail" />

    <ListInput label="URL" type="url" placeholder="URL" />
  </List>

  <BlockTitle>Only Inputs</BlockTitle>
  <List {hairlines}>
    <ListInput type="text" placeholder="Your name" />

    <ListInput type="password" placeholder="Your password" />

    <ListInput type="email" placeholder="Your e-mail" />

    <ListInput type="url" placeholder="URL" />
  </List>

  <BlockTitle>Inputs + Additional Info</BlockTitle>
  <List {hairlines}>
    <ListInput type="text" placeholder="Your name" info="Full name please" />

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

  <BlockTitle>Only Inputs Inset</BlockTitle>
  <List inset>
    <ListInput type="text" placeholder="Your name" />

    <ListInput type="password" placeholder="Your password" />

    <ListInput type="email" placeholder="Your e-mail" />

    <ListInput type="url" placeholder="URL" />
  </List>
</Page>
