export const positionClass = (position, className = '') => {
  if (!className || typeof className !== 'string') return position;
  const classes = ['static', 'relative', 'absolute', 'fixed', 'sticky'];
  const hasPositionClass =
    classes.filter((c) => className.indexOf(c) >= 0).length > 0;
  return hasPositionClass ? '' : position;
};
