function isObject(o) {
  return (
    typeof o === 'object' &&
    o !== null &&
    o.constructor &&
    o.constructor === Object
  );
}

function uniqueArray(arrArg) {
  return arrArg.filter((elem, pos, arr) => {
    return arr.indexOf(elem) === pos;
  });
}

function extend(...args) {
  const to = Object(args[0]);
  for (let i = 1; i < args.length; i += 1) {
    const nextSource = args[i];
    if (nextSource !== undefined && nextSource !== null) {
      const keysArray = Object.keys(Object(nextSource));
      for (
        let nextIndex = 0, len = keysArray.length;
        nextIndex < len;
        nextIndex += 1
      ) {
        const nextKey = keysArray[nextIndex];
        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
        if (desc !== undefined && desc.enumerable) {
          if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            extend(to[nextKey], nextSource[nextKey]);
          } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            to[nextKey] = {};
            extend(to[nextKey], nextSource[nextKey]);
          } else if (
            Array.isArray(to[nextKey]) &&
            Array.isArray(nextSource[nextKey])
          ) {
            to[nextKey] = uniqueArray([...to[nextKey], ...nextSource[nextKey]]);
          } else {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
  }
  return to;
}

module.exports = extend;
