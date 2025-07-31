import { cls } from '../cls.js';

export const TabbarLinkClasses = (
  { active, hasIcon, hasLabel } = {},
  colors = {}
) => {
  return {
    content: {
      common: 'flex flex-col items-center justify-center h-full',
      ios: cls('py-1', active ? colors.textActiveIos : colors.textIos),
      material: cls(
        'py-2',
        hasIcon && hasLabel && 'gap-1',
        active ? colors.textActiveMaterial : colors.textMaterial
      ),
    },
    iconContainer: {
      common: 'flex items-center justify-center k-tabbar-link-icon relative',
      ios: cls('w-7 h-7'),
      material: cls('w-16 h-8 rounded-full'),
    },
    iconBg: {
      common:
        'absolute left-0 top-0 w-full h-full rounded-full duration-200 -z-10 pointer-events-none',
      ios: cls(active ? colors.iconBgActiveIos : colors.iconBgIos),
      material: cls(
        active ? colors.iconBgActiveMaterial : colors.iconBgMaterial,
        !active && 'scale-x-[0.5] opacity-0'
      ),
    },
    label: {
      ios: cls(hasIcon ? 'text-xs font-medium' : '', ''),
      material: cls(hasIcon ? 'text-xs' : 'text-sm', 'font-medium'),
    },
  };
};
