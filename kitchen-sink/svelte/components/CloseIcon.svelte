<script>
  import { Xmark } from 'framework7-icons/svelte';
  import { useTheme } from 'konsta/svelte';
  const theme = useTheme();
</script>

{#if theme === 'ios'}
  <Xmark class="size-5" />{:else}
  <svg v-else viewBox="0 0 24 24" class="size-6">
    <path
      d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
    />
  </svg>{/if}
