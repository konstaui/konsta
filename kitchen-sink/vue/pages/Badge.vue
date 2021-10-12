<template>
  <twm-page>
    <twm-navbar title="Badge">
      <template v-if="!isPreview" #left>
        <twm-navbar-back-link @click="() => history.back()" />
      </template>
      <template #right>
        <twm-link navbar icon-only>
          <twm-icon badge="5" :badge-colors="{ bg: 'bg-red-500' }">
            <template #ios><PersonCircleFill class="w-7 h-7" /></template>
            <template #material><MdPerson class="w-6 h-6" /></template>
          </twm-icon>
        </twm-link>
      </template>
    </twm-navbar>
    <twm-tabbar labels class="left-0 bottom-0 fixed">
      <twm-tabbar-link active label="Inbox">
        <template #icon>
          <twm-icon badge="5" :badge-colors="{ bg: 'bg-green-500' }">
            <template #ios>
              <EnvelopeFill class="w-7 h-7" />
            </template>
            <template #material>
              <MdEmail class="w-6 h-6" />
            </template>
          </twm-icon>
        </template>
      </twm-tabbar-link>
      <twm-tabbar-link label="Calendar">
        <template #icon>
          <twm-icon badge="7" :badge-colors="{ bg: 'bg-red-500' }">
            <template #ios>
              <Calendar class="w-7 h-7" />
            </template>
            <template #material>
              <MdToday class="w-6 h-6" />
            </template>
          </twm-icon>
        </template>
      </twm-tabbar-link>
      <twm-tabbar-link label="Upload">
        <template #icon>
          <twm-icon badge="1" :badge-colors="{ bg: 'bg-red-500' }">
            <template #ios>
              <CloudUploadFill class="w-7 h-7" />
            </template>
            <template #material>
              <MdFileUpload class="w-6 h-6" />
            </template>
          </twm-icon>
        </template>
      </twm-tabbar-link>
    </twm-tabbar>
    <twm-list>
      <twm-list-item title="Foo Bar">
        <template #media>
          <demo-icon />
        </template>
        <template #after>
          <twm-badge :colors="{ bg: 'bg-gray-500' }">0</twm-badge>
        </template>
      </twm-list-item>

      <twm-list-item title="Ivan Petrov">
        <template #media>
          <demo-icon />
        </template>
        <template #after>
          <twm-badge>CEO</twm-badge>
        </template>
      </twm-list-item>

      <twm-list-item title="John Doe">
        <template #media>
          <demo-icon />
        </template>
        <template #after>
          <twm-badge :colors="{ bg: 'bg-green-500' }">5</twm-badge>
        </template>
      </twm-list-item>

      <twm-list-item title="Jane Doe">
        <template #media>
          <demo-icon />
        </template>
        <template #after>
          <twm-badge :colors="{ bg: 'bg-yellow-500' }">NEW</twm-badge>
        </template>
      </twm-list-item>
    </twm-list>
  </twm-page>
</template>
<script>
  import {
    twmPage,
    twmNavbar,
    twmNavbarBackLink,
    twmBadge,
    twmIcon,
    twmLink,
    twmList,
    twmListItem,
    twmTabbar,
    twmTabbarLink,
  } from 'tailwind-mobile/vue';
  import {
    PersonCircleFill,
    EnvelopeFill,
    Calendar,
    CloudUploadFill,
  } from 'framework7-icons/vue';
  import MdPerson from '../components/MdPerson.vue';
  import MdEmail from '../components/MdEmail.vue';
  import MdToday from '../components/MdToday.vue';
  import MdFileUpload from '../components/MdFileUpload.vue';
  import DemoIcon from '../components/DemoIcon.vue';

  export default {
    name: 'BadgePage',
    components: {
      twmPage,
      twmNavbar,
      twmNavbarBackLink,
      twmBadge,
      twmIcon,
      twmLink,
      twmList,
      twmListItem,
      twmTabbar,
      twmTabbarLink,

      PersonCircleFill,
      EnvelopeFill,
      Calendar,
      CloudUploadFill,
      MdPerson,
      MdEmail,
      MdToday,
      MdFileUpload,
      DemoIcon,
    },
    setup() {
      return {
        isPreview: document.location.href.includes('examplePreview'),
        history: window.history,
      };
    },
  };
</script>
