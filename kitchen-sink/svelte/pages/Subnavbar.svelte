<script>
  import {
    Page,
    Navbar,
    NavbarBackLink,
    Block,
    Segmented,
    SegmentedButton,
  } from 'konsta/svelte';

  const isPreview = document.location.href.includes('examplePreview');
</script>

<Page>
  <Navbar title="Subnavbar">
    {#snippet left()}
      {#if !isPreview}
        <NavbarBackLink onclick={() => history.back()} />
      {/if}
    {/snippet}
    {#snippet subnavbar()}
      <Segmented strong rounded>
        <SegmentedButton active>Button</SegmentedButton>
        <SegmentedButton>Button</SegmentedButton>
        <SegmentedButton>Button</SegmentedButton>
      </Segmented>
    {/snippet}
  </Navbar>
  <div class="relative">
    <Block strong inset>
      <p>
        Subnavbar is useful when you need to put any additional elements into
        Navbar, like Tab Links or Search Bar. It also remains visible when
        Navbar hidden.
      </p>
    </Block>
    <Block strong inset class="space-y-4">
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
        consequuntur numquam quia labore eligendi asperiores obcaecati neque
        sapiente fugit vel praesentium accusantium, earum corporis officiis
        tempora est delectus fugiat laudantium?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure possimus,
        magni excepturi molestias consequatur commodi nihil velit quo odit
        adipisci voluptatibus quam fugit nesciunt repellat accusantium libero
        repudiandae consectetur alias!
      </p>
      <p>
        Nihil unde iusto ab animi eum? Quia natus provident fugit, molestias ea
        numquam qui distinctio ex perferendis fuga! Fugit voluptates obcaecati
        ipsa recusandae eos saepe ducimus repudiandae. Explicabo, fuga
        obcaecati!
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
        Deleniti, recusandae iusto repellendus dicta magni exercitationem labore
        natus reiciendis sapiente error dolorum necessitatibus maxime laborum
        esse suscipit praesentium ratione. Ex, in.
      </p>
    </Block>
  </div>
</Page>
