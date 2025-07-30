import { cls } from '../cls.js';

export const AppClasses = (props, currentTheme, classes) => {
  const { safeAreas } = props;
  return cls(
    currentTheme === 'ios' && `k-ios`,
    currentTheme === 'material' && 'k-material',
    'k-app w-full h-full min-h-screen relative',
    safeAreas && 'safe-areas',
    classes
  );
};
