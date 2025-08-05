<template>
  <k-page>
    <k-navbar title="Popover">
      <template v-if="!isPreview" #left>
        <k-navbar-back-link @click="() => history.back()" />
      </template>
      <template #right>
        <k-link
          class="popover-navbar-link"
          @click="() => openPopover('.popover-navbar-link')"
        >
          Popover
        </k-link>
      </template>
    </k-navbar>
    <k-block strong inset class="space-y-4">
      <p>
        <k-button
          rounded
          class="popover-button"
          @click="() => openPopover('.popover-button')"
        >
          Open popover on me
        </k-button>
      </p>
    </k-block>
    <k-block strong inset class="space-y-4">
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
        <k-link
          class="popover-link-1"
          @click="() => openPopover('.popover-link-1')"
        >
          popover </k-link
        >{{ ' ' }}
        tortor. Pellentesque felis eros, dictum vitae lacinia quis, lobortis
        vitae ipsum. Cras vehicula bibendum lorem quis imperdiet.
      </p>
      <p>
        In hac habitasse platea dictumst. Etiam varius, ante vel ornare
        facilisis, velit massa rutrum dolor, ac porta magna magna lacinia nunc.
        Curabitur{{ ' ' }}
        <k-link
          class="popover-link-2"
          @click="() => openPopover('.popover-link-2')"
        >
          popover! </k-link
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
        <k-link
          class="popover-link-3"
          @click="() => openPopover('.popover-link-3')"
        >
          one more popover </k-link
        >{{ ' ' }}
        massa at accumsan. Etiam purus odio, posuere in ligula vitae, viverra
        ultricies justo. Vestibulum nec interdum nisi. Aenean ac consectetur
        velit, non malesuada magna. Sed pharetra vehicula augue, vel venenatis
        lectus gravida eget. Curabitur lacus tellus, venenatis eu arcu in,
        interdum auctor nunc. Nunc non metus neque. Suspendisse viverra lectus
        sed risus aliquet, vel accumsan dolor feugiat.
      </p>
    </k-block>

    <k-popover
      :opened="popoverOpened"
      :target="popoverTargetRef"
      @backdropclick="() => (popoverOpened = false)"
    >
      <k-list nested>
        <k-list-item
          title="Item 1"
          link
          @click="() => (popoverOpened = false)"
        />
        <k-list-item
          title="List Item 2"
          link
          @click="() => (popoverOpened = false)"
        />
        <k-list-item
          title="Item 3"
          link
          @click="() => (popoverOpened = false)"
        />
        <k-list-item
          title="List Item 4"
          link
          @click="() => (popoverOpened = false)"
        />
        <k-list-item
          title="Item 5"
          link
          @click="() => (popoverOpened = false)"
        />
      </k-list>
    </k-popover>
  </k-page>
</template>
<script>
  import { ref } from 'vue';

  import {
    kPage,
    kNavbar,
    kNavbarBackLink,
    kPopover,
    kBlock,
    kLink,
    kButton,
    kList,
    kListItem,
  } from 'konsta/vue';

  export default {
    name: 'PopoverPage',
    components: {
      kPage,
      kNavbar,
      kNavbarBackLink,
      kPopover,
      kBlock,
      kLink,
      kButton,
      kList,
      kListItem,
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
