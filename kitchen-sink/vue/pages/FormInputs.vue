<template>
  <twm-page>
    <twm-navbar title="Form Inputs">
      <template v-if="!isPreview" #left>
        <twm-navbar-back-link @click="() => history.back()" />
      </template>
    </twm-navbar>

    <twm-block-title>Full Layout / Inline Labels</twm-block-title>
    <twm-list :hairlines="hairlines">
      <twm-list-input
        label="Name"
        inline-label
        type="text"
        placeholder="Your name"
      >
        <template #media>
          <demo-icon />
        </template>
      </twm-list-input>

      <twm-list-input
        label="Password"
        inline-label
        type="password"
        placeholder="Your password"
      >
        <template #media>
          <demo-icon />
        </template>
      </twm-list-input>

      <twm-list-input
        label="E-mail"
        inline-label
        type="email"
        placeholder="Your e-mail"
      >
        <template #media>
          <demo-icon />
        </template>
      </twm-list-input>

      <twm-list-input label="URL" inline-label type="url" placeholder="URL">
        <template #media>
          <demo-icon />
        </template>
      </twm-list-input>

      <twm-list-input
        label="Phone"
        inline-label
        type="tel"
        placeholder="Your phone number"
      >
        <template #media>
          <demo-icon />
        </template>
      </twm-list-input>

      <twm-list-input
        label="Gender"
        inline-label
        type="select"
        dropdown
        default-value="Male"
        placeholder="Please choose..."
      >
        <template #media>
          <demo-icon />
        </template>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </twm-list-input>

      <twm-list-input
        label="Birthday"
        inline-label
        type="date"
        default-value="2014-04-30"
        placeholder="Please choose..."
      >
        <template #media>
          <demo-icon />
        </template>
      </twm-list-input>

      <twm-list-input
        label="Date time"
        inline-label
        type="datetime-local"
        placeholder="Please choose..."
      >
        <template #media>
          <demo-icon />
        </template>
      </twm-list-input>

      <twm-list-input
        label="Textarea"
        inline-label
        type="textarea"
        placeholder="Bio"
        input-class="h-20 resize-none"
      >
        <template #media>
          <demo-icon />
        </template>
      </twm-list-input>
    </twm-list>

    <twm-block-title>Full Layout / Stacked Labels</twm-block-title>
    <twm-list :hairlines="hairlines">
      <twm-list-input label="Name" type="text" placeholder="Your name">
        <template #media>
          <demo-icon />
        </template>
      </twm-list-input>

      <twm-list-input
        label="Password"
        type="password"
        placeholder="Your password"
      >
        <template #media>
          <demo-icon />
        </template>
      </twm-list-input>

      <twm-list-input label="E-mail" type="email" placeholder="Your e-mail">
        <template #media>
          <demo-icon />
        </template>
      </twm-list-input>

      <twm-list-input label="URL" type="url" placeholder="URL">
        <template #media>
          <demo-icon />
        </template>
      </twm-list-input>

      <twm-list-input label="Phone" type="tel" placeholder="Your phone number">
        <template #media>
          <demo-icon />
        </template>
      </twm-list-input>

      <twm-list-input
        label="Gender"
        type="select"
        dropdown
        default-value="Male"
        placeholder="Please choose..."
      >
        <template #media>
          <demo-icon />
        </template>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </twm-list-input>

      <twm-list-input
        label="Birthday"
        type="date"
        default-value="2014-04-30"
        placeholder="Please choose..."
      >
        <template #media>
          <demo-icon />
        </template>
      </twm-list-input>

      <twm-list-input
        label="Date time"
        type="datetime-local"
        placeholder="Please choose..."
      >
        <template #media>
          <demo-icon />
        </template>
      </twm-list-input>

      <twm-list-input
        label="Textarea"
        type="textarea"
        placeholder="Bio"
        input-class="h-20 resize-none"
      >
        <template #media>
          <demo-icon />
        </template>
      </twm-list-input>
    </twm-list>

    <twm-block-title>Floating Labels</twm-block-title>
    <twm-list :hairlines="hairlines">
      <twm-list-input
        label="Name"
        floating-label
        type="text"
        placeholder="Your name"
      >
        <template #media>
          <demo-icon />
        </template>
      </twm-list-input>

      <twm-list-input
        label="Password"
        floating-label
        type="password"
        placeholder="Your password"
      >
        <template #media>
          <demo-icon />
        </template>
      </twm-list-input>

      <twm-list-input
        label="E-mail"
        floating-label
        type="email"
        placeholder="Your e-mail"
      >
        <template #media>
          <demo-icon />
        </template>
      </twm-list-input>

      <twm-list-input label="URL" floating-label type="url" placeholder="URL">
        <template #media>
          <demo-icon />
        </template>
      </twm-list-input>

      <twm-list-input
        label="Phone"
        floating-label
        type="tel"
        placeholder="Your phone number"
      >
        <template #media>
          <demo-icon />
        </template>
      </twm-list-input>
    </twm-list>

    <twm-block-title>Validation + Additional Info</twm-block-title>
    <twm-list :hairlines="hairlines">
      <twm-list-input
        label="Name"
        type="text"
        placeholder="Your name"
        info="Basic string checking"
        :value="name.value"
        :error="
          name.changed && !name.value.trim() ? 'Please specify your name' : ''
        "
        @input="onNameChange"
      >
        <template #media>
          <demo-icon />
        </template>
      </twm-list-input>
    </twm-list>

    <twm-block-title>Clear Button</twm-block-title>
    <twm-list :hairlines="hairlines">
      <twm-list-input
        label="TV Show"
        type="text"
        placeholder="Your favorite TV show"
        info="Type something to see clear button"
        :value="demoValue"
        :clear-button="demoValue.length > 0"
        @input="onDemoValueChange"
        @clear="onDemoValueClear"
      >
        <template #media>
          <demo-icon />
        </template>
      </twm-list-input>
    </twm-list>

    <twm-block-title>Icon + Input</twm-block-title>
    <twm-list :hairlines="hairlines">
      <twm-list-input type="text" placeholder="Your name">
        <template #media>
          <demo-icon />
        </template>
      </twm-list-input>

      <twm-list-input type="password" placeholder="Your password">
        <template #media>
          <demo-icon />
        </template>
      </twm-list-input>

      <twm-list-input type="email" placeholder="Your e-mail">
        <template #media>
          <demo-icon />
        </template>
      </twm-list-input>

      <twm-list-input type="url" placeholder="URL">
        <template #media>
          <demo-icon />
        </template>
      </twm-list-input>
    </twm-list>

    <twm-block-title>Label + Input</twm-block-title>
    <twm-list :hairlines="hairlines">
      <twm-list-input label="Name" type="text" placeholder="Your name" />

      <twm-list-input
        label="Password"
        type="password"
        placeholder="Your password"
      />

      <twm-list-input label="E-mail" type="email" placeholder="Your e-mail" />

      <twm-list-input label="URL" type="url" placeholder="URL" />
    </twm-list>

    <twm-block-title>Only Inputs</twm-block-title>
    <twm-list :hairlines="hairlines">
      <twm-list-input type="text" placeholder="Your name" />

      <twm-list-input type="password" placeholder="Your password" />

      <twm-list-input type="email" placeholder="Your e-mail" />

      <twm-list-input type="url" placeholder="URL" />
    </twm-list>

    <twm-block-title>Inputs + Additional Info</twm-block-title>
    <twm-list :hairlines="hairlines">
      <twm-list-input
        type="text"
        placeholder="Your name"
        info="Full name please"
      />

      <twm-list-input
        type="password"
        placeholder="Your password"
        info="8 characters minimum"
      />

      <twm-list-input
        type="email"
        placeholder="Your e-mail"
        info="Your work e-mail address"
      />

      <twm-list-input type="url" placeholder="URL" info="Your website URL" />
    </twm-list>

    <twm-block-title>Only Inputs Inset</twm-block-title>
    <twm-list inset>
      <twm-list-input type="text" placeholder="Your name" />

      <twm-list-input type="password" placeholder="Your password" />

      <twm-list-input type="email" placeholder="Your e-mail" />

      <twm-list-input type="url" placeholder="URL" />
    </twm-list>
  </twm-page>
</template>
<script>
  import { ref, computed } from 'vue';
  import {
    twmPage,
    twmNavbar,
    twmNavbarBackLink,
    twmBlockTitle,
    twmList,
    twmListInput,
    useTheme,
  } from 'tailwind-mobile/vue';
  import DemoIcon from '../components/DemoIcon.vue';

  export default {
    name: 'FormInputsPage',
    components: {
      twmPage,
      twmNavbar,
      twmNavbarBackLink,
      twmBlockTitle,
      twmList,
      twmListInput,
      DemoIcon,
    },
    setup() {
      const name = ref({ value: '', changed: false });
      const demoValue = ref('');
      const theme = useTheme();
      const hairlines = computed(() => theme.value !== 'material');

      const onNameChange = (e) => {
        name.value = { value: e.target.value, changed: true };
      };
      const onDemoValueChange = (e) => {
        demoValue.value = e.target.value;
      };
      const onDemoValueClear = () => {
        demoValue.value = '';
      };

      return {
        name,
        demoValue,
        theme,
        hairlines,
        onNameChange,
        onDemoValueChange,
        onDemoValueClear,
        isPreview: document.location.href.includes('examplePreview'),
        history: window.history,
      };
    },
  };
</script>
