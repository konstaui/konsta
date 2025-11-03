import fs from 'fs';
export default async () => {
  fs.writeFileSync(
    './package/shared/index.js',
    `
export { calcPopoverPosition } from './calc-popover-position.js';
export { cls } from './cls.js';
export { filterColors } from './filter-colors.js';
export { TouchRipple } from './touch-ripple-class.js';
export { useIosHighlight } from './use-ios-highlight.js';
export { useIosTabbarHighlight } from './use-ios-tabbar-highlight.js';
`
  );
};
