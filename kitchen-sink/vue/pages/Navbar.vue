<template>
  <k-page>
    <k-navbar
      title="Navbar"
      subtitle="Subtitle"
      class="top-0 sticky"
      :medium="size === 'Medium'"
      :large="size === 'Large'"
      :transparent="isTransparent"
    >
      <template v-if="!isPreview" #left>
        <k-navbar-back-link @click="() => history.back()" />
      </template>
      <template #right>
        <k-link navbar>Right</k-link>
      </template>
    </k-navbar>
    <div class="relative">
      <k-block strong inset>
        <p>
          Navbar is a fixed area at the top of a screen that contains Page title
          and navigation elements.
        </p>
      </k-block>
      <k-block-title>Size</k-block-title>
      <k-block-header>
        Medium and Large will collapse to usual size on page scroll
      </k-block-header>
      <k-list strong inset>
        <k-list-item
          v-for="v in ['Default', 'Medium', 'Large']"
          :key="v"
          label
          :title="v"
        >
          <template #after>
            <k-radio
              component="div"
              :value="v"
              :checked="size === v"
              @change="() => (size = v)"
            />
          </template>
        </k-list-item>
      </k-list>

      <k-block-title>Transparent</k-block-title>

      <k-block-header>
        When navbar is transparent, its title and background will become visible
        on page scroll
      </k-block-header>
      <k-list strong inset>
        <k-list-item label title="Transparent">
          <template #after>
            <k-toggle
              component="div"
              :checked="isTransparent === true"
              @change="() => (isTransparent = !isTransparent)"
            />
          </template>
        </k-list-item>
      </k-list>

      <k-block strong inset class="space-y-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tempore
          ratione unde accusantium distinctio nulla quia numquam earum odio,
          optio, nisi rem deserunt. Molestiae delectus, ut assumenda numquam
          magni enim.
        </p>
        <p>
          Architecto molestias cum dolor dolorem provident consequuntur incidunt
          sunt fugiat tenetur odio, recusandae placeat rem veniam. Voluptates,
          repellendus odit, magni nesciunt, optio laborum asperiores repudiandae
          consectetur suscipit ab cupiditate eum.
        </p>
        <p>
          Aliquam, iste accusamus deleniti temporibus exercitationem neque
          perferendis optio, blanditiis quisquam molestias perspiciatis cumque
          harum tenetur veniam. Dolorum fugit doloribus est, deserunt, eligendi,
          quaerat quidem itaque tempore laborum non illum?
        </p>
        <p>
          Rerum magni sunt quis veniam, dolor ratione saepe ducimus tempore
          voluptatum porro quod commodi? Aperiam laudantium deleniti totam
          dolorum qui accusantium iste saepe facere optio, soluta maxime
          mollitia deserunt cumque.
        </p>
        <p>
          Iusto tempore quis provident, saepe illum ex ipsum cupiditate
          explicabo ratione unde facere nemo delectus harum, blanditiis eius sit
          asperiores nam. Aut cupiditate est tempore officia, perspiciatis esse
          asperiores repudiandae?
        </p>
        <p>
          Consequuntur itaque harum eos vero, reiciendis dolorum iure non earum
          molestias tenetur sint enim, maxime recusandae ad perferendis
          repudiandae! Sit, quos exercitationem beatae numquam laborum nobis
          natus. Obcaecati, ea inventore.
        </p>
        <p>
          Fugit culpa labore sapiente excepturi reiciendis, nulla, nihil neque
          ut veritatis quis quibusdam dolorum? Voluptatibus animi officia
          perspiciatis doloremque cum voluptatem, quia ratione modi vero,
          consequatur ipsum, praesentium quibusdam amet?
        </p>
        <p>
          Laudantium nihil sint nam placeat, nemo rerum ipsam explicabo iusto
          dolores molestiae expedita eos consequuntur ut architecto consequatur
          soluta ad maiores voluptatem tenetur in velit. Minima quia molestiae
          nobis voluptatibus.
        </p>
        <p>
          Expedita soluta quia inventore et placeat id exercitationem quisquam
          eligendi est eius sapiente quo, cum nesciunt mollitia, sit veniam
          ducimus tempora culpa adipisci commodi in autem nihil voluptatem
          corporis? Perspiciatis.
        </p>
        <p>
          Molestias, est? Eligendi vero distinctio voluptatem cumque id
          voluptatibus, officia minima repellendus sit illo tempora labore
          provident? Eum tenetur consectetur quae, in facilis autem ipsam
          doloribus voluptate vitae suscipit nobis.
        </p>
        <p>
          Obcaecati optio iste hic, soluta minus ullam, perferendis pariatur non
          possimus autem nostrum libero sapiente. Corporis quo cum iusto
          exercitationem velit. Non beatae eveniet asperiores ipsa consequuntur
          temporibus sapiente earum!
        </p>
        <p>
          Temporibus, omnis. Excepturi dolorum expedita laudantium quasi quod id
          adipisci, esse, nam atque in, incidunt ex ab distinctio repellendus
          beatae voluptatem alias odit illum quis. Illo numquam voluptatibus
          error voluptatum!
        </p>
      </k-block>
    </div>
  </k-page>
</template>

<script>
  import { ref } from 'vue';
  import {
    kPage,
    kNavbar,
    kNavbarBackLink,
    kLink,
    kBlock,
    kBlockTitle,
    kBlockHeader,
    kList,
    kListItem,
    kRadio,
    kToggle,
  } from 'konsta/vue';

  export default {
    name: 'NavbarPage',
    components: {
      kPage,
      kNavbar,
      kNavbarBackLink,
      kLink,
      kBlock,
      kBlockTitle,
      kBlockHeader,
      kList,
      kListItem,
      kRadio,
      kToggle,
    },
    setup() {
      const size = ref('Default');
      const isTransparent = ref(false);
      return {
        isPreview: document.location.href.includes('examplePreview'),
        history: window.history,
        size,
        isTransparent,
      };
    },
  };
</script>
