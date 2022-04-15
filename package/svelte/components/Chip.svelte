<script>
  import { ChipClasses } from '../../shared/esm/classes/ChipClasses.js';
  import { cls } from '../../shared/esm/cls.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  import DeleteIcon from './icons/DeleteIcon.svelte';

  let className = undefined;
  export { className as class };
  let colorsProp = undefined;
  export { colorsProp as colors };
  export let ios = undefined;
  export let material = undefined;

  export let deleteButton = undefined;
  export let onDelete = undefined;
  export let outline = false;

  export let onClick = undefined;

  const dark = useDarkClasses();

  $: style = outline ? 'outline' : 'fill';

  $: colors = {
    bg: cls(`bg-black bg-opacity-10`, dark('dark:bg-white dark:bg-opacity-10')),
    text: 'text-current',
    border: cls(
      `border-black border-opacity-10`,
      dark('dark:border-white dark:border-opacity-10')
    ),
    ...colorsProp,
  };

  $: c = useThemeClasses(
    { ios, material },
    ChipClasses({}, colors),
    className,
    (v) => (c = v)
  );
</script>

<div class={c.base[style]} {...$$restProps} on:click={onClick}>
  {#if $$slots.media}
    <div class={c.media}><slot name="media" /></div>
  {/if}
  <slot />
  {#if deleteButton}
    <div class={c.deleteButton} on:click={onDelete}>
      <DeleteIcon class="h-4 w-4" />
    </div>
  {/if}
</div>
