<template>
  <twm-page>
    <twm-navbar title="Popover">
      <template v-if="!isPreview" #left>
        <twm-navbar-back-link @click="() => history.back()" />
      </template>
      <template #right>
        <twm-link
          class="popover-navbar-link"
          navbar
          @click="() => openPopover('.popover-navbar-link')"
        >
          Popover
        </twm-link>
      </template>
    </twm-navbar>
    <twm-block strong class="space-y-4">
      <p>
        <twm-button
          class="popover-button"
          @click="() => openPopover('.popover-button')"
        >
          Open popover on me
        </twm-button>
      </p>
      <p>
        Mauris fermentum neque et luctus venenatis. Vivamus a sem rhoncus,
        ornare tellus eu, euismod mauris. In porta turpis at semper convallis.
        Duis adipiscing leo eu nulla lacinia, quis rhoncus metus condimentum.
        Etiam nec malesuada nibh. Maecenas quis lacinia nisl, vel posuere dolor.
        Vestibulum condimentum, nisl ac vulputate egestas, neque enim dignissim
        elit, rhoncus volutpat magna enim a est. Aenean sit amet ligula neque.
        Cras suscipit rutrum enim. Nam a odio facilisis, elementum tellus non,{{
          ' '
        }}
        <twm-link
          class="popover-link-1"
          @click="() => openPopover('.popover-link-1')"
        >
          popover </twm-link
        >{{ ' ' }}
        tortor. Pellentesque felis eros, dictum vitae lacinia quis, lobortis
        vitae ipsum. Cras vehicula bibendum lorem quis imperdiet.
      </p>
      <p>
        In hac habitasse platea dictumst. Etiam varius, ante vel ornare
        facilisis, velit massa rutrum dolor, ac porta magna magna lacinia nunc.
        Curabitur{{ ' ' }}
        <twm-link
          class="popover-link-2"
          @click="() => openPopover('.popover-link-2')"
        >
          popover! </twm-link
        >{{ ' ' }}
        cursus laoreet. Aenean vel tempus augue. Pellentesque in imperdiet nibh.
        Mauris rhoncus nulla id sem suscipit volutpat. Pellentesque ac arcu in
        nisi viverra pulvinar. Nullam nulla orci, bibendum sed ligula non,
        ullamcorper iaculis mi. In hac habitasse platea dictumst. Praesent
        varius at nisl eu luctus. Cras aliquet porta est. Quisque elementum quis
        dui et consectetur. Cum sociis natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Sed sed laoreet purus.
        Pellentesque eget ante ante.
      </p>
      <p>
        Duis et ultricies nibh. Sed facilisis turpis urna, ac imperdiet erat
        venenatis eu. Proin sit amet faucibus tortor, et varius sem. Etiam vitae
        lacinia neque. Aliquam nisi purus, interdum in arcu sed, ultrices rutrum
        arcu. Nulla mi turpis, consectetur vel enim quis, facilisis viverra dui.
        Aliquam quis convallis tortor, quis semper ligula. Morbi ullamcorper{{
          ' '
        }}
        <twm-link
          class="popover-link-3"
          @click="() => openPopover('.popover-link-3')"
        >
          one more popover </twm-link
        >{{ ' ' }}
        massa at accumsan. Etiam purus odio, posuere in ligula vitae, viverra
        ultricies justo. Vestibulum nec interdum nisi. Aenean ac consectetur
        velit, non malesuada magna. Sed pharetra vehicula augue, vel venenatis
        lectus gravida eget. Curabitur lacus tellus, venenatis eu arcu in,
        interdum auctor nunc. Nunc non metus neque. Suspendisse viverra lectus
        sed risus aliquet, vel accumsan dolor feugiat.
      </p>
    </twm-block>

    <twm-popover
      :opened="popoverOpened"
      :target="popoverTargetRef"
      @backdropclick="() => (popoverOpened = false)"
    >
      <twm-list nested :hairlines="false" :colors="{ bg: 'bg-transparent' }">
        <twm-list-item
          title="Item 1"
          link
          @click="() => (popoverOpened = false)"
        />
        <twm-list-item
          title="List Item 2"
          link
          @click="() => (popoverOpened = false)"
        />
        <twm-list-item
          title="Item 3"
          link
          @click="() => (popoverOpened = false)"
        />
        <twm-list-item
          title="List Item 4"
          link
          @click="() => (popoverOpened = false)"
        />
        <twm-list-item
          title="Item 5"
          link
          @click="() => (popoverOpened = false)"
        />
      </twm-list>
    </twm-popover>
  </twm-page>
</template>
<script>
  import { ref } from 'vue';

  import {
    twmPage,
    twmNavbar,
    twmNavbarBackLink,
    twmPopover,
    twmBlock,
    twmLink,
    twmButton,
    twmList,
    twmListItem,
  } from 'tailwind-mobile/vue';

  export default {
    name: 'PopoverPage',
    components: {
      twmPage,
      twmNavbar,
      twmNavbarBackLink,
      twmPopover,
      twmBlock,
      twmLink,
      twmButton,
      twmList,
      twmListItem,
    },
    setup() {
      const popoverOpened = ref(false);
      const popoverTargetRef = ref(null);

      const openPopover = (targetRef) => {
        popoverTargetRef.value = targetRef;
        popoverOpened.value = true;
      };

      return {
        popoverOpened,
        popoverTargetRef,
        openPopover,
        isPreview: document.location.href.includes('examplePreview'),
        history: window.history,
      };
    },
  };
</script>
