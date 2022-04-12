export function cls(...args) {
  const classes = [];
  args.forEach((arg) => {
    if (typeof arg === 'object' && arg.constructor === Object) {
      Object.keys(arg).forEach((key) => {
        if (arg[key]) classes.push(key);
      });
    } else if (Array.isArray(arg)) {
      classes.push(...arg);
    } else if (typeof arg === 'function') {
      classes.push(arg());
    } else if (arg && arg.value) {
      classes.push(arg.value);
    } else if (arg) classes.push(arg);
  });
  const uniqueClasses = [];
  classes.forEach((c) => {
    if (uniqueClasses.indexOf(c) < 0) uniqueClasses.push(c);
  });
  return uniqueClasses.filter((c) => !!c).join(' ');
}
