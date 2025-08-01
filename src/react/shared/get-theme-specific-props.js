export const getThemeSpecificProps = (theme, obj, props) => {
  const res = {};
  Object.keys(obj).forEach((key) => {
    res[key] =
      typeof obj[key] === 'undefined'
        ? theme === 'ios'
          ? props[`${key}Ios`]
          : props[`${key}Material`]
        : obj[key];
  });
  return res;
};
