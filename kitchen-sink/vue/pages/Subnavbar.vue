<template>
  <k-page>
    <k-navbar title="Subnavbar">
      <template v-if="!isPreview" #left>
        <k-navbar-back-link @click="() => history.back()" />
      </template>
      <template #subnavbar>
        <k-segmented strong rounded>
          <k-segmented-button active> Button </k-segmented-button>
          <k-segmented-button> Button </k-segmented-button>
          <k-segmented-button> Button </k-segmented-button>
        </k-segmented>
      </template>
    </k-navbar>
    <div class="relative">
      <k-block strong inset>
        <p>
          Subnavbar is useful when you need to put any additional elements into
          Navbar, like Tab Links or Search Bar. It also remains visible when
          Navbar hidden.
        </p>
      </k-block>
      <k-block strong inset class="space-y-4">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
          consequuntur numquam quia labore eligendi asperiores obcaecati neque
          sapiente fugit vel praesentium accusantium, earum corporis officiis
          tempora est delectus fugiat laudantium?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
          possimus, magni excepturi molestias consequatur commodi nihil velit
          quo odit adipisci voluptatibus quam fugit nesciunt repellat
          accusantium libero repudiandae consectetur alias!
        </p>
        <p>
          Nihil unde iusto ab animi eum? Quia natus provident fugit, molestias
          ea numquam qui distinctio ex perferendis fuga! Fugit voluptates
          obcaecati ipsa recusandae eos saepe ducimus repudiandae. Explicabo,
          fuga obcaecati!
        </p>
        <p>
          Neque voluptas eius, quod consequatur officia dolor sunt cupiditate,
          animi commodi cumque nam ex totam autem ipsum doloribus! Possimus
          eligendi unde provident, esse molestias amet minus! Laboriosam veniam
          alias eum.
        </p>
        <p>
          Dicta obcaecati, architecto at ducimus suscipit dolor ea praesentium
          sint? Deleniti ipsam magni dolorem amet quibusdam temporibus pariatur
          suscipit voluptas, quas harum nesciunt culpa facere consequuntur id et
          accusamus exercitationem!
        </p>
        <p>
          Officiis, quibusdam reprehenderit corporis non nisi debitis magnam.
          Deleniti, recusandae iusto repellendus dicta magni exercitationem
          labore natus reiciendis sapiente error dolorum necessitatibus maxime
          laborum esse suscipit praesentium ratione. Ex, in.
        </p>
      </k-block>
    </div>
  </k-page>
</template>
<script>
  import {
    kPage,
    kNavbar,
    kNavbarBackLink,
    kBlock,
    kSegmented,
    kSegmentedButton,
  } from 'konsta/vue';

  export default {
    name: 'SubnavbarPage',
    components: {
      kPage,
      kNavbar,
      kNavbarBackLink,
      kBlock,
      kSegmented,
      kSegmentedButton,
    },
    setup() {
      return {
        isPreview: document.location.href.includes('examplePreview'),
        history: window.history,
      };
    },
  };
</script>
