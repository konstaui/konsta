export function filterColors(obj) {
  if (!obj || typeof obj !== 'object') {
    return {};
  }

  const filtered = {};
  Object.keys(obj).forEach((key) => {
    if (obj[key] != null) {
      filtered[key] = obj[key];
    }
  });
  return filtered;
}
