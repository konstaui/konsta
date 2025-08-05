<template>
  <xmark v-if="theme === 'ios'" class="size-5" />
  <svg v-else viewBox="0 0 24 24" class="size-6">
    <path
      d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
    />
  </svg>
</template>
<script>
  import { Xmark } from 'framework7-icons/vue';
  import { useTheme } from 'konsta/vue';
  export default {
    components: {
      Xmark,
    },
    setup() {
      const theme = useTheme();
      console.log(theme.value);
      return {
        theme,
      };
    },
  };
</script>
