import { inject } from 'vue';

const useDarkClasses = (classNames) => {
  const context = inject('TailwindMobileContext');
  if (!context.value.dark) return '';
  return classNames;
};

export { useDarkClasses };
