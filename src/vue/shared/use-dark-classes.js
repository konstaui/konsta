import { inject } from 'vue';

const useDarkClasses = (classNames) => {
  const context = inject('KonstaContext');
  if (!context.value.dark) return '';
  return classNames;
};

export { useDarkClasses };
