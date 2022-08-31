<template>
  <k-page>
    <k-navbar title="Badge">
      <template v-if="!isPreview" #left>
        <k-navbar-back-link @click="() => history.back()" />
      </template>
      <template #right>
        <k-link navbar icon-only>
          <k-icon badge="5" :badge-colors="{ bg: 'bg-red-500' }">
            <template #ios><PersonCircleFill class="w-7 h-7" /></template>
            <template #material><MdPerson class="w-6 h-6" /></template>
          </k-icon>
        </k-link>
      </template>
    </k-navbar>
    <k-tabbar labels icons class="left-0 bottom-0 fixed">
      <k-tabbar-link active label="Inbox">
        <template #icon>
          <k-icon badge="5" :badge-colors="{ bg: 'bg-green-500' }">
            <template #ios>
              <EnvelopeFill class="w-7 h-7" />
            </template>
            <template #material>
              <MdEmail class="w-6 h-6" />
            </template>
          </k-icon>
        </template>
      </k-tabbar-link>
      <k-tabbar-link label="Calendar">
        <template #icon>
          <k-icon badge="7" :badge-colors="{ bg: 'bg-red-500' }">
            <template #ios>
              <Calendar class="w-7 h-7" />
            </template>
            <template #material>
              <MdToday class="w-6 h-6" />
            </template>
          </k-icon>
        </template>
      </k-tabbar-link>
      <k-tabbar-link label="Upload">
        <template #icon>
          <k-icon badge="1" :badge-colors="{ bg: 'bg-red-500' }">
            <template #ios>
              <CloudUploadFill class="w-7 h-7" />
            </template>
            <template #material>
              <MdFileUpload class="w-6 h-6" />
            </template>
          </k-icon>
        </template>
      </k-tabbar-link>
    </k-tabbar>
    <k-list strong inset>
      <k-list-item title="Foo Bar">
        <template #media>
          <demo-icon />
        </template>
        <template #after>
          <k-badge :colors="{ bg: 'bg-gray-500' }">0</k-badge>
        </template>
      </k-list-item>

      <k-list-item title="Ivan Petrov">
        <template #media>
          <demo-icon />
        </template>
        <template #after>
          <k-badge>CEO</k-badge>
        </template>
      </k-list-item>

      <k-list-item title="John Doe">
        <template #media>
          <demo-icon />
        </template>
        <template #after>
          <k-badge :colors="{ bg: 'bg-green-500' }">5</k-badge>
        </template>
      </k-list-item>

      <k-list-item title="Jane Doe">
        <template #media>
          <demo-icon />
        </template>
        <template #after>
          <k-badge :colors="{ bg: 'bg-yellow-500' }">NEW</k-badge>
        </template>
      </k-list-item>
    </k-list>
  </k-page>
</template>
<script>
  import {
    kPage,
    kNavbar,
    kNavbarBackLink,
    kBadge,
    kIcon,
    kLink,
    kList,
    kListItem,
    kTabbar,
    kTabbarLink,
  } from 'konsta/vue';
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
      kPage,
      kNavbar,
      kNavbarBackLink,
      kBadge,
      kIcon,
      kLink,
      kList,
      kListItem,
      kTabbar,
      kTabbarLink,

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
